import React, { Component } from "react";
import Splash from "../../shared/Splash";
import Video from "../../shared/Video";
import Services from "../../shared/Services";
import Logos from "../../shared/Logos";
import Portfolio from "../../shared/Portfolio";
import Testimonials from "../../shared/Testimonials";
import Footer from "../../shared/Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Splash type="home" />
        <Logos />
        <Video />
        <Services />
        <Portfolio type="home" />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}
