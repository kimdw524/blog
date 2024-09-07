import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import NextBundleAnalyzer from '@next/bundle-analyzer';
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = { transpilePackages: ['@kimdw524/dds'] };

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});

export default withBundleAnalyzer(withVanillaExtract(nextConfig));
