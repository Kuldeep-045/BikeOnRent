import React from 'react'

const Header = () => {
  return (
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
  )
}

const NavContent=()=>{
    return <>
        <a href="#home" target="blank">Home</a>
        <a href="#home" target="blank">About</a>
        <a href="#home" target="blank">Model Vehicles</a>
        <a href="#home" target="blank">Testimonial</a>
        <a href="#home" target="blank">Our Team</a>
        <a href="#home" target="blank">Contact</a>
    </>
}

export default Header
