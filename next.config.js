/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    compiler:{
        removeConsole: true,
    },
    images: {
        unoptimized: true,
    },
    output: "export",
    basePath: "/nextjs-github-pages"
};

module.exports = withContentlayer({ ...nextConfig });
