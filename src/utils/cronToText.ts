import cronstrue from 'cronstrue';

/**
 * Displays valid cron string in human-readable format
 */
export function cronToText(value: string): string {
    /**
     * This function is a wrapper for the 'cronstrue' NPM package - small, third-party
     * NPM packages should be wrapped in our own functions in case they are ever updated
     * or change for our own code.
     */
    return cronstrue.toString(value);
}
