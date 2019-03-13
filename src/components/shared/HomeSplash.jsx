import React, { Component } from "react";
import styled from "styled-components";
import { Row, Column, Title, Subtitle, Button } from "../../theme/index";
import Navigation from "./Navigation";
import Lightbulb from "./Lightbulb";
import Reveal from "react-reveal/Reveal";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(#ffffff, rgb(242, 245, 247));
  padding-bottom: 3em;
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
  width: 85%;
  align-items: center;
  @media (max-width: 780px) {
    width: 95%;
    margin: 1em auto 0 auto;
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
  height: 478px;
  margin: 0 auto;
  @media (max-width: 780px) {
    width: 100%;
    height: 100%;
  }
`;

export default class HomeSplash extends Component {
  componentWillMount() {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    script1.src = "https://fast.wistia.com/embed/medias/videolink.jsonp";
    script1.async = true;

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
  }

  render() {
    const { toggleModal } = this.props;
    return (
      <Wrapper>
        <Navigation type="home" toggleModal={toggleModal} />
        <Reveal effect="fadeIn">
          <StyledRow>
            <StyledHomeColumn>
              <StyledLightbulb>
                <Lightbulb />
              </StyledLightbulb>
              <Title header home>
                Showcase the emotional impact of the good that you do.
              </Title>
              <Subtitle logo>
                We create{" "}
                <span style={{ color: "#D21F04" }}>video stories</span> that
                engage, entertain, and excite your targeted audience.
              </Subtitle>
              <Row margin="2em 0">
                <Button primary onClick={toggleModal}>
                  Start now
                </Button>
              </Row>
            </StyledHomeColumn>
          </StyledRow>
        </Reveal>
        <StyledVideoRow>
          <div
            class="wistia_embed wistia_async_n5ltbaiebq videoFoam=true"
            style={{ height: "100%", position: "relative", width: "100%" }}
          >
            <div
              class="wistia_swatch"
              style={{
                height: "100%",
                left: 0,
                opacity: 0,
                overflow: "hidden",
                position: "absolute",
                top: 0,
                transition: "opacity 250ms",
                width: "100%"
              }}
            >
              <img
                src="https://fast.wistia.com/embed/medias/n5ltbaiebq/swatch"
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                alt=""
                onLoad="this.parentNode.style.opacity=1;"
              />
            </div>
          </div>
        </StyledVideoRow>
        {/* <StyledVideoRow>
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
          <source src="https://creative114.wistia.com/medias/n5ltbaiebq?embedType=async&videoFoam=true&videoWidth=640" />
        </video>
      </StyledVideoRow> */}
      </Wrapper>
    );
  }
}
