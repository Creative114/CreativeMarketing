import React, { Component } from "react";
import styled from "styled-components";
import Member from "./Member";
import { Row } from "../../theme/index";
import Slider from "react-slick";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 4em 0 2em 0;
`;

const StyledBox = styled.div`
  width: 165px;
  height: 138px;
  background: #f1f5f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 1.5em;
  border-radius: 3px;
  border: ${props =>
    (props.active && "1.5px solid #b9402d") || "1.5px solid transparent"};
  cursor: pointer;
  transition: 750ms;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
`;

const boxes = [
  {
    id: "jet",
    title: "Effective",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-bullseye-arrow"
  },
  {
    id: "jephte",
    title: "Efficient",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-rabbit-fast"
  },
  {
    id: "rachel",
    title: "Evaluations",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-clipboard-list-check"
  },
  {
    id: "will",
    title: "Accountability",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-fingerprint"
  }
];

function Box({ id, selected, handleClick }) {
  return (
    <StyledBox
      id={id}
      onClick={() => handleClick(id)}
      active={id === selected}
    />
  );
}

export default class Team extends Component {
  state = {
    selected: "jet"
  };

  handleClick = id => {
    this.setState(() => {
      return {
        selected: id
      };
    });
  };

  render() {
    const { selected } = this.state;
    let settings = {
      dots: true,
      infinite: false,
      arrows: false,
      speed: 1000
    };

    const mobile = window.matchMedia("(max-width: 780px)");
    return (
      <Wrapper>
        {mobile.matches && (
          <div
            style={{
              margin: "1.5em 0"
            }}
          >
            <Slider {...settings}>
              <Member
                name="Getro Jean-Claude"
                title="President"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />

              <Member
                name="Jephte Jean-Claude"
                title="Camera Operator"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />

              <Member
                name="Rachel Jean-Claude"
                title=""
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />

              <Member
                name="William Whatley"
                title="Technologist"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />

              <Member
                name="Test3"
                title="Guy2"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </Slider>
          </div>
        )}
        {!mobile.matches && (
          <React.Fragment>
            <Row>
              {selected === "jet" && (
                <Member
                  name="Getro Jean-Claude"
                  title="President"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
              )}
              {selected === "jephte" && (
                <Member
                  name="Jephte Jean-Claude"
                  title="Camera Operator"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
              )}
              {selected === "rachel" && (
                <Member
                  name="Rachel Jean-Claude"
                  title="Test"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
              )}
              {selected === "will" && (
                <Member
                  name="William Whatley"
                  title="Technologist"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
              )}
            </Row>

            <Row justifycontent="center" alignitems="center" margin="3em 0 0 0">
              {boxes &&
                boxes.map((key, index) => {
                  return (
                    <Box
                      key={index}
                      id={key.id}
                      title={key.title}
                      description={key.description}
                      icon={key.icon}
                      handleClick={this.handleClick}
                      selected={selected}
                    />
                  );
                })}
            </Row>
          </React.Fragment>
        )}
      </Wrapper>
    );
  }
}
