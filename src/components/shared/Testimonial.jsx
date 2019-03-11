import React from "react";
import styled from "styled-components";
import { Column, Text, Subtitle } from "../../theme/index";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 550px;
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
  width: 90%;
  @media (max-width: 780px) {
    width: 95%;
    text-align: center;
    margin: 0;
  }
`;

export default function Testimonial({ title, description, src }) {
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
          <iframe
            title="TBSW"
            src={src}
            width="640"
            height="360"
            style={{
              border: 0,
              maxWidth: "97%",
              position: "absolute",
              left: 0,
              right: 0,
              margin: "auto",
              top: "50%",
              transform: "translateY(-50%)"
            }}
          />
        </StyledColumn>
      </React.Fragment>
    </Wrapper>
  );
}
