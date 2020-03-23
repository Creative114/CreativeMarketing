import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Column } from '../../theme';

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 4px;
  padding: 50px 0;
`;

const StyledColumn = styled(Column)`
  width: 80%;
  margin: 0 auto;
`;

export default class ShareForm extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';

    const script1 = document.createElement('script');
    script1.src = 'https://code.jquery.com/jquery-3.4.1.min.js';

    document.body.appendChild(script);
    document.body.appendChild(script1);

    script.addEventListener('load', () => {
      if (window.hbspt) this.getForm();
    });
  }

  componentDidUpdate(prevProps) {
    const { submitFormVisible } = this.props;

    if (prevProps.submitFormVisible !== submitFormVisible) {
      if (window.hbspt) this.getForm();
    }
  }

  getForm() {
    const { submitFormVisible, handleSubmitFormVisible, handleAuth } = this.props;
    document.getElementById('hubspotFormFooter').innerHTML = '';

    if (submitFormVisible) {
      window.hbspt.forms.create({
        portalId: '5644251',
        formId: '4364a36f-ea48-4d24-9c39-75ddf13d247e',
        target: '#hubspotFormFooter',
        onFormSubmitted: () => {
          handleSubmitFormVisible(false);
          handleAuth();
        },
      });
    } else {
      window.hbspt.forms.create({
        portalId: '5644251',
        formId: '611c1bb0-6110-4379-8cab-15b6f79c78bf',
        target: '#hubspotFormFooter',
        onFormSubmitted: () => {},
      });
    }
  }

  render() {
    return (
      <Wrapper>
        <StyledColumn>
          <div id="hubspotFormFooter" />
        </StyledColumn>
      </Wrapper>
    );
  }
}

ShareForm.propTypes = {
  submitFormVisible: PropTypes.bool,
  handleSubmitFormVisible: PropTypes.func,
  handleAuth: PropTypes.func,
};
