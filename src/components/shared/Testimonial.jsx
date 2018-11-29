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
  width: 100%;
  height: 100%;
`;

const Thumbnail = styled.div`
  background: ${props => props.img};
  background-size: contain;
  position: relative;
  right: 0;
  width: 704px;
  height: 396.5px;
  margin-left: 4em;
  transition: 250ms;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
          <Thumbnail img={`url('${img}')`}>
            <Iframe
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullscreen
            />
          </Thumbnail>
        </StyledColumn>
      </React.Fragment>
    </Wrapper>
  );
}
