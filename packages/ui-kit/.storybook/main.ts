import { mergeConfig } from 'vite';
import viteConfig from '../vite.config';
import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-actions',
        '@storybook/addon-a11y',
        '@storybook/addon-backgrounds',
        '@storybook/addon-controls',
        '@storybook/addon-mdx-gfm',
        '@storybook/addon-styling',
    ],
    async viteFinal(config) {
        return mergeConfig(config, viteConfig);
    },
    docs: {
        autodocs: true,
    },
    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
};

export default config;
