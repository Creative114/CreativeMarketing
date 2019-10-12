import React, { Component } from "react";
import styled from "styled-components";
import { Row, Column, Title, Text, Subtitle, Button } from "../../theme/index";
import Navigation from "./Navigation";
import LaunchForm from "../shared/LaunchForm";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background: ${props => props.background};
  background-size: cover;
  display: flex;
  flex-direction: column;
  @media (max-width: 920px) {
    justify-content: center;
    height: 100%;
  }
`;

const StyledHomeColumn = styled(Row)`
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 100%;
  margin: auto;
  margin-top: 2em;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100000;
  position: absolute;
  justify-content: center;
  @media (max-width: 980px) {
    width: 95%;
    // flex-direction: column;
  }
  @media (max-width: 720px) {
    margin-top: 0;
    // flex-direction: column;
  }
  @media (max-width: 500px) {
  }
`;

const StyledRow = styled(Row)`
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  @media (max-width: 920px) {
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

const StyledTitle = styled(Title)`
  font-size: 68px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.18;
  letter-spacing: normal;
  color: #ffffff;
  font-family: "Ubuntu", sans-serif;
  @media (max-width: 920px) {
    font-size: 48px;
  }
  @media (max-width: 880px) {
    font-size: 32px;
  }
`;

const StyledTitleDiv = styled.div`
  width: 50%;
  @media (max-width: 880px) {
    width: 35%;
  }
`;

export default class LaunchSplash extends Component {
  render() {
    const { toggleModal, handleAuth, isAuthed } = this.props;

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
              <StyledTitleDiv>
                <StyledTitle>
                  Four Elements To Videos That Get Results
                </StyledTitle>
              </StyledTitleDiv>
              <LaunchForm handleAuth={handleAuth} type="splash" />
            </StyledHomeColumn>
          </StyledRow>
        </div>
      </Wrapper>
    );
  }
}
