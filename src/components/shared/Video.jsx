import React, { Component } from "react";
import styled from "styled-components";
import { Column, Text, Subtitle } from "../../theme/index";
import behindTheBrand from "../../assets/behindTheBrand.jpg";

const Wrapper = styled.div`
  min-height: 620px;
  height: 100%;
  padding: 2em 0;
  width: 100%;
  display: flex;
  align-items: center;
  background: #f2f5f7;
  justify-content: space-evenly;
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
`;

const StyledColumn = styled(Column)`
  width: 50vw;

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
            id="video1"
            poster={behindTheBrand}
            onClick={() => this.handlePlay("video1")}
          >
            <source
              src="https://player.vimeo.com/external/305414450.hd.mp4?s=ebca55954b19033bd1677a57ba3da4fff42b34fd&profile_id=169"
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
          {/* <Button primary>Learn more</Button> */}
        </StyledTextColumn>
      </Wrapper>
    );
  }
}
