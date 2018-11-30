import React, { Component } from "react";
import Splash from "../../shared/Splash";
import Portfolio from "../../shared/Portfolio";
import Recent from "../../shared/Recent";
import Footer from "../../shared/Footer";
import CaseStudies from "../../shared/CaseStudies";

export default class Work extends Component {
  render() {
    return (
      <div>
        <Splash type="work" title="Work" />
        <Portfolio />
        <Recent />
        <CaseStudies />
        <Footer />
      </div>
    );
  }
}
