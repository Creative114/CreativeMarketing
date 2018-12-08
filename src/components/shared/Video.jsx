import React from "react";
import styled from "styled-components";
import { Column, Text, Subtitle, Button } from "../../theme/index";
import testimonial3 from "../../assets/testimonial3.jpg";

const Wrapper = styled.div`
  height: 620px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 780px) {
    flex-direction: column;
    height: 100%;
    width: 95%;
    margin: 0 auto;
    padding: 3em 0 1.5em 0;
    text-align: center;
  }
`;

// const Iframe = styled.iframe`
//   width: 100%;
//   height: 100%;
// `;

// const Thumbnail = styled.div`
//   background: ${props => props.img};
//   background-size: contain;
//   position: relative;
//   left: 0;
//   width: 703px;
//   height: 397px;
//   margin-right: 4em;
//   transition: 250ms;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   @media (max-width: 700px) {
//     margin-right: 0;
//     width: 100%;
//   }
// `;

const StyledTextColumn = styled(Column)`
  width: 35%;
  @media (max-width: 700px) {
    width: 95%;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 700px) {
    margin-right: 0;
  }
`;

const StyledColumn = styled(Column)`
  width: 50vw;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  padding: 2em 0;
  @media (max-width: 780px) {
    width: 100%;
    padding: 1em 0;
    align-items: center;
  }
`;

export default function Video() {
  return (
    <Wrapper>
      <StyledColumn>
        <Thumbnail src={testimonial3} />
      </StyledColumn>
      <StyledTextColumn>
        <Subtitle primary>The heart behind the brand</Subtitle>
        <Text secondary>
          If you are going to trust us to tell your story, you might as well
          know ours and the heart behind the brand. It is in our DNA to use our
          talents and our passion of storytelling to create amazing content that
          will add values to your life and your business. We craft stories
          through building amazing websites, shoot videos and photos and design
          beautiful.
        </Text>
        <Button primary>Learn more</Button>
      </StyledTextColumn>
    </Wrapper>
  );
}
