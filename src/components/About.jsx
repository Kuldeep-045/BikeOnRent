import React from 'react'
import Top from './Top'
import contactImgae from '../assets/contact.jpg' 
import Screen from './Screen'
import Planning from './Planning'

const About = () => {
  return (
    <>
    <div id='about'>
    <Top first={"About"}/>
      <div className='aboutcompany'>
        <article>
          <img  src={contactImgae} alt="" />
        </article>
        <article>
          
          <h1>You start the engine and your adventure begins</h1>
          <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
          <span>
            <h3><h1>20</h1>Bike Types</h3>
            <h3><h1>85</h1> Rental Outlets</h3>
            <h3><h1>75</h1> RepairShop</h3>
          </span>
        </article>

      </div>
    </div>
    <Planning/>
    <Screen/>
    </>
  )
}

export default About
