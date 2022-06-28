import React from 'react';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';

const Wrapper = styled.div`
  // margin-top: 2em;
  // margin-right: 5%;
  margin: 0 auto;
  width: 90%;
  height: 100%;
  margin-bottom: 5%;

  @media (max-width: 780px) {
    margin-right: 5%;
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

const StyledList = styled.ul`
  list-style: none;
  column-count: 2;
  column-gap: 80px;

  li {
    padding: 4px 0;
  }

  li:before {
    padding-right: 4px;
    content: '+';
    color: #d21f04;
    font-weight: bold;
  }
`;

const SiiTypes = () => {
  return (
    <Wrapper>
      <Reveal effect="fadeIn">
        <>
          <StyledRow>
            <HeaderText>The Types of Videos You&apos;ll Choose From</HeaderText>
          </StyledRow>
          <StyledRow>
            <StyledList>
              <li>
                <strong>Bundle 1: </strong>Customer Challenges
              </li>
              <li>
                <strong>Bundle 2: </strong>FAQ&apos;s
              </li>
              <li>
                <strong>Bundle 3: </strong>Value Added Marketing
              </li>
              <li>
                <strong>Bundle 4: </strong>How the Process Works
              </li>
              <li>
                <strong>Bundle 5: </strong>Client Testimonials
              </li>
              <li>
                <strong>Bundle 6: </strong>TV Commercials
              </li>
              <li>
                <strong>Bundle 7: </strong>Meet the Team
              </li>
            </StyledList>
          </StyledRow>
        </>
      </Reveal>
    </Wrapper>
  );
};

export default SiiTypes;
