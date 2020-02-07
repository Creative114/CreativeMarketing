import React, { Component } from "react";
import styled from "styled-components";
import { Row, Text } from "../../theme/index";
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
  }
`;

const NumberedCircle = styled.div`
  width: 45px;
  height: 45px;
  background: #d21f04;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 100%;
  margin-right: 0.5em;
  font-size: 22px;
  font-weight: 600;
  font-family: "Ubuntu", sans-serif;
  @media (max-width: 780px) {
    width: 25px;
    height: 25px;
    font-size: 16px;
    margin-right: 0;
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
    flex-direction: column;
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
              <StyledIconRow>
                <NumberedCircle>1</NumberedCircle>
                <Text red margin="0">
                  Subscribe
                </Text>
              </StyledIconRow>

              <StyledIconRow>
                <NumberedCircle>2</NumberedCircle>
                <Text red margin="0">
                  Get inspired
                </Text>
              </StyledIconRow>

              <StyledIconRow>
                <NumberedCircle>3</NumberedCircle>
                <Text red margin="0">
                  Get results
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
