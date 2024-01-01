import React from "react";
import { RiMotorbikeFill } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";

const Planning = () => {
    return (
        <div id="planning">
            <div>
                <h3>Plan your trip now</h3>
                <h1>Quick & easy car rental</h1>
            </div>
            <div  className="planningTrip">
                <article>
                    <RiMotorbikeFill/>
                  <h2>Select Bike</h2>  
                  <span>We offers a big range of vehicles for all your riding needs. We have the perfect bike to meet your needs</span>
                </article>

                <article>
                    <RxAvatar/>
                  <h2>Contact Operator</h2>  
                  <span>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</span>
                </article>

                <article>
                    <RiMotorbikeFill/>
                  <h2>Let's Ride</h2>  
                  <span>Whether you're hitting the open road, we've got you covered with our wide range of biked</span>
                </article>
            </div>
        </div>
    );
};

export default Planning;
