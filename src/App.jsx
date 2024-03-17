import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Text} from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<h1 className="text-3xl font-bold underline red">
      Hello world!
    </h1>
<Text>hell</Text>
    </>
  )
}

export default App
