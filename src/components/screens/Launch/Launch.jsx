import React, { Component } from "react";
import LaunchSplash from "../../shared/LaunchSplash";
import Logos from "../../shared/Logos";
import Testimonials from "../../shared/Testimonials";
import Footer from "../../shared/Footer";
import { withRouter } from "react-router-dom";
import Helmet from "react-helmet";
import Modal from "../../shared/Modal";
import FindYourStoryForm from "../../shared/FindYourStoryForm";

class Landing extends Component {
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
          title="Creative114 | Brand Engagement, Marketing, Design"
          meta={[
            { name: "description", content: "Home Page for Creative114" },
            { property: "og:type", content: "website" },
            {
              property: "og:title",
              content: "Brand Engagement, Marketing, Design"
            },
            { property: "og:url", content: "http://creative114.com" }
          ]}
        />
        <LaunchSplash toggleModal={this.toggleModal} />
        <Logos />
        <Testimonials />
        <Footer toggleModal={this.toggleModal} />
        {isOpen && (
          <Modal show={isOpen} togglemodal={this.toggleModal}>
            <FindYourStoryForm />
          </Modal>
        )}
      </div>
    );
  }
}

export default withRouter(Landing);
