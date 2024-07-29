import { useState, useCallback, useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null);
  const passwordGenerator = useCallback(()=>{
  let pass="";
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
  if (numAllowed) str+="0123456789" ;
  if (charAllowed) str+="@#$^&*+=~`";
  
  for (let i = 1; i <= length; i++) { 
    let char = Math.floor(Math.random()*str.length + 1); 
    pass += str.charAt(char);
  }

  setPassword(pass);

  },[length, numAllowed,charAllowed,setPassword]) 

  const copyPassClipBoard = useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password);
  },[password])
  useEffect(()=>{
    passwordGenerator();
  },[length,numAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg  my-8 p-4 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 p-2'>
          <input type="text" value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly 
          ref={passRef}
          /> 
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassClipBoard} >Copy</button> 
        </div>
        <div className='flex text-sm gap-2'>
          <div className='flex item-center gapx-x-1'>
            <input 
            type="range" 
            min={6}
            max={32} 
            value={length}
            className='cursor-pointer' 
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex item-cnter gapx-1'>
            <input type="checkbox"
            defaultChecked={numAllowed}
            id='numberInput'
            onChange={()=>{
              setNumAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex item-cnter gapx-1'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor='characterInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
