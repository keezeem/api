import { withGluestackUI } from "@gluestack/ui-next-adapter";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "nativewind",
    "react-native-css-interop",
    "@gluestack-ui/avatar",
    "@gluestack-ui/themed",
    "@gluestack-style/react",
    "react-native-svg"
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web"
    };

    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: /node_modules\/@gluestack-ui/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["next/babel"]
        }
      }
    });

    return config;
  }
};

export default withGluestackUI(nextConfig);
