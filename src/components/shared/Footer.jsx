import React from "react";
import styled, { css } from "styled-components";
import { StyledNavLink, Row, Text, Button, Column } from "../../theme/index";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  background: #d21f04;
  padding: 4em 0;
  @media (max-width: 920px) {
    height: 100%;
    min-height: 100px;
  }
`;

const Image = styled.img`
  width: 220px;
  height: 30px;
  margin-bottom: 1.5em;
  @media (max-width: 920px) {
    margin: 0.75em 0;
  }
`;

const StyledRow = styled(Row)`
  justify-content: space-between;
  width: 90%;
  height: 100%;
  margin: auto;
  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledContentRow = styled(Row)`
  @media (max-width: 920px) {
    margin: 1em 0;
  }
`;

const StyledColumn = styled(Column)`
  justify-content: space-between;
  @media (max-width: 920px) {
    text-align: center;
    width: 95%;
    margin: 0.75em auto;
    align-items: center;
  }
  ${props =>
    props.first &&
    css`
      width: 35%;
      @media (max-width: 980px) {
        width: auto;
      }
    `}
`;

const Icon = styled.i`
  font-size: 2em;
  margin-right: 0.75em;
  color: #fff;
  @media (max-width: 920px) {
    margin: 0 0.5em;
    font-size: 1.5em;
  }
`;

const MobileDiv = styled.div`
  margin: 0;
  display: none;
  @media (max-width: 920px) {
    display: flex;
    justify-content: center;
  }
`;

const DesktopDiv = styled(Row)`
  @media (max-width: 920px) {
    margin: 0;
    display: none;
  }
`;

export default function Footer({ toggleModal }) {
  return (
    <Wrapper>
      <StyledRow>
        <StyledColumn first>
          <Link to="/">
            <Image src={Logo} alt="" />
          </Link>
          <div style={{ width: "80%" }}>
            <Text footer>
              If you’re struggle to be interesting, relevant, and relatable,
              we’ll help you identify and communicate emotionally engaging video
              stories that generate results (and goosebumps).
            </Text>
          </div>
        </StyledColumn>
        <MobileDiv>
          <Button footer onClick={() => toggleModal("calendar")}>
            Schedule a call now
          </Button>
        </MobileDiv>
        <StyledColumn justifycontent="space-between">
          <StyledContentRow alignitems="center">
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/work">Work</StyledNavLink>
            <StyledNavLink to="/about">About</StyledNavLink>
            <StyledNavLink to="/impact">Impact</StyledNavLink>
          </StyledContentRow>
          <StyledContentRow>
            <a
              href="https://www.linkedin.com/showcase/creative114/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon social className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://www.facebook.com/114brands"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon social className="fab fa-facebook-f" />
            </a>

            <a
              href="https://www.instagram.com/creative1.14/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon social className="fab fa-instagram" />
            </a>
            <a
              href="https://vimeo.com/channels/1439000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon social className="fab fa-vimeo-v" />
            </a>
          </StyledContentRow>
          <Text footer>
            2019 &copy; Creative114 | Made with &hearts; in Tampa, FL
          </Text>
        </StyledColumn>
        <DesktopDiv>
          <Button footer onClick={() => toggleModal("calendar")}>
            Schedule a call now
          </Button>
        </DesktopDiv>
      </StyledRow>
    </Wrapper>
  );
}
