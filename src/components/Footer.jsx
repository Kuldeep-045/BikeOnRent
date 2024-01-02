import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const Footer = () => {
  return (
    <div id='footer'>
        <div>
            <h1>Bike Rental</h1>
            <p className='footercolor'>We offers a big range of vehicles for all your driving needs. We have the perfect bike to meet your needs.</p>
            <p><FaPhoneAlt/>(123) -456-789</p>
            <p> <IoMdMail/> bikerental@gmail.com</p>
            <p>Design by Kuldeep</p>
        </div>

        <div>
        <h1>COMPANY</h1>
        <p>New York</p>
        <p>Careers</p>
        <p>Mobile</p>
        <p>Blog</p>
        <p>How we work</p>
        </div>

        <div>
        <h1>WORKING HOURS</h1>
        <p>Mon - Fri: 9:00AM - 9:00PM</p>
        <p>Sat: 9:00AM - 19:00PM</p>
        <p>Sun: Closed</p>
        </div>
        
        <div>
        <h1>SUBSCRIPTION</h1>
        <p>Subscribe your Email address for latest news & updates.</p>
        <input type="email" placeholder='Enter your email' />
        <button>Submit</button>

        </div>

    </div>
  )
}

export default Footer
