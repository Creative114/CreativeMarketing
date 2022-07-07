import React, { Component } from 'react';

import styled from 'styled-components';
import Footer from '../../shared/Footer';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import Modal from '../../shared/Modal';
import Calendar from '../../shared/Calendar';
import LaunchFormPopup from '../../shared/LaunchFormPopup';
import SiiSplash from '../../shared/SiiSplash';
import SiiStory from '../../shared/SiiStory';
import SiiInvestors from '../../shared/SiiInvestors';
import SiiLogos from '../../shared/SiiLogos';
import SiiTypes from '../../shared/SiiTypes';
import SiiCheck from '../../shared/SiiCheck';
import SiiWait from '../../shared/SiiWait';
import SiiForm from '../../shared/SiiForm';
import SiiPricing from '../../shared/SiiPricing';
import SiiCommit from '../../shared/SiiCommit';

const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
`;

class Sii60 extends Component {
  constructor(props) {
    super(props);
    this.pricingScroll = React.createRef();
    this.scrollToContent = this.scrollToContent.bind(this);

    const auth = localStorage.getItem('authorized') || false;
    const isAuthed = !!auth;

    this.state = {
      isOpen: false,
      isAuthed: isAuthed,
      submitFormVisible: !isAuthed,
      type: 'sii',
    };
  }

  scrollToContent(content) {
    this.pricingScroll.current.scrollIntoView({ behavior: 'smooth' });
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
            { name: 'description', content: 'Sell It In 60 Page for Creative114' },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:title',
              content: 'Brand Engagement, Marketing, Design',
            },
            { property: 'og:url', content: 'http://creative114.com' },
          ]}
        />
        <SiiSplash
          toggleModal={this.toggleModal}
          handleAuth={this.handleAuth}
          handleSubmitFormVisible={this.handleSubmitFormVisible}
          isAuthed={isAuthed}
          submitFormVisible={submitFormVisible}
          scrollToContent={this.scrollToContent}
        />
        <SiiStory toggleModal={this.toggleModal} isAuthed={isAuthed} scrollToContent={this.scrollToContent} />
        <SiiInvestors toggleModal={this.toggleModal} isAuthed={isAuthed} />
        <StyledRow>
          <SiiLogos />
        </StyledRow>
        <SiiTypes></SiiTypes>
        <SiiCheck toggleModal={this.toggleModal} isAuthed={isAuthed} />
        <SiiWait></SiiWait>
        <SiiPricing scrollToContent={this.scrollToContent}></SiiPricing>
        <SiiCommit toggleModal={this.toggleModal} isAuthed={isAuthed} />
        {/* <SiiForm toggleModal={this.toggleModal} isAuthed={isAuthed}></SiiForm> */}
        <SiiForm ref={{ toggleModal: this.toggleModal, pricingScroll: this.pricingScroll }}></SiiForm>
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

export default withRouter(Sii60);
