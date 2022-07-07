import React from 'react';
import styled from 'styled-components';
import logoAhb from '../../assets/Creative114_business-01-AHB-logo.png';
import logoCg from '../../assets/Creative114_business-02-GGHomes-logo.png';
import logoDl from '../../assets/Creative114_business-03-Discount-Lots-logo.png';
import logoIbs from '../../assets/Creative114_business-04-IBuyStill-logo.png';
import logoIf from '../../assets/Creative114_business-05-Integrity-First-logo.png';
import logoIps from '../../assets/Creative114_business-06-IPS-Cash-logo.png';
import logoStb from '../../assets/Creative114_business-07-SellToBobby-logo.png';
import logoTnhb from '../../assets/Creative114_business-08-TNHomeBuyers-logo.png';
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

const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 220px;
  height: 100%;
  width: 90%;
  max-width: 1600px;
  text-align: center;

  @media (max-width: 780px) {
    width: 100%;
    margin: 0;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 240px;
  }

  @media only screen and (min-width: 992px) {
    width: 90%;
  }
`;

const Image = styled.img`
  width: 75%;
  align-self: center;
  justify-self: center;
  filter: grayscale(85%);
  transition: 250ms;
  margin: 0 auto;

  &:hover {
    filter: grayscale(0%);
  }

  @media (max-width: 780px) {
    /*width: 100%;*/
    width: 80%;
  }

  @media only screen and (min-width: 992px) {
    /*width: 90%*/
    width: 70%;
  }
`;

const ImageItem = styled.div`
  margin: auto 0;
  // margin-left: ${(props) => (props.no >= 9 ? '35%' : '0px')};
  // margin-right: ${(props) => (props.no < 9 ? '35%' : '0px')};
  // @media (max-width: 780px) {
  //   margin-left: ${(props) => ((props.no / 5) % 2 === 1 ? '35%' : '0px')};
  //   margin-right: ${(props) => ((props.no / 5) % 2 === 0 ? '35%' : '0px')};
  // }
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

const logos = [logoAhb, logoCg, logoDl, logoIbs, logoIf, logoIps, logoStb, logoTnhb];
// const logos = [null, logoAhb, null, logoCg, null, logoDl, null, logoIbs, null, logoIf, null, logoIps, null, logoStb, null, logoTnhb, null];

const SiiLogos = () => {
  return (
    <Wrapper>
      <Reveal effect="fadeIn">
        <>
          <StyledRow>
            <HeaderText>Add Your Business to Our Success Stories</HeaderText>
          </StyledRow>
          <Grid>
            {logos &&
              logos.map((key, index) => {
                return (
                  <ImageItem key={index} no={index}>
                    {key && <Image src={key} alt="Creative114 Logo" />}
                  </ImageItem>
                );
              })}
          </Grid>
        </>
      </Reveal>
    </Wrapper>
  );
};

export default SiiLogos;
