import React, { Component } from "react";
import styled from "styled-components";
import Video from "../shared/Video";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto 2em auto;
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

export default class LaunchVideos extends Component {
  render() {
    const { isAuthed, toggleModal } = this.props;
    return (
      <Wrapper id="what">
        <Grid>
          <Div>
            <Video
              isAuthed={isAuthed}
              toggleModal={toggleModal}
              type="launch"
              src="https://fast.wistia.com/embed/medias/xv5qxmxszs/swatch"
            />
          </Div>
          <Div>
            <Video
              isAuthed={isAuthed}
              toggleModal={toggleModal}
              type="launch"
              src="https://fast.wistia.com/embed/medias/s0kg7ojjxg/swatch"
            />
          </Div>
          <Div>
            <Video
              isAuthed={isAuthed}
              toggleModal={toggleModal}
              type="launch"
              src="https://fast.wistia.com/embed/medias/cp1ev8o1xq/swatch"
            />
          </Div>
        </Grid>
      </Wrapper>
    );
  }
}
