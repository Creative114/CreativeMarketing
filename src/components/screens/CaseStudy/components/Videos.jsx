import React, { Component } from "react";
import styled from "styled-components";
import { Column } from "../../../../theme/index";

const Wrapper = styled.div`
  width: 100%;
`;

const VideoTag = styled.video`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  max-width: 880px;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  margin: 3em auto;
  margin-top: 2em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 170px;
  height: 100%;
  width: 75%;
  @media (max-width: 780px) {
    width: 95%;
    margin: 0;
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
          {next.map((key, index) => {
            return (
              <VideoTag key={index} controls id={key}>
                <source src={key} type="video/mp4" />
              </VideoTag>
            );
          })}
        </Grid>
      </Wrapper>
    );
  }
}
