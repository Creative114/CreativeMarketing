import React from "react";
import styled from "styled-components";
import { Row, Column, Title, Text } from "../../theme/index";
import Navigation from "./Navigation";
import Lightbulb from "./Lightbulb";
import aboutSplash from "../../assets/aboutSplash.jpg";
import impactSplash from "../../assets/impact.jpg";

const Wrapper = styled.div`
  height: ${props => props.height || "100vh"};
  width: 100%;
  margin: 0 auto;
  background: ${props => props.background};
  background-size: cover;
  background-position: ${props => props.backgroundposition};
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
  width: 65%;
  margin: 0 auto;
  @media (max-width: 780px) {
    width: 85%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
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
      height={type === "casestudy" || (type === "contact" && "550px")}
      backgroundposition={type === "casestudy" ? "top" : "center"}
      background={
        type === "home"
          ? "#fff"
          : type === "work"
          ? `url('${img}')`
          : type === "about"
          ? `url('${aboutSplash}')`
          : type === "casestudy"
          ? `url('${img}')`
          : type === "contact"
          ? `url('${aboutSplash}')`
          : type === "thanks"
          ? `url('${impactSplash}')`
          : type === "nomatch"
          ? `url('${aboutSplash}')`
          : type === "impact" && `url('${impactSplash}')`
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
            We are a creative storytelling solution that will empower your brand
            to create, connect and cultivate your targeted audience. We partner
            with you to create a compelling and emotionally engaging
            storytelling through video, website and content creation.
          </Text>
        </StyledColumn>
      )}
      {type === "work" && (
        <StyledColumn>
          <Title header>{title}</Title>
          <Text header>
            We are more than a video production, design or web development
            agency. We are in the business of solving problems. We work to craft
            and tell your stories with emotions and creativity. Our primary
            purpose is to empower your business with what we call the three C's:
            Create, Connect and Cultivate you brand.
          </Text>
        </StyledColumn>
      )}

      {type === "impact" && (
        <StyledColumn>
          <Title header>{title}</Title>
          <Text header>Coming soon.</Text>
        </StyledColumn>
      )}
      {type === "contact" && (
        <StyledColumn>
          <Title header>{title}</Title>
        </StyledColumn>
      )}
      {type === "thanks" && (
        <StyledColumn>
          <Title header>{title}</Title>
          <Text header>
            Our team will reach out to you as soon as possible.
          </Text>
        </StyledColumn>
      )}
      {type === "nomatch" && (
        <StyledColumn>
          <Title header>{title}</Title>
          <Text header>Something went wrong. Please try again.</Text>
        </StyledColumn>
      )}
    </Wrapper>
  );
}
