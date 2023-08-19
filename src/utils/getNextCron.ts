import cronParser from 'cron-parser';

/**
 * Displays timestamp of next cron from string
 */
export function getNextCron(value: string): string {
    /**
     * This function is a wrapper for the 'cron-parser' NPM package - small, third-party
     * NPM packages should be wrapped in our own functions in case they are ever updated
     * or change for our own code.
     */
    try {
        return cronParser.parseExpression(value).next().toString();
    } catch (err) {
        console.error(err);
        return 'err';
    }
}
