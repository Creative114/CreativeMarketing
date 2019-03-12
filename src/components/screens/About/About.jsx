import React, { Component } from "react";
import Splash from "../../shared/Splash";
import Values from "../../shared/Values";
import Careers from "../../shared/Careers";
import Team from "../../shared/Team";
import Footer from "../../shared/Footer";
import Helmet from "react-helmet";
import Modal from "../../shared/Modal";
import StartNowForm from "../../shared/StartNowForm";

export default class About extends Component {
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
            { name: "description", content: "About Page for Creative114" },
            { property: "og:type", content: "website" },
            {
              property: "og:title",
              content: "Brand Engagement, Marketing, Design"
            },
            { property: "og:url", content: "http://creative114.com" }
          ]}
        />
        <Splash type="about" title="About" toggleModal={this.toggleModal} />
        <Team />
        <Values />
        <Careers />
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
