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
          "https://player.vimeo.com/external/310906235.hd.mp4?s=1059f964466500c12e6a2ec389371adc498e3335&profile_id=175",
          "https://player.vimeo.com/external/302617339.hd.mp4?s=8bfeff0be5ce98ff7f2f6153a3d9cc929434a7a5&profile_id=175",
          "https://player.vimeo.com/external/301830720.hd.mp4?s=88dd5b354107217044684e064850ffe4a020a506&profile_id=169",
          "https://player.vimeo.com/external/302947248.hd.mp4?s=44c33ee912d83e643cb35784f99aa751f371e52d&profile_id=169",
          "https://player.vimeo.com/external/304399575.hd.mp4?s=1eac23e38eb14cf832c60e739dae543874dd9cf8&profile_id=169"
        ]
      },
      missioncitychurch: {
        image: casestudyhero2,
        title: "Mission City Church",
        description:
          "Mission City is a church in Largo Florida. Their mission is to help people find and follow Jesus. They create several events throughout the year including conferences featuring Pam Tebow, Trip Lee, Clayton Jennings and Perry Noble.",
        videos: [
          "https://player.vimeo.com/external/310906652.hd.mp4?s=d676ab463722d9a973757ba06dd075fed93e5b25&profile_id=175",
          "https://player.vimeo.com/external/302617339.hd.mp4?s=8bfeff0be5ce98ff7f2f6153a3d9cc929434a7a5&profile_id=175",
          "https://player.vimeo.com/external/289283783.hd.mp4?s=87414942eae7d4e5d7a8dd63d9521c2bd734c57c&profile_id=169",
          "https://player.vimeo.com/external/260181613.hd.mp4?s=c2602f22c1a1b1724c517c6ef2a70b879f2310a2&profile_id=175",
          "https://player.vimeo.com/external/283278488.hd.mp4?s=0173efdd60f0619e941eb2215f05b8dcbeb30eb5&profile_id=175"
        ]
      },
      collectivegenius: {
        image: casestudyhero3,
        title: "Collective Genuis",
        description:
          "CG is a top notch Mastermind for the nation's top 5 % Real Estate investors. They host quarterly events in Florida and San Diego. They meet to connect, lend and borrow money from each other, systematize inefficiencies, and create joint venture on real estate deals.",
        videos: [
          "https://player.vimeo.com/external/310902761.hd.mp4?s=74f159e8b2cad7e8278a567321f1c6bff0db8eed&profile_id=169",
          "https://player.vimeo.com/external/295427548.hd.mp4?s=7be7dc55f62c5d4ad1a4c919eaa4b663966deef9&profile_id=169",
          "https://player.vimeo.com/external/295711245.hd.mp4?s=ddb46a1135e3f63d23be69c3f03e4099a85fc38c&profile_id=175",
          "https://player.vimeo.com/external/292961871.hd.mp4?s=e8c06f72dbc46d44057c05e06df2d523700d896f&profile_id=175",
          "https://player.vimeo.com/external/300342367.hd.mp4?s=95da8ea84f4667b82a8e53555f7a02489b49b5ea&profile_id=169"
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
      case "collectivegenuis":
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
