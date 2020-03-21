import React, { Component } from 'react';
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
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), ${(props) => props.background};
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 920px) {
    align-items: center;
    height: 100%;
    clip-path: ellipse(150% 100% at 50% 0%);
  }
  clip-path: ellipse(120% 100% at 50% 0%);
`;

const StyledHomeColumn = styled(Row)`
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 100%;
  margin: auto;
  margin-top: 2em;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100000;
  // position: absolute;
  justify-content: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-size: 64px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.18;
  letter-spacing: normal;
  color: #ffffff;
  font-family: 'Ubuntu', sans-serif;
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
    const { toggleModal, handleAuth, isAuthed } = this.props;

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
                handleSubmitFormVisible={this.props.handleSubmitFormVisible}
                submitFormVisible={this.props.submitFormVisible}
                type="splash"
              />
            </StyledHomeColumn>
          </StyledRow>
        </Content>
      </Wrapper>
    );
  }
}
