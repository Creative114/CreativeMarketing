import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
height: 100%;
width: 100%:
position: relative;
border-radius: 4px;
`;

const Div = styled.div`
  height: 100%;
  left: 0;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: opacity 250ms;
  width: 50%;
  border-radius: 4px;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 4px;
`;

export default function Video({ src, isAuthed, toggleModal, type }) {
  console.log(isAuthed, type);

  const swatch = src.split("/")[5];
  if (type === "launch" && !isAuthed) {
    return (
      <div
        onClick={() => toggleModal("launch")}
        style={{ width: "100%", height: "100%", zIndex: 100000000 }}
      >
        <Wrapper
          style={{ pointerEvents: "none" }}
          className={`wistia_embed wistia_async_${swatch} videoFoam=true`}
        >
          <Div
            onClick={() => toggleModal("launch")}
            style={{ pointerEvents: "none" }}
            className="wistia_swatch"
          >
            <Img
              onClick={() => toggleModal("launch")}
              style={{ pointerEvents: "none" }}
              src={src}
              alt=""
            />
          </Div>
        </Wrapper>
      </div>
    );
  } else {
    return (
      <Wrapper className={`wistia_embed wistia_async_${swatch} videoFoam=true`}>
        <Div className="wistia_swatch">
          <Img src={src} alt="" />
        </Div>
      </Wrapper>
    );
  }
}
