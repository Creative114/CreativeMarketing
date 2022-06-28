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
  column-count: 1;

  li {
    padding: 4px 0;
  }

  li:before {
    padding-right: 4px;
    content: '+';
    color: #d21f04;
    font-weight: bold;
  }

  li:last-child:before {
    content: '';
    font-size: 14px;
  }
`;

export const SubText = styled.p`
  color: #212121;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
`;

const SiiWait = () => {
  return (
    <Wrapper>
      <Reveal effect="fadeIn">
        <>
          <StyledRow>
            <HeaderText>You Can&apos;t Afford To Wait</HeaderText>
          </StyledRow>
          <StyledRow>
            <StyledList>
              <li>
                <strong>Videos generate 3X more </strong>responses from customers
              </li>
              <li>
                <strong>83% </strong>of video marketers say video has helped them generate leads*.
              </li>
              <li>
                <strong>95% </strong>of viewers say video ads are more memorable than a blog or text ad.
              </li>
              <li>
                <strong>83% </strong>of video marketers reported that video produces a positive ROI*.
              </li>
              <li>
                <strong>Videos save time </strong>and accelerate deal cycles.
              </li>
              <li>*stats by Hubspot and Wyzowl, 2020</li>
            </StyledList>
          </StyledRow>
        </>
      </Reveal>
    </Wrapper>
  );
};

export default SiiWait;
