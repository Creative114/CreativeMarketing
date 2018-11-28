import React, { Component } from "react";
import styled from "styled-components";
import Splash from "../../shared/Splash";
import Video from "../../shared/Video";
import Services from "../../shared/Services";
import Logos from "../../shared/Logos";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Splash />
        <Logos />
        <Video />
        <Services />
      </Wrapper>
    );
  }
}
