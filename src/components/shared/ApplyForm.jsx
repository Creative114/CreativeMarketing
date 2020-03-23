import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  width: 550px;
  height: auto;
  margin: 4.5em auto;
  z-index: 900;
`;

const FindYourStoryForm = () => {
  const script = document.createElement('script');
  script.src = 'https://js.hsforms.net/forms/v2.js';
  document.body.appendChild(script);

  script.addEventListener('load', () => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        portalId: '5644251',
        formId: 'b20fbe1a-8a15-45f7-bfa0-f3262992a250',
        target: '#hubspotForm',
      });
    }
  });
  return (
    <Wrapper>
      <div style={{ textAlign: 'center', width: '85%', margin: '30px auto' }}>
        <div id="hubspotForm" />
      </div>
    </Wrapper>
  );
};

export default FindYourStoryForm;
