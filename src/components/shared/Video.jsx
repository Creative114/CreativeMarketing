import React, { Component } from "react";
import styled from "styled-components";
import { Column, Text, Subtitle, Button } from "../../theme/index";
import behindTheBrand from "../../assets/behindTheBrand.jpg";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  padding: 3em 0;
  width: 100%;
  display: flex;
  align-items: center;
  background: #f2f5f7;
  justify-content: space-evenly;
  @media (min-width: 1750px) {
    min-height: 1000px;
  }
  @media (max-width: 780px) {
    flex-direction: column;
    height: 100%;
    min-height: 100%;
    width: 95%;
    margin: 0 auto;
    padding: 3em 0 1.5em 0;
    text-align: center;
  }
`;

const StyledTextColumn = styled(Column)`
  width: 35%;
  @media (max-width: 780px) {
    width: 95%;
    align-items: center;
  }
`;

const VideoTag = styled.video`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  max-width: 880px;
  @media (max-width: 780px) {
    width: 325px;
  }
`;

const StyledColumn = styled(Column)`
  max-width: 50%;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  padding: 2em 0;
  @media (max-width: 780px) {
    width: 100%;
    padding: 1em 0;
    align-items: center;
  }
`;

export default class Video extends Component {
  state = {
    playing: false
  };
  handlePlay = id => {
    let playing = this.state.playing;
    let el = document.getElementById(`${id}`);
    this.setState({ playing: !this.state.playing }, () => {
      if (playing === true) {
        el.pause();
      } else {
        el.play();
      }
    });
  };

  render() {
    return (
      <Wrapper>
        <StyledColumn>
          <VideoTag
            controls
            id="video1"
            poster={behindTheBrand}
            onClick={() => this.handlePlay("video1")}
          >
            <source
              src="https://player.vimeo.com/external/312446875.hd.mp4?s=2dd633164982e455133d97e7ab7584e5d19556ec&profile_id=169"
              type="video/mp4"
            />
          </VideoTag>
        </StyledColumn>
        <StyledTextColumn>
          <Subtitle primary>The heart behind the brand</Subtitle>
          <Text secondary>
            If you are going to trust us to tell your story, you might as well
            know ours and the heart behind the brand. It is in our DNA to use
            our talents and our passion of storytelling to create amazing
            content that will add values to your life and your business. We
            craft stories through building amazing websites, shoot videos and
            photos, and design beautiful assets to elevate your brand and
            vision.
          </Text>
          <Button primary>
            <Link to="/work">Learn more</Link>
          </Button>
        </StyledTextColumn>
      </Wrapper>
    );
  }
}
