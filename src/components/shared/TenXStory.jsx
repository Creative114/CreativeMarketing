import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Text } from '../../theme/index';
import Reveal from 'react-reveal/Reveal';
import SubscribeIcon from '../../assets/subscribe.svg';
import InspiredIcon from '../../assets/inspired.svg';
import ResultsIcon from '../../assets/results.svg';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(rgb(242, 245, 247), #ffffff);
  padding: 2em 0 2.5em 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 0 auto;
    padding: 3em 0 1.5em 0;
    text-align: center;
  }
`;

const StyledVideoRow = styled(Row)`
  width: 75%;
  height: auto;
  margin: 2em auto 0;

  @media (max-width: 780px) {
    width: 95%;
    height: 100%;
  }
`;

const TextRow = styled(Row)`
  margin: 0 auto 2em;
  justify-content: space-between;
  width: 75%;

  @media (max-width: 780px) {
    width: 95%;
    flex-direction: column;
  }
`;

export const ProcessText = styled.p`
  color: #212121;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: 'Montserrat', sans-serif;
  font-size: 23px;
  font-weight: 100;
  justify-content: center;
  padding: 0;
  text-align: center;
  width: 100%;
  margin: 0.75em auto;

  span {
    margin-top: 10px;
  }

  @media (max-width: 375px) {
    width: 90%;

    span {
      margin-top: 0;
    }
  }
`;

export const HeaderText = styled.p`
  color: #212121;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: 'Montserrat', sans-serif;
  font-size: 54px;
  font-weight: bold;
  justify-content: center;
  padding: 0;
  text-align: center;
  width: 100%;
  margin: 0.5em 0 0 0;

  span {
    margin-top: 10px;
  }

  @media (max-width: 375px) {
    width: 90%;

    span {
      margin-top: 0;
    }
  }
`;

const StyledButton = styled.button`
  align-items: center;
  background: #d21f04;
  border-radius: 4px;
  border: 1px solid transparent;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 600;
  height: 45px;
  justify-content: center;
  margin: 0.5em 0;
  outline: none;
  text-transform: uppercase;
  transition: 750ms;
  width: 225px;

  &:hover {
    background-color: #f32405;
  }
`;

const StyledRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  margin: 0;
  @media (max-width: 780px) {
    width: 95%;
  }
`;

const StyledIconRow = styled(Row)`
  align-items: center;
  @media (max-width: 780px) {
    width: 240px;
    margin: 20px auto;
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

const StyledSpan = styled.span`
  font-weight: bold;
`;

const LaunchStory = ({ toggleModal, isAuthed }) => {
  return (
    <Wrapper>
      <Reveal effect="fadeIn">
        <>
          <TextRow>
            <StyledIconRow alignitems="center">
              <Icon src={SubscribeIcon} />
              <Text red margin="0">
                LEARN
              </Text>
            </StyledIconRow>

            <StyledIconRow alignitems="center">
              <Icon src={InspiredIcon} />
              <Text red margin="0">
                IMPLEMENT
              </Text>
            </StyledIconRow>

            <StyledIconRow alignitems="center">
              <Icon src={ResultsIcon} />
              <Text red margin="0">
                GROW
              </Text>
            </StyledIconRow>
          </TextRow>

          <StyledRow>
            <HeaderText>It&apos;s Time To Grow Your Business</HeaderText>
          </StyledRow>
          <StyledRow>
            <ProcessText>
              Many business owners are wasting money creating videos that just don&apos;t work
              <br />
              <StyledSpan>We don&apos;t want that to be you.</StyledSpan>
            </ProcessText>
          </StyledRow>
          <StyledRow>
            <ProcessText>
              Discover a strategy that will grow your lead generation and increase your bottom line.
              <br />
              The steps to getting a video strategy that will multiply your business is easy!
            </ProcessText>
          </StyledRow>
          {!isAuthed && (
            <div>
              <StyledVideoRow onClick={() => toggleModal('launch')}>
                <div
                  className="wistia_embed wistia_async_ite2h6tlyf videoFoam=true"
                  style={{
                    pointerEvents: 'none',
                    height: '100%',
                    position: 'relative',
                    width: '100%',
                  }}
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
                      pointerEvents: 'none',
                    }}
                  >
                    <img
                      src="https://fast.wistia.com/embed/medias/ite2h6tlyf/swatch"
                      style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'contain',
                        pointerEvents: 'none',
                      }}
                      alt=""
                    />
                  </div>
                </div>
              </StyledVideoRow>
            </div>
          )}
          {isAuthed && (
            <div>
              <StyledVideoRow>
                <div
                  className="wistia_embed wistia_async_ite2h6tlyf videoFoam=true"
                  style={{
                    height: '100%',
                    position: 'relative',
                    width: '100%',
                  }}
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
                      src="https://fast.wistia.com/embed/medias/ite2h6tlyf/swatch"
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
            </div>
          )}

          <Row justifycontent="center" margin="4em 0 0">
            <StyledButton onClick={isAuthed ? () => toggleModal('schedule') : () => toggleModal('launch')}>
              {isAuthed ? 'Schedule a call now' : 'Get the videos'}
            </StyledButton>
          </Row>
        </>
      </Reveal>
    </Wrapper>
  );
};

LaunchStory.propTypes = {
  toggleModal: PropTypes.func,
  isAuthed: PropTypes.bool,
};

export default LaunchStory;
