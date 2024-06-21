/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com"],
  },
  webpack(config, options) {
    return config;
  },
};
