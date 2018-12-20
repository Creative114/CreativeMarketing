import React from "react";
import styled from "styled-components";
import { Column, Text, Subtitle } from "../../theme/index";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 600px;
  width: 90%;
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
  width: 50vw;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  padding: 2em 0;
  transition: 750ms;
  @media (max-width: 780px) {
    width: 100%;
    padding: 1em 0;
    align-items: center;
  }
`;

const StyledTextColumn = styled(Column)`
  margin: 1em 0;
  width: 90%;
  @media (max-width: 780px) {
    width: 95%;
    text-align: center;
    margin: 0;
  }
`;

const VideoTag = styled.video`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 750ms;
  max-width: 880px;
`;

export default function Testimonial({
  title,
  description,
  src,
  img,
  handlePlay
}) {
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
          <VideoTag id="video" onClick={() => handlePlay("video")} poster={img}>
            <source src={src} type="video/mp4" />
          </VideoTag>
        </StyledColumn>
      </React.Fragment>
    </Wrapper>
  );
}
