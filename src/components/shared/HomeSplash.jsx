import React, { Component } from "react";
import styled from "styled-components";
import { Row, Column, Title, Subtitle, Button } from "../../theme/index";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: rgb(242, 245, 247);
  margin: 0 auto;
  background: ${props => props.background};
  background-size: cover;
  display: flex;
  flex-direction: column;
  @media (max-width: 780px) {
    justify-content: center;
    height: 100%;
  }
`;

const StyledHomeColumn = styled(Column)`
  align-items: center;
  text-align: center;
  height: auto;
  margin: auto;
  margin-top: 2em;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100000;
  position: absolute;
  justify-content: center;
  @media (min-width: 1300px) {
    width: 65%;
  }
  @media (max-width: 980px) {
    width: 95%;

    text-align: center;
  }
  @media (max-width: 500px) {
    margin-top: 2em;
  }
`;

const StyledRow = styled(Row)`
  justify-content: center;
  text-align: center;
  align-items: center;
  @media (max-width: 780px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
  }
`;

const Overlay = styled.div`
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 1000;
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  clip-path: ellipse(120% 100% at 50% 0%);
`;

const StyledButton = styled(Button)`
  @media (max-width: 780px) {
    margin-top: 0;
  }
`;

export default class HomeSplash extends Component {
  render() {
    const { toggleModal } = this.props;
    return (
      <Wrapper>
        <Navigation type="home" toggleModal={toggleModal} />

        <div
          style={{
            height: "calc(100vh - 30px)",
            width: "100%",
            alignContent: "center",
            justifyContent: "center",
            position: "relative",
            clipPath: "ellipse(120% 100% at 50% 0%)",
            maxHeight: "calc(100vw * 100 / 180)"
          }}
        >
          <div
            className="wistia_embed wistia_async_g2nuwu529g videoFoam=true"
            style={{ height: "100%", width: "100%", clipPath: "ellipse(120% 100% at 50% 0%)" }}
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
                src="https://fast.wistia.com/embed/medias/g2nuwu529g/swatch"
                style={{
                  height: "100%",
                  objectFit: "cover"
                }}
                alt=""
              />
            </div>
          </div>
          <Overlay />
          <StyledRow>
            <StyledHomeColumn>
              <Title header home>
                Your story told like never before
              </Title>
              <Subtitle home>                
                Showcase the emotional impact of the good that you do
              </Subtitle>
              <Row margin="2em 0">
                <Link to="/launch">
                  <StyledButton primary smallText>
                    Free Story Formula
                  </StyledButton>
                </Link>
              </Row>
            </StyledHomeColumn>
          </StyledRow>
        </div>
      </Wrapper>
    );
  }
}
