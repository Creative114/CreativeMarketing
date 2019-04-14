import React from "react";
import styled from "styled-components";
import { Column, Title, Text, Button } from "../../theme/index";
import Navigation from "./Navigation";
import aboutSplash from "../../assets/aboutSplash.jpg";
import impactSplash from "../../assets/impact.jpg";
import PDF from "../../assets/findyourstory.pdf";

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
  height: auto;
  margin: auto;
  margin-top: 15em;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100000;
  position: absolute;
  @media (max-width: 1200px) {
    margin: 8em auto;
  }
  @media (max-width: 780px) {
    margin: 4em auto;
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

const Overlay = styled.div`
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1000;
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
`;

const StyledText = styled(Text)`
  @media (max-width: 920px) {
    display: none;
  }
`;

const StyledButton = styled(Button)`
  @media (max-width: 920px) {
    display: none;
  }
`;

const A = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  font-weight: 600;
  border-radius: 3px;
  transition: 750ms;
  margin: 0.5em 0;
  text-transform: uppercase;
  background: #fff;
  width: 165px;
  height: 45px;
  border: 1px solid transparent;
  color: #d21f04;
  &:hover {
    color: #d21f04;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export default function Splash({
  type,
  src,
  title,
  text,
  show,
  img,
  toggleModal,
  redirect
}) {
  return (
    <Wrapper
      height={type === "casestudy" && "650px"}
      backgroundposition={type === "casestudy" && "center"}
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
          <Video autoPlay muted loop playsInline>
            <source src={src} type="video/mp4" />
          </Video>
          <Overlay />
          <StyledColumn>
            <Title header>{title}</Title>
            <StyledText header>{text}</StyledText>

            {/* <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/creative114"
              style={{ minHeight: "320px", height: "58px" }}
            /> */}

            {type !== "thanks" && (
              <StyledButton
                footer
                onClick={() =>
                  type === "contact"
                    ? toggleModal("schedule")
                    : toggleModal("story")
                }
              >
                {type === "contact" ? "Schedule now" : "Find your story"}
              </StyledButton>
            )}
            {type === "thanks" && <A href={PDF}>Download now!</A>}
          </StyledColumn>
        </div>
      )}
    </Wrapper>
  );
}
