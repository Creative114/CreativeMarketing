import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';
import HubspotForm from 'react-hubspot-form';

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

const Div = styled.div`
  width: 50%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 65%;
  }

  @media (max-width: 921px) {
    width: 80%;
  }

  @media (max-width: 767px) {
    width: 90%;
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
  justify-content: center;
  padding: 0;
  text-align: center;
  width: 75%;
  margin: 0.75em auto;
`;

// const SiiForm = ({ toggleModal, isAuthed }) => {
const SiiForm = forwardRef((props, ref) => {
  const { pricingScroll } = ref;

  return (
    <Wrapper ref={pricingScroll}>
      <Reveal effect="fadeIn">
        <>
          <StyledRow>
            <HeaderText>You&apos;re About To Make A Smart Decision</HeaderText>
          </StyledRow>
          {/* <StyledRow>
            <ProcessText>Schedule a 15-minute call</ProcessText>
          </StyledRow>
          <StyledRow>
            <Button primary onClick={() => toggleModal('schedule')}>
              Schedule a call now
            </Button>
          </StyledRow>
          <StyledRow>
            <ProcessText>OR</ProcessText>
          </StyledRow> */}
          <Div>
            <HubspotForm
              portalId="5644251"
              formId="edca05ab-5328-4199-a618-588acc2c9ffa"
              region="na1"
              onSubmit={() => console.log('Submit!')}
              onReady={(form) => console.log('Form ready!')}
              cssClass="hs-form"
              loading={<div>Loading...</div>}
            />
          </Div>
        </>
      </Reveal>
    </Wrapper>
  );
});

SiiForm.propTypes = {
  toggleModal: PropTypes.func,
};

SiiForm.displayName = 'SiiForm';

export default SiiForm;
