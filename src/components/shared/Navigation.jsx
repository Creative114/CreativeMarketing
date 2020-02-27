import React, { Component } from "react";
import styled from "styled-components";
import Icon from "../../assets/icon.png";
// import Logo from "../../assets/logoColor.png";
import LogoWhite from "../../assets/logo.png";
import Burger from "./Burger";
import { Row, StyledNavLink, Button, StyledALink } from "../../theme/index";
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
  @media (max-width: 920px) {
    margin: 0;
    display: none;
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

const MobileImage = styled.img`
  width: 40px;
  height: 56px;
  display: none;
  @media (max-width: 920px) {
    display: block;
    margin-left: 1em;
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
    return logo;
  };

  render() {
    const { color, active } = this.state;
    const { type, toggleModal, show, isAuthed, launch } = this.props;

    return (
      <Wrapper background={color} active={active ? 1 : 0} display={!show && "none"}>
        <Link to="/">
          <Image
            src={this.handleLogo(active, type)}
            active={!active}
            alt="Creative114 Logo"
          />
        </Link>

        <Link to="/">
          <MobileImage src={Icon} alt="Creative114 Logo" />
        </Link>
        {type !== "launch" && (
          <React.Fragment>
            <BurgerDiv>
              <Burger />
            </BurgerDiv>
            {type !== "home" && (
              <StyledRow>
                <StyledNavLink
                  home={type === "home" ? 1 : 0}
                  active={active ? 1 : 0}
                  exact
                  to="/"
                >
                  Home
                </StyledNavLink>
                <StyledNavLink
                  home={type === "home" ? 1 : 0}
                  active={active ? 1 : 0}
                  exact
                  to="/work"
                >
                  Work
                </StyledNavLink>
                <StyledNavLink
                  home={type === "home" ? 1 : 0}
                  active={active ? 1 : 0}
                  exact
                  to="/about"
                >
                  About
                </StyledNavLink>
                <StyledNavLink
                  home={type === "home" ? 1 : 0}
                  active={active ? 1 : 0}
                  to="/impact"
                >
                  Impact
                </StyledNavLink>
                <StyledALink
                  active={active ? 1 : 0}
                  href="https://blog.creative114.com"
                >
                  Blog
                </StyledALink>
                <StyledNavLink
                  home={type === "home" ? 1 : 0}
                  active={active ? 1 : 0}
                  to="/contact"
                >
                  Contact
                </StyledNavLink>

                <Link to="/launch">
                  <Button primary>
                    Access Now
                  </Button>
                </Link>
              </StyledRow>
            )}
            {type === "home" && launch && (
              <StyledRow>
                <Button
                  primary
                  onClick={
                    isAuthed
                      ? () => toggleModal("schedule")
                      : () => toggleModal("launch")
                  }
                >
                  {isAuthed && launch
                    ? "Schedule a call now"
                    : "Get the videos now"}
                </Button>
              </StyledRow>
            )}
            {type === "home" && !launch && (
              <StyledRow>
                <StyledALink
                  active={active ? 1 : 0}
                  href="https://blog.creative114.com/"
                >
                  Blog
                </StyledALink>
                <Link to="/launch">
                  <Button primary smallText>
                    Free Story Formula
                  </Button>
                </Link>
              </StyledRow>
            )}
          </React.Fragment>
        )}
      </Wrapper>
    );
  }
}
