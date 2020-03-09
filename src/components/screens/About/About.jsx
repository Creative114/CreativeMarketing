import React, { Component } from "react";
import Splash from "../../shared/Splash";
import Values from "../../shared/Values";
import Apply from "../../shared/Apply";
import Team from "../../shared/Team";
import Footer from "../../shared/Footer";
import Helmet from "react-helmet";
import Modal from "../../shared/Modal";
import FindYourStoryForm from "../../shared/FindYourStoryForm";
import ApplyForm from "../../shared/ApplyForm";
import Calendar from "../../shared/Calendar";
import aboutimg from "../../../assets/About.jpg";

export default class About extends Component {
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
          text="Our team becomes an extension of your team. Collaborate with creative, diverse storytellers who know how to capture your vision, craft inspiring words, and create a compelling visual narrative that will captivate your audience."
          mobileText="Our team becomes an extension of your team. We capture your vision, craft inspiring words, and create a compelling visual narrative that will captivate your audience"
          toggleModal={this.toggleModal}
          // src="https://player.vimeo.com/external/320613023.hd.mp4?s=e6381ef87a4e840aadcea5ae80381210ae9177b8&profile_id=175"
          img={aboutimg}
        />
        <Team />
        <Values />
        <Apply
          toggleModal={this.toggleModal}
          title="Our team is growing!"
          text="We're looking for self-starters, go-getters, and those passionate
          about joining a creative force for good. Currently, we're seeking
          content creators, designers, and programmers."          
        />
        <Footer toggleModal={this.toggleModal} />
        {isOpen && (
          <Modal show={isOpen} togglemodal={this.toggleModal}>
            {type === "story" && <FindYourStoryForm />}
            {type === "apply" && <ApplyForm />}
            {type === "schedule" && <Calendar />}
          </Modal>
        )}
      </div>
    );
  }
}
