import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Column, Row, SpanTitle } from '../../../../theme/index';
import Video from '../../../shared/Video';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(#ffffff, rgb(242, 245, 247));
  padding: 0 0 3em 0;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  margin: 2em auto 0 auto;
  padding: 2em 0;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  height: 100%;
  width: 80%;
  @media (max-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    width: 95%;
    margin: 2em auto;
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

export default class Videos extends Component {
  render() {
    const { videos } = this.props;
    const first = videos.shift();
    const next = videos.splice(0, 5);

    if (first && next) {
      return (
        <Wrapper>
          <Column alignitems="center" margin="0 auto 2em auto" width="80%">
            <Video src={first} />
          </Column>
          <Row justifycontent="center">
            <SpanTitle>Example videos</SpanTitle>
          </Row>
          <Grid>
            <Div>
              <Video src={next[0]} />
            </Div>
            <Div>
              <Video src={next[1]} />
            </Div>
            <Div>
              <Video src={next[2]} />
            </Div>
            <Div>
              <Video src={next[3]} />
            </Div>
          </Grid>
        </Wrapper>
      );
    } else {
      return null;
    }
  }
}

Videos.propTypes = {
  videos: PropTypes.array,
};
