import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
    stories: ['../src/stories/*.stories.ts'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],
    framework: {
        name: '@storybook/vue3-vite',
        options: {}
    },
    docs: {
        autodocs: 'tag'
    }
}
export default config