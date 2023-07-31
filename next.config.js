/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");

const nextConfig = withSvgr({
   images: {
      domains: ["cdn.sanity.io", "images.ctfassets.net"],
   },
});

module.exports = nextConfig;
