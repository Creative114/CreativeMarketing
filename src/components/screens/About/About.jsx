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
        <Splash
          type="about"
          title="About"
          text=" We are a creative storytelling solution that will empower your brand to create, connect and cultivate your targeted audience. We partner with you to create a compelling and emotionally engaging storytelling through video, website and content creation."
          toggleModal={this.toggleModal}
          src="https://player.vimeo.com/external/320613023.hd.mp4?s=e6381ef87a4e840aadcea5ae80381210ae9177b8&profile_id=175"
        />
        <Team />
        <Values />
        <Careers />
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
