import React, { Component } from "react";
import Splash from "../../shared/Splash";
import Values from "../../shared/Values";
import Apply from "../../shared/Apply";
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
          text="Most Businesses struggle to be interesting and relatable. We have a process that identifies, highlights and conveys the emotional impact of the good that they do so they can tell compelling and engaging stories that will generate goosebumps and ROI for their business."
          toggleModal={this.toggleModal}
          src="https://player.vimeo.com/external/320613023.hd.mp4?s=e6381ef87a4e840aadcea5ae80381210ae9177b8&profile_id=175"
        />
        <Team />
        <Values />
        <Apply
          title="Our team is growing!"
          text="We're looking for self-starters, go-getters, and those passionate
          about joining a creative force for good. Currently, we're seeking
          content creators, designers, and programmers."
        />
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
