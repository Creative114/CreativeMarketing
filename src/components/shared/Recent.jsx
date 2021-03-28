import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SpanTitle, StyledColumn, Text } from '../../theme/index';
// import Video from '../shared/Video';

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

const Recent = ({ toggleModal }) => {
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
          {/* <Video src="https://fast.wistia.com/embed/medias/1s0g2445aj/swatch" type="open" /> */}
          <img src="https://embed-ssl.wistia.com/deliveries/d94b9e480683a46132682493c0cd900c.png?" onClick={() => toggleModal('videos', 'https://fast.wistia.net/embed/iframe/kklt1ne01e')} alt="video" style={{height: '100%', width: '100%'}} />
        </Div>
        <Div>
          {/* <Video src="https://fast.wistia.com/embed/medias/v70c06uszd/swatch" type="open" /> */}
          <img src="https://embed-ssl.wistia.com/deliveries/0c21db38d6aaef5b326fd3780f26061c.png?" onClick={() => toggleModal('videos', 'https://fast.wistia.net/embed/iframe/v70c06uszd')} alt="video" style={{height: '100%', width: '100%'}} />
        </Div>
        <Div>
          {/* <Video src="https://fast.wistia.com/embed/medias/75qdcr5joj/swatch" type="open" /> */}
          <img src="https://embed-ssl.wistia.com/deliveries/7427a99ffe96759d9e20c2c6a87ededa.png?" onClick={() => toggleModal('videos', 'https://fast.wistia.net/embed/iframe/75qdcr5joj')} alt="video" style={{height: '100%', width: '100%'}} />
        </Div>
        <Div>
          {/* <Video src="https://fast.wistia.com/embed/medias/jsdmuoe293/swatch" type="open" /> */}
          <img src="https://embed-ssl.wistia.com/deliveries/47c29bd15142d013fd06d7caa50c128c.png?" onClick={() => toggleModal('videos', 'https://fast.wistia.net/embed/iframe/jsdmuoe293')} alt="video" style={{height: '100%', width: '100%'}} />
        </Div>
        <Div>
          {/* <Video src="https://fast.wistia.com/embed/medias/k3qm1g877n/swatch" type="open" /> */}
          <img src="https://embed-ssl.wistia.com/deliveries/09962eeae2602cebef50759d24a77b6d.png?" onClick={() => toggleModal('videos', 'https://fast.wistia.net/embed/iframe/k3qm1g877n')} alt="video" style={{height: '100%', width: '100%'}} />
        </Div>
        <Div>
          {/* <Video src="https://fast.wistia.com/embed/medias/bvj3ukhj2g/swatch" type="open" /> */}
          <img src="https://embed-ssl.wistia.com/deliveries/999f1a1996f3e5580dfae9dc683046bf.png?" onClick={() => toggleModal('videos', 'https://fast.wistia.net/embed/iframe/bvj3ukhj2g')} alt="video" style={{height: '100%', width: '100%'}} />
        </Div>
      </Grid>
    </Wrapper>
  );
};

Recent.propTypes = {
  toggleModal: PropTypes.func,
};

export default Recent;
