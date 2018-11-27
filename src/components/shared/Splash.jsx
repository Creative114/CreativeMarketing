import React from "react";
import styled from "styled-components";
import { Row, Column, Title } from "../../theme/index";
import Navigation from "./Navigation";
import Lightbulb from "./Lightbulb";

const Wrapper = styled.div`
  height: 100vh;
  min-height: 948px;
  width: 100%;
  background: linear-gradient(to right, #e38b3d, #f3bf70);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.img`
  width: 330px;
  height: 517px;
`;

export default function Splash() {
  return (
    <Wrapper>
      <Navigation />
      <Row justifycontent="space-around" alignitems="center">
        <Column width="40%">
          <Title header home>
            Strategic. <br /> Problem-solving. <br /> Creatives. <br /> On a
            mission.
          </Title>
        </Column>
        <Lightbulb />
      </Row>
    </Wrapper>
  );
}
