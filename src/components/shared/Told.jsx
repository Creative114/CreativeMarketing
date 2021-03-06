import React from 'react';
import styled from 'styled-components';
import { Button, Column, Row, SpanTitle, Text } from '../../theme/index';
import Reveal from 'react-reveal/Reveal';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgb(242, 245, 247);
  justify-content: center;
  padding: 2em 0;

  @media (max-width: 900px) {
    flex-direction: column;
    margin: 0 auto;
    padding: 3em 0 1.5em 0;
    text-align: center;
  }
`;

const StyledTextColumn = styled(Column)`
  width: 40%;
  margin-left: 4em;

  @media (max-width: 980px) {
    width: 95%;
    align-items: center;
    margin: 1em auto;
  }
`;

const StyledRow = styled(Row)`
  padding: 2em 0;
  justify-content: center;
  width: 90%;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin: 0 auto;
  }
`;

const StyledColumn = styled(Column)`
  text-align: right;
  align-items: flex-end;
  width: 35%;

  @media (max-width: 980px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 95%;
    margin: 0 auto;
  }
`;

const Div = styled.div`
  display: block;

  @media (max-width: 980px) {
    display: none;
  }
`;

const MobileDiv = styled.div`
  display: none;
  @media (max-width: 980px) {
    display: block;
  }
`;

const Told = () => {
  return (
    <Wrapper>
      <Reveal effect="fadeIn">
        <StyledRow>
          <StyledColumn>
            <SpanTitle new>
              Your <span style={{ color: '#d21f04' }}>story</span> deserves to be heard
            </SpanTitle>
            <Div>
              <Link to="/quote">
                <Button primary smallText>
                  {/* Free Story Formula */}
                  Request Quote
                </Button>
              </Link>
            </Div>
          </StyledColumn>
          <StyledTextColumn>
            <Text secondary>
              Telling engaging video stories is the best way for your business to stay relevant and relatable.
            </Text>
            <Text pointer>
              Your story deserves to be <span style={{ color: '#d21f04' }}>TOLD.</span>
            </Text>
            <div style={{ width: '26px', height: '6px', background: '#d21f04' }} />
            <Text secondary>
              Sharing emotional video stories will connect you with people unlike any other marketing tool.
            </Text>
            <Text pointer>
              Your story deserves to <span style={{ color: '#d21f04' }}>CONNECT.</span>
            </Text>
            <div style={{ width: '26px', height: '6px', background: '#d21f04' }} />
            <Text secondary>
              Expressing emotions through video storytelling will get you results and transform your audience.
            </Text>
            <Text pointer>
              Your story deserves to get <span style={{ color: '#d21f04' }}>RESULTS.</span>
            </Text>
          </StyledTextColumn>
          <MobileDiv>
            <Link to="/quote" style={{ height: '100%' }}>
              <Button primary smallText>
                {/* Free Story Formula */}
                Request Quote
              </Button>
            </Link>
          </MobileDiv>
        </StyledRow>
      </Reveal>
    </Wrapper>
  );
};

export default Told;
