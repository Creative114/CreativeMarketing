import React from 'react';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';

// Goosebumps Logos
import logoBc from '../../assets/logo_bc.png';
import logoUsf from '../../assets/logo_usf.png';
import logoAcs from '../../assets/logo_acs.png';
import logoBoa from '../../assets/logo_boa.png';
import logoChattr from '../../assets/logo_chattr.png';
import logoCvf from '../../assets/logo_cvf.png';
import logoRelecon from '../../assets/logo_relecon.png';
import logoGm from '../../assets/logo_gm.png';
import logoGs from '../../assets/logo_gs.png';
import logoSb from '../../assets/logo_sb.png';
import logoSpp from '../../assets/logo_spp.png';
import logoWt from '../../assets/logo_wt.png';
// SII 60 Logos
import logoCg from '../../assets/logo_cg.png';
import logoGgh from '../../assets/logo_ggh.png';
import logoIf from '../../assets/logo_if.png';
import logoIg from '../../assets/logo_ig.png';
import logoStb from '../../assets/logo_stb.png';
import logoAhb from '../../assets/logo_ahb.png';
import logoDl from '../../assets/logo_dl.png';
import logoEhb from '../../assets/logo_ehb.png';
import logoIbs from '../../assets/logo_ibs.png';
import logoIps from '../../assets/logo_ips.png';
import logoNng from '../../assets/logo_nng.png';
import logoThb from '../../assets/logo_thb.png';

const Wrapper = styled.div`
  // margin-top: 2em;
  // margin-right: 5%;
  margin: 0 auto;
  width: 90%;
  height: 100%;

  @media (max-width: 780px) {
    margin-right: 5%;
  }
`;

const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  // grid-template-columns: repeat(11, 1fr);
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 150px;
  height: 100%;
  width: 100%;
  max-width: 1600px;

  @media (min-width: 1600px) {
    grid-auto-rows: 200px;
  }

  @media (min-width: 1124px) {
    grid-auto-rows: 175px;
  }

  @media (max-width: 780px) {
    width: 100%;
    margin: 0;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
  }
`;

const Image = styled.img`
  width: 175%;
  align-self: center;
  justify-self: center;
  // filter: grayscale(85%);
  transition: 250ms;

  &:hover {
    filter: grayscale(0%);
  }

  @media (min-width: 1124px) {
    width: 150%;
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

// const logos = [
//   logoBc,
//   null,
//   logoUsfGreen,
//   null,
//   // logo1,
//   logoSuperbowl,
//   null,
//   // logo2,
//   // null,
//   logo3,
//   null,
//   logo4,
//   null,
//   logo6,
//   null,
//   logoRelecon,
//   null,
//   logo5,
//   null,
//   logo8,
//   null,
//   logo9,
//   null,
//   logo10,
//   null,
//   logo11,
//   null,
//   logo7,
//   null,
//   logoCvf,
//   null,
//   logoGhNavy,
//   null,
//   logoGs,
//   null,
//   logoRs,
//   null,
//   logoSkux,
// ];

const logos = [
  logoBc,
  null,
  logoUsf,
  null,
  logoAcs,
  null,
  logoBoa,
  null,
  logoChattr,
  null,
  logoCvf,
  null,
  logoRelecon,
  null,
  logoGm,
  null,
  logoGs,
  null,
  logoSb,
  null,
  logoSpp,
  null,
  logoWt,
  null,
  logoCg,
  null,
  logoGgh,
  null,
  logoIf,
  null,
  logoIg,
  null,
  logoStb,
  null,
  logoAhb,
  null,
  logoDl,
  null,
  logoEhb,
  null,
  logoIbs,
  null,
  logoIps,
  null,
  logoNng,
  null,
  logoThb,
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
