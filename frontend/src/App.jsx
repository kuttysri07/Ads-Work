import React, { Fragment, useEffect } from "react";
import Nav from "./Components/Nav";
import { Home } from "./Components/Home";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import Aboutus from "./Components/Aboutus";
import { Team } from "./Components/Team";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import "./App.css"
import Blog from "./Components/Blog";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration (default is 400ms)
      easing: "ease-in-out", // Easing for animations
      once:false
    });
  }, []);
  return (
    <Fragment>
      <div className="font-Outfit">
        <Nav />
        <Home />
        <Testimonials />
        <Aboutus />
        <Gallery />
        {/* <Team /> */}
        <Blog />
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
