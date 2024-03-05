/** @type {import('next').NextConfig} */
// Allows clerk to process external urls
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.clerk.com"
            }
        ]
    }
};

export default nextConfig;
