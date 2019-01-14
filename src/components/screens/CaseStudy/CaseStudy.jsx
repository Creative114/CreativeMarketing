import React, { Component } from "react";
import Splash from "../../shared/Splash";
import Content from "../../shared/Content";
import Footer from "../../shared/Footer";
import Videos from "./components/Videos";

class CaseStudy extends Component {
  render() {
    const { bannerVideo, title, mainDescription, videos } = this.props;
    return (
      <div>
        <Splash type="casestudy" img={bannerVideo} />
        <Content title={title} description={mainDescription} />
        <Videos videos={videos} />
        <Footer />
      </div>
    );
  }
}

export default CaseStudy;
