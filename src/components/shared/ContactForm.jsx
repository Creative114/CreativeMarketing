import React from 'react';
import styled from 'styled-components';
import { Column, Row, SpanTitle, Text } from '../../theme/index';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 3em 0;

  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 2em 0;
  }
`;

const StyledRow = styled(Row)`
  margin: 1em 0;
  align-items: center;

  @media (max-width: 780px) {
    margin: 0.5em 0;
  }
`;

const StyledColumn = styled(Column)`
  @media (max-width: 780px) {
    margin: 1.5em 0;
    align-items: center;
  }
`;

const CustomColumn = styled.div`
  margin-bottom: 2em;
`;

const Icon = styled.i`
  font-size: 2em;
  margin-right: 0.75em;
  color: ${(props) => (props.social ? '#b9402d' : '#505d68')};

  @media (max-width: 780px) {
    margin: 0 0.5em;
    font-size: 1.5em;
  }
`;

const ContactForm = () => {
  const script = document.createElement('script');
  script.src = 'https://js.hsforms.net/forms/v2.js';
  document.body.appendChild(script);

  script.addEventListener('load', () => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        portalId: '5644251',
        formId: 'fd529199-628a-494d-9d37-df3acb1187b1',
        target: '#hubspotForm',
      });
    }
  });

  return (
    <Wrapper>
      <StyledColumn>
        <CustomColumn>
          <SpanTitle>Reach us</SpanTitle>
        </CustomColumn>
        <a href="tel:4193677341">
          <StyledRow>
            <Icon className="fas fa-phone" />
            <Text post>419-367-7341</Text>
          </StyledRow>
        </a>
        <a href="mailto:jet@creative114.com">
          <StyledRow>
            <Icon className="fas fa-envelope" />
            <Text post>jet@creative114.com</Text>
          </StyledRow>
        </a>
        <StyledRow>
          <Icon className="fas fa-map-pin" />
          <Text post>
            7028 W. Waters Ave. #274
            <br /> Tampa, Fl 33634-2292
          </Text>
        </StyledRow>

        <StyledRow onClick={() => window.HubSpotConversations.widget.open()}>
          <Icon className="fas fa-comment" />
          <Text post>Chat now</Text>
        </StyledRow>

        <StyledRow>
          <a href="https://www.linkedin.com/showcase/creative114/" target="_blank" rel="noopener noreferrer">
            <Icon social className="fab fa-linkedin-in" />
          </a>
          <a href="https://www.facebook.com/114brands" target="_blank" rel="noopener noreferrer">
            <Icon social className="fab fa-facebook-f" />
          </a>

          <a href="https://www.instagram.com/creative1.14/" target="_blank" rel="noopener noreferrer">
            <Icon social className="fab fa-instagram" />
          </a>
          <a href="https://vimeo.com/channels/1439000" target="_blank" rel="noopener noreferrer">
            <Icon social className="fab fa-vimeo-v" />
          </a>
        </StyledRow>
      </StyledColumn>
    </Wrapper>
  );
};

export default ContactForm;
