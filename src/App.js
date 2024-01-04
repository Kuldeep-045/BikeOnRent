import Header from './components/Header';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import About from './components/About.jsx';
import Bikes from './components/Bikes.jsx';
import Contact from './components/Contact.jsx';
import Team from './components/Team.jsx';
// import Screen from './components/Screen'
// import Choose from './components/Choose'
// import Reviews from './components/Reviews'
// import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import Testimonial from './components/Testimonial.jsx';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/model" element={<Bikes />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        {/* <Route path="/exchanges" element={<Exchanges />} /> */}
        {/* <Route path="/coin/:id" element={<CoinDetails />} /> */}
      </Routes>

      <Footer />
    </Router>
    </>
  );
}

export default App;
