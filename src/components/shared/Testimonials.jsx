import React, { Component } from "react";
import styled from "styled-components";
import Testimonial from "./Testimonial";
import { Title, Column, Row } from "../../theme/index";
import testimonial1 from "../../assets/testimonial1.jpg";
import testimonial2 from "../../assets/testimonial2.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 6em 0 4em 0;
`;

const StyledButton = styled.button`
  width: 195px;
  height: 45px;
  background: ${props => (props.active ? "#B9402D" : "#fff")};
  color: ${props => (props.active ? "#fff" : "#505d68")};
  display: flex;
  text-transform: uppercase;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  margin: 0 0.75em;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 250ms;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: none;
  &:hover {
    background-color: #d25a47;
    color: #fff;
  }
`;

function MenuItem({ id, selected, title, handleClick }) {
  return (
    <StyledButton
      id={id}
      onClick={() => handleClick(id)}
      active={id === selected}
    >
      {title}
    </StyledButton>
  );
}

export default class Testimonials extends Component {
  state = {
    selected: "videoMarketing"
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
    return (
      <Wrapper>
        <Column margin="0 0 0 3em">
          <Title>Why people love Creative114</Title>
          <Row alignitems="center">
            <MenuItem
              id="videoMarketing"
              title="Video Marketing"
              handleClick={this.handleClick}
              selected={selected}
            />
            <MenuItem
              id="webDesign"
              title="Web Design"
              handleClick={this.handleClick}
              selected={selected}
            />
            <MenuItem
              id="graphicDesign"
              title="Graphic Design"
              handleClick={this.handleClick}
              selected={selected}
            />
            <MenuItem
              id="photography"
              title="Photography"
              handleClick={this.handleClick}
              selected={selected}
            />
          </Row>
        </Column>
        <Row>
          {selected === "videoMarketing" && (
            <Testimonial
              title="Video Marketing"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              img={testimonial2}
            />
          )}
          {selected === "webDesign" && (
            <Testimonial
              title="Web Deisgn"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              img={testimonial1}
            />
          )}
          {selected === "graphicDesign" && (
            <Testimonial
              title="Graphic Design"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              img={testimonial1}
            />
          )}
          {selected === "photography" && (
            <Testimonial
              title="Photography"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              img={testimonial2}
            />
          )}
        </Row>
      </Wrapper>
    );
  }
}
