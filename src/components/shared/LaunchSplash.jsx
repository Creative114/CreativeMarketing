import React, { Component } from "react";
import styled from "styled-components";
import { Row, Column, Title, Button, Text } from "../../theme/index";
// import Reveal from "react-reveal/Reveal";
import Icon from "../../assets/icon.png";

const Wrapper = styled.div`
  height: 650px;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(#ffffff, rgb(242, 245, 247));
  display: flex;
  flex-direction: column;
  @media (max-width: 780px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledColumn = styled(Column)`
  width: 32%
  margin: 5em auto 0 auto;
  @media (max-width: 1200px) {
    width: 95%;
    margin: 1em auto 0 auto;
    text-align: center;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

const StyledVideoColumn = styled(Row)`
  width: 50%;
  margin-top: 12em;
  @media (max-width: 1200px) {
    width: 95%;
    margin: 0 auto;
  }
`;

const StyledRow = styled(Row)`
  @media (max-width: 1200px) {
    justify-content: center;
    flex-direction: column;
    padding: 2em 0;
  }
`;

const StyledButtonRow = styled(Row)`
  margin: 1em 0;
  @media (max-width: 1200px) {
    justify-content: center;
    margin: 2em 0;
  }
`;

const Image = styled.img`
  width: 50px;
  height: 70px;
  transition: 250ms;
  @media (max-width: 425px) {
    width: 40px;
    height: 56px;
  }
`;

export default class LaunchSplash extends Component {
  render() {
    const { toggleModal } = this.props;
    return (
      <Wrapper>
        <StyledRow>
          <StyledColumn>
            <Image src={Icon} alt="" />
            <Title header home margin=".25em 0 -.05em 0">
              Lorem ipsum dolor sit amet
            </Title>
            <Text logo>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem
              ipsum dolor sit amet consectetur adipiscing elit.
            </Text>
            <StyledButtonRow>
              <Button primary onClick={toggleModal}>
                Find your story
              </Button>
            </StyledButtonRow>
          </StyledColumn>

          <StyledVideoColumn>
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
          </StyledVideoColumn>
        </StyledRow>
      </Wrapper>
    );
  }
}
