import React from "react";
import styled from "styled-components";
import { Column, Title, Text, Button } from "../../theme/index";
import Navigation from "./Navigation";
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
  margin: 17em auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100000;
  position: absolute;
  @media (max-width: 1200px) {
    margin: 8em auto;
  }
  @media (max-width: 920px) {
    display: none;
  }
  @media (max-width: 780px) {
    width: 85%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

const Video = styled.video`
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const Div = styled.div`
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1000;
  position: absolute;
  width: 100%;
  height: 100%;
  @media (max-width: 920px) {
    display: none;
  }
`;

export default function Splash({
  type,
  src,
  title,
  text,
  show,
  img,
  toggleModal
}) {
  return (
    <Wrapper
      home={type === "home"}
      height={type === "casestudy" || (type === "contact" && "550px")}
      backgroundposition={type === "casestudy" ? "top" : "center"}
      background={
        type === "work"
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
      <Navigation show={show} toggleModal={toggleModal} />

      {type !== "casestudy" && (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center"
          }}
        >
          <Video autoPlay muted loop>
            <source src={src} type="video/mp4" />
          </Video>
          <Div />
          <StyledColumn>
            <Title header>{title}</Title>
            <Text header>{text}</Text>
          </StyledColumn>
        </div>
      )}
    </Wrapper>
  );
}
