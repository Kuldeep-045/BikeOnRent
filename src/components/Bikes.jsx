import React from 'react'
import Top from './Top'
import Model from './Model'
import Screen from './Screen'
import image from '../assets/GT.jpg'

const Bikes = () => {
  return (
    <>
      <Top first={"Vehicle Models"} image={image}/>
      <Model/>
      <Screen/>
    </>
  )
}

export default Bikes
