import React, { Component } from "react";
import styled from "styled-components";
import { Column, Text, Subtitle, Button } from "../../theme/index";
import testimonial3 from "../../assets/testimonial3.jpg";
import Lightbox from "lightbox-react";

const Wrapper = styled.div`
  height: 620px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 780px) {
    flex-direction: column;
    height: 100%;
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
  render() {
    const { isOpen, handleLightbox } = this.props;
    return (
      <Wrapper>
        <StyledColumn>
          <VideoTag poster={testimonial3} controls>
            <source
              src="https://player.vimeo.com/external/260181613.hd.mp4?s=c2602f22c1a1b1724c517c6ef2a70b879f2310a2&profile_id=175"
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
            photos and design beautiful.
          </Text>
          <Button primary>Learn more</Button>
        </StyledTextColumn>
      </Wrapper>
    );
  }
}
