import React from "react";
// import Avatar from "@mui/material/Avatar";
import homeImage from "../assets/pass.jpg"

const Testimonial = () => {
    return (
        <div id="testimonial">
            <div className="firstsection">
                <h3>Reviewed by People</h3>
                <h1>Client's Testimonials</h1>
                <p>
                    Discover the positive impact we've made on the our clients
                    by reading through their testimonials. Our clients have
                    experienced our service and results, and they're eager to
                    share their positive experiences with you.
                </p>
            </div>
            <div className="secondsection">
                <div className="firstreview">
                    <p>
                        "We rented a bike from this website and had an amazing
                        experience! The booking was easy and the rental rates
                        were very affordable. "
                    </p>
                    <span>
                        <article>
                             <h1>Harry potter</h1>
                             <p>Hogsward</p>
                        </article>
                    </span>
                </div>
                <div className="secondreview">
                    <p>
                        "The bike was in great condition and made our trip even
                        better. Highly recommend for this bike rental website!"
                    </p>
                    <span>
                        <article>
                             <h1>Ron Weasely</h1>
                             <p>Hogsward</p>
                        </article>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
