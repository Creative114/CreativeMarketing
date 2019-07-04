import React, { Component } from "react";
import Splash from "../../shared/Splash";
import Helmet from "react-helmet";
import Modal from "../../shared/Modal";
import FindYourStoryForm from "../../shared/FindYourStoryForm";
import Apply from "../../shared/Apply";
import Footer from "../../shared/Footer";
import Posts from "../../shared/Posts";
import NonProfitForm from "../../shared/NonProfitForm";
import Calendar from "../../shared/Calendar";

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
          title="Bigger Than a Hashtag"
          text="Our clients are incredible. We started the #shareyourimpact movement to spread awareness and showcase the good they are doing. It’s a way for us to give more to our clients, our community, our people, and our world. Be inspired as you follow #shareyourimpact on social media!"
          toggleModal={this.toggleModal}
          src="https://player.vimeo.com/external/320619144.hd.mp4?s=58bb391b41ba251e391116c5e3d21462f96eba5a&profile_id=169"
        />
        <Posts posts={posts} />
        <Apply
          title="Apply"
          text="Each year we feature four outstanding non-profit organizations as part of our #shareyourimpact movement. If you would like your organization to be considered as one of these non-profits, please fill out the simple form below to apply."
          toggleModal={this.toggleModal}
          type="impact"
        />
        <Footer />
        {isOpen && (
          <Modal show={isOpen} togglemodal={this.toggleModal}>
            {type === "story" && <FindYourStoryForm />}
            {type === "nonprofit" && <NonProfitForm />}
            {type === "schedule" && <Calendar />}
          </Modal>
        )}
      </div>
    );
  }
}

export default Impact;
