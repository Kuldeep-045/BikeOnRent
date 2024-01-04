import React from 'react'
import Top from './Top'
import Screen from './Screen'
import Reviews from './Reviews'
import image from "../assets/Pulsar.jpg"

const Testimonial = () => {
  return (
    <>
    <Top first={"Testimonial"} image={image}/> 
    <Reviews/>
    <Screen/>
    </>
  )
}

export default Testimonial
