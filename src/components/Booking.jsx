import React from 'react'
import {  CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { RiMotorbikeFill } from "react-icons/ri";
// import { RiMotorbikeFill } from "react-icons/ri";

const Booking = () => {
  return (
    <div id='booking'>
      <div>
        <h1>Book A Bike</h1>
        <div class="bookingContainer">
    <section>
        <h6><RiMotorbikeFill /> Enter Your Bike Type <span>*</span></h6>
        <input type="text" id="myText" name="myText" placeholder="Enter your bike type" />
    </section>

    <section>
        <h6><FaLocationDot /> Pick-up <span>*</span></h6>
        <input type="text" id="myText" name="myText" placeholder="Enter pick up location" />
    </section>

    <section>
        <h6><FaLocationDot />   Drop-of <span>*</span></h6>
        <input type="text" id="myText" name="myText" placeholder="Enter drop off Location" />
    </section>
</div>

<div class="bookingContainer">
    <section>
        <h6> <SlCalender /> Pick-up <span>*</span></h6>
        <input type="text" id="myText" name="myText" placeholder="dd-mm-yyyy" />
    </section>

    <section>
        <h6><SlCalender /> Drop-of <span>*</span></h6>
        <input type="text" id="myText" name="myText" placeholder="dd-mm-yyyy" />
    </section>

    <section>
        <h6><CiSearch />  </h6>
        <button>Search</button>
    </section>
</div>
      </div>
    </div>
  )
}

export default Booking
