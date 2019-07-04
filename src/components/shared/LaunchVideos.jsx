import React, { Component } from "react";
import styled from "styled-components";
import { Column, Text, Title } from "../../theme/index";
import Video from "../shared/Video";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 3em 0;
  align-items: center;
  @media (max-width: 780px) {
    width: 95%;
    text-align: center;
    padding: 1em 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  margin: 0 auto;
  margin: 2em 0 4em 0;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  height: 100%;
  width: 85%;
  @media (max-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    width: 95%;
    margin: 2em 0;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: 750ms;
  text-align: center;
`;

// const lightbox = [
//   <Video src="https://fast.wistia.com/embed/medias/v70c06uszd/swatch" />,
//   <Video src="https://fast.wistia.com/embed/medias/ioz3i2dz8k/swatch" />,
//   <Video src="https://fast.wistia.com/embed/medias/75qdcr5joj/swatch" />,
//   <Video src="https://fast.wistia.com/embed/medias/jsdmuoe293/swatch" />,
//   <Video src="https://fast.wistia.com/embed/medias/k3qm1g877n/swatch" />,
//   <Video src="https://fast.wistia.com/embed/medias/bvj3ukhj2g/swatch" />
// ];

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

export default class LaunchVideos extends Component {
  render() {
    return (
      <Wrapper id="what">
        <Column alignitems="center" textalign="center">
          <Title margin=".25em 0">The Solution</Title>
          <Text>
            Watch each video and discover 4 foundational secrets that will
            transform the way you engage with your ideal audience.
          </Text>
        </Column>
        <Grid>
          <Div>
            <Video src="https://fast.wistia.com/embed/medias/v70c06uszd/swatch" />
          </Div>
          <Div>
            <Video src="https://fast.wistia.com/embed/medias/ioz3i2dz8k/swatch" />
          </Div>
          <Div>
            <Video src="https://fast.wistia.com/embed/medias/75qdcr5joj/swatch" />
          </Div>
          <Div>
            <Video src="https://fast.wistia.com/embed/medias/75qdcr5joj/swatch" />
          </Div>
        </Grid>
        <StyledButton>
          <i
            class="fas fa-play-circle"
            style={{ color: "#fff", marginRight: ".5em" }}
          />
          Find your story
        </StyledButton>
      </Wrapper>
    );
  }
}
