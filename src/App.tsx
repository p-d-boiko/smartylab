import type { FC } from 'react'

import ShortestRoute from './components/ShortestRoute'
import FlattenArrays from './components/FlattenArrays'
import Calculator from './components/Calculator'

import './App.css'

const App: FC = () => {
  return (
    <>
      <ShortestRoute />
      <FlattenArrays />
      <Calculator />
    </>
  )
}

export default App
