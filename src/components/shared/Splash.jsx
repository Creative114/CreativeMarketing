import React from "react";
import styled from "styled-components";
import { Column, Title, Text, Button } from "../../theme/index";
import Navigation from "./Navigation";
import aboutSplash from "../../assets/aboutSplash.jpg";
import impactSplash from "../../assets/impact.jpg";

const Wrapper = styled.div`
  height: ${props => props.height || "100%"};
  width: 100%;
  margin: 0 auto;
  background: ${props => props.background};
  background-size: cover;
  background-position: ${props => props.backgroundposition};
`;

const StyledColumn = styled(Column)`
  align-items: center;
  text-align: center;
  width: 65%;
  margin: 0 auto;
  z-index: 1000;
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
  min-width: 100%;
  min-height: 100%;
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
  console.log(img);

  return (
    <Wrapper
      height={type === "casestudy" && "550px"}
      background={
        type === "casestudy"
          ? `url('${img}')`
          : type === "thanks"
          ? `url('${impactSplash}')`
          : type === "nomatch" && `url('${aboutSplash}')`
      }
    >
      <Navigation show={show} toggleModal={toggleModal} />
      {type !== "casestudy" && (
        <Video autoPlay muted loop>
          <source src={src} type="video/mp4" />
        </Video>
      )}
      {/* <StyledColumn>
        <Title header>{title}</Title>
        <Text header>{text}</Text>
      </StyledColumn> */}
    </Wrapper>
  );
}
