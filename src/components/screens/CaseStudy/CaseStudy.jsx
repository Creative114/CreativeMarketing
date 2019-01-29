import React, { Component } from "react";
import Splash from "../../shared/Splash";
import Content from "../../shared/Content";
import Footer from "../../shared/Footer";
import Videos from "./components/Videos";
import casestudy1 from "../../../assets/casestudy1.jpg";
import { withRouter } from "react-router-dom";

class CaseStudy extends Component {
  state = {
    name: "",
    data: null
  };

  componentDidMount() {
    let name = this.props.match.params.name.split("=")[1];
    this.setState({ name }, () => {
      this.getData();
    });
  }

  getData = () => {
    const data = {
      movement2819: {
        image: casestudy1,
        title: "Movement 2819",
        description: "Test",
        videos: [
          "https://player.vimeo.com/external/310906235.hd.mp4?s=1059f964466500c12e6a2ec389371adc498e3335&profile_id=175",
          "https://player.vimeo.com/external/290870260.hd.mp4?s=961dd96af0a1e6ca9e60a37ab82d47ed9f862ffd&profile_id=175",
          "https://player.vimeo.com/external/301830720.hd.mp4?s=88dd5b354107217044684e064850ffe4a020a506&profile_id=169",
          "https://player.vimeo.com/external/302947248.hd.mp4?s=44c33ee912d83e643cb35784f99aa751f371e52d&profile_id=169",
          "https://player.vimeo.com/external/304399575.hd.mp4?s=1eac23e38eb14cf832c60e739dae543874dd9cf8&profile_id=169"
        ]
      }
    };
    let query = this.state.name;
    let dataSet = null;
    switch (query) {
      case "movement2819":
        dataSet = data.movement2819;
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
          <Splash type="casestudy" img={image} />
          <Content title={title} description={description} />
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
