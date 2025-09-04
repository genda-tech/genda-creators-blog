const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
