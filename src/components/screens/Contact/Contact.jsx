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
        <Splash type="contact" title="Contact" toggleModal={this.toggleModal} />
        <ContactForm />
        <Footer />
        {isOpen && (
          <Modal show={isOpen} togglemodal={this.toggleModal}>
            <StartNowForm />
          </Modal>
        )}
      </div>
    );
  }
}
