import React from "react";
import styled from "styled-components";
import CaseStudy from "./CaseStudy";
import test1 from "../../assets/test1.jpg";
import test2 from "../../assets/test2.jpg";
import { Column, Title, Text } from "../../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledColumn = styled(Column)`
  margin: 3em 0;
  align-items: center;
  text-align: center;
  @media (max-width: 780px) {
    margin: 2em auto;
    width: 95%;
  }
`;

export default function CaseStudies() {
  return (
    <Wrapper>
      <StyledColumn>
        <Title>Case studies</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor.
        </Text>
      </StyledColumn>
      <CaseStudy
        img={test1}
        type="secondary"
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <CaseStudy
        img={test2}
        type="primary"
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <CaseStudy
        img={test1}
        type="secondary"
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </Wrapper>
  );
}
