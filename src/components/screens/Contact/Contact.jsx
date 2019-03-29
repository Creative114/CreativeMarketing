import React, { Component } from "react";
import Splash from "../../shared/Splash";
import Footer from "../../shared/Footer";
import Helmet from "react-helmet";
import ContactForm from "../../shared/ContactForm";
import Modal from "../../shared/Modal";
import StartNowForm from "../../shared/StartNowForm";

export default class Contact extends Component {
  state = {
    isOpen: false
  };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  redirect = () => {
    window.open("https://meetings.hubspot.com/jet", "_blank");
  };
  redirect;
  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Helmet
          title="Our Team | Brand Engagement, Marketing, Design"
          meta={[
            { name: "description", content: "Contact Page for Creative114" },
            { property: "og:type", content: "website" },
            {
              property: "og:title",
              content: "Brand Engagement, Marketing, Design"
            },
            { property: "og:url", content: "http://creative114.com" }
          ]}
        />
        <Splash
          type="contact"
          title="Contact"
          src="https://player.vimeo.com/external/320616573.hd.mp4?s=e3fb81e04f5a50ece286dee153b5d1a8166cc62f&profile_id=169"
          toggleModal={this.toggleModal}
          redirect={this.redirect}
          text="We are excited at the opportunity to serve you. Please check below for a few different ways to connect with us. We would love to hear from you. If you would like to schedule a call or grab a cup of coffee with Jet - please click on this link:"
        />
        <ContactForm />
        <Footer toggleModal={this.toggleModal} />
        {isOpen && (
          <Modal show={isOpen} togglemodal={this.toggleModal}>
            <StartNowForm />
          </Modal>
        )}
      </div>
    );
  }
}
