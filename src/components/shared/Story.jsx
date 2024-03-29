import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Row, Text } from '../../theme/index';
import Reveal from 'react-reveal/Reveal';
import SimpleProcess from '../../assets/SimpleProcess.svg';
import EngagingStories from '../../assets/EngagingStories.svg';
import RealResults from '../../assets/RealResults.svg';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(rgb(242, 245, 247), #ffffff);
  padding: 2em 0 2em 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 0 auto;
    padding: 1em 0 1.5em 0;
    text-align: center;
  }
`;

const StyledVideoRow = styled(Row)`
  width: 60%;
  margin: 4em auto 0;
  @media (max-width: 780px) {
    width: 100%;
    height: 100%;
  }
`;

const TextRow = styled(Row)`
  margin: 1em auto 2em;
  justify-content: space-between;
  width: 75%;

  @media (max-width: 780px) {
    width: 95%;
    flex-direction: column;
  }
`;

const StyledIconRow = styled(Row)`
  align-items: center;

  @media (max-width: 780px) {
    margin: 20px auto;
    width: 200px;
    flex-direction: column;
  }
`;

const Icon = styled.img`
  width: 120px;

  @media (max-width: 1600px) {
    width: 100px;
  }

  @media (max-width: 768px) {
    width: 80px;
  }
`;

export default class Story extends Component {
  render() {
    return (
      <Wrapper>
        <Reveal effect="fadeIn">
          <>
            <TextRow>
              <StyledIconRow alignitems="center">
                <Icon src={SimpleProcess} />
                <Text red margin="0">
                  Simple Process
                </Text>
              </StyledIconRow>

              <StyledIconRow alignitems="center">
                <Icon src={EngagingStories} />
                <Text red margin="0">
                  Engaging Stories
                </Text>
              </StyledIconRow>

              <StyledIconRow alignitems="center">
                <Icon src={RealResults} />
                <Text red margin="0">
                  Real Results
                </Text>
              </StyledIconRow>
            </TextRow>

            <StyledVideoRow>
              <div
                className="wistia_embed wistia_async_n5ltbaiebq videoFoam=true"
                style={{ height: '100%', position: 'relative', width: '100%' }}
              >
                <div
                  className="wistia_swatch"
                  style={{
                    height: '100%',
                    left: 0,
                    opacity: 0,
                    overflow: 'hidden',
                    position: 'absolute',
                    top: 0,
                    transition: 'opacity 250ms',
                    width: '100%',
                  }}
                >
                  <img
                    src="https://fast.wistia.com/embed/medias/n5ltbaiebq/swatch"
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'contain',
                    }}
                    alt=""
                  />
                </div>
              </div>
            </StyledVideoRow>

            <Row justifycontent="center" style={{ margin: '4em auto 2em' }}>
              <Link to="/quote">
                <Button primary smallText>
                  {/* Free Story Formula */}
                  Request Quote
                </Button>
              </Link>
            </Row>
          </>
        </Reveal>
      </Wrapper>
    );
  }
}
