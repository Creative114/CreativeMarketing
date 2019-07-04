import React, { Component } from "react";
import Splash from "../../shared/Splash";
import Footer from "../../shared/Footer";
import Helmet from "react-helmet";
import ContactForm from "../../shared/ContactForm";
import Modal from "../../shared/Modal";
import FindYourStoryForm from "../../shared/FindYourStoryForm";
import Calendar from "../../shared/Calendar";

export default class Contact extends Component {
  state = {
    isOpen: false,
    type: null
  };

  toggleModal = type => {
    this.setState({ isOpen: !this.state.isOpen, type });
  };

  render() {
    const { isOpen, type } = this.state;
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
          title="Let’s Explore Your Story"
          src="https://player.vimeo.com/external/320616573.hd.mp4?s=e3fb81e04f5a50ece286dee153b5d1a8166cc62f&profile_id=169"
          toggleModal={this.toggleModal}
          redirect={this.redirect}
          text="We would love to hear from you."
        />

        <ContactForm />

        <Footer toggleModal={this.toggleModal} />
        {isOpen && (
          <Modal show={isOpen} togglemodal={this.toggleModal}>
            {type === "story" && <FindYourStoryForm />}
            {type === "schedule" && <Calendar />}
          </Modal>
        )}
      </div>
    );
  }
}
