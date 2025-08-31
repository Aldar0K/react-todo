import type { StorybookConfig } from "@storybook/react-webpack5";
import path from 'path';
import { DefinePlugin } from 'webpack';

const config: StorybookConfig = {
  stories: [
    "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    // Add path resolution
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../../src'),
        'app': path.resolve(__dirname, '../../src/app'),
        'shared': path.resolve(__dirname, '../../src/shared'),
        'entities': path.resolve(__dirname, '../../src/entities'),
        'features': path.resolve(__dirname, '../../src/features'),
        'widgets': path.resolve(__dirname, '../../src/widgets'),
        'pages': path.resolve(__dirname, '../../src/pages'),
        'react': path.resolve(__dirname, '../../node_modules/react'),
        'react-dom': path.resolve(__dirname, '../../node_modules/react-dom'),
      };
      
      config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, '../../src'),
        'node_modules'
      ];
    }

    // Handle CSS Modules
    config.module?.rules?.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
            importLoaders: 1,
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../../src'),
    });

    // Handle SVG
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      include: path.resolve(__dirname, '../../src'),
    });

    // Add global variables
    if (config.plugins) {
      config.plugins.push(
        new DefinePlugin({
          __IS_DEV__: true,
          __API__: JSON.stringify(''),
          __API_URL__: JSON.stringify('http://localhost:8000'),
          __PROJECT__: JSON.stringify('storybook')
        })
      );
    }

    return config;
  },
};

export default config;
