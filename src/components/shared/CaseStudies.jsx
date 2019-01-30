import React from "react";
import styled from "styled-components";
import CaseStudy from "./CaseStudy";
import { Column, Title } from "../../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledColumn = styled(Column)`
  margin: 2em 0;
  align-items: center;
  text-align: center;
  @media (max-width: 780px) {
    margin: 2em auto;
    width: 95%;
  }
`;

export default function CaseStudies({ casestudies, navigate }) {
  return (
    <Wrapper>
      <StyledColumn>
        <Title>Case studies</Title>
        {/* <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor.
        </Text> */}
      </StyledColumn>

      {casestudies &&
        casestudies.map((key, index) => {
          return (
            <CaseStudy
              key={index}
              img={key.img}
              title={key.title}
              description={key.description}
              navigate={navigate}
              type={key.type}
            />
          );
        })}
    </Wrapper>
  );
}
