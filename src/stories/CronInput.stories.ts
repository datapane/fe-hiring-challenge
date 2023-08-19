import type { Meta, StoryObj } from '@storybook/vue3';

import CronInput from '../components/CronInput.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    component: CronInput,
    tags: ['autodocs'],
    argTypes: {
        showText: { control: 'boolean' },
    },
} satisfies Meta<typeof CronInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        defaultCron: '* * * * *',
        defaultScript: './test/test-script.bat',
        showText: true,
    },
};
