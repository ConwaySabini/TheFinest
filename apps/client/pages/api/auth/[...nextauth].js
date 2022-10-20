import { comparePassword } from '@/libs/auth';
import prisma from '@/libs/prismadb';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
// Github provider only allows one callback URL per ClientID/Client Secret
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

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
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
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
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // prisma get user by mail
        let user = null;
        try {
          user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });
        } catch (e) {
          console.log('error getting user: ', e);
          return null;
        }

        if (!user) {
          console.log('User not found');
          return null;
        }

        // compare given password with hashed password from database
        const isValid = await comparePassword(
          credentials.password,
          user.password
        );
        // passwords do not match
        if (!isValid) {
          console.log('passwords do not match');
          return null;
        }
        const name = user.firstName + ' ' + user.lastName;
        return { email: user.email, name: name, userId: user.userId };
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
  useSecureCookies:
    process.env.NODE_ENV && process.env.NODE_ENV === 'production',
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // TODO store google refresh token in the database which is only provided on the first sign in
      console.log('user: ', user);
      console.log('account: ', account);
      console.log('profile: ', profile);
      console.log('email: ', email);
      console.log('credentials: ', credentials);
      if (account.provider === 'google') {
        // TODO handle google sign in
        return profile.email_verified && profile.email.endsWith('@gmail.com');
      }
      if (account.provider === 'github') {
        // TODO handle github sign in
        console.log('');
      }
      try {
        //the user object is wrapped in another user object so extract it
        user = user.user;
        console.log('Sign in callback', user);
        console.log('User id: ', user.userId);
        if (typeof user.userId !== typeof undefined) {
          if (user.isActive === '1') {
            console.log('User is active');
            return user;
          } else {
            console.log('User is not active');
            return false;
          }
        } else {
          console.log('User id was undefined');
          return false;
        }
      } catch (err) {
        console.error('Signin callback error:', err);
      }
      return true;
      // Do different verification for other providers that don't have `email_verified`
    },
    async redirect({ url, baseUrl }) {
      // TODO verify these defaults
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
        token.id = account.providerAccountId;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      // Only the session token, user, and expiry time is stored in the session table on the database
      // TODO persist data on the server, use the userId as the key or generate a unique key yourself
      session.accessToken = token.accessToken;
      session.user.id = token.id;

      return session;
    },
  },
};

export default NextAuth(authOptions);
