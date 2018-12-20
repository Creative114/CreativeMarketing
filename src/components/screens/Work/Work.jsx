import React, { Component } from "react";
import Splash from "../../shared/Splash";
import Portfolio from "../../shared/Portfolio";
import Recent from "../../shared/Recent";
import Footer from "../../shared/Footer";
import CaseStudies from "../../shared/CaseStudies";
import { withRouter } from "react-router-dom";
import splash from "../../../assets/workSplash.jpg";

class Work extends Component {
  render() {
    const { casestudies, recentwork } = this.props;
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
