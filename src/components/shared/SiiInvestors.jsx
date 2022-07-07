import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';
import Testimonial from './Testimonial';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(rgb(242, 245, 247), #ffffff);
  padding: 2em 0 2.5em 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 0 auto;
    padding: 3em 0 1.5em 0;
    text-align: center;
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
  margin: 0.5em 0 0 0;

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

export const ProcessText = styled.p`
  color: #212121;
  /*display: flex;
  flex-direction: column;
  flex-wrap: wrap;*/
  font-family: 'Montserrat', sans-serif;
  font-size: 23px;
  font-weight: 100;
  padding: 0;

  width: 75%;
  margin: 0 auto 3em;
`;

const SiiInvestors = ({ toggleModal, isAuthed }) => {
  return (
    <Wrapper>
      <Reveal effect="fadeIn">
        <>
          <StyledRow>
            <HeaderText>Here&apos;s What Top Investors Are Saying</HeaderText>
          </StyledRow>
          {/* <div>
            <Testimonial type="video" src={'https://fast.wistia.com/embed/medias/6msglp5hqn/swatch'} src2={''} />
            <ProcessText>Jimmy and Susie Vreeland of I Buy STL generate 150+ deals per year in St. Louis, Missouri. 
            They captured and extra %80K as soon as they started sharing their Sell It In 60 video content.</ProcessText>
          </div> */}
          <div>
            <Testimonial type="video" src={'https://fast.wistia.com/embed/medias/s7cn0ymxsl/swatch'} src2={''} />
            <ProcessText>
              Erick Gydesen of I Buy SD generates 500+ deals per year in San Diego, California, and he says he
              can&apos;t even fully calculate how valuable his Sell It in 60 video content is for building trust with
              more sellers and attracting the best industry talent to his team.
            </ProcessText>
          </div>
          <div>
            <Testimonial type="video" src={'https://fast.wistia.com/embed/medias/qifzwyeu3p/swatch'} src2={''} />
            <ProcessText>
              Eric Brewer of Integrity First Home Buyers generates 400+ deals per year in Cnetral Pennsylvania, and he
              uses Sell It In 60 video content on his website, social media, CRM, and follow-up sequences to creae more
              organic engagement with his customers.
            </ProcessText>
          </div>
        </>
      </Reveal>
    </Wrapper>
  );
};

SiiInvestors.propTypes = {
  toggleModal: PropTypes.func,
  isAuthed: PropTypes.bool,
};

export default SiiInvestors;
