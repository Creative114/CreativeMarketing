import React, { Component } from "react";
import Splash from "../../shared/Splash";
import Content from "../../shared/Content";
import Footer from "../../shared/Footer";

class CaseStudy extends Component {
  render() {
    const { bannerVideo, title, mainDescription } = this.props;
    return (
      <div>
        <Splash type="casestudy" img={bannerVideo} />
        <Content title={title} description={mainDescription} />
        <Footer />
      </div>
    );
  }
}

export default CaseStudy;
