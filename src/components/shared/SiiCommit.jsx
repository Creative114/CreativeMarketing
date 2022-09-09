import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';
import { Row, Button } from '../../theme/index';
import { Link } from 'react-router-dom';
import BG from '../../assets/rectange_bg.png';

// const Wrapper = styled.div`
//   // margin-top: 2em;
//   // margin-right: 5%;
//   margin: 0 auto;
//   width: 90%;
//   height: 100%;
//   margin-bottom: 5%;

//   @media (max-width: 780px) {
//     margin-right: 5%;
//   }
// `;

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  background: ${(props) => props.bg} no-repeat;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 8em 0 4em 0;
  @media (max-width: 780px) {
    justify-content: center;
    padding: 5em 0;
    flex-direction: column;
    align-items: center;
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
  margin: 0.5em 0;

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

const StyledRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  margin: 0;
  @media (max-width: 780px) {
    width: 95%;
  }
`;

const RedStyledSpan = styled.span`
  display: inline;
  font-weight: bold;
  color: #d21f04;
`;

export const ProcessText = styled.p`
  color: #212121;
  /*display: flex;
  flex-direction: column;
  flex-wrap: wrap;*/
  font-family: 'Montserrat', sans-serif;
  font-size: 23px;
  font-weight: 100;
  justify-content: center;
  padding: 0;
  text-align: center;
  width: 75%;
  margin: 0.75em auto;
`;

const SiiCommit = ({ toggleModal, isAuthed }) => {
  return (
    <Wrapper bg={`url('${BG}')`}>
      <Reveal effect="fadeIn">
        <>
          <StyledRow>
            <HeaderText>Not Ready To Commit?</HeaderText>
          </StyledRow>
          <StyledRow>
            <ProcessText>
              <RedStyledSpan>It&apos;s okay, we still have something for you!</RedStyledSpan>
            </ProcessText>
          </StyledRow>
          <StyledRow>
            <ProcessText>
              This free mini-master course is specifically for real estate investors. It will help you with ways to
              increase your brand&apos;s awareness and generate new leads using video content
            </ProcessText>
          </StyledRow>

          <Row margin="3.5em 0 2em 0" justifycontent="center">
            <Link to="/tenx">
              <Button primary smallText>
                {/* Free Story Formula */}
                Get The Videos
              </Button>
            </Link>
          </Row>
        </>
      </Reveal>
    </Wrapper>
  );
};

SiiCommit.propTypes = {
  toggleModal: PropTypes.func,
  isAuthed: PropTypes.bool,
};

export default SiiCommit;
