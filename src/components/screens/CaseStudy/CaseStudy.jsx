import React, { Component } from "react";
import Splash from "../../shared/Splash";
import Content from "../../shared/Content";
import Footer from "../../shared/Footer";
import Videos from "./components/Videos";
import casestudyhero1 from "../../../assets/casestudyhero1.jpg";
import casestudyhero2 from "../../../assets/casestudyhero2.jpg";
import casestudyhero3 from "../../../assets/casestudyhero3.jpg";
import { withRouter } from "react-router-dom";

class CaseStudy extends Component {
  state = {
    name: "",
    data: { title: "", description: "", image: "", videos: [] }
  };

  componentDidMount() {
    let name = this.props.match.params.name.split(":")[1];
    this.setState({ name }, () => {
      this.getData();
    });
  }

  getData = () => {
    const data = {
      movement2819: {
        image: casestudyhero1,
        title: "Movement 2819",
        description:
          "Movement 2819 is a non-profit hosting large scale events called Night of Hope. The first event was hosted at the Tropicana Field and attracted over 20K people. Special guests included: Tim Tebow, Kari Jobe, Mack Brock, Shannon Estee and Dustin LaChance.",
        videos: [
          "https://fast.wistia.com/embed/medias/bdud912pe5/swatch",
          "https://fast.wistia.com/embed/medias/ewz4lmrc7o/swatch",
          "https://fast.wistia.com/embed/medias/zxnxd3awth/swatch",
          "https://fast.wistia.com/embed/medias/n4c629c2ii/swatch",
          "https://fast.wistia.com/embed/medias/tiqkjzop22/swatch"
        ]
      },
      missioncitychurch: {
        image: casestudyhero2,
        title: "Mission City Church",
        description:
          "Mission City is a church in Largo Florida. Their mission is to help people find and follow Jesus. They create several events throughout the year including conferences featuring Pam Tebow, Trip Lee, Clayton Jennings and Perry Noble.",
        videos: [
          "https://fast.wistia.com/embed/medias/fwtaf48s4d/swatch",
          "https://fast.wistia.com/embed/medias/hmrpeyf7rx/swatch",
          "https://fast.wistia.com/embed/medias/k3qm1g877n/swatch",
          "https://fast.wistia.com/embed/medias/jsdmuoe293/swatch",
          "https://fast.wistia.com/embed/medias/75qdcr5joj/swatch"
        ]
      },
      collectivegenius: {
        image: casestudyhero3,
        title: "Collective Genius",
        description:
          "CG is a top notch Mastermind for the nation's top 5 % Real Estate investors. They host quarterly events in Florida and San Diego. They meet to connect, lend and borrow money from each other, systematize inefficiencies, and create joint venture on real estate deals.",
        videos: [
          "https://fast.wistia.com/embed/medias/dhmx0u7je8/swatch",
          "https://fast.wistia.com/embed/medias/5eobdschy8/swatch",
          "https://fast.wistia.com/embed/medias/77hmesq70g/swatch",
          "https://fast.wistia.com/embed/medias/fo5lwtv2m7/swatch",
          "https://fast.wistia.com/embed/medias/5n6a1er6tv/swatch"
        ]
      }
    };
    let query = this.state.name;
    let dataSet = null;

    switch (query) {
      case "movement2819":
        dataSet = data.movement2819;
        break;
      case "missioncitychurch":
        dataSet = data.missioncitychurch;
        break;
      case "collectivegenius":
        dataSet = data.collectivegenius;
        break;
      default:
        dataSet = data.movement2819;
    }
    this.setState({ data: dataSet });
    return dataSet;
  };

  render() {
    const { title, description, image, videos } = this.state.data;
    if (this.state.data) {
      return (
        <div>
          <Splash type="casestudy" img={image && image} />
          <Content
            title={title && title}
            description={description && description}
          />
          <Videos videos={videos && videos} />
          <Footer />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(CaseStudy);
