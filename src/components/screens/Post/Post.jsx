import React, { Component } from "react";
import Splash from "../../shared/Splash";
import Content from "../../shared/Content";
import Footer from "../../shared/Footer";

class Post extends Component {
  render() {
    const { bannerImage, title, text } = this.props;
    return (
      <div>
        <Splash type="casestudy" img={bannerImage} />
        <Content title={title} description={text} />
        <Footer />
      </div>
    );
  }
}

export default Post;
