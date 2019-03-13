import React from "react";
import styled from "styled-components";
import { StyledNavLink, Row, Text, Button, Column } from "../../theme/index";
import Logo from "../../assets/logo.png";

const Wrapper = styled.div`
  height: 175px;
  width: 100%;
  background: #b9402d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3em 0 2em 0;
  @media (max-width: 780px) {
    height: 100%;
    min-height: 100px;
    padding: 6em 0;
  }
`;

const Image = styled.img`
  width: 220px;
  height: 30px;
`;

const StyledRow = styled(Row)`
  align-items: center;
  justify-content: space-between;
  margin: 0 2em;
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

const StyledColumn = styled(Column)`
  @media (max-width: 780px) {
    text-align: center;
    width: 95;
  }
`;

const Icon = styled.i`
  font-size: 2em;
  margin-right: 0.75em;
  color: #fff;
  @media (max-width: 780px) {
    margin: 0 0.5em;
    font-size: 1.5em;
  }
`;

export default function Footer({ toggleModal }) {
  return (
    <Wrapper>
      <StyledRow>
        <Image src={Logo} alt="" />
        <Row alignitems="center">
          <StyledNavLink footer to="/">
            Home
          </StyledNavLink>
          <StyledNavLink footer to="/work">
            Work
          </StyledNavLink>
          <StyledNavLink footer to="/about">
            About
          </StyledNavLink>
          <StyledNavLink footer to="/impact">
            Impact
          </StyledNavLink>
          <Text footer contact className="drift-open-chat">
            Contact
          </Text>
          <Button footer small onClick={toggleModal}>
            Start now
          </Button>
        </Row>
      </StyledRow>
      <StyledRow>
        <StyledColumn>
          <Text footer>
            We create videos that Engage, Entertain, and Excite your targeted
            audience.
          </Text>
          <Text footer>
            2018 &copy; Creative114 | Made with &hearts; in Tampa, FL
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
            href="https://www.instagram.com/candigitalgroup/"
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
