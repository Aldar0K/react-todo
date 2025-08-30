import { RuleSetRule } from "webpack";

export const buildSvgLoader = (): RuleSetRule => {
  return {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };
}
