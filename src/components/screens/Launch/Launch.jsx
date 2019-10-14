import React, { Component } from "react";
import LaunchSplash from "../../shared/LaunchSplash";
import Logos from "../../shared/Logos";
import Testimonials from "../../shared/Testimonials";
import Footer from "../../shared/Footer";
import { withRouter } from "react-router-dom";
import Helmet from "react-helmet";
import Modal from "../../shared/Modal";
import LaunchForm from "../../shared/LaunchForm";
import LaunchVideos from "../../shared/LaunchVideos";
import LaunchWhy from "../../shared/LaunchWhy";
import LaunchStory from "../../shared/LaunchStory";
import Share from "../../shared/Share";
import Calendar from "../../shared/Calendar";

class Landing extends Component {
  state = {
    isOpen: false,
    isAuthed: false,
    type: ""
  };

  componentDidMount() {
    let auth = localStorage.getItem("authorized") || false;
    let isAuthed;
    if (auth) {
      isAuthed = true;
    } else {
      isAuthed = false;
    }
    this.setState({ isAuthed });
  }

  toggleModal = type => {
    console.log("here");

    this.setState({ isOpen: !this.state.isOpen, type });
  };

  handleAuth = () => {
    localStorage.setItem("authorized", true);
    this.setState({ isAuthed: true });
  };

  render() {
    const { isOpen, isAuthed, type } = this.state;

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
        <LaunchSplash
          toggleModal={this.toggleModal}
          handleAuth={this.handleAuth}
          isAuthed={isAuthed}
        />
        <LaunchStory toggleModal={this.toggleModal} isAuthed={isAuthed} />
        <LaunchVideos isAuthed={isAuthed} toggleModal={this.toggleModal} />
        <LaunchWhy isAuthed={isAuthed} toggleModal={this.toggleModal} />
        <Testimonials type="launch" />
        <Logos />
        <Share />
        <Footer toggleModal={this.toggleModal} />
        {isOpen && (
          <Modal show={isOpen} togglemodal={this.toggleModal}>
            {type === "launch" && (
              <LaunchForm
                handleAuth={this.handleAuth}
                toggleModal={this.toggleModal}
              />
            )}
            {type === "schedule" && <Calendar />}
          </Modal>
        )}
      </div>
    );
  }
}

export default withRouter(Landing);
