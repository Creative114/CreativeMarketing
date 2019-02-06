import React, { Component } from "react";
import styled from "styled-components";
import { Column } from "../../../../theme/index";

const Wrapper = styled.div`
  width: 100%;
`;

const VideoTag = styled.video`
  width: 100%;
  height: 100%;
  cursor: pointer;
  max-width: 880px;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  margin: 3em auto;
  margin-top: 2em;
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

export default class Videos extends Component {
  render() {
    const { videos } = this.props;
    const first = videos.shift();
    const next = videos.splice(0, 5);

    return (
      <Wrapper>
        <Column alignitems="center" margin="0 0 2em 0">
          <VideoTag controls id={first}>
            <source src={first} type="video/mp4" />
          </VideoTag>
        </Column>
        <Grid>
          <VideoTag controls id={next[0]}>
            <source src={next[0]} type="video/mp4" />
          </VideoTag>
          <VideoTag controls id={next[1]}>
            <source src={next[1]} type="video/mp4" />
          </VideoTag>
          <VideoTag controls id={next[2]}>
            <source src={next[2]} type="video/mp4" />
          </VideoTag>
          <VideoTag controls id={next[3]}>
            <source src={next[3]} type="video/mp4" />
          </VideoTag>
          {/* <VideoTag controls id={next[4]}>
            <source src={next[4]} type="video/mp4" />
          </VideoTag> */}
        </Grid>
      </Wrapper>
    );
  }
}
