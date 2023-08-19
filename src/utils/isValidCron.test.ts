import { expect, test, describe } from "vitest";
import { isValidCron } from "./isValidCron";

describe('isValidCron', () => {
    test('return true for exactly 5 values', () => {
        expect(isValidCron('* * * * *')).toBe(true);
    });

    test('return false for more or less than 5 values', () => {
        expect(isValidCron('* * * *')).toBe(false);
        expect(isValidCron('* * * * * *')).toBe(false);
    });

    describe('minutes', () => {
        test('accept number value between 0-59', () => {
            expect(isValidCron('0 * * * *')).toBe(true);
            expect(isValidCron('30 * * * *')).toBe(true);
            expect(isValidCron('30 * * * *')).toBe(true);
            expect(isValidCron('60 * * * *')).toBe(false);
            expect(isValidCron('-1 * * * *')).toBe(false);
        });

        test('accept value list separator', () => {
            expect(isValidCron('0,30 * * * *')).toBe(true);
            expect(isValidCron('0,15,30 * * * *')).toBe(true);
        });

        test('accept range', () => {
            expect(isValidCron('0-30 * * * *')).toBe(true);
        });

        test('accept step', () => {
            expect(isValidCron('0/30 * * * *')).toBe(true);
        });

        test('accept range + step', () => {
            expect(isValidCron('0-30/5 * * * *')).toBe(true);
        });
    });

    describe('hours', () => {
        test('accept number value between 0-23', () => {
            expect(isValidCron('* 0 * * *')).toBe(true);
            expect(isValidCron('* 12 * * *')).toBe(true);
            expect(isValidCron('* 23 * * *')).toBe(true);
            expect(isValidCron('* 24 * * *')).toBe(false);
            expect(isValidCron('* -1 * * *')).toBe(false);
        });

        test('accept value list separator', () => {
            expect(isValidCron('* 0,12 * * *')).toBe(true);
            expect(isValidCron('* 0,6,12 * * *')).toBe(true);
        });

        test('accept range', () => {
            expect(isValidCron('* 0-12 * * *')).toBe(true);
        });

        test('accept step', () => {
            expect(isValidCron('* 0/12 * * *')).toBe(true);
        });

        test('accept range + step', () => {
            expect(isValidCron('* 0-12/4 * * *')).toBe(true);
        });
    });

    describe('days (month)', () => {
        test('accept number value between 1-31', () => {
            expect(isValidCron('* * 1 * *')).toBe(true);
            expect(isValidCron('* * 15 * *')).toBe(true);
            expect(isValidCron('* * 31 * *')).toBe(true);
            expect(isValidCron('* * 32 * *')).toBe(false);
            expect(isValidCron('* * 0 * *')).toBe(false);
        });

        test('accept value list separator', () => {
            expect(isValidCron('* * 1,15 * *')).toBe(true);
            expect(isValidCron('* * 1,8,15 * *')).toBe(true);
        });

        test('accept range', () => {
            expect(isValidCron('* * 1-15 * *')).toBe(true);
        });

        test('accept step', () => {
            expect(isValidCron('* * 1/15 * *')).toBe(true);
        });

        test('accept range + step', () => {
            expect(isValidCron('* * 1-15/5 * *')).toBe(true);
        });
    });

    describe('months', () => {
        test('accept number value between 1-12', () => {
            expect(isValidCron('* * * 1 *')).toBe(true);
            expect(isValidCron('* * * 6 *')).toBe(true);
            expect(isValidCron('* * * 12 *')).toBe(true);
            expect(isValidCron('* * * 13 *')).toBe(false);
            expect(isValidCron('* * * 0 *')).toBe(false);
        });

        test('accept value list separator', () => {
            expect(isValidCron('* * * 1,6 *')).toBe(true);
            expect(isValidCron('* * * 1,3,6 *')).toBe(true);
        });

        test('accept range', () => {
            expect(isValidCron('* * * 1-6 *')).toBe(true);
        });

        test('accept step', () => {
            expect(isValidCron('* * * 1/6 *')).toBe(true);
        });

        test('accept range + step', () => {
            expect(isValidCron('* * * 1-6/2 *')).toBe(true);
        });

        test('accept alternative single values (all cases)', () => {
            expect(isValidCron('* * * JAN *')).toBe(true);
            expect(isValidCron('* * * Feb *')).toBe(true);
            expect(isValidCron('* * * mar *')).toBe(true);
        });
    });

    describe('days(week)', () => {
        test('accept number value between 0-6', () => {
            expect(isValidCron('* * * * 0')).toBe(true);
            expect(isValidCron('* * * * 3')).toBe(true);
            expect(isValidCron('* * * * 6')).toBe(true);
            expect(isValidCron('* * * * 7')).toBe(false);
            expect(isValidCron('* * * * -1')).toBe(false);
        });

        test('accept value list separator', () => {
            expect(isValidCron('* * * * 0,3')).toBe(true);
            expect(isValidCron('* * * * 0,2,4')).toBe(true);
        });

        test('accept range', () => {
            expect(isValidCron('* * * * 3-6')).toBe(true);
        });

        test('accept step', () => {
            expect(isValidCron('* * * * 0/2')).toBe(true);
        });

        test('accept range + step', () => {
            expect(isValidCron('* * * * 3-6/2')).toBe(true);
        });

        test('accept alternative single values (all cases)', () => {
            expect(isValidCron('* * * * MON')).toBe(true);
            expect(isValidCron('* * * * Wed')).toBe(true);
            expect(isValidCron('* * * * fri')).toBe(true);
        });
    });
});
