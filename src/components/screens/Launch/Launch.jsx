import React, { Component } from 'react';

import styled from 'styled-components';
import LaunchSplash from '../../shared/LaunchSplash';
import Logos from '../../shared/Logos';
import Testimonials from '../../shared/Testimonials';
import Footer from '../../shared/Footer';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import Modal from '../../shared/Modal';
import LaunchVideos from '../../shared/LaunchVideos';
import LaunchWhy from '../../shared/LaunchWhy';
import LaunchStory from '../../shared/LaunchStory';
import Share from '../../shared/Share';
import Calendar from '../../shared/Calendar';
import LaunchFormPopup from '../../shared/LaunchFormPopup';

const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
`;

class Landing extends Component {
  constructor(props) {
    super(props);

    const auth = window.localStorage.getItem('authorized') || false;
    const isAuthed = !!auth;

    this.state = {
      isOpen: false,
      isAuthed: isAuthed,
      submitFormVisible: !isAuthed,
      type: '',
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

  render() {
    const { isOpen, isAuthed, type, submitFormVisible } = this.state;

    return (
      <>
        <Helmet
          title="Creative114 | Brand Engagement, Marketing, Design"
          meta={[
            { name: 'description', content: 'Home Page for Creative114' },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:title',
              content: 'Brand Engagement, Marketing, Design',
            },
            { property: 'og:url', content: 'http://creative114.com' },
          ]}
        />
        <LaunchSplash
          toggleModal={this.toggleModal}
          handleAuth={this.handleAuth}
          handleSubmitFormVisible={this.handleSubmitFormVisible}
          isAuthed={isAuthed}
          submitFormVisible={submitFormVisible}
        />
        <LaunchStory toggleModal={this.toggleModal} isAuthed={isAuthed} />
        <LaunchVideos isAuthed={isAuthed} toggleModal={this.toggleModal} />
        <LaunchWhy isAuthed={isAuthed} toggleModal={this.toggleModal} />
        <Testimonials type="launch" />
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
