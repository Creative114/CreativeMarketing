import React from 'react';
import styled from 'styled-components';
import logo1 from '../../assets/logo1.jpg';
// import logo2 from '../../assets/logo2.jpg';
import logo3 from '../../assets/logo3.jpg';
import logo4 from '../../assets/logo4.jpg';
import logo5 from '../../assets/logo5.jpg';
import logo6 from '../../assets/logo6.jpg';
import logo7 from '../../assets/logo7.png';
import logo8 from '../../assets/logo8.jpg';
import logo9 from '../../assets/logo9.png';
import logo10 from '../../assets/logo10.png';
import logo11 from '../../assets/logo11.png';
import Reveal from 'react-reveal/Reveal';
import logoBc from '../../assets/logoBc.png';
import logoUsfGreen from '../../assets/logoUsfGreen.png';
import logoCvf from '../../assets/logoCvf.png';
import logoGhNavy from '../../assets/logoGhNavy.png';
import logoGs from '../../assets/logoGs.png';
import logoRs from '../../assets/logoRs.png';
import logoSkux from '../../assets/logoSkux.png';

const Wrapper = styled.div`
  margin-top: 2em;
  margin-right: 5%;
  // margin: 0 auto 2em 2.5%;
  width: 90%;
  height: 100%;

  @media (max-width: 780px) {
    margin-right: 0px;
  }
`;

const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-auto-rows: 120px;
  height: 100%;
  width: 100%;
  max-width: 1600px;

  @media (max-width: 780px) {
    width: 100%;
    margin: 0;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
  }
`;

const Image = styled.img`
  width: 150%;
  align-self: center;
  justify-self: center;
  filter: grayscale(85%);
  transition: 250ms;

  &:hover {
    filter: grayscale(0%);
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const ImageItem = styled.div`
  margin: auto 0;
  // margin-left: ${(props) => (props.no >= 6 ? '35%' : '0px')};
  // margin-right: ${(props) => (props.no < 6 ? '35%' : '0px')};
  // @media (max-width: 780px) {
  //   margin-left: ${(props) => ((props.no / 3) % 2 === 1 ? '35%' : '0px')};
  //   margin-right: ${(props) => ((props.no / 3) % 2 === 0 ? '35%' : '0px')};
  // }
`;

const logos = [
  logoBc,
  null,
  logoUsfGreen,
  null,
  logo1,
  null,
  // logo2,
  // null,
  logo3,
  null,
  logo4,
  null,
  logo6,
  null,
  logo5,
  null,
  logo8,
  null,
  logo9,
  null,
  logo10,
  null,
  logo11,
  null,
  logo7,
  null,
  logoCvf,
  null,
  logoGhNavy,
  null,
  logoGs,
  null,
  logoRs,
  null,
  logoSkux,
];

const Logos = () => {
  return (
    <Wrapper>
      <Reveal effect="fadeIn">
        <>
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

export default Logos;
