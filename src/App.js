import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
     const [input,setInput] =useState('');
     const [result,setResult]=useState(0);

     const handleButton=(e)=>{
      setInput((prevValue)=>prevValue+e);
     }

     const handleCalculate=()=>{
      try{
        setResult(eval(input));
      }catch(error){
        setResult("Error");
      }
     }

     const handleClear=()=>{
      setInput('');
      setResult(0);
     }
  return (
    <div className="App">
      <div className="input-box">
        <input type="text" value={input} readOnly/>
      </div>
      <div className="buttons">
        <button onClick={()=>{handleButton('7')}}>7</button>
        <button onClick={()=>{handleButton('8')}}>8</button>
        <button onClick={()=>{handleButton('9')}}>9</button>
        <button onClick={()=>{handleButton('/')}}>/</button>

        <button onClick={()=>{handleButton('4')}}>4</button>
        <button onClick={()=>{handleButton('5')}}>5</button>
        <button onClick={()=>{handleButton('6')}}>7</button>
        <button onClick={()=>{handleButton('*')}}>*</button>

        <button onClick={()=>{handleButton('1')}}>1</button>
        <button onClick={()=>{handleButton('2')}}>2</button>
        <button onClick={()=>{handleButton('3')}}>3</button>
        <button onClick={()=>{handleButton('-')}}>-</button>

        <button onClick={()=>{handleButton('0')}}>0</button>
        <button onClick={()=>{handleButton('.')}}>.</button>
        <button onClick={handleCalculate}>ans</button>
        <button onClick={()=>{handleButton('+')}}>+</button>

        <button onClick={handleClear}>C</button>


      </div>
      <div className="results-display">
        <p>{result}</p>
      </div>
      
    </div>
  );
}

export default App;
