import React, { Component } from "react";
import styled from "styled-components";
import { Column } from "../../theme/index";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 4em auto 2em auto;
  transition: 750ms;
  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const StyledColumn = styled(Column)`
  width: 75%;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  transition: 750ms;
  @media (max-width: 920px) {
    width: 75%;
    padding: 1em 0;
    align-items: center;
  }
  @media (max-width: 780px) {
    width: 95%;
    height: 100%;
  }
`;

export default class Testimonial extends Component {
  render() {
    const { src, type, src2 } = this.props;
    const swatch = src && src.split("/")[5];
    const swatch2 = src2 && src2.split("/")[5];

    return (
      <Wrapper>
        <React.Fragment>
          <StyledColumn>
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
          </StyledColumn>
          {/* <StyledColumn>
            {type === "video" && (
              <div
                className={`wistia_embed wistia_async_${swatch2} videoFoam=true`}
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
                    src={src2}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain"
                    }}
                    alt=""
                  />
                </div>
              </div>
            )} */}
            {/* {type === "image" && (
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
            )} */}
          {/* </StyledColumn> */}
        </React.Fragment>
      </Wrapper>
    );
  }
}
