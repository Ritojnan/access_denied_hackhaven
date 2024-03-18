import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Text} from '@chakra-ui/react'
import ChangeRole from './components/ChangeRole'
import LandingPage from './pages/LandingPage'
import Meet from './pages/Meet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LandingPage/>
    <p>lol</p>
    </>
  )
}

export default App
