import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import NextBundleAnalyzer from '@next/bundle-analyzer';
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@kimdw524/dds'],
  webpack(config, { nextRuntime, webpack }) {
    if (!nextRuntime) {
      config.plugins.push(
        new webpack.BannerPlugin({
          banner: `$RefreshReg$ = () => {};\n$RefreshSig$ = () => () => {};\n`,
          raw: true,
          entryOnly: true,
          include: /\.css.ts$/,
        })
      );
    }
    return config;
  },
};

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});

export default withBundleAnalyzer(withVanillaExtract(nextConfig));
