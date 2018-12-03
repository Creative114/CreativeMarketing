import React from "react";
import styled from "styled-components";
import { Column, Title, Row, Text, Button, Subtitle } from "../../theme/index";
import dummy from "../../assets/dummy.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 50%;
`;

export default function Careers() {
  return (
    <Wrapper>
      <Title>Our team is growing!</Title>
      <Row justifycontent="space-evenly" margin="3em 0 0 0">
        <Column width="50%" alignitems="center">
          <Img src={dummy} />
        </Column>
        <Column width="50%" justifycontent="center">
          <Column width="70%">
            <Text>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam,"
            </Text>
            <Subtitle>William Whatley, Senior Developer</Subtitle>
            <Row margin=".5em 0">
              <Button primary>Apply today</Button>
            </Row>
          </Column>
        </Column>
      </Row>
    </Wrapper>
  );
}
