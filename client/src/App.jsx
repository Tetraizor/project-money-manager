import { useState } from 'react'
import Homepage from './pages/Homepage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage />
      <h1>
        Test
      </h1>
    </>
  )
}

export default App
