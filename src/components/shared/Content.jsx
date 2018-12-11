import React from "react";
import styled from "styled-components";
import { Column, Text, Title } from "../../theme/index";

const Wrapper = styled.div`
  min-height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 780px) {
    height: 100%;
    margin: 3em 0;
  }
`;

const StyledColumn = styled(Column)`
  width: 55%
  text-align: center;
  align-items: center;
  @media (max-width: 780px) {
   width: 95%;
  }
`;

export default function Content({ title, description }) {
  return (
    <Wrapper>
      <StyledColumn>
        <Title>{title}</Title>
        <Text secondary>{description}</Text>
      </StyledColumn>
    </Wrapper>
  );
}
