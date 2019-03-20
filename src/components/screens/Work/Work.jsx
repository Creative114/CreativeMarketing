import React, { Component } from "react";
import Splash from "../../shared/Splash";
import Portfolio from "../../shared/Portfolio";
import Recent from "../../shared/Recent";
import Footer from "../../shared/Footer";
import CaseStudies from "../../shared/CaseStudies";
import { withRouter } from "react-router-dom";
import splash from "../../../assets/workSplash.jpg";
import casestudy1 from "../../../assets/casestudy1.jpg";
import casestudy2 from "../../../assets/casestudy2.jpg";
import casestudy3 from "../../../assets/casestudy3.jpg";
import Helmet from "react-helmet";
import Modal from "../../shared/Modal";
import StartNowForm from "../../shared/StartNowForm";

class Work extends Component {
  state = {
    isOpen: false
  };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { recentwork } = this.props;
    const { isOpen } = this.state;
    const casestudies = [
      {
        title: "Movement 2819",
        description:
          "Movement 2819 is a non-profit hosting large scale events called Night of Hope. The first event was hosted at the Tropicana Field and attracted over 20K people. Special guests included: Tim Tebow, Kari Jobe, Mack Brock, Shannon Estee and Dustin LaChance.",
        type: "right",
        img: casestudy1
      },
      {
        title: "Mission City Church",
        description:
          "Mission City is a church in Largo Florida. Their mission is to help people find and follow Jesus. They create several events throughout the year including conferences featuring Pam Tebow, Trip Lee, Clayton Jennings and Perry Noble.",
        type: "left",
        img: casestudy2
      },
      {
        title: "Collective Genius",
        description:
          "CG is a top notch Mastermind for the nation's top 5 % Real Estate investors. They host quarterly events in Florida and San Diego. They meet to connect, lend and borrow money from each other, systematize inefficiencies, and create joint venture on real estate deals.",
        type: "right",
        img: casestudy3
      }
    ];
    return (
      <div>
        <Helmet
          title="Our Work | Brand Engagement, Marketing, Design"
          meta={[
            { name: "description", content: "Work Page for Creative114" },
            { property: "og:type", content: "website" },
            {
              property: "og:title",
              content: "Brand Engagement, Marketing, Design"
            },
            { property: "og:url", content: "http://creative114.com" }
          ]}
        />
        <Splash
          type="work"
          title="Work"
          img={splash}
          src="https://player.vimeo.com/external/320615958.hd.mp4?s=ef079df32a46b67d823275083675210fb601a354&profile_id=169"
          toggleModal={this.toggleModal}
          text="We are more than a video production company. We are in the business of creative storytelling and problem solving. We work to craft and tell your stories with emotions and creativity. Our primary purpose is to empower your business to engage, entertain, and excite your targeted audience."
        />
        <Portfolio />
        <Recent recentwork={recentwork} />
        <CaseStudies casestudies={casestudies} navigate={this.props.history} />
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

export default withRouter(Work);
