const VALID_DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const VALID_MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

/**
 * Checks if string includes valid cron symbols ,-/
 */
function includesCronSymbols(value: string) {
    return value.includes(',') || value.includes('-') || value.includes('/')
}

/**
 * Splits string via cron symbols and validates each value use predicate
 */
function validateMultiple(value: string, predicate: (x: string) => boolean) {
    return value.split(/[,-\/]/g).every(x => predicate(x));
}

/**
 * Validates each minute value to be wild or of range 0-59
 */
function validateMinutes(value: string): boolean {
    if (includesCronSymbols(value)) {
        return validateMultiple(value, validateMinutes);
    }

    return value === '*' || (parseInt(value) >= 0 && parseInt(value) <= 59);
}

/**
 * Validates each hour value to be wild or of range 0-23
 */
function validateHours(value: string): boolean {
    if (includesCronSymbols(value)) {
        return validateMultiple(value, validateHours);
    }

    return value === '*' || (parseInt(value) >= 0 && parseInt(value) <= 23);
}

/**
 * Validates each day value to be wild or of range 1-31
 */
function validateDays(value: string): boolean {
    if (includesCronSymbols(value)) {
        return validateMultiple(value, validateDays);
    }

    return value === '*' || (parseInt(value) >= 1 && parseInt(value) <= 31);
}

/**
 * Validates each month value to be wild, of range 1-12, or of alternative text value (jan-dec)
 */
function validateMonths(value: string): boolean {
    if (includesCronSymbols(value)) {
        return validateMultiple(value, validateMonths);
    }

    return value === '*' || (parseInt(value) >= 1 && parseInt(value) <= 12) || VALID_MONTHS.includes(value.toLowerCase());
}

/**
 * Validates each month value to be wild, of range 0-6, or of alternative text value (sun-sat)
 * TODO: consider warning for value === 7 (non-standard)
 */
function validateWeekdays(value: string): boolean {
    if (includesCronSymbols(value)) {
        return validateMultiple(value, validateWeekdays);
    }

    return value === '*' || (parseInt(value) >= 0 && parseInt(value) <= 6) || VALID_DAYS.includes(value.toLowerCase());
}

/**
 * Validate cron string
 */
export function isValidCron(cron: string) {
    const values = cron.split(' ');

    if (values.length > 5 || values.length < 5) {
        // not enough values
        return false;
    }

    return values.every((value, index) => {
        switch (index) {
            case 0:
                return validateMinutes(value);
            case 1:
                return validateHours(value);
            case 2:
                return validateDays(value);
            case 3:
                return validateMonths(value);
            case 4:
                return validateWeekdays(value);
            default:
                return false;
        }
    });
}
