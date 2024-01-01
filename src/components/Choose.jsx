import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const Choose = () => {
    return (
        <div id="choose">
            <div>
                <div className="firstchoose">
                    <h3>Why Choose Us</h3>
                    <main>Best valued deals you will ever find</main>
                    <p>
                        Discover the best deals you'll ever find with our
                        unbeatable offers. We're dedicated to providing you with
                        the best value for your money, so you can enjoy
                        top-quality services and products without breaking the
                        bank. Our deals are designed to give you the ultimate
                        renting experience, so don't miss out on your chance to
                        save big.
                    </p>
                    <button className="homeBtn1">Learn More <FaAngleRight/></button>
                </div>
                <div className="secondchoose">
                    <article>
                        <div>brvfesl</div>
                        <div>
                            <h1>Cross Country Drive</h1>
                            <span>
                                Take your driving experience to the next level
                                with our top-notch vehicles for your
                                cross-country adventures.
                            </span>
                        </div>
                    </article>

                    <article>
                        <div>brvfesl</div>
                        <div>
                            <h1>All Inclusive Pricing</h1>
                            <span>
                                Get everything you need in one convenient,
                                transparent price with our all-inclusive pricing
                                policy.
                            </span>
                        </div>
                    </article>

                    <article>
                        <div>brvfesl</div>
                        <div>
                            <h1>No Hidden Charges</h1>
                            <span>
                                Enjoy peace of mind with our no hidden charges
                                policy. We believe in transparent and honest
                                pricing.
                            </span>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Choose;
