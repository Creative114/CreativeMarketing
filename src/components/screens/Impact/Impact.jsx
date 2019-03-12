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
        <Splash
          type="impact"
          title="Impact"
          text="Coming soon."
          toggleModal={this.toggleModal}
          src="https://player.vimeo.com/external/320619144.hd.mp4?s=58bb391b41ba251e391116c5e3d21462f96eba5a&profile_id=169"
        />
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
