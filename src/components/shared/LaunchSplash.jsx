import React, { Component } from "react";
import styled from "styled-components";
import { Row, Title } from "../../theme/index";
import Navigation from "./Navigation";
import LaunchForm from "../shared/LaunchForm";
import launchsplash from "../../assets/launch_splash.jpg";

const Wrapper = styled.div`
  height: 90vh;
  background: rgb(242,245,247);
`;

const Content =styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)),
    ${props => props.background};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 920px) {
    align-items: center;
  }
  clip-path: ellipse(120% 100% at 50% 0%);
`

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
  position: absolute;
  justify-content: center;
  @media (max-width: 980px) {
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

const StyledTitle = styled(Title)`
  font-size: 68px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.18;
  letter-spacing: normal;
  color: #ffffff;
  font-family: "Ubuntu", sans-serif;
  @media (max-width: 920px) {
    font-size: 48px;
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
          <Navigation
            launch
            type="home"
            toggleModal={toggleModal}
            isAuthed={isAuthed}
          />

          <StyledRow>
            <StyledHomeColumn>
              <StyledTitleDiv>
                <StyledTitle>
                The Four Overlooked Secrets to Making Emotionally Engaging Videos
                </StyledTitle>
              </StyledTitleDiv>
              <LaunchForm handleAuth={handleAuth} type="splash" />
            </StyledHomeColumn>
          </StyledRow>
        </Content>
      </Wrapper>
    );
  }
}
