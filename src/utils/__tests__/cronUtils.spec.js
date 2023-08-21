import { describe, test, expectTypeOf } from 'vitest'
import {
  getEndDateFromCron,
  getCronFromEndDate,
  getFrequencyFromCron,
  getCronFromFrequency,
  getRepetitionsFromCron,
  getCronFromRepetitions
} from '../cronUtils'

describe('cronUtils', () => {
  test('getEndDateFromCron()', () => {
    expectTypeOf(getEndDateFromCron).toBeFunction()
  })
  test('getCronFromEndDate()', () => {
    expectTypeOf(getCronFromEndDate).toBeFunction()
  })
  test('getFrequencyFromCron()', () => {
    expectTypeOf(getFrequencyFromCron).toBeFunction()
  })
  test('getCronFromFrequency()', () => {
    expectTypeOf(getCronFromFrequency).toBeFunction()
  })
  test('getRepetitionsFromCron()', () => {
    expectTypeOf(getRepetitionsFromCron).toBeFunction()
  })
  test('getCronFromRepetitions()', () => {
    expectTypeOf(getCronFromRepetitions).toBeFunction()
  })
})
