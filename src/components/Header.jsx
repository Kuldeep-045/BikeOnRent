import React from 'react'
import { Link } from 'react-router-dom'


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
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/model" >Model Vehicles</Link>
        <Link to="/testimonials" >Testimonial</Link>
        <Link to="/team" >Our Team</Link>
        <Link to="/contact" >Contact</Link>
    </>
}

export default Header
