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
  background: ${props => props.background};
  background-size: cover;
  display: flex;
  flex-direction: column;
  @media (max-width: 780px) {
    justify-content: center;
    height: 100%;
  }
`;

const StyledLightbulb = styled(Column)`
  width: 5%;
  margin: 0 auto;
  @media (max-width: 980px) {
    display: none;
  }
`;

const StyledHomeColumn = styled(Column)`
  align-items: center;
  text-align: center;
  width: 65%;
  height: auto;
  margin: auto;
  margin-top: 6em;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100000;
  position: absolute;
  align-items: center;
  @media (max-width: 980px) {
    width: 95%;
    margin: 0 auto;
    margin-top: 2em;
    text-align: center;
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

const Overlay = styled.div`
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 1000;
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
`;

const StyledButton = styled(Button)`
  @media (max-width: 920px) {
    display: none;
  }
`;

export default class HomeSplash extends Component {
  render() {
    const { toggleModal } = this.props;
    return (
      <Wrapper>
        <Navigation type="home" toggleModal={toggleModal} />

        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            position: "relative"
          }}
        >
          <div
            className="wistia_embed wistia_async_g2nuwu529g videoFoam=true"
            style={{ height: "100%", position: "relative", width: "100%" }}
          >
            <div
              className="wistia_swatch"
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
                src="https://fast.wistia.com/embed/medias/g2nuwu529g/swatch"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain"
                }}
                alt=""
              />
            </div>
          </div>

          <Overlay />
          <StyledRow>
            <StyledHomeColumn>
              <StyledLightbulb>
                <Lightbulb />
              </StyledLightbulb>
              <Title header home>
                Your story told like never before
              </Title>
              <Subtitle home>
                Supercharge your business with engaging videos
              </Subtitle>
              <Row margin="2em 0">
                <StyledButton primary onClick={() => toggleModal("schedule")}>
                  Schedule a call now
                </StyledButton>
              </Row>
            </StyledHomeColumn>
          </StyledRow>
        </div>
      </Wrapper>
    );
  }
}
