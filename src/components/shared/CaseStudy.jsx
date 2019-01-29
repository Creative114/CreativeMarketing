import React from "react";
import styled from "styled-components";
import { Column, Text, Button, Subtitle } from "../../theme/index";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  @media (max-width: 780px) {
    flex-direction: ${props => (props.primary ? "column-reverse" : "column")};
    align-items: center;
    justify-content: center;
  }
`;

const StyledColumn = styled(Column)`
  width: 50vw;
  justify-content: center;
  align-items: center;
  background-color: inherit;

  @media (max-width: 780px) {
    width: 100%;
    padding: 4em 0;
    align-items: center;
  }
`;

const StyledTextColumn = styled(Column)`
  margin: 0.5em 0;
  width: 70%;
  @media (max-width: 780px) {
    width: 90%;
    text-align: center;
  }
`;

const Div = styled.div`
  background: ${props => props.background};
  background-size: cover;
  width: 50vw;
  min-height: 350px;
  @media (max-width: 780px) {
    width: 100%;
  }
`;

export default function Benefit({ title, description, img, type, navigate }) {
  let location = title.replace(/\s+/g, "");
  return (
    <Wrapper primary={type === "right"}>
      {type === "right" && (
        <React.Fragment>
          <StyledColumn>
            <StyledTextColumn>
              <Subtitle>{title}</Subtitle>
              <Text>{description}</Text>
              <Button
                primary
                onClick={() =>
                  navigate.push(`/casestudies/name:${location.toLowerCase()}`)
                }
              >
                Learn more
              </Button>
            </StyledTextColumn>
          </StyledColumn>
          <Div background={`url('${img}')`} />
        </React.Fragment>
      )}
      {type === "left" && (
        <React.Fragment>
          <Div background={`url('${img}')`} />
          <StyledColumn>
            <StyledTextColumn>
              <Subtitle>{title}</Subtitle>
              <Text>{description}</Text>
              <Button
                primary
                onClick={() =>
                  navigate.push(`/casestudies/name:${location.toLowerCase()}`)
                }
              >
                Learn more
              </Button>
            </StyledTextColumn>
          </StyledColumn>
        </React.Fragment>
      )}
    </Wrapper>
  );
}
