import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  images: {
    domains: ['upload.wikimedia.org'], // Must match the domain in your env value
  },
}