import React, { Component } from "react";
import styled from "styled-components";
import { Column, Text, Row, Button, Title } from "../../theme/index";
import { Link } from "react-router-dom";

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
  width: 45%;
  @media (max-width: 1000px) {
    width: 95%;
    align-items: center;
  }
`;

const StyledRow = styled(Row)`
  padding: 2.5em 0;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  @media (max-width: 1000px) {
  }
`;

const VideoWrapper = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 85%;
  }
`;

class YourVideo extends React.Component {
  componentWillMount() {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    script1.src = "https://fast.wistia.com/embed/medias/videolink.jsonp";
    script1.async = true;

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
  }

  render() {
    return (
      <VideoWrapper>
        <div
          class="wistia_embed wistia_async_c6tvpstwki videoFoam=true"
          style={{ height: "100%", position: "relative", width: "100%" }}
        >
          <div
            class="wistia_swatch"
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
              onload="this.parentNode.style.opacity=1;"
            />
          </div>
        </div>
      </VideoWrapper>
    );
  }
}

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
        <Title>Our Story.</Title>
        <StyledRow>
          <YourVideo />
          <StyledTextColumn>
            <Text secondary>
              We are on a mission to tell stories that captivate audiences by
              showcasing the good that you do. That’s our passion. That’s what
              give us goosebumps. We believe video stories are the best way to
              inspire and engage those you serve. That’s why we decided to
              create and share our own story. We wanted to inspire and show you
              that no matter where you are from, no matter your vision and
              passion, you can make and #shareyourimpact.
            </Text>
          </StyledTextColumn>
        </StyledRow>
        <Button primary>
          <Link to="/work">Learn more</Link>
        </Button>
      </Wrapper>
    );
  }
}
