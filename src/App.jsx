import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [pass, setPass] = useState("");
  let [passLen, setPassLen] = useState(5);
  let [upper, setUpper] = useState(false);
  let [lower, setLower] = useState(false);
  let [num, setNum] = useState(false);
  let [symbols, setSymbol] = useState(false);
  let [btnText,setBtnText] = useState(false);
  let generatePass = ()=>{
    setBtnText(false);
    let temp ="";
    let upChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let numbersChars = "0123456789"
    let symsChars = "!@#$%^&*~`-=_+[]\{}|/*-.,<>?";
    if (upper | lower | num | symbols){
      let chars = "";
      if(upper){
        chars +=upChars
      }
      if(lower){
        chars+=lowerChars;
      }
      if(num){
        chars+=numbersChars;
      }
      if(symbols){
        chars+=symsChars;
      }
      // let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*~`-=_+[]\{}|/*-.,<>?";
      for(let i =0; i<passLen;i++){
        console.log(passLen,i)
        let ind = Math.floor(Math.random()*chars.length);
        temp+=chars[ind];
        console.log(pass);
      }
      setPass(temp);
  }
  else{
    alert("Please check any one parameter atleast");
  }
  console.log(temp)
  
}
  return (
    <div className="App">
      <div className='container'>
          <h2>Password Generator</h2>
          <div className='inputDiv'>
            <input type="text" value={pass}/>
            <button onClick={(event)=>{navigator.clipboard.writeText(pass) 
            setBtnText(true);
            } }> {btnText? "Copied" :"Copy"} </button>
          </div>
          <div className="params">
            <label htmlFor="">Password Length</label>
            <input type="number" min="5" max="15" name="" id="" onChange={(event)=>setPassLen(event.target.value)} value={passLen}/>
          </div>
          <div className="params">
            <label htmlFor="">Upper Case</label>
            <input type="checkbox" onChange={()=>setUpper(!upper)} name="" id="" value={upper}/>
          </div>
          <div className="params">
            <label htmlFor="">Lower Case</label>
            <input type="checkbox"   onChange={()=>setLower(!lower)} name="" id="" value={lower} />
          </div>
          <div className="params">
            <label htmlFor="">Numbers</label>
            <input type="checkbox"   onChange={()=>setNum(!num)} name="" id="" value={num} />
          </div>
          <div className="params">
            <label htmlFor="">Symbols</label>
            <input type="checkbox"   onChange={()=>setSymbol(!symbols)} name="" id="" value={symbols} />
          </div>
          <button className='generator' onClick={generatePass}> Generate </button>
      </div>
    </div>
  );
}

export default App;
