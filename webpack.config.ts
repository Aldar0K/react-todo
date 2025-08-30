import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/build';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
    meta: path.resolve(__dirname, 'public', 'meta'),
    buildMeta: path.resolve(__dirname, 'build', 'meta')
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';

  const port = env.port || 3000;
  const apiUrl = env.apiUrl || 'http://localhost:8000';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    apiUrl,
    project: 'frontend'
  });

  return config;
};
