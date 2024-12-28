/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static-cdn.jtvnw.net",
      },
      {
        protocol: "https",
        hostname: "yonhjhpjodqwntsqdecx.supabase.co",
      },
    ],
  },

  webpack(config: any) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
    reactCompiler: true,
  },
};

export default nextConfig;
