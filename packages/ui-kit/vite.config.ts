import * as path from 'path';
import { defineConfig } from 'vite';

function getWrappedAliasPath(aliasPath) {
    return path.resolve(__dirname, `./${aliasPath}`);
}

export default defineConfig({
    resolve: {
        alias: [
            {
                find: '@',
                replacement: getWrappedAliasPath('src'),
            },
            {
                find: '@tests',
                replacement: getWrappedAliasPath('src/tests'),
            },
        ],
    },
    server: {
        fs: {
            strict: false,
        },
    },
});
