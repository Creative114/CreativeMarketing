import React from "react";
import styled from "styled-components";
import launchimg from "../../assets/launch_img.png";
import { Column, Title, Text, Button } from "../../theme";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 4em 0;
  background: linear-gradient(rgb(242, 245, 247), #ffffff);
  justify-content: space-evenly;
  @media (max-width: 980px) {
    justify-content: center;
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

const Image = styled.img`
  width: 400px;
`;

export default function() {
  return (
    <Wrapper>
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
