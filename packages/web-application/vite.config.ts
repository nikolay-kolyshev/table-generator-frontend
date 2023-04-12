import { CommonServerOptions, defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';
import swc from 'unplugin-swc';

const getAliasPath = (path: string): string => {
    return fileURLToPath(new URL(path, import.meta.url));
};

const resolvePathFromDirname = (relativePath: string): string => {
    return path.resolve(__dirname, relativePath);
};

const getCommonServerOptions = (port: number): CommonServerOptions => {
    return {
        port,
        host: true,
        open: true,
        https: false,
    };
};

const srcPath = './src';
const commonPath = `${srcPath}/common`;
const DALPath = `${srcPath}/DAL`;
const BLLPath = `${srcPath}/BLL`;
const UIPath = `${srcPath}/UI`;

export default defineConfig(() => {
    const swcPluginConfig = swc.vite({
        tsconfigFile: true,
        swcrc: true,
    }) as PluginOption;

    return {
        plugins: [
            react({
                fastRefresh: true,
            }),
            swcPluginConfig,
        ],
        resolve: {
            alias: {
                '@common': getAliasPath(commonPath),
                '@DAL': getAliasPath(`${DALPath}`),
                '@BLL': getAliasPath(`${BLLPath}`),
                '@UI': getAliasPath(`${UIPath}`),
            },
        },
        server: {
            hmr: true,
            ...getCommonServerOptions(3000),
        },
        preview: {
            ...getCommonServerOptions(3001),
        },
    };
});
