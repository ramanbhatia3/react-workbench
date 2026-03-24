import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const user = "Raman"

  const myObj = {
    name: "Ramandeep",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded'>Tailwind Test</h1>

      <Card username='ramanbhatia3' myObject={myObj} />
      <Card username='mohitbhatia3' />
      <Card />
    </>
  )
}

export default App
