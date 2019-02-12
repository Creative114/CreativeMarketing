import React, { Component } from "react";
import styled from "styled-components";
import Icon from "../../assets/icon.png";
import Burger from "./Burger";

import { Row, StyledNavLink } from "../../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  background: ${props => props.background};
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: space-between;
  top: 0;
  z-index: 100;
  transition: 500ms;
  box-shadow: ${props => props.active && "0 0 10px rgba(0, 0, 0, 0.1)"};
`;

const Image = styled.img`
  width: 40px;
  height: 56px;
  transition: 250ms;
  margin-left: 1.5em;
  @media (max-width: 425px) {
    width: 40px;
    height: 56px;
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
    const { type } = this.props;
    return (
      <Wrapper
        background={color}
        active={active}
        display={!this.props.show && "none"}
      >
        <Image active={!active} src={Icon} alt="Creative114 Logo" />
        {mobile.matches && <Burger />}

        {!mobile.matches && (
          <Row margin="0 3em 0 0">
            <StyledNavLink home={type === "home"} active={active} exact to="/">
              Home
            </StyledNavLink>
            <StyledNavLink
              home={type === "home"}
              active={active}
              exact
              to="/work"
            >
              Work
            </StyledNavLink>
            <StyledNavLink
              home={type === "home"}
              active={active}
              exact
              to="/about"
            >
              About
            </StyledNavLink>
            <StyledNavLink home={type === "home"} active={active} to="/impact">
              Impact
            </StyledNavLink>
            <StyledNavLink home={type === "home"} active={active} to="/contact">
              Contact
            </StyledNavLink>
          </Row>
        )}
      </Wrapper>
    );
  }
}
