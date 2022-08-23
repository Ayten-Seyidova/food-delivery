const withImages = require("next-images");
module.exports = withImages({
  webpack(config, options) {
    return config;
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ["images.fastcompany.net"],
  },
});
