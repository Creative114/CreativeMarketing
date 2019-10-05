import React from "react";
import styled from "styled-components";
import logo1 from "../../assets/logo1.jpg";
import logo2 from "../../assets/logo2.jpg";
import logo3 from "../../assets/logo3.jpg";
import logo4 from "../../assets/logo4.jpg";
import logo5 from "../../assets/logo5.jpg";
import logo6 from "../../assets/logo6.jpg";
import logo7 from "../../assets/logo7.jpg";
import logo8 from "../../assets/logo8.jpg";
import logo9 from "../../assets/logo9.jpg";
import logo10 from "../../assets/logo10.jpg";
import logo11 from "../../assets/logo11.jpg";
import logo12 from "../../assets/logo12.jpg";
import logo_uc from "../../assets/logo_uc.png";
import Reveal from "react-reveal/Reveal";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Grid = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 150px;
  height: 100%;
  width: 87%;
  max-width: 1600px;
  @media (max-width: 780px) {
    width: 100%;
    margin: 0;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 125px;
  }
`;

const Image = styled.img`
  width: 100%;
  align-self: center;
  justify-self: center;
  filter: grayscale(85%);
  transition: 250ms;
  &:hover {
    filter: grayscale(0%);
  }
`;

const logos = [
  logo9,
  logo11,
  logo5,
  logo4,
  logo12,
  logo_uc,

  logo7,
  logo2,
  logo3,
  logo6,

  logo8,
  logo1
];

export default function Logos() {
  return (
    <Wrapper>
      <Reveal effect="fadeIn">
        <React.Fragment>
          {/* <StyledColumn>
            <Title>Our clients.</Title>
            <Text logo margin="0">
              The Heroes Behind Our Success
            </Text>
          </StyledColumn> */}
          <Grid>
            {logos &&
              logos.map((key, index) => {
                return <Image src={key} alt="Creative114 Logo" key={index} />;
              })}
          </Grid>
        </React.Fragment>
      </Reveal>
    </Wrapper>
  );
}
