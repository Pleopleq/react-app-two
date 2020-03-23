import React, { useState } from 'react';
import ReactDOM from 'react-dom';
/*
const Hello = props =>{
  const bornYear = () =>{
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
    <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
*/

const App = (props) =>{
  const [counter, setCounter ] = useState(0);

  

  const increaseByOne = () => setCounter(counter + 1);
  
  const decreaseByOne = () => setCounter(counter - 1)

  const resetButton = () => setCounter(0);

  const Display = ({ counter }) => <div>{ counter}</div>

  const Button = ({handleClick, text}) =>{
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }


    return (
    <div>
      <Display counter={counter}/>
      <Button 
      handleClick={increaseByOne} 
      text={'Plus'}
      />

      <Button 
      handleClick={decreaseByOne} 
      text={'Minus'}
      />

      <Button 
      handleClick={resetButton} 
      text={'Reset'}
      />
    </div>
    )
}

let counter = 1;

  ReactDOM.render(
    <App counter={counter}/>,
  document.getElementById('root')
);

