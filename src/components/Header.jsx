import React from 'react'

import Home from './Home';
import Booking from './Booking';
import Planning from './Planning';
import Model from './Model'
import Screen from './Screen'
import Choose from './Choose'
import Reviews from './Reviews.jsx'
import FAQ from './FAQ.jsx'
import Footer from './Footer.jsx'

const Header = () => {
  return (
    <>
    <div className='navBar'>
        <div>Bike <br />Rental</div>
        <nav>
            <NavContent/>
        </nav>
        <div className='navBtn'>
            <button >SignIn</button>
            <button className='registerBtn'>Register</button>
        </div>
    </div>
        {/* <Home/>
      <Booking/>
      <Planning/>
      <Model/>
      <Screen/>
      <Choose/>
      <Testimonial/>
      <FAQ/>
      <Footer/> */}
    {/* <div>hello</div> */}
    </>
  )
}

const NavContent=()=>{
    return <>
        <a href="/" target="blank">Home</a>
        <a href="/about" target="blank">About</a>
        <a href="/model" target="blank">Model Vehicles</a>
        <a href="/testimonials" target="blank">Testimonial</a>
        <a href="/team" target="blank">Our Team</a>
        <a href="/contact" target="blank">Contact</a>
    </>
}

export default Header
