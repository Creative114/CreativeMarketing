import React from "react";
import styled from "styled-components";
import { Column, Text, Subtitle, Button } from "../../theme/index";
import testimonial3 from "../../assets/testimonial3.jpg";

const Wrapper = styled.div`
  height: 620px;
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
    height: 100%;
  }
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

const Thumbnail = styled.div`
  background: ${props => props.img};
  background-size: contain;
  position: relative;
  left: 0;
  width: 703px;
  height: 397px;
  margin-right: 4em;
  transition: 250ms;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 700px) {
    margin-right: 0;
    width: 100%;
  }
`;

const StyledColumn = styled(Column)`
  width: 35%;
  @media (max-width: 700px) {
    width: 95%;
  }
`;

export default function Video() {
  return (
    <Wrapper>
      <Thumbnail img={`url('${testimonial3}')`}>
        <Iframe
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullscreen
        />
      </Thumbnail>
      <StyledColumn>
        <Subtitle primary>View our 2017/2018 reel</Subtitle>
        <Text secondary>
          Personalized, project-based learning focusing on solutioning real word
          challenges while being taught by seasoned professionals. Students and
          their teachers learn what being a part of the technology world all is
          about.
        </Text>
        <Button primary>Learn more</Button>
      </StyledColumn>
    </Wrapper>
  );
}
