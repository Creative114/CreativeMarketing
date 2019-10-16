import React from "react";
import styled from "styled-components";
import launchimg from "../../assets/launch_img.png";
import { Column, Title, Text, Button } from "../../theme";
import { Link } from "react-router-dom";
import BG from "../../assets/rectange_bg.png";

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  background: ${props => props.bg};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10em 0 4em 0;
  @media (max-width: 980px) {
    flex-direction: column;
    text-align: center;
    padding: 5em 0;
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

const StyledText = styled(Text)``;

const StyledTitle = styled(Title)``;

const Span = styled.span`
  color: #d21f04;
`;

const Image = styled.img`
  width: 400px;
  @media (max-width: 500px) {
    width: 325px;
  }
`;

export default function Elements() {
  return (
    <Wrapper bg={`url('${BG}')`}>
      <Image src={launchimg} />
      <StyledColumn>
        <StyledTitle new>
          Four elements to videos that get <Span>RESULTS</Span>
        </StyledTitle>
        <StyledText>
          Sign Up To Access A Series Of Free Videos That Will Help You Transform
          The Way You Tell Your Brand Stories.
        </StyledText>
        <Link to="/launch">
          <Button margin="1.5em 0" primary>
            Access Now
          </Button>
        </Link>
      </StyledColumn>
    </Wrapper>
  );
}
