import React from "react";
import styled from "styled-components";
import Jet from "../../assets/jet_picture.jpg";
import { Column, Title, Text, Button } from "../../theme";

const Wrapper = styled.div`
  background: ${props => props.background};
  width: 100%;
  height: 650px;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 980px) {
    justify-content: center;
    background: ${props => props.background},
      linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
    background-blend-mode: overlay;
  }
`;

const StyledColumn = styled(Column)`
  width: 35%;
  align-items: center;
  text-align: center;
  margin-right: 6em;
  @media (max-width: 980px) {
    width: 95%;
    margin-right: 0;
  }
`;

const StyledText = styled(Text)`
  @media (max-width: 980px) {
    color: #fff;
  }
`;

const StyledTitle = styled(Title)`
  @media (max-width: 980px) {
    color: #fff;
  }
`;

const Span = styled.span`
  color: #d21f04;
  @media (max-width: 980px) {
    color: #fff;
  }
`;

export default function() {
  return (
    <Wrapper background={`url('${Jet}')`}>
      <StyledColumn>
        <StyledTitle new>
          Four elements to videos that get <Span>RESULTS</Span>
        </StyledTitle>
        <StyledText>
          Sign Up To Access A Series Of Free Videos That Will Help You Transform
          The Way You Tell Your Brand Stories.
        </StyledText>
        <Button primary>Access Now</Button>
      </StyledColumn>
    </Wrapper>
  );
}
