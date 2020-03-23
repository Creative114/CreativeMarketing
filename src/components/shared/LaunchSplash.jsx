import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Row, Title } from '../../theme/index';
import Navigation from './Navigation';
import LaunchForm from '../shared/LaunchForm';
import launchsplash from '../../assets/launch_splash.jpg';

const Wrapper = styled.div`
  height: calc(100vh - 10px);
  background: rgb(242, 245, 247);
  @media (max-width: 920px) {
    height: 100%;
  }
`;

const Content = styled.div`
  background-size: cover;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), ${(props) => props.background}, center;
  background-size: cover;
  clip-path: ellipse(120% 100% at 50% 0%);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 920px) {
    align-items: center;
    height: 100%;
    clip-path: ellipse(150% 100% at 50% 0%);
  }
`;

const StyledHomeColumn = styled(Row)`
  align-items: center;
  bottom: 0;
  height: auto;
  justify-content: center;
  left: 0;
  margin: 2em auto auto;
  top: 0;
  width: 100%;
  z-index: 900;

  @media (max-width: 920px) {
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
  }

  @media (max-width: 720px) {
    margin-top: 0;
  }

  @media (max-width: 500px) {
  }
`;

const StyledRow = styled(Row)`
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 920px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
  }
`;

export const StyledTitle = styled(Title)`
  align-items: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-family: 'Ubuntu', sans-serif;
  font-size: 64px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1.18;
  width: 100%;

  @media (max-width: 1200px) {
    font-size: 50px;
  }

  @media (max-width: 930px) {
    font-size: 40px;
  }
`;

const StyledTitleDiv = styled.div`
  width: 50%;
  @media (max-width: 880px) {
    width: 95%;
  }
`;

export default class LaunchSplash extends Component {
  render() {
    const { toggleModal, handleAuth, isAuthed, handleSubmitFormVisible, submitFormVisible } = this.props;

    return (
      <Wrapper>
        <Content background={`url('${launchsplash}')`}>
          <Navigation launch type="home" toggleModal={toggleModal} isAuthed={isAuthed} />

          <StyledRow>
            <StyledHomeColumn>
              <StyledTitleDiv>
                <StyledTitle>
                  <span>FOUR SECRETS</span>
                  <span>TO CREATE VIDEOS</span>
                  <span>THAT GET RESULTS</span>
                </StyledTitle>
              </StyledTitleDiv>
              <LaunchForm
                handleAuth={handleAuth}
                handleSubmitFormVisible={handleSubmitFormVisible}
                submitFormVisible={submitFormVisible}
                type="splash"
              />
            </StyledHomeColumn>
          </StyledRow>
        </Content>
      </Wrapper>
    );
  }
}

LaunchSplash.propTypes = {
  toggleModal: PropTypes.func,
  handleAuth: PropTypes.func,
  isAuthed: PropTypes.bool,
  handleSubmitFormVisible: PropTypes.func,
  submitFormVisible: PropTypes.bool,
};
