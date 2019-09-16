import React, { Component } from "react";
import styled from "styled-components";
import { Button, Row, Text } from "../../theme/index";
import Reveal from "react-reveal/Reveal";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(rgb(242, 245, 247), #ffffff);
  padding: 4em 0;
  display: flex;
  flex-direction: column;

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

const StyledVideoRow = styled(Row)`
  width: 75%;
  height: 478px;
  margin: 0 auto;
  margin-top: 2em;
  @media (max-width: 780px) {
    width: 100%;
    height: 100%;
  }
`;

const TextRow = styled(Row)`
  margin: 0 auto;
  justify-content: space-between;
  width: 75%;
`;

export default class Story extends Component {
  render() {
    const { toggleModal } = this.props;
    return (
      <Wrapper>
        <Reveal effect="fadeIn">
          <TextRow>
            <Text red>Simple process</Text>
            <Text red>Engaging Stories</Text>
            <Text red>Real results</Text>
          </TextRow>
          <StyledVideoRow>
            <div
              className="wistia_embed wistia_async_n5ltbaiebq videoFoam=true"
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
                  src="https://fast.wistia.com/embed/medias/n5ltbaiebq/swatch"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain"
                  }}
                  alt=""
                />
              </div>
            </div>
          </StyledVideoRow>
          <div style={{ margin: "0 auto", marginTop: "2em" }}>
            <Button primary onClick={() => toggleModal("story")}>
              Schedule a call now
            </Button>
          </div>
        </Reveal>
      </Wrapper>
    );
  }
}
