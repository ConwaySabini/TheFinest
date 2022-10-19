import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
// Github provider only allows one callback URL per ClientID/Client Secret
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '../../../../../libs/prismadb';
const bcrypt = require('bcrypt');

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    // Github email address is always returned,
    // even if the user doesn't have a public email address on their profile.
    // Github only allows one callback URL per Client ID/Client Secret
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      // TODO  to get the google refresh token on every sign in use these options
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code"
      //   }
      // }
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  jwt: {
    maxAge: 60 * 60 * 30 * 24,
  },
  pages: {
    signIn: '/auth/login',
    newUser: '/home', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  events: {
    async signIn(message) {
      console.log('signed in: ', message);
    },
    async signOut(message) {
      console.log('signed out: ', message);
    },
    async createUser(message) {
      console.log('created new user: ', message);
    },
    async updateUser(message) {
      console.log('created new user: ', message);
    },
    async linkAccount(message) {
      console.log('account linked: ', message);
    },
    async session(message) {
      console.log('session created: ', message);
    },
  },
  debug: true,
  theme: {
    colorScheme: 'dark', // "auto" | "dark" | "light"
  },
  // TODO uncomment this for production builds
  // useSecureCookies: true,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // TODO store google refresh token in the database which is only provided on the first sign in
      console.log('user: ', user);
      console.log('account: ', account);
      console.log('profile: ', profile);
      console.log('email: ', email);
      console.log('credentials: ', credentials);
      if (account.provider === 'google') {
        return profile.email_verified && profile.email.endsWith('@example.com');
      }

      return true;
      // Do different verification for other providers that don't have `email_verified`
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      // Only the token is available afer the first callback on a new session,
      // the other ones are only available on the first callback
      // TODO persist data on first invocation????
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile.id;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken;
      session.user.id = token.id;

      return session;
    },
  },
};

export default NextAuth(authOptions);
