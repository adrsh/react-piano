import { useState } from 'react'
import './App.css'
import Piano from './Piano'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Piano />
    </>
  )
}

export default App
