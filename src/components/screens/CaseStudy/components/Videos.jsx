import React, { Component } from "react";
import styled from "styled-components";
import { Column, Row, Title } from "../../../../theme/index";
import Video from "../../../shared/Video";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(#ffffff, rgb(242, 245, 247));
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  margin: 2em auto 0 auto;
  padding: 2em 0;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 350px;
  height: 100%;
  width: 80%;
  @media (max-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 215px;
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
          <Column alignitems="center" margin="0 0 2em 0">
            <Video src={first} />
          </Column>
          <Row justifycontent="center">
            <Title>Example videos</Title>
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
