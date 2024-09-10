// Import the necessary functions for ESM support
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import withMDX from '@next/mdx';

// Define the MDX configuration using ESM
const mdxConfig = withMDX({
  extension: /\.mdx?$/,
});

// Define the next config
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// Export the combined configuration
export default {
  ...mdxConfig,
  ...nextConfig,
  pageExtensions: ['js', 'jsx', 'mdx', 'md'],
};
