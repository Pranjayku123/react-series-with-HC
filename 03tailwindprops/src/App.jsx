import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card' 


function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    userName:"Marry Das",
    age:24
  }

  const cardData = [
    {
      id:1,
      userName:"Janny",
      someobj:"a",
      btnText:'visit me',
      discription:"Curabitur sit amet orci id mauris aliquam dignissim. Morbi aliquet sed leo at maximus. Nullam lobortis diam nec libero iaculis pharetra. Aliquam sagittis, massa vel luctus cursus, neque lorem pharetra magna, nec porttitor augue turpis at nibh. Mauris a lectus porta urna rhoncus commodo eget in orci."
    },
    {
      id:1,
      userName:"Prk",
      someobj:"a",
      btnText:'ping me',
      discription:"Curabitur sit amet orci id mauris aliquam dignissim. Morbi aliquet sed leo at maximus. Nullam lobortis diam nec libero iaculis pharetra. Aliquam sagittis, massa vel luctus cursus, neque lorem pharetra magna, nec porttitor augue turpis at nibh. Mauris a lectus porta urna rhoncus commodo eget in orci."
    },
    {
      id:1,
      userName:"Marry DAs",
      someobj:"a",
      btnText:'hover me',
      discription:"Curabitur sit amet orci id mauris aliquam dignissim. Morbi aliquet sed leo at maximus. Nullam lobortis diam nec libero iaculis pharetra. Aliquam sagittis, massa vel luctus cursus, neque lorem pharetra magna, nec porttitor augue turpis at nibh. Mauris a lectus porta urna rhoncus commodo eget in orci."
    },
    {
      id:1,
      userName:"Sufia",
      someobj:"a",
      btnText:'click me',
      discription:"Curabitur sit amet orci id mauris aliquam dignissim. Morbi aliquet sed leo at maximus. Nullam lobortis diam nec libero iaculis pharetra. Aliquam sagittis, massa vel luctus cursus, neque lorem pharetra magna, nec porttitor augue turpis at nibh. Mauris a lectus porta urna rhoncus commodo eget in orci."
    }
  ]
  return ( 
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-sm mb-4'>Tailwind test</h1>
    {
      cardData?.map(card => (
        <Card username={card.userName} someobj={card.someobj} btnText={card.btnText} discription={card.discription}/>
      ))
    }
    {/* <Card  username="janny" someObj ={myObj} btnText="visit me"  />
    <Card  username="sufia" btnText="click me"  /> */}
    </>
  )
}

export default App
