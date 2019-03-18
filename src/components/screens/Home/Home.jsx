import React, { Component } from "react";
import HomeSplash from "../../shared/HomeSplash";
import Story from "../../shared/Story";
import How from "../../shared/How";
import Logos from "../../shared/Logos";
import Portfolio from "../../shared/Portfolio";
import Testimonials from "../../shared/Testimonials";
import Footer from "../../shared/Footer";
import { withRouter } from "react-router-dom";
import Helmet from "react-helmet";
import Modal from "../../shared/Modal";
import StartNowForm from "../../shared/StartNowForm";

class Home extends Component {
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
        <HomeSplash type="home" toggleModal={this.toggleModal} />
        <Logos />
        <Story />
        <How toggleModal={this.toggleModal} />
        <Portfolio type="home" navigate={this.props.history} />
        <Testimonials />
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

export default withRouter(Home);
