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

const SiiCheck = ({ toggleModal, isAuthed }) => {
  return (
    <Wrapper>
      <Reveal effect="fadeIn">
        <>
          <StyledRow>
            <HeaderText>Check These Out</HeaderText>
          </StyledRow>
          <div>
            <Testimonial type="video" src={'https://fast.wistia.com/embed/medias/261qh1r2tl/swatch'} src2={''} />
          </div>
          <div>
            <Testimonial type="video" src={'https://fast.wistia.com/embed/medias/lvojnzcpd1/swatch'} src2={''} />
          </div>
          <div>
            <Testimonial type="video" src={'https://fast.wistia.com/embed/medias/j0nizelhql/swatch'} src2={''} />
          </div>
        </>
      </Reveal>
    </Wrapper>
  );
};

SiiCheck.propTypes = {
  toggleModal: PropTypes.func,
  isAuthed: PropTypes.bool,
};

export default SiiCheck;
