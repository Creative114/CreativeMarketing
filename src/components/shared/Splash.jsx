import React from "react";
import styled from "styled-components";
import { Row, Column, Title, Text } from "../../theme/index";
import Navigation from "./Navigation";
import Lightbulb from "./Lightbulb";

const Wrapper = styled.div`
  height: ${props => (props.home ? "948px" : "800px")};
  width: 100%;
  background: ${props => props.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledColumn = styled(Column)`
  align-items: center;
  text-align: center;
  width: 55%;
  margin: 0 auto;
`;

export default function Splash({ type, title }) {
  return (
    <Wrapper
      home={type === "home"}
      background={
        type === "home"
          ? "linear-gradient(to right, #e38b3d, #f3bf70)"
          : "linear-gradient(to right, #B9402D, #D97881)"
      }
    >
      <Navigation />
      {type === "home" && (
        <Row justifycontent="space-around" alignitems="center">
          <Column width="45%">
            <Title header home>
              Strategic. <br /> Problem-solving. <br /> Creatives. <br /> On a
              mission.
            </Title>
          </Column>
          <Lightbulb />
        </Row>
      )}
      {type !== "home" && (
        <StyledColumn>
          <Title header>{title}</Title>
          <Text header>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Text>
        </StyledColumn>
      )}
    </Wrapper>
  );
}
