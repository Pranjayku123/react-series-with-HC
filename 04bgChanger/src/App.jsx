import { useState } from 'react'
import './App.css'

function App() {
 const [color, setColor] = useState("olive");

  return (
      <div className="w-full h-screen duration-200"
        style={{background:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-white'>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{background:"red"}} onClick={() =>setColor("red")}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{background:"green"}} onClick={() =>setColor("green")}>Green</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{background:"blue"}} onClick={() =>setColor("blue")}>Blue</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{background:"olive"}} onClick={() =>setColor("olive")}>Olive</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{background:"gray"}} onClick={() =>setColor("gray")}>Gray</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{background:"yellow"}} onClick={() =>setColor("yellow")}>Yellow</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{background:"pink"}} onClick={() =>setColor("pink")}>Pink</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{background:"purple"}} onClick={() =>setColor("purple")}>Purple</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-white' style={{background:"black"}} onClick={() =>setColor("black")}>Black</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{background:"white"}} onClick={() =>setColor("white")}>White</button>
          </div>
        </div>
      </div>
  )  
}

export default App
