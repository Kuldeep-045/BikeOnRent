import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className='navBar'>
        <div>Bike <br />Rental</div>
        <nav>
          <NavContent toggleSidebar={toggleSidebar} />
        </nav>
        <div className='navBtn'>
          <button >SignIn</button>
          <button className='registerBtn'>Register</button>
        </div>
        <GiHamburgerMenu onClick={toggleSidebar} />
      </div>

      <div>
        {showSidebar && (
          <nav className='sideBar'>
            <RxCross2 onClick={toggleSidebar} />
            <NavContent toggleSidebar={toggleSidebar} />
          </nav>
        )}
      </div>
    </>
  );
};

const NavContent = ({ toggleSidebar }) => {
  return (
    <>
      <Link to="/" onClick={toggleSidebar}>Home</Link>
      <Link to="/about" onClick={toggleSidebar}>About</Link>
      <Link to="/model" onClick={toggleSidebar}>Model Vehicles</Link>
      <Link to="/testimonials" onClick={toggleSidebar}>Testimonial</Link>
      <Link to="/team" onClick={toggleSidebar}>Our Team</Link>
      <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
    </>
  );
};

export default Header;
