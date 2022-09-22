import { useState } from 'react'
import Select, { SelectOption } from './Select'

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 1 },
  { label: "Third", value: 1 },
  { label: "Fourth", value: 1 },
  { label: "Fifth", value: 1 },
]

function App() {

  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])

  return (
    <>
      {/* <Select multiple value={value1} options={options} onChange={(option) => setValue1(option)} /> */}
      <br />
      <Select value={value2} options={options} onChange={(option) => setValue2(option)} />
    </>
  )
}

export default App
