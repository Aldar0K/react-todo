import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

import { BuildOptions } from "./types";

export const buildDevServer = (
  options: BuildOptions
): DevServerConfiguration => {
  const { port } = options;

  return {
    port,
    open: false,
    historyApiFallback: true,
    hot: true,
  };
};
