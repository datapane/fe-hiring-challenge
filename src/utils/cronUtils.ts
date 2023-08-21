import {
  type FrequencyType,
  frequencyOptions
} from '../interfaces/FrequencyType'
import { stringToArray } from 'cron-converter'

function getEndDateFromCron(cron: string): string | undefined {
  const parsedCron = stringToArray(cron)
  console.log(cron, parsedCron)
  // TODO: Calculate end date of cron
  // TODO: Return .toLocaleString() format
  return
}

function getCronFromEndDate(endDate: string, currentCron: string): string {
  console.log(endDate, currentCron)
  // TODO: Generate number[][] containing - format to the end date
  // TODO: Use arrayToString from cron-converter
  // TODO: Validate newly generated cron
  return currentCron
}

function getFrequencyFromCron(cron: string): FrequencyType {
  const parsedCron = stringToArray(cron)
  console.log(cron, parsedCron)
  // TODO: Return, if matches, a frequency e.g. monthly, yearly; return custom otherwise
  return frequencyOptions[0]
}

function getCronFromFrequency(
  frequency: FrequencyType,
  currentCron: string
): string {
  console.log(frequency, currentCron)
  // TODO: Generate number[][] containing format to frequency
  // TODO: Use arrayToString from cron-converter
  // TODO: Validate newly generated cron
  return currentCron
}

function getRepetitionsFromCron(cron: string): number | undefined {
  const parsedCron = stringToArray(cron)
  console.log(cron, parsedCron)
  // TODO: Return how many schedules, or undefined if there are infinite
  return
}

function getCronFromRepetitions(
  repetitions: number,
  currentCron: string
): string {
  console.log(repetitions, currentCron)
  // TODO: Generate number[][] containing format to repetitions
  // TODO: Use arrayToString from cron-converter
  // TODO: Validate newly generated cron
  return currentCron
}

export {
  getEndDateFromCron,
  getCronFromEndDate,
  getFrequencyFromCron,
  getCronFromFrequency,
  getRepetitionsFromCron,
  getCronFromRepetitions
}
