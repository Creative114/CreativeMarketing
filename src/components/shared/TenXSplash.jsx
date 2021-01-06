import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Row, Title, SubTitleText, Column, Button } from '../../theme/index';
import Navigation from './Navigation';
import tenxsplash from '../../assets/10X.jpg';

const Wrapper = styled.div`
  height: calc(100vh - 10px);
  background: rgb(242, 245, 247);
  @media (max-width: 920px) {
    height: 100%;
  }
`;

const Content = styled.div`
  background-size: cover;
  // background: linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), ${(props) =>
    props.background}, center;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.65)), ${(props) => props.background}, center;
  background-size: cover;
  // clip-path: ellipse(120% 100% at 50% 0%);
  clip-path: ellipse(225% 100% at 0% 0%);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 920px) {
    align-items: center;
    height: 100%;
    // clip-path: ellipse(150% 100% at 50% 0%);
    clip-path: ellipse(225% 100% at 0% 0%);
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
  font-family: 'Montserrat', sans-serif;
  font-size: 52px;
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

const StyledText = styled(SubTitleText)`
  @media (max-width: 920px) {
    display: none;
  }
`;

const NavigationMod = styled(Navigation)`
  .Wrapper {
    top: 0;
  }
`;

const StyledColumn = styled(Column)`
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 65%;
  height: auto;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 900;
  position: absolute;
  @media (max-width: 1200px) {
    margin: 8em auto;
  }
  @media (max-width: 780px) {
    margin: 4em auto;
    width: 85%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

const StyledMobileText = styled(SubTitleText)`
  display: none;
  @media (max-width: 920px) {
    display: block;
  }
`;

const TenXSplash = ({
  toggleModal,
  handleAuth,
  isAuthed,
  handleSubmitFormVisible,
  submitFormVisible,
  // title,
  // text,
  // mobileText,
}) => {
  return (
    <Wrapper>
      <NavigationMod launch type="home" toggleModal={toggleModal} isAuthed={isAuthed} />
      <Content background={`url('${tenxsplash}')`}>
        {/* <NavigationMod launch type="home" toggleModal={toggleModal} isAuthed={isAuthed} /> */}

        <StyledRow>
          <StyledColumn>
            {/* <Title header>{title}</Title> */}
            <Title header>10X YOUR LEAD GENERATION</Title>
            {/* <StyledText header>{text}</StyledText> */}
            <StyledText header>
              A free mini-master course to help you increase your brand&apos;s awareness
              <br />
              and generate new leads with video content.
            </StyledText>
            {/* <StyledMobileText header>{mobileText}</StyledMobileText> */}
            <StyledMobileText header>
              A free mini-master course to help you increase your brand&apos;s awareness
              <br />
              and generate new leads with video content.
            </StyledMobileText>

            <Button primary onClick={() => toggleModal('launch')}>
              Get The Videos
            </Button>
          </StyledColumn>
        </StyledRow>
      </Content>
    </Wrapper>
  );
};

TenXSplash.propTypes = {
  toggleModal: PropTypes.func,
  handleAuth: PropTypes.func,
  isAuthed: PropTypes.bool,
  handleSubmitFormVisible: PropTypes.func,
  submitFormVisible: PropTypes.bool,
  // title: PropTypes.string,
  // text: PropTypes.string,
  // mobileText: PropTypes.string,
};

export default TenXSplash;
