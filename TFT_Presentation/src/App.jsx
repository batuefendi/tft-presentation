import React from 'react'
import Deck from './components/Deck'
import { slides } from './content/slides.jsx'

function App() {
  return (
    <Deck slides={slides} />
  )
}

export default App
