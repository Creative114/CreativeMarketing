import React, { Component } from "react";
import Splash from "../../shared/Splash";
import Portfolio from "../../shared/Portfolio";
import Recent from "../../shared/Recent";
import Footer from "../../shared/Footer";
import CaseStudies from "../../shared/CaseStudies";
import { withRouter } from "react-router-dom";
import splash from "../../../assets/workSplash.jpg";
import Helmet from "react-helmet";
import Modal from "../../shared/Modal";
import FindYourStoryForm from "../../shared/FindYourStoryForm";
import Calendar from "../../shared/Calendar";
import josh from "../../../assets/josh_case.png";
import tebow from "../../../assets/tebow_case.png";
import jason from "../../../assets/jason_case.png";

class Work extends Component {
  state = {
    isOpen: false,
    type: ""
  };

  toggleModal = type => {
    this.setState({ isOpen: !this.state.isOpen, type });
  };

  render() {
    const { recentwork } = this.props;
    const { isOpen, type } = this.state;
    const casestudies = [
      {
        title: "Collective Genius",
        description:
          "COLLECTIVE GENIUS is a renowned mastermind for an elite group of investors throughout the country and the world. Their company is comprised of the top 5% of the nation’s investors. Creative114 captured powerful presentations at their quarterly meetings and produced videos and graphic design that they use to promote and grow their business.",
        type: "left",
        img: jason
      },
      {
        title: "Movement 2819",
        description:
          "MOVEMENT 2819 is a non-profit based in Tampa Bay with the mission to share the teaching of the Gospel. They hired Creative114 to develop compelling video content to advertise their 2018 Night of Hope event, as well as craft a video recap of the night. The event drew over 20,000 people and featured notable Christian celebrities like Tim Tebow, Kari Jobe, Shannon Estee, and Mack Brock. Founder, Dustin Lachance, who organized the event, was beyond thrilled with the results.",
        type: "right",
        img: tebow
      },
      {
        title: "Mission City Church",
        description:
          "MISSION CITY CHURCH, located in Largo, Florida, works on a consistent basis with Creative114 to capture weekly announcements, create story videos, and produce conference recaps and church events. creative114 has produced videos for their events with notable featured guests such as Pam Tebow, Trip Lee, Clayton Jennings, and Perry Noble. Mission City Church aims to be the hands, feet, and voice of Jesus as they deliver hope in the Tampa Bay area. We are grateful for the opportunity to help MCC execute their mission and vision.",
        type: "left",
        img: josh
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
          title="More Than Work"
          img={splash}
          src="https://player.vimeo.com/external/320615958.hd.mp4?s=ef079df32a46b67d823275083675210fb601a354&profile_id=169"
          toggleModal={this.toggleModal}
          text="We deliver far more than beautiful, cinematic work. Our passion is telling your inspiring, moving, and emotional stories through the art of video. Our greatest payment comes in the form of laughter, tears, applause, and goosebumps."
        />
        <Portfolio />
        <Recent recentwork={recentwork} />
        <CaseStudies casestudies={casestudies} navigate={this.props.history} />
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

export default withRouter(Work);
