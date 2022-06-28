import React from 'react';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';
import { Row, Button } from '../../theme/index';
import { Link } from 'react-router-dom';
import fireworks from '../../assets/fireworks.png';

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

const StyledBlockRow = styled.div`
  background-color: rgb(242, 245, 247);
  vertical-align: middle;
  width: 75%;

  align-items: center;
  display: flex;
  justify-content: center;

  margin: 0 auto;
  @media (max-width: 780px) {
    width: 95%;
  }
`;

const StyledTable = styled.table`
  width: 75%;
  margin: 0 auto;

  th {
    background-color: #d21f04;
    color: white;
    padding: 4px;
    text-align: center;
    vertical-align: middle;
  }

  td {
    padding: 12px;
    text-align: center;
    vertical-align: middle;
    background-color: rgb(242, 245, 247);
  }
`;

export const ProcessText = styled.p`
  color: #212121;
  /*display: flex;
  flex-direction: column;
  flex-wrap: wrap;*/
  font-family: 'Montserrat', sans-serif;
  font-size: 23px;
  font-weight: 100;
  //justify-content: center;
  padding: 0;
  //text-align: center;
  width: 75%;
  margin: 0.75em auto;
`;

const StyledSpan = styled.span`
  font-weight: bold;
`;

const StyledList = styled.ul`
  margin: 0;
  width: 50px;
  text-align: center;
  justify-content: center;

  :before {
    content: attr(data-header);
    font-size: 100%;
    margin-left: -15px;
  }

  li {
    font-style: italic;
    text-align: start;
    font-size: 12px;
  }

  li:before {
    padding-right: 4px;
    font-weight: bold;
  }
`;

const SiiPricing = () => {
  return (
    <Wrapper>
      <Reveal effect="fadeIn">
        <>
          <StyledRow>
            <HeaderText>Which Package Is Right For You?</HeaderText>
          </StyledRow>
          <StyledRow>
            <ProcessText>
              <StyledSpan>1. STARTER LEVEL | $6,995.00*</StyledSpan>
            </ProcessText>
          </StyledRow>
          <StyledTable>
            <tr>
              <th>QUANTITY</th>
              <th>DAYS NEEDED</th>
              <th>LOCATION</th>
              <th>CUSTOM B-ROLL</th>
            </tr>
            <tr>
              <td>15 Videos</td>
              <td>1 Day</td>
              <td>
                Our studio in
                <br />
                Tampa, FL
              </td>
              <td>Not Included</td>
            </tr>
          </StyledTable>
          <StyledRow>
            <ProcessText>
              <StyledSpan>2. ULTIMATE LEVEL | $12,495.00*</StyledSpan>
            </ProcessText>
          </StyledRow>
          <StyledTable>
            <tr>
              <th>QUANTITY</th>
              <th>DAYS NEEDED</th>
              <th>LOCATION</th>
              <th>CUSTOM B-ROLL</th>
            </tr>
            <tr>
              <td>30 Videos</td>
              <td>2 Days</td>
              <td>We come to you</td>
              <td>
                <StyledList data-header="Included">
                  <li>Office</li>
                  <li>Staff</li>
                </StyledList>
              </td>
            </tr>
          </StyledTable>
          <StyledRow>
            <ProcessText>
              <StyledSpan>3. EPIC LEVEL | $20,995.00*</StyledSpan>
            </ProcessText>
          </StyledRow>
          <StyledTable>
            <tr>
              <th>QUANTITY</th>
              <th>DAYS NEEDED</th>
              <th>LOCATION</th>
              <th>CUSTOM B-ROLL</th>
            </tr>
            <tr>
              <td>60 Videos</td>
              <td>2-3 Days</td>
              <td>We come to you</td>
              <td>
                <StyledList data-header="Included">
                  <li>Office</li>
                  <li>Staff</li>
                  <li>Locations</li>
                </StyledList>
              </td>
            </tr>
          </StyledTable>
          <StyledRow>
            <ProcessText>
              <StyledSpan>4. IT&apos;S FIRE BABY!</StyledSpan> | OUR <StyledSpan>&quot;GO BIGGER&quot;</StyledSpan>{' '}
              CUSTOM PACKAGE
            </ProcessText>
          </StyledRow>
          <StyledBlockRow>
            <img src={fireworks} />
            <ProcessText>Give us a call and let&apos;s talk about all your options!</ProcessText>
          </StyledBlockRow>

          <Row margin="3.5em 0 2em 0" justifycontent="center">
            <Link to="/pricing">
              <Button primary smallText>
                {/* Free Story Formula */}
                Request Pricing
              </Button>
            </Link>
          </Row>
        </>
      </Reveal>
    </Wrapper>
  );
};

export default SiiPricing;
