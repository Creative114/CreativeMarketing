import React, { Component } from "react";
import styled from "styled-components";
import { Row, Column, Title, Text } from "../../theme/index";
// import Reveal from "react-reveal/Reveal";
import BG from "../../assets/rectange_bg.png";

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  background: ${props => props.bg};
  flex-direction: column;
  align-items: center;
  padding: 10em 0;
  @media (max-width: 780px) {
    justify-content: center;
    padding: 5em 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  margin: 0 auto;
  margin: 2em auto 6em auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 170px;
  height: 100%;
  width: 80%;
  @media (max-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    width: 95%;
    margin: 2em auto;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: 750ms;
  text-align: center;
`;

const StyledButton = styled.button`
  width: 342px;
  height: 79px;
  outline: none;
  background: #d21f04;
  border: 1px solid transparent;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 19px;
  font-weight: 600;
  border-radius: 4px;
  transition: 750ms;
  margin: 0.5em 0;
  text-transform: uppercase;
  box-shadow: 0 5px 30px rgba(148, 151, 155, 0.6);
  &:hover {
    background-color: #f32405;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export default class LaunchWhy extends Component {
  render() {
    return (
      <Wrapper bg={`url('${BG}')`}>
        <Column alignitems="center" textalign="center">
          <Title margin=".25em 0">Lorem Ipsum</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum
            dolor sit amet consectetur adipiscing elit.
          </Text>
        </Column>
        <Grid>
          <Div>
            <Text>Test</Text>
          </Div>
          <Div>
            <Text>Test</Text>
          </Div>
          <Div>
            <Text>Test</Text>
          </Div>
        </Grid>
        <Row justifycontent="center">
          <StyledButton>
            <i
              class="fas fa-play-circle"
              style={{ color: "#fff", marginRight: ".5em" }}
            />
            Find your story
          </StyledButton>
        </Row>
      </Wrapper>
    );
  }
}
