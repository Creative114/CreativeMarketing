import React, { Component } from "react";
import Splash from "../../shared/Splash";
import Helmet from "react-helmet";
import Modal from "../../shared/Modal";
import StartNowForm from "../../shared/StartNowForm";

class Impact extends Component {
  state = {
    isOpen: false
  };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { isOpen } = this.state;
    // const { posts } = this.props;

    return (
      <div>
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
        <Splash type="impact" title="Impact" toggleModal={this.toggleModal} />
        {isOpen && (
          <Modal show={isOpen} togglemodal={this.toggleModal}>
            <StartNowForm />
          </Modal>
        )}
      </div>
    );
  }
}

export default Impact;
