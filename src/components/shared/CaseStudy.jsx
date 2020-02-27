import React from "react";
import styled from "styled-components";
import { Column, Text, Button, SpanSubtitle } from "../../theme/index";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  @media (max-width: 980px) {
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

  @media (max-width: 980px) {
    width: 100%;
    padding: 4em 0;
    align-items: center;
  }
`;

const StyledTextColumn = styled(Column)`
  margin: 0.5em 0;
  width: 70%;
  @media (max-width: 980px) {
    width: 90%;
    text-align: center;
    align-items: center;
  }
`;

const Div = styled.div`
  width: 50vw;
  height: 600px
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 980px) {
    width: 100%;
    height: auto;
  }
`;

const Image = styled.img`
  width: 400px;
  @media (max-width: 500px) {
    width: 325px;
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
              <SpanSubtitle>{title}</SpanSubtitle>
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
          <Div>
            <Image src={img} />
          </Div>
        </React.Fragment>
      )}
      {type === "left" && (
        <React.Fragment>
          <Div>
            <Image src={img} />
          </Div>
          <StyledColumn>
            <StyledTextColumn>
              <SpanSubtitle>{title}</SpanSubtitle>
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
