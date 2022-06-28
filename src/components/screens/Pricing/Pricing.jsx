import React, { Component } from 'react';

import Footer from '../../shared/Footer';
import Helmet from 'react-helmet';
import Modal from '../../shared/Modal';
import FindYourStoryForm from '../../shared/FindYourStoryForm';
import Calendar from '../../shared/Calendar';
import HubspotForm from 'react-hubspot-form';
import styled from 'styled-components';
import TopBar from '../../shared/TopBar';
import Splash from '../../shared/Splash';
import quoteimg from '../../../assets/Quote.jpg';

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

export default class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      type: null,
      title: 'Pricing Request Form',
      src: 'https://share.hsforms.com/1efunhHnKTlKxghH1lKKwiw3cz4r',
    };
  }

  toggleModal = (type) => {
    this.setState({ isOpen: !this.state.isOpen, type });
  };

  render() {
    const { isOpen, type } = this.state;
    return (
      <>
        <Helmet
          title="Request Pricing | Brand Engagement, Marketing, Design"
          meta={[
            { name: 'description', content: 'Pricing Page for Creative114' },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:title',
              content: 'Brand Engagement, Marketing, Design',
            },
            { property: 'og:url', content: 'http://creative114.com' },
          ]}
        />
        <TopBar />
        <Splash
          type="pricing"
          title="What's Your Story?"
          text="Your story deserves to be TOLD in an engaging way, CONNECTS with your audience, and gets RESULTS that grow your business. Submit the form below to request pricing and get your project started."
          mobileText="Your story deserves to be TOLD in an engaging way, CONNECTS with your audience, and gets RESULTS that grow your business. Submit the form below to request pricing and get your project started."
          toggleModal={this.toggleModal}
          img={quoteimg}
        />
        <StyledRow>
          <HeaderText>Request Pricing</HeaderText>
        </StyledRow>
        <Div>
          <HubspotForm
            portalId="5644251"
            formId="81fe7f98-6517-4f9e-a5d3-9437cd929421"
            region="na1"
            onSubmit={() => console.log('Submit!')}
            onReady={(form) => console.log('Form ready!')}
            cssClass="hs-form"
            loading={<div>Loading...</div>}
          />
        </Div>
        <Footer toggleModal={this.toggleModal} />
        {isOpen && (
          <Modal show={isOpen} togglemodal={this.toggleModal}>
            {type === 'story' && <FindYourStoryForm />}
            {type === 'schedule' && <Calendar />}
          </Modal>
        )}
      </>
    );
  }
}
