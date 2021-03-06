import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Column, Row } from '../../theme';
import formSideImg from '../../assets/form_popup_image.jpg';

const Wrapper = styled.div`
  width: auto;
  // max-width: 380px;
  max-width: 800px;
  height: auto;
  border-radius: 4px;
  background-color: #ffffff;
  z-index: 10000001;

  @media (max-width: 920px) {
    margin: 0 20px 100px 20px;
  }
`;

const StyledColumn = styled(Column)`
  width: 90%;
  margin: 1.5em;
`;

const ImageColumn = styled(Column)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 300px;

  @media (max-width: 500px) {
    width: 225px;
    margin-top: 2em;
  }
`;

export default class LaunchFormPopup extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';

    const script1 = document.createElement('script');
    script1.src = 'https://code.jquery.com/jquery-3.4.1.min.js';

    document.body.appendChild(script);
    document.body.appendChild(script1);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        this.getForm();
      }
    });
  }

  componentDidUpdate(prevProps) {
    const { submitFormVisible } = this.props;
    if (prevProps.submitFormVisible !== submitFormVisible) {
      this.getForm();
    }
  }

  getForm = () => {
    const { submitFormVisible, handleSubmitFormVisible, handleAuth, toggleModal } = this.props;

    if (submitFormVisible) {
      document.getElementById('hubspotFormHeaderPopup').innerHTML = '';
      window.hbspt.forms.create({
        portalId: '5644251',
        formId: '4364a36f-ea48-4d24-9c39-75ddf13d247e',
        target: '#hubspotFormHeaderPopup',
        onFormSubmitted: () => {
          handleSubmitFormVisible(false);
          handleAuth();
          toggleModal();
        },
      });
    }
  };

  render() {
    const { submitFormVisible } = this.props;

    // return <Wrapper>{submitFormVisible && <StyledColumn id="hubspotFormHeaderPopup" />}</Wrapper>;
    return (
      <Wrapper>
        <Row>
          <ImageColumn>
            <StyledColumn>
              <Image src={formSideImg} />
            </StyledColumn>
          </ImageColumn>
          <Column>{submitFormVisible && <StyledColumn id="hubspotFormHeaderPopup" />}</Column>
        </Row>
      </Wrapper>
    );
  }
}

LaunchFormPopup.propTypes = {
  submitFormVisible: PropTypes.bool,
  handleSubmitFormVisible: PropTypes.func,
  handleAuth: PropTypes.func,
  toggleModal: PropTypes.func,
};
