/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['interview.sirv.com'], // Add domains for external images
        deviceSizes: [320, 640, 768, 1024, 1280], // Responsive image sizes
        imageSizes: [16, 32, 48, 64, 96], // Image sizes used in the srcset
    },
}

module.exports = nextConfig
