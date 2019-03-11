import React, { Component } from "react";
import styled from "styled-components";
import Icon from "../../assets/icon.png";
import Burger from "./Burger";
import { Row, StyledNavLink, Button } from "../../theme/index";

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

const Div = styled.div`
  margin: 0;
  display: none;
  @media (max-width: 920px) {
    display: block;
  }
`;

const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
  margin: 0 3em 0 0;
  @media (max-width: 920px) {
    margin: 0;
    display: none;
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
    const { color, active } = this.state;
    const { type, toggleModal } = this.props;
    return (
      <Wrapper
        background={color}
        active={active}
        display={!this.props.show && "none"}
      >
        <Image active={!active} src={Icon} alt="Creative114 Logo" />
        <Div>
          {" "}
          <Burger toggleModal={toggleModal} />
        </Div>

        <StyledRow>
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
            #Shareyourimpact
          </StyledNavLink>
          <StyledNavLink home={type === "home"} active={active} to="/contact">
            Contact
          </StyledNavLink>
          <Button primary small onClick={toggleModal}>
            Start now
          </Button>
        </StyledRow>
      </Wrapper>
    );
  }
}
