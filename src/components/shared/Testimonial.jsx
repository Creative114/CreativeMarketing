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
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

const StyledColumn = styled(Column)`
  width: 50vw;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  padding: 2em 0;
  @media (max-width: 800px) {
    width: 100%;
    padding: 4em 0;
    align-items: center;
  }
`;

const StyledTextColumn = styled(Column)`
  margin: 1em 0;
  width: 70%;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

const Iframe = styled.iframe`
  position: relative;
  right: 0;
  width: 704px;
  height: 396px;
  background-color: #f6f6f6;
  margin-left: 4em;
  @media (max-width: 700px) {
    margin-right: 0;
    width: 100%;
  }
`;

export default function Testimonial({
  title,
  description,
  img,
  bullets,
  type
}) {
  return (
    <Wrapper>
      <React.Fragment>
        <StyledColumn>
          <StyledTextColumn>
            <Subtitle>{title}</Subtitle>
            <Text>{description}</Text>
            <Column margin="0 0 1em 0">
              {bullets &&
                bullets.map((key, index) => {
                  return (
                    <Text bullets key={index}>
                      {key}
                    </Text>
                  );
                })}
            </Column>
          </StyledTextColumn>
        </StyledColumn>
        <StyledColumn>
          <Iframe
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullscreen
          />
        </StyledColumn>
      </React.Fragment>
    </Wrapper>
  );
}
