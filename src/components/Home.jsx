import React from "react";
import homeImage from "../assets/home.png"
import { CiCircleCheck } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";

import Booking from './Booking';
import Planning from './Planning';
import Model from './Model'
import Screen from './Screen'
import Choose from './Choose'
import Reviews from './Reviews.jsx'
import FAQ from './FAQ.jsx'
import Footer from './Footer.jsx'

const Home = () => {
    return (
        <>
        <div id="home">
            <div>
                <h2>Plan your trip now</h2>
                <h1>Save <span>big</span> with our bike rental</h1>
                <p>
                    Rent the bike of your dreams. Unbeatable prices, unlimited
                    miles, flexible pick-up options and much more.
                </p>
                <button>Book Ride <CiCircleCheck /></button>
                <button className="homeBtn1">Learn More <FaAngleRight/></button>
            </div>
            <div className="bikeImageHome">
                <img src={homeImage} alt="bike" />
            </div>
        </div>
      <Booking/>
      <Planning/>
      <Model/>
      <Screen/>
      <Choose/>
      <Reviews/>
      <FAQ/>
      {/* <Footer/>  */}

        </>
    );
};

export default Home;
