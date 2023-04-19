import { useState } from 'react'
import Cars from './Cars'
import './App.css'


function getRandomCars(){
  const courseArray = ['Audi','Volvo','Bmw','Mercedes'];
  return courseArray[Math.floor(Math.random()*courseArray.length)]
}
function App() {
  const [cars,setCars]=useState([])
  const handleClick=()=>{
  setCars([...cars, getRandomCars()])
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Random Car</button>
     <div className='Carss'>
     {
        cars.map((cars,index)=>{
         return <Cars key={index} cars={cars}/>
        })
      }
     </div>
    </div>
  )
}

export default App
