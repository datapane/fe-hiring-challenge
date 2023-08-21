interface FrequencyType {
  id: number
  text: string
}

const frequencyOptions: FrequencyType[] = [
  { id: 0, text: 'Custom' },
  { id: 1, text: 'Once' },
  { id: 2, text: 'Hourly' },
  { id: 3, text: 'Daily' },
  { id: 4, text: 'Weekly' },
  { id: 5, text: 'Monthly' },
  { id: 6, text: 'Quarterly' },
  { id: 7, text: 'Half Year' },
  { id: 8, text: 'Yearly' }
]

export { type FrequencyType, frequencyOptions }
