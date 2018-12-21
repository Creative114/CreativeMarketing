import React from "react";
import styled from "styled-components";
import { Row, Column, Title, Text } from "../../theme/index";
import Navigation from "./Navigation";
import Lightbulb from "./Lightbulb";
import aboutSplash from "../../assets/aboutSplash.jpg";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  background: ${props => props.background};
  background-size: cover;
  background-position: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    height: ${props => (props.home ? "700px" : "800px")};
  }
`;

const StyledColumn = styled(Column)`
  align-items: center;
  text-align: center;
  width: 55%;
  margin: 0 auto;
`;

const StyledLightbulb = styled(Column)`
  width: 6.5%;
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

export default function Splash({ type, title, show, img }) {
  return (
    <Wrapper
      home={type === "home"}
      background={
        type === "home"
          ? "#fff"
          : type === "work"
          ? `url('${img}')`
          : type === "about"
          ? `url('${aboutSplash}')`
          : type === "casestudy"
          ? `url('${img}')`
          : type === "impact" && "linear-gradient(to right, #e38b3d, #f3bf70)"
      }
    >
      <Navigation show={show} />
      {type === "home" && (
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
      )}
      {type === "about" && (
        <StyledColumn>
          <Title header>{title}</Title>
          <Text header>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Text>
        </StyledColumn>
      )}
      {type === "work" && (
        <StyledColumn>
          <Title header>{title}</Title>
          <Text header>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Text>
        </StyledColumn>
      )}
      {type === "casestudy" && (
        <StyledColumn>
          <Title header>{title}</Title>
          <Text header>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Text>
        </StyledColumn>
      )}
      {type === "impact" && (
        <StyledColumn>
          <Title header>{title}</Title>
          <Text header>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Text>
        </StyledColumn>
      )}
    </Wrapper>
  );
}
