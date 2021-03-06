import React from 'react';
import styled from 'styled-components';
import { SpanTitle, StyledColumn, Text } from '../../theme/index';
import Video from '../shared/Video';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 780px) {
    width: 95%;
    text-align: center;
    padding: 1em 0;
  }

  &:after {
    clear: both;
    display: block;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  // margin: 0 auto;
  margin: 2em auto 0 auto;
  // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  height: 100%;
  width: 95%;

  // @media (max-width: 780px) {
  @media (max-width: 960px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    width: 95%;
    margin: 0 auto;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: 750ms;
  text-align: center;
`;

const Recent = () => {
  return (
    <Wrapper id="what">
      <StyledColumn alignitems="center" textalign="center" width="75%">
        <SpanTitle>A Few of Our Recent Stories</SpanTitle>
        <Text>
          We are committed to masterfully crafting experiences that evoke an emotional connection and imprint your
          message into the hearts and minds of your audience.
        </Text>
      </StyledColumn>
      <Grid>
        <Div>
          <Video src="https://fast.wistia.com/embed/medias/1s0g2445aj/swatch" type="open" />
        </Div>
        <Div>
          <Video src="https://fast.wistia.com/embed/medias/v70c06uszd/swatch" type="open" />
        </Div>
        <Div>
          <Video src="https://fast.wistia.com/embed/medias/75qdcr5joj/swatch" type="open" />
        </Div>
        <Div>
          <Video src="https://fast.wistia.com/embed/medias/jsdmuoe293/swatch" type="open" />
        </Div>
        <Div>
          <Video src="https://fast.wistia.com/embed/medias/k3qm1g877n/swatch" type="open" />
        </Div>
        <Div>
          <Video src="https://fast.wistia.com/embed/medias/bvj3ukhj2g/swatch" type="open" />
        </Div>
      </Grid>
    </Wrapper>
  );
};

export default Recent;
