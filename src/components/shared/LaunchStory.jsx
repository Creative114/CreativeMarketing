import React, { Component } from "react";
import styled from "styled-components";
import { Row, Text } from "../../theme/index";
import Reveal from "react-reveal/Reveal";
import SubscribeIcon from '../../assets/subscribe.svg';
import InspiredIcon from '../../assets/inspired.svg';
import ResultsIcon from '../../assets/results.svg';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(rgb(242, 245, 247), #ffffff);
  padding: 2em 0 4em 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 1750px) {
    // min-height: 1000px;
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
  height: auto;
  margin: 0 auto;
  margin-top: 2em;
  @media (max-width: 780px) {
    width: 95%;
    height: 100%;
  }
`;

const TextRow = styled(Row)`
  margin: 0 auto;
  margin-bottom: 2em;
  justify-content: space-between;
  width: 75%;
  @media (max-width: 780px) {
    width: 95%;
    flex-direction: column;
  }
`;

const StyledButton = styled.button`
  width: 342px;
  height: 79px;
  outline: none;
  background: #d21f04;
  border: 1px solid transparent;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 19px;
  font-weight: 600;
  border-radius: 4px;
  transition: 750ms;
  margin: 0.5em 0;
  text-transform: uppercase;
  box-shadow: 0 5px 30px rgba(148, 151, 155, 0.6);
  &:hover {
    background-color: #f32405;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const StyledRow = styled(Row)`
  margin: 0 auto;
  width: 35%;
  text-align: center;
  justify-content: center;
  @media (max-width: 780px) {
    width: 95%;
  }
`;

const StyledIconRow = styled(Row)`
  align-items: center;
  @media (max-width: 780px) {
    width: 240px;
    margin: 20px auto;
    flex-direction: column;
  }
`;

const Icon = styled.img`
width: 120px;
@media (max-width: 1600px) {
  width: 100px;
}
@media (max-width: 768px) {
  width: 80px;
}
`;

export default class LaunchStory extends Component {
  render() {
    const { toggleModal, isAuthed } = this.props;
    return (
      <Wrapper>
        <Reveal effect="fadeIn">
          <React.Fragment>
            <TextRow>
              <StyledIconRow alignitems="center">
                <Icon src={SubscribeIcon} />
                <Text red margin="0">
                  Simple Process
                </Text>
              </StyledIconRow>

              <StyledIconRow alignitems="center">
                <Icon src={InspiredIcon} />
                <Text red margin="0">
                  Engaging Stories
                </Text>
              </StyledIconRow>

              <StyledIconRow alignitems="center">
                <Icon src={ResultsIcon} />
                <Text red margin="0">
                  Real Results
                </Text>
              </StyledIconRow>
            </TextRow>

            <StyledRow>
              <Text>
                Watch each video and discover 4 elements that will transform the
                way you engage with your ideal audience
              </Text>
            </StyledRow>
            {!isAuthed && (
              <div>
                <StyledVideoRow onClick={() => toggleModal("launch")}>
                  <div
                    className="wistia_embed wistia_async_ite2h6tlyf videoFoam=true"
                    style={{
                      pointerEvents: "none",
                      height: "100%",
                      position: "relative",
                      width: "100%"
                    }}
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
                        width: "100%",
                        pointerEvents: "none"
                      }}
                    >
                      <img
                        src="https://fast.wistia.com/embed/medias/ite2h6tlyf/swatch"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "contain",
                          pointerEvents: "none"
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                </StyledVideoRow>
              </div>
            )}
            {isAuthed && (
              <div>
                <StyledVideoRow>
                  <div
                    className="wistia_embed wistia_async_ite2h6tlyf videoFoam=true"
                    style={{
                      height: "100%",
                      position: "relative",
                      width: "100%"
                    }}
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
                        src="https://fast.wistia.com/embed/medias/ite2h6tlyf/swatch"
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
              </div>
            )}

            <Row justifycontent="center" margin="4em 0 0">
              <StyledButton
                onClick={
                  isAuthed
                    ? () => toggleModal("schedule")
                    : () => toggleModal("launch")
                }
              >
                {isAuthed ? "Schedule a call now" : "Get the videos"}
              </StyledButton>
            </Row>
          </React.Fragment>
        </Reveal>
      </Wrapper>
    );
  }
}
