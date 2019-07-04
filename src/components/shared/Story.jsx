import React, { Component } from "react";
import styled from "styled-components";
import { Column, Text, Row, Button, Title } from "../../theme/index";
import { Link } from "react-router-dom";
import Reveal from "react-reveal/Reveal";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgb(242, 245, 247);
  justify-content: center;
  padding: 3em 0;
  @media (min-width: 1750px) {
    min-height: 1000px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 0 auto;
    padding: 3em 0 1.5em 0;
    text-align: center;
  }
`;

const StyledTextColumn = styled(Column)`
  width: 40%;
  margin: 0 2em;
  @media (max-width: 1000px) {
    width: 95%;
    align-items: center;
    margin: 1em auto;
  }
`;

const StyledRow = styled(Row)`
  padding: 2.5em 0;
  align-items: center;
  justify-content: center;
  width: 90%;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 95%;
    margin: 0 auto;
  }
`;

const VideoWrapper = styled.div`
  width: 50%;
  margin: 0 2em;
  @media (max-width: 1000px) {
    width: 85%;
    margin: 0;
  }
`;

class StoryVideo extends Component {
  render() {
    return (
      <VideoWrapper>
        <div
          className="wistia_embed wistia_async_c6tvpstwki videoFoam=true"
          style={{ height: "100%", position: "relative", width: "100%" }}
        >
          <div
            className="wistia_swatch"
            style={{
              height: "100%",
              left: 0,
              opacity: 0,
              overflow: "hidden",
              position: "absolute",
              top: 0,
              transition: "opacity 250ms",
              width: "100%"
            }}
          >
            <img
              src="https://fast.wistia.com/embed/medias/c6tvpstwki/swatch"
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              alt=""
            />
          </div>
        </div>
      </VideoWrapper>
    );
  }
}

export default class Story extends Component {
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
    const { toggleModal } = this.props;
    return (
      <Wrapper>
        <Reveal effect="fadeIn">
          <Title>Our Story.</Title>
          <StyledRow>
            <StoryVideo />
            <StyledTextColumn>
              <Text secondary>
                The human connection. It adds value to our lives, gives us a
                sense of belonging, and makes us feel a remarkable range of
                emotions. In a world where people feel more isolated than ever
                and attention spans are short, we set out to successfully help
                businesses and individuals engage in an authentic, transparent,
                and effective way—through the power of video storytelling. It’s
                our mission to create meaningful connections between you and
                your audience by developing and crafting emotionally engaging
                stories that directly reach the heart and make a long-lasting
                impact. #shareyourimpact.
              </Text>
            </StyledTextColumn>
          </StyledRow>
          <Button primary onClick={() => toggleModal("story")}>
            Start your story
          </Button>
        </Reveal>
      </Wrapper>
    );
  }
}
