/** @type {import('next').NextConfig} */
// Allows clerk
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
