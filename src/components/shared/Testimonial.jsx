import React, { Component } from "react";
import styled from "styled-components";
import { Column, Text, Subtitle } from "../../theme/index";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 550px;
  width: 95%;
  align-items: center;
  margin: 0 auto;
  transition: 750ms;
  @media (max-width: 780px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const StyledColumn = styled(Column)`
  width: 45vw;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  transition: 750ms;
  @media (max-width: 780px) {
    width: 100%;
    padding: 1em 0;
    align-items: center;
  }
`;

const StyledTextColumn = styled(Column)`
  margin: 1em 0;
  width: 70%;
  @media (max-width: 780px) {
    width: 95%;
    text-align: center;
    margin: 0;
  }
`;

export default class Testimonial extends Component {
  render() {
    const { title, description, src, type } = this.props;
    const swatch = src && src.split("/")[5];
    console.log(swatch);
    return (
      <Wrapper>
        <React.Fragment>
          <StyledColumn>
            <StyledTextColumn>
              <Subtitle>{title}</Subtitle>
              <Text>{description}</Text>
            </StyledTextColumn>
          </StyledColumn>
          <StyledColumn>
            {type === "video" && (
              <div
                className={`wistia_embed wistia_async_${swatch} videoFoam=true`}
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
                    src={src}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain"
                    }}
                    alt=""
                  />
                </div>
              </div>
            )}
            {type === "image" && (
              <div
                style={{ height: "100%", position: "relative", width: "99%" }}
              >
                <img
                  src={src}
                  style={{
                    width: "100%",
                    objectFit: "contain"
                  }}
                  alt=""
                />
              </div>
            )}
          </StyledColumn>
        </React.Fragment>
      </Wrapper>
    );
  }
}
