import React, { Component } from 'react';
import Splash from '../../shared/Splash';
import Footer from '../../shared/Footer';
import Helmet from 'react-helmet';
import ContactForm from '../../shared/ContactForm';
import Modal from '../../shared/Modal';
import FindYourStoryForm from '../../shared/FindYourStoryForm';
import Calendar from '../../shared/Calendar';
import contactimg from '../../../assets/Contact.jpg';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      type: null,
    };
  }

  toggleModal(type) {
    this.setState({ isOpen: !this.state.isOpen, type });
  }

  render() {
    const { isOpen, type } = this.state;
    return (
      <div>
        <Helmet
          title="Our Team | Brand Engagement, Marketing, Design"
          meta={[
            { name: 'description', content: 'Contact Page for Creative114' },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:title',
              content: 'Brand Engagement, Marketing, Design',
            },
            { property: 'og:url', content: 'http://creative114.com' },
          ]}
        />
        <Splash
          type="contact"
          title="Let’s Explore Your Story"
          img={contactimg}
          toggleModal={this.toggleModal}
          redirect={this.redirect}
          text="We would love to hear from you."
          mobileText="We would love to hear from you."
        />

        <ContactForm />

        <Footer toggleModal={this.toggleModal} />
        {isOpen && (
          <Modal show={isOpen} togglemodal={this.toggleModal}>
            {type === 'story' && <FindYourStoryForm />}
            {type === 'schedule' && <Calendar />}
          </Modal>
        )}
      </div>
    );
  }
}
