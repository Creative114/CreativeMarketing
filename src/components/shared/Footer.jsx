import React from "react";
import styled from "styled-components";
import { StyledNavLink, Row, Text, Button, Column } from "../../theme/index";
import Logo from "../../assets/logo.png";

const Wrapper = styled.div`
  height: 175px;
  width: 100%;
  background: #d21f04;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3em 0 2em 0;
  @media (max-width: 920px) {
    height: 100%;
    min-height: 100px;
    padding: 6em 0;
  }
`;

const Image = styled.img`
  width: 220px;
  height: 30px;
  @media (max-width: 920px) {
    margin: 0.75em 0;
  }
`;

const StyledRow = styled(Row)`
  align-items: center;
  justify-content: space-between;
  margin: 0 5em;
  @media (max-width: 920px) {
    flex-direction: column;
    margin: 0;
    align-items: center;
  }
`;

const StyledColumn = styled(Column)`
  width: 50%;
  @media (max-width: 920px) {
    text-align: center;
    width: 95%;
    margin: 0.75em 0;
  }
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
  @media (max-width: 780px) {
    display: flex;
    justify-content: center;
  }
`;

const DesktopDiv = styled(Row)`
  align-items: center;
  @media (max-width: 780px) {
    margin: 0;
    display: none;
  }
`;

export default function Footer({ toggleModal }) {
  return (
    <Wrapper>
      <StyledRow>
        <Image src={Logo} alt="" />
        <Row alignitems="center">
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/work">Work</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
          <StyledNavLink to="/impact">Impact</StyledNavLink>
          <Text footer contact className="drift-open-chat">
            Contact
          </Text>
          <DesktopDiv>
            <Button footer small onClick={toggleModal}>
              Start now
            </Button>
          </DesktopDiv>
        </Row>
      </StyledRow>
      <MobileDiv>
        <Button footer small onClick={toggleModal}>
          Start now
        </Button>
      </MobileDiv>
      <StyledRow>
        <StyledColumn>
          <Text footer>
            Most Businesses struggle to be interesting and relatable.
            <br /> We identify & highlight engaging stories that generate ROI
            (and goosebumps).
          </Text>
          <Text footer>
            2019 &copy; Creative114 | Made with &hearts; in Tampa, FL
          </Text>
        </StyledColumn>
        <Row>
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
        </Row>
      </StyledRow>
    </Wrapper>
  );
}
