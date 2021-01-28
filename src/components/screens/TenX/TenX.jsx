import React, { Component } from 'react';

import styled from 'styled-components';
import Footer from '../../shared/Footer';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import Modal from '../../shared/Modal';
import Calendar from '../../shared/Calendar';
import LaunchFormPopup from '../../shared/LaunchFormPopup';
import TenXSplash from '../../shared/TenXSplash';
import TenXStory from '../../shared/TenXStory';
import LaunchVideos from '../../shared/LaunchVideos';
import TenXWhy from '../../shared/TenXWhy';
import TenXTestimonials from '../../shared/TenXTestimonials';
import Logos from '../../shared/Logos';
import Share from '../../shared/Share';
// import Video from '../../shared/Video';

const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
`;

class Landing extends Component {
  constructor(props) {
    super(props);

    const auth = localStorage.getItem('authorized') || false;
    const isAuthed = !!auth;

    this.state = {
      isOpen: false,
      isAuthed: isAuthed,
      submitFormVisible: !isAuthed,
      type: 'tenx',
    };
  }

  toggleModal = (type) => {
    return this.setState({ isOpen: !this.state.isOpen, type });
  };

  handleAuth = () => {
    localStorage.setItem('authorized', true);
    this.setState({ isAuthed: true });
  };

  handleSubmitFormVisible = (value) => {
    this.setState({ submitFormVisible: value });
  };

  handleLightbox = (index) => {
    return this.setState({ isOpen: !this.state.isOpen, photoIndex: index });
  };

  render() {
    const { isOpen, isAuthed, type, submitFormVisible } = this.state;
    // const mobile = window.matchMedia('(max-width: 780px)');

    return (
      <>
        <Helmet
          title="Creative114 | Brand Engagement, Marketing, Design"
          meta={[
            { name: 'description', content: '10X Your Lead Generation Page for Creative114' },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:title',
              content: 'Brand Engagement, Marketing, Design',
            },
            { property: 'og:url', content: 'http://creative114.com' },
          ]}
        />
        <TenXSplash
          toggleModal={this.toggleModal}
          handleAuth={this.handleAuth}
          handleSubmitFormVisible={this.handleSubmitFormVisible}
          isAuthed={isAuthed}
          submitFormVisible={submitFormVisible}
        />
        <TenXStory toggleModal={this.toggleModal} isAuthed={isAuthed} />
        <LaunchVideos isAuthed={isAuthed} toggleModal={this.toggleModal} />
        <TenXWhy isAuthed={isAuthed} toggleModal={this.toggleModal} />
        <TenXTestimonials type="tenx" toggleModal={this.toggleModal} />
        <StyledRow>
          <Logos />
        </StyledRow>
        <Share
          handleAuth={this.handleAuth}
          handleSubmitFormVisible={this.handleSubmitFormVisible}
          submitFormVisible={submitFormVisible}
        />
        <Footer toggleModal={this.toggleModal} />
        {isOpen && (
          <Modal show={isOpen} togglemodal={this.toggleModal}>
            {type === 'launch' && (
              <LaunchFormPopup
                handleAuth={this.handleAuth}
                toggleModal={this.toggleModal}
                handleSubmitFormVisible={this.handleSubmitFormVisible}
                submitFormVisible={submitFormVisible}
              />
            )}
            {type === 'schedule' && <Calendar />}
          </Modal>
        )}
      </>
    );
  }
}

export default withRouter(Landing);
