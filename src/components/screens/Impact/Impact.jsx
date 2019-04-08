import React, { Component } from "react";
import Splash from "../../shared/Splash";
import Helmet from "react-helmet";
import Modal from "../../shared/Modal";
import FindYourStoryForm from "../../shared/FindYourStoryForm";
import Apply from "../../shared/Apply";
import Footer from "../../shared/Footer";
import Posts from "../../shared/Posts";
import NonProfitForm from "../../shared/NonProfitForm";

const posts = [
  {
    title: "Tampa Bay Startup Week",
    text: "",
    video: "https://fast.wistia.com/embed/medias/gly35kaelh/swatch"
  },
  {
    title: "Night to shine",
    text: "",
    video: "https://fast.wistia.com/embed/medias/fryc5uagap/swatch"
  }
];

class Impact extends Component {
  state = {
    isOpen: false,
    type: ""
  };

  toggleModal = type => {
    this.setState({ isOpen: !this.state.isOpen, type });
  };

  render() {
    const { isOpen, type } = this.state;

    return (
      <div style={{ height: "100%" }}>
        <Helmet
          title="Our Impact | Brand Engagement, Marketing, Design"
          meta={[
            { name: "description", content: "Impact Page for Creative114" },
            { property: "og:type", content: "website" },
            {
              property: "og:title",
              content: "Brand Engagement, Marketing, Design"
            },
            { property: "og:url", content: "http://creative114.com" }
          ]}
        />
        <Splash
          type="impact"
          title="#ShareYourImpact"
          text="#ShareYourImpact is a movement that was birthed out of our mission to showcase the emotional impact of the good that you do. It is ingrained in our culture and our DNA. Serving and helping others achieve their dreams is one of the way that we bring more meaning to our work. So we give back to the local community, the nation and overseas. Follow along with our impact journey!!!"
          toggleModal={this.toggleModal}
          src="https://player.vimeo.com/external/320619144.hd.mp4?s=58bb391b41ba251e391116c5e3d21462f96eba5a&profile_id=169"
        />
        <Posts posts={posts} />
        <Apply
          title="Apply to #ShareYourImpact"
          text="We're looking to select 4 non-profit organizations every year to tell their impact stories. If you would like to be considered for this feature, please fill out the form below to apply."
          toggleModal={this.toggleModal}
        />
        <Footer />
        {isOpen && (
          <Modal show={isOpen} togglemodal={this.toggleModal}>
            {type === "story" && <FindYourStoryForm />}
            {type === "nonprofit" && <NonProfitForm />}
          </Modal>
        )}
      </div>
    );
  }
}

export default Impact;
