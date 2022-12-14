//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('./with-nx.js');

/**
 *
 * //@type {import('./with-nx.js').WithNxOptions}
 **/
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/auth/login',
        permanent: true,
      },
    ];
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    domains: ['placeimg.com'],
  },
};

module.exports = withNx(nextConfig);
