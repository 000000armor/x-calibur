/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  sassOptions: {
    additionalData: `@import "${path.resolve(
      __dirname,
      'src/styles/variables.scss'
    )}";`,
  },
};

module.exports = nextConfig;
