import React, { Fragment, useEffect } from "react";
import Nav from "./Components/Nav";
import { Home } from "./Components/Home";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";

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
        <Services />
        <Testimonials />
      </div>
    </Fragment>
  );
};

export default App;
