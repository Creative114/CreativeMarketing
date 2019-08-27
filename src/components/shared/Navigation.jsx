import React, { Component } from "react";
import styled from "styled-components";
import Icon from "../../assets/icon.png";
import Logo from "../../assets/logoColor.png";
import LogoWhite from "../../assets/logo.png";
import Burger from "./Burger";
import { Row, StyledNavLink, Button } from "../../theme/index";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  background: ${props => props.background};
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: space-between;
  top: 0;
  z-index: 10000000;
  transition: 500ms;
  box-shadow: ${props => props.active && "0 0 10px rgba(0, 0, 0, 0.1)"};
  @media (max-width: 920px) {
    position: relative;
    background-color: #fff;
  }
`;

const Image = styled.img`
  width: ${props => (props.active ? "220px" : "40px")};
  height: ${props => (props.active ? "30px" : "56px")};
  transition: 250ms;
  margin-left: 1.5em;
  @media (max-width: 425px) {
    width: 40px;
    height: 56px;
  }
`;

const StyledRow = styled(Row)`
  align-items: center;
  margin: 0 3em 0 0;
  @media (max-width: 920px) {
    margin: 0;
    display: none;
  }
`;

const BurgerDiv = styled.div`
  margin: 0;
  display: none;
  @media (max-width: 920px) {
    display: block;
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

  handleLogo = (active, type) => {
    let logo;
    if (active && type === "home") {
      logo = Icon;
    } else if (!active && type === "home") {
      logo = LogoWhite;
    } else if (active) {
      logo = Icon;
    } else if (!active) {
      logo = LogoWhite;
    } else {
      logo = LogoWhite;
    }
    console.log(logo);

    return logo;
  };

  render() {
    const { color, active } = this.state;
    const { type, toggleModal } = this.props;
    console.log(type);

    return (
      <Wrapper
        background={color}
        active={active}
        display={!this.props.show && "none"}
      >
        <Link to="/">
          <Image
            src={this.handleLogo(active, type)}
            active={!active}
            alt="Creative114 Logo"
          />
        </Link>
        {type !== "launch" && (
          <React.Fragment>
            <BurgerDiv>
              <Burger />
            </BurgerDiv>
            {type !== "home" && (
              <StyledRow>
                <StyledNavLink
                  home={type === "home"}
                  active={active}
                  exact
                  to="/"
                >
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
                <StyledNavLink
                  home={type === "home"}
                  active={active}
                  to="/impact"
                >
                  #Shareyourimpact
                </StyledNavLink>
                <StyledNavLink
                  home={type === "home"}
                  active={active}
                  to="/contact"
                >
                  Contact
                </StyledNavLink>

                <Button primary onClick={() => toggleModal("schedule")}>
                  Schedule a call now
                </Button>
              </StyledRow>
            )}
            {type === "home" && (
              <div style={{ marginRight: "2em" }}>
                <Button primary onClick={() => toggleModal("schedule")}>
                  Schedule a call now
                </Button>
              </div>
            )}
          </React.Fragment>
        )}
      </Wrapper>
    );
  }
}
