import React, { Component } from "react";
import styled from "styled-components";
import Splash from "../../shared/Splash";
import Content from "../../shared/Content";

class CaseStudy extends Component {
  render() {
    const { bannerVideo, title, mainDescription } = this.props;
    return (
      <div>
        <Splash type="casestudy" img={bannerVideo} />
        <Content title={title} description={mainDescription} />
      </div>
    );
  }
}

export default CaseStudy;
