import React from "react";
import styled from "styled-components";
import { Column, Text, Subtitle } from "../../theme/index";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 500px;
  width: 90%;
  align-items: center;
  margin: 0 auto;
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

// const Thumbnail = styled.div`
//   background: ${props => props.img};
//   background-size: contain;
//   background
//   position: relative;
//   right: 0;
//   width: 704px;
//   height: 396.5px;
//   margin-left: 4em;
//   transition: 500ms;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   @media (max-width: 700px) {
//     margin-right: 0;
//     width: 95%;
//   }
// `;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 700px) {
    margin-right: 0;
  }
`;

export default function Testimonial({ title, description, img }) {
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
          {/* <Thumbnail img={`url('${img}')`} /> */}
          <Thumbnail src={img} />
        </StyledColumn>
      </React.Fragment>
    </Wrapper>
  );
}
