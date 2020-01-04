import React, { Component } from "react";
import HomeSplash from "../../shared/HomeSplash";
import Story from "../../shared/Story";
import How from "../../shared/How";
import Testimonials from "../../shared/Testimonials";
import Footer from "../../shared/Footer";
import { withRouter } from "react-router-dom";
import Helmet from "react-helmet";
import Modal from "../../shared/Modal";
import FindYourStoryForm from "../../shared/FindYourStoryForm";
import Calendar from "../../shared/Calendar";
import Told from "../../shared/Told";
import Deliver from "../../shared/Deliver";
// import Supercharge from "../../shared/Supercharge";
import Elements from "../../shared/Elements";

class Home extends Component {
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
        <HomeSplash toggleModal={this.toggleModal} />
        <Story toggleModal={this.toggleModal} />
        <Told toggleModal={this.toggleModal} />
        <Deliver />
        <How toggleModal={this.toggleModal} />
        <Testimonials />
        <Elements />
        {/* <Supercharge toggleModal={this.toggleModal} /> */}
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

export default withRouter(Home);
