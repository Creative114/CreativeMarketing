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
  margin-top: 2em;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: auto;
  height: 100%;
  width: 95%;
  @media (max-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    width: 95%;
    margin: 0;
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

export default class Recent extends Component {
  render() {
    return (
      <Wrapper id="what">
        <Column alignitems="center" textalign="center">
          <Title>Other work</Title>
          <Text>
            Below are a few projects that we have had the honor of creating for
            our clients:
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
            <Video src="https://fast.wistia.com/embed/medias/jsdmuoe293/swatch" />
          </Div>
          <Div>
            <Video src="https://fast.wistia.com/embed/medias/k3qm1g877n/swatch" />
          </Div>
          <Div>
            <Video src="https://fast.wistia.com/embed/medias/bvj3ukhj2g/swatch" />
          </Div>
        </Grid>
      </Wrapper>
    );
  }
}
