import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Splash from '../../shared/Splash';
import Content from '../../shared/Content';
import Footer from '../../shared/Footer';

class Post extends Component {
  render() {
    const { bannerImage, title, text } = this.props;
    return (
      <>
        <Splash type="casestudy" img={bannerImage} />
        <Content title={title} description={text} />
        <Footer />
      </>
    );
  }
}

Post.propTypes = {
  bannerImage: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Post;
