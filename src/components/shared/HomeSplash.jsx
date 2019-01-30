import React from "react";
import styled from "styled-components";
import { Row, Column, Title } from "../../theme/index";
import Navigation from "./Navigation";
import Lightbulb from "./Lightbulb";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  @media (max-width: 780px) {
    justify-content: center;
  }
`;

const StyledLightbulb = styled(Column)`
  width: 5%;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 7.5%;
  }
`;

const StyledHomeColumn = styled(Column)`
  margin-top: 6em;
  width: 75%;
  @media (max-width: 780px) {
    width: 95%;
    margin: 6em auto 0 auto;
    text-align: center;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

const StyledRow = styled(Row)`
  justify-content: center;
  text-align: center;
  align-items: center;
  @media (max-width: 780px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
  }
`;

const StyledVideoRow = styled(Row)`
  width: 75%;
  margin: 0 auto;
  @media (max-width: 780px) {
    width: 100%;
  }
`;

export default function HomeSplash() {
  return (
    <Wrapper>
      <Navigation type="home" />
      <StyledRow>
        <StyledHomeColumn primary>
          <StyledLightbulb>
            <Lightbulb />
          </StyledLightbulb>
          <Title header home>
            Creative Storytelling, Lead Generation and Brand Strategy.
          </Title>
        </StyledHomeColumn>
      </StyledRow>

      <StyledVideoRow>
        <video
          autoplay="autoplay"
          playsinline=""
          muted="muted"
          loop="loop"
          preload=""
          width="100%"
          height="100%"
          controlslist="nodownload"
        >
          <source src="https://player.vimeo.com/external/308437848.hd.mp4?s=3a4177925eaf3898e34da138b5ef2f6fd951f4ee&profile_id=175" />
        </video>
      </StyledVideoRow>
    </Wrapper>
  );
}
