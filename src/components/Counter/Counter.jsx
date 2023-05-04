import React, {useState} from 'react';

export default function Counter()
{
    const [count, setVal] = useState(0)
    return (
      <div>
        <h1>COUNTER</h1>
        <div className='counter'>
            <button id="subcount" onClick={() => {sub()}} disabled={count === 0}>-</button>
            <label id="valcount">Count is: {count}</label>
            <button id="addcount" onClick={() => {add()}} disabled={count === 10}>+</button>
        </div><br/>
        <div className='counter'><button id="reset" onClick={reset}>Reset</button></div>
      </div>
    )
  function sub()
  {
    if (count > 0)
    {
      setVal(count -1);
    }
  }
  function add()
  {
    if (count < 10){
      return setVal(count +1);
    }
  }
  function reset()
  {
      setVal(0);
  }
  }
  // button {&:not(.disable):hover{}}
  // npm i -D react-router-dom