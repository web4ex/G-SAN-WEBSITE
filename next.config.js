const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true
    },
    // Ensure consistent builds
    swcMinify: true,
    reactStrictMode: true,
};

module.exports = nextConfig;
