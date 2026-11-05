import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Matches the admin deployment: no on-the-fly resizing on the VPS
    unoptimized: true,
  },
  compress: true,
};

export default nextConfig;
