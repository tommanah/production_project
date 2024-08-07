// import { BuildOptions } from "./types/config";

// export function buildDevServer(options: BuildOptions): DevServerConfiguration {
//     return {
//         port: options.port,
//         open: true
//     }
// } так было по видосу, но у меня почему-то не работало и ругалось на devserverconfiguration

import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import { BuildOptions } from "./types/config";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Configuration = webpack.Configuration;
type DevServerConfiguration = webpackDevServer.Configuration;

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}