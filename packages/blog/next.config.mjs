import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = { transpilePackages: ['@kimdw524/dds'] };

export default withVanillaExtract(nextConfig);
