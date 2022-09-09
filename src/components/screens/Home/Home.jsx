import React, { Component } from 'react';

import HomeSplash from '../../shared/HomeSplash';
import Story from '../../shared/Story';
import How from '../../shared/How';
import Testimonials from '../../shared/Testimonials';
import Footer from '../../shared/Footer';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import Modal from '../../shared/Modal';
import FindYourStoryForm from '../../shared/FindYourStoryForm';
import Calendar from '../../shared/Calendar';
import Told from '../../shared/Told';
import Deliver from '../../shared/Deliver';
// import Elements from '../../shared/Elements';
// import TopBar from '../../shared/TopBar';
import TenXShare from '../../shared/TenXShare';
import Video from '../../shared/Video';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      type: '',
      vidSource: '',
    };
  }

  toggleModal = (type, vidSource) => {
    this.setState({ isOpen: !this.state.isOpen, type, vidSource });
  };

  render() {
    const { isOpen, type, vidSource } = this.state;
    return (
      <>
        <Helmet
          title="Creative114 | Brand Engagement, Marketing, Design"
          meta={[
            { name: 'description', content: 'Home Page for Creative114' },
            {
              name: 'keyword',
              content: 'Creative114, Brand, Marketing, Design',
            },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:title',
              content: 'Brand Engagement, Marketing, Design',
            },
            { property: 'og:url', content: 'http://creative114.com' },
          ]}
        />

        {/* <TopBar /> */}
        <HomeSplash toggleModal={this.toggleModal} />
        <Story toggleModal={this.toggleModal} />
        <Told toggleModal={this.toggleModal} />
        <Deliver toggleModal={this.toggleModal} />
        <How toggleModal={this.toggleModal} />
        <Testimonials />
        {/* <Elements /> */}
        <TenXShare toggleModal={this.toggleModal} />
        <Footer toggleModal={this.toggleModal} />
        {isOpen && (
          <Modal show={isOpen} togglemodal={this.toggleModal}>
            {type === 'story' && <FindYourStoryForm />}
            {type === 'schedule' && <Calendar />}
            {type === 'tenx' && <Video src="https://fast.wistia.com/embed/medias/4sgvuz8ssg/swatch" />}
            {type === 'videos' && <Video src={vidSource} />}
          </Modal>
        )}
      </>
    );
  }
}

export default withRouter(Home);
