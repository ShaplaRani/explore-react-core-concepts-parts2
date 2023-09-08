import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {
  const handleClick = () =>{
    alert('button clicked')
  }
  const handleClick2 = (num) =>{
    alert(num + 5)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>click</button>
      <button onClick={() => handleClick2(4)}>click 2</button>
      
       
           
    </>
  )
}

export default App
