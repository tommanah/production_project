import path from "path";
import webpack from "webpack";
import { BuildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }
  
  const mode = env.mode || "development";
  const isDev = mode === "development"; //isDev = true тогда когда mode === development
  
  const PORT = env.port || 3001;
  
  const config: webpack.Configuration = BuildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  })

  return config;
};