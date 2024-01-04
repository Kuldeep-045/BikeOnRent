import React from 'react'
import Top from './Top'
import Screen from './Screen'
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import image from '../assets/KTM.jpg'

const Contact = () => {
  return (
    <>
    <Top first={"Contact"} image={image}/>
    <div id="contact">
      <article>
        <h1>Need additional information?</h1>
        <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
        <p> <FaPhoneAlt/>  (123) 456-7869</p>
        <p><MdMailOutline/> bikerental@bikemail.com</p>
        <p><CiLocationArrow1/>Bengalore, Karnataka</p>
      </article>
      <article>
        <div>
          <h3>Full Name<span> *</span></h3>
          <input type="text" placeholder='E.g: "Joe Smith' />
        </div>

        <div>
          <h3>Email<span> *</span></h3>
          <input type="email" placeholder='youremail@example.com' />
        </div>

        <div>
          <h3>Tell us about it<span> *</span></h3>
          <input type="Text" placeholder='Write here...' />
        </div>
        <div><button>Send Message <MdMailOutline/></button></div>
      </article>
    </div>
    <Screen/>
    </>
  )
}

export default Contact
