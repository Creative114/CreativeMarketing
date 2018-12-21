import React from "react";
import styled from "styled-components";
import { Row, Column, Title, Text } from "../../theme/index";
import Navigation from "./Navigation";
import Lightbulb from "./Lightbulb";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background: #fff;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    height: ${props => (props.home ? "700px" : "800px")};
  }
`;

const StyledLightbulb = styled(Column)`
  width: 5%;
  margin: 0 auto;
`;

const StyledHomeColumn = styled(Column)`
  margin-top: 6em;
  width: ${props => (props.primary ? "75%" : "25%")};
  @media (max-width: 780px) {
    width: ${props => (props.primary ? "95%" : "30%")};
    margin: ${props => (props.primary ? "0 auto" : "0 auto 1em auto")};
    text-align: center;
  }
  @media (max-width: 500px) {
    width: ${props => (props.primary ? "95%" : "40%")};
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

export default function HomeSplash() {
  return (
    <Wrapper>
      <Navigation />
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

      <Row width="75%" margin="0 auto">
        <video
          autoplay="autoplay"
          playsinline=""
          muted="muted"
          loop="loop"
          preload=""
          width="100%"
          height="500px"
          controlslist="nodownload"
        >
          <source src="https://player.vimeo.com/external/296340016.hd.mp4?s=f9fc7bcadcc66d19041fa372b11ff4ba4798dd55&profile_id=175" />
        </video>
      </Row>
    </Wrapper>
  );
}
