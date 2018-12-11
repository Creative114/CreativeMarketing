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
  @media (max-width: 780px) {
    padding: 2em 0 3em 0;
  }
`;

const Img = styled.img`
  width: 50%;
`;

const StyledRow = styled(Row)`
  margin: 3em 0 0 0;
  justify-content: space-evenly;
  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const StyledColumn = styled(Column)`
  width: 50%;
  justify-content: ${props => props.text && "center"};
  align-items: center;
  @media (max-width: 780px) {
    width: ${props => (props.text ? "95%" : "65%")};
    text-align: center;
  }
`;

const StyledTextColumn = styled(Column)`
  width: 70%;

  @media (max-width: 780px) {
    width: 95%;
  }
`;

export default function Careers() {
  return (
    <Wrapper>
      <Title>Our team is growing!</Title>
      <StyledRow>
        <StyledColumn>
          <Img src={dummy} />
        </StyledColumn>
        <StyledColumn text>
          <StyledTextColumn>
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
          </StyledTextColumn>
        </StyledColumn>
      </StyledRow>
    </Wrapper>
  );
}
