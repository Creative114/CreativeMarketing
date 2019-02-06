import React, { Component } from "react";
import HomeSplash from "../../shared/HomeSplash";
import Video from "../../shared/Video";
import Services from "../../shared/Services";
import Logos from "../../shared/Logos";
import Portfolio from "../../shared/Portfolio";
import Testimonials from "../../shared/Testimonials";
import Footer from "../../shared/Footer";
import { withRouter } from "react-router-dom";
import Helmet from "react-helmet";

class Home extends Component {
  render() {
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
        <HomeSplash type="home" />
        <Logos />
        <Video />
        <Services />
        <Portfolio type="home" navigate={this.props.history} />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Home);
