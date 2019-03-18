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
          title="#ShareYourImpact"
          text="#ShareYourImpact is a movement that was birthed out of our mission to showcase the emotional impact of the good that you do. It is ingrained in our culture and our DNA. Serving and helping others achieve their dreams is one of the way that we bring more meaning to our work. So we give back to the local community, the nation and overseas. Follow along with our impact journey!!!"
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
