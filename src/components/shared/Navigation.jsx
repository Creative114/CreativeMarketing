import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import LogoColor from "../../assets/logoColor.png";

import { Row, StyledNavLink } from "../../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background: ${props => props.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 10000;
  transition: 500ms;
  box-shadow: ${props => props.active && "0 0 10px rgba(0, 0, 0, 0.1)"};
`;

const Image = styled.img`
  width: 305px;
  height: 40px;
  margin-left: 1.5em;
  transition: 500ms;
`;

export default class Navigation extends Component {
  state = {
    color: "rgba(0,0,0,0)",
    active: false
  };

  listenScrollEvent = e => {
    if (window.scrollY > 350) {
      this.setState({ color: "white", active: true });
    } else {
      this.setState({ color: "rgba(0,0,0,0)", active: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    const { color, active } = this.state;
    return (
      <Wrapper background={color} active={active}>
        <Image src={active ? LogoColor : Logo} alt="Creative114 Logo" />
        <Row margin="0 3em 0 0">
          <StyledNavLink active={active} to="/">
            Home
          </StyledNavLink>
          <StyledNavLink active={active} to="/">
            Work
          </StyledNavLink>
          <StyledNavLink active={active} to="/">
            About
          </StyledNavLink>
          <StyledNavLink active={active} to="/">
            Impact
          </StyledNavLink>
          <StyledNavLink active={active} to="/">
            Contact
          </StyledNavLink>
        </Row>
      </Wrapper>
    );
  }
}
