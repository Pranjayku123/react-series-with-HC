import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    userName:"Pranjay",
    age:24
  }
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-sm mb-4'>Tailwind css test</h1>
    <Card  username="Pranjay" someObj ={myObj} btnText="visit me"/>
    <Card  username="sufia" btnText="click me"/>
    </>
  )
}

export default App
