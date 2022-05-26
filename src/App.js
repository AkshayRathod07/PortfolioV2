import { BrowserRouter as Router ,Switch, Route, Link } from "react-router-dom";
import './App.css';
import HomePage from "./Pages/HomePage_Folder/HomePage";
import {ReactNavbar} from "overlay-navbar"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (

    
    <Router>
    <ReactNavbar burgerColor="white" logo={'/DevLogo1.png'}
 
  link1Color="rgba(255,255,255,0.8)"
    
    link1Text="Home"
    link2Text="About"
    link3Text="Portfolio"
    link4Text="Contact"
    link1Url="/"
    link2Url="/about"
    link3Url="/portfolio"
    link4Url="/contact"
    link1Size="2vmax"
    link1Family="cursive"
    link1Margin="1.5vmax"
    link2Margin="0vmax"
    link4Margin="1vmax"
    searchIcon={false}
    cartIcon={false}
    profileIcon={false}

     />

    <Switch>

      <Route component={HomePage} />
    </Switch>

    </Router>

  );
}

export default App;
