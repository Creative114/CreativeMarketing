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
`;

export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      type: null,
      title: 'Quote Request Form',
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
          title="Request Quote | Brand Engagement, Marketing, Design"
          meta={[
            { name: 'description', content: 'About Page for Creative114' },
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
          type="quote"
          title="What's Your Story?"
          text="Your story deserves to be TOLD in an engaging way, CONNECTS with your audience, and gets RESULTS that grow your business. Submit the form below to request a quote and get your project started."
          mobileText="Your story deserves to be TOLD in an engaging way, CONNECTS with your audience, and gets RESULTS that grow your business. Submit the form below to request a quote and get your project started."
          toggleModal={this.toggleModal}
          img={quoteimg}
        />
        <Div>
          <HubspotForm
            portalId="5644251"
            formId="79fba784-79ca-4e52-b182-11f594a2b08b"
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
