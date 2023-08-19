import type { Meta, StoryObj } from '@storybook/vue3';

import CronInput from '../components/CronInput.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    component: CronInput,
    tags: ['autodocs'],
    argTypes: {
        to: {
            description: 'The API endpoint to submit the schedule request to',
        },
        defaultCron: {
            description: 'The default cron time to display in the cron input',
        },
        defaultScript: {
            description: 'The default script path or job name to display in the job input',
        },
        showNext: {
            description: 'Displays the time of the next expected scheduled task',
        },
        showText: {
            description: 'Displays the cron time in human-readable text',
        },
    },
} satisfies Meta<typeof CronInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        to: 'example.api/endpoint',
        defaultCron: '* * * * *',
        defaultScript: './test/test-script.bat',
        showNext: true,
        showText: true,
    },
};
