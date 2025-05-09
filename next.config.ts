// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.noroff.dev",     // ← allow this host
        port: "",
        pathname: "/api/online-shop/**",
      },
      // If you ever see URLs from static.cloud.noroff.dev, you can also add:
      // {
      //   protocol: "https",
      //   hostname: "static.cloud.noroff.dev",
      //   port: "",
      //   pathname: "/api/online-shop/**",
      // },
    ],
  },
};

export default nextConfig;
