import React from 'react';
import styled from 'styled-components';
import launchimg from '../../assets/launch_img.png';
import { Button, Column, Text, Title } from '../../theme';
import { Link } from 'react-router-dom';
import BG from '../../assets/rectange_bg.png';

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  background: ${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10em 0 4em 0;

  @media (max-width: 980px) {
    flex-direction: column;
    text-align: center;
    padding: 5em 0;
  }
`;

const StyledColumn = styled(Column)`
  width: 55%;
  align-items: center;
  text-align: center;
  margin: 0 0.5em 0 0.5em;

  @media (max-width: 980px) {
    width: 95%;
    margin-right: 0;
  }
`;

const Span = styled.span`
  color: #d21f04;
`;

const Image = styled.img`
  width: 400px;

  @media (max-width: 500px) {
    width: 325px;
  }
`;

const Elements = () => {
  return (
    <Wrapper bg={`url('${BG}')`}>
      <Image src={launchimg} />
      <StyledColumn>
        <Title new>
          The Four <Span>Overlooked</Span> Secrets to Making Emotionally Engaging Videos
        </Title>
        <Text>
          Sign Up for Limited Access to the 4 Step Video Framework Proven to Illuminate Your Story, Transform Your
          Videos and Captivate Your Audience.
        </Text>
        <Link to="/launch">
          <Button margin="1.5em 0" primary>
            Access Now
          </Button>
        </Link>
      </StyledColumn>
    </Wrapper>
  );
};

export default Elements;
