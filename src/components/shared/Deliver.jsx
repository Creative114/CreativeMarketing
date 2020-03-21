import React, { Component } from 'react';
import styled from 'styled-components';
import { Column, SpanTitle } from '../../theme/index';
import Video from '../shared/Video';
import Logos from '../shared/Logos';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
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
  margin: 2em 0 0 0;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  height: 100%;
  width: 95%;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    width: 95%;
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
  @media (max-width: 1200px) {
    margin-top: 1em;
    &:first-child {
      margin-top: 0px;
    }
  }
`;

export default class Deliver extends Component {
  render() {
    return (
      <Wrapper id="what">
        <Column alignitems="center" textalign="center" width="75%">
          <SpanTitle>Stories that generate results</SpanTitle>
        </Column>
        <Grid>
          <Div>
            <Video src="https://fast.wistia.com/embed/medias/3f3146tcv5/swatch" />
          </Div>
          <Div>
            <Video src="https://fast.wistia.com/embed/medias/p20j70i0qu/swatch" />
          </Div>
          <Div>
            <Video src="https://fast.wistia.com/embed/medias/1s0g2445aj/swatch" />
          </Div>
        </Grid>
        <Logos />
      </Wrapper>
    );
  }
}
