import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import Icon from "../../assets/icon.png";
import Burger from "./Burger";

import { Row, StyledNavLink } from "../../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: 75px;
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
  width: ${props => (props.active ? "40px" : "305px")};
  height: ${props => (props.active ? "56px" : "40px")};
  margin-left: 1.5em;
  transition: 250ms;
  @media (max-width: 425px) {
    width: ${props => (props.active ? "40px" : "250px")};
    height: ${props => (props.active ? "56px" : "33px")};
  }
`;

export default class Navigation extends Component {
  state = {
    color: "rgba(0,0,0,0)",
    active: false
  };

  listenScrollEvent = e => {
    if (window.scrollY > 150) {
      this.setState({ color: "white", active: true });
    } else {
      this.setState({ color: "rgba(0,0,0,0)", active: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    const mobile = window.matchMedia("(max-width: 920px)");

    let handleChange = () => {};

    mobile.addListener(handleChange());
    const { color, active } = this.state;
    return (
      <Wrapper background={color} active={active}>
        <Image
          active={active}
          src={active ? Icon : Logo}
          alt="Creative114 Logo"
        />
        {mobile.matches && <Burger />}

        {!mobile.matches && (
          <Row margin="0 3em 0 0">
            <StyledNavLink active={active} exact to="/">
              Home
            </StyledNavLink>
            <StyledNavLink active={active} exact to="/work">
              Work
            </StyledNavLink>
            <StyledNavLink active={active} exact to="/about">
              About
            </StyledNavLink>
            <StyledNavLink active={active} to="/">
              Impact
            </StyledNavLink>
            <StyledNavLink active={active} to="/">
              Contact
            </StyledNavLink>
          </Row>
        )}
      </Wrapper>
    );
  }
}
