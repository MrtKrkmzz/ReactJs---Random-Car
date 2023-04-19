import React from 'react'
import Audi from './images/audi.jpg'
import Bmw from './images/bmw.jpg'
import Mercedes from './images/mercedes.jpg'
import Volvo from './images/volvo.jpeg'
const carsMap ={
    Audi:Audi,
    Bmw:Bmw,
    Mercedes:Mercedes,
    Volvo:Volvo
}
const Cars = ({cars}) => {
  return (
    <div><img src={carsMap[cars]} alt="" /></div>
  )
}

export default Cars