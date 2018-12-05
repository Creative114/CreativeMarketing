import React from "react";
import styled from "styled-components";
import { StyledNavLink, Row } from "../../theme/index";
import Logo from "../../assets/logo.png";

const Wrapper = styled.div`
  height: 125px;
  width: 100%;
  background: #b9402d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3em 0 0 0;
  @media (max-width: 780px) {
    height: 100%;
    min-height: 100px;
    padding: 6em 0;
  }
`;

const Image = styled.img`
  width: 220px;
  height: 30px;
  margin-left: 3em;
  @media (max-width: 780px) {
    margin: 0 0 2em 0;
  }
`;

const StyledRow = styled(Row)`
  align-items: center;
  justify-content: space-between;
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <StyledRow>
        <Image src={Logo} alt="" />
        <Row alignitems="center">
          <StyledNavLink footer to="/">
            Home
          </StyledNavLink>
          <StyledNavLink footer to="/">
            Work
          </StyledNavLink>
          <StyledNavLink footer to="/">
            About
          </StyledNavLink>
          <StyledNavLink footer to="/">
            Impact
          </StyledNavLink>
          <StyledNavLink footer to="/">
            Contact
          </StyledNavLink>
        </Row>
      </StyledRow>
      <Row>
        {/* <Text footer>
          2018 &copy; Feed Forward | Made with &hearts; in Tampa, FL
        </Text> */}
      </Row>
    </Wrapper>
  );
}
