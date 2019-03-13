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
          "Hosted at the Tropicana Field in St Petersburg, Night of Hope was one of the biggest event in the tampa bay welcoming over 20,000 people to see Tim Tebow, Kari Jobe, Mack Brock, Shannon Estee and Dustin LaChance.",
        type: "right",
        img: casestudy1
      },
      {
        title: "Mission City Church",
        description:
          "Growing church located in Largo Fl pursues its mission to help people find and follow Jesus. They create events such as easter egg drops, halloween fair, and conferences inviting Tim Tebow's mom (Pam Tebow), Trip Lee (Famous Rapper), and Clayton Jennings.",
        type: "left",
        img: casestudy3
      },
      {
        title: "Collective Genuis",
        description:
          "The top notch Mastermind for the nation's Elite Real Estate investors host quaterly events in Florida and San Diego. The top 5 percent REI meet to connect, collaborate, lend and borrow money from each other, systematize inefficiencies, share inventory sources, and create joint venture on real estate deals.",
        type: "right",
        img: casestudy2
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
          text="We are more than a video production, design or web development
          agency. We are in the business of solving problems. We work to craft
          and tell your stories with emotions and creativity. Our primary
          purpose is to empower your business with what we call the three C's:
          Create, Connect and Cultivate you brand."
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
