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

class Work extends Component {
  render() {
    const { recentwork } = this.props;
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
        img: casestudy2
      },
      {
        title: "Collective Genuis",
        description:
          "The top notch Mastermind for the nation's Elite Real Estate investors host quaterly events in Florida and San Diego. The top 5 percent REI meet to connect, collaborate, lend and borrow money from each other, systematize inefficiencies, share inventory sources, and create joint venture on real estate deals.",
        type: "right",
        img: casestudy3
      }
    ];
    return (
      <div>
        <Splash type="work" title="Work" img={splash} />
        <Portfolio />
        <Recent recentwork={recentwork} />
        <CaseStudies casestudies={casestudies} navigate={this.props.history} />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Work);
