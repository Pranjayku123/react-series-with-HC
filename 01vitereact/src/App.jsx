import  { useState,} from 'react';
import Test from './test';
function App() {
  let [counter, setCounter] = useState(15)
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  } 
  const removeValue = () => {  
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <>
    <Test/>
    <h1>prk with react</h1>
    <h2>Counter value :{counter} </h2>
    <button onClick={addValue}>add count{counter}</button>
    <button onClick={removeValue}>remove count{counter}</button> 
    </>
    
  ); 
}

export default App;

