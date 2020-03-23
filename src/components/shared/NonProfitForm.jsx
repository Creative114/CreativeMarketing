import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  width: 550px;
  height: auto;
  margin: 150px auto 20px;
  z-index: 90;
`;

const NonProfitForm = () => {
  const script = document.createElement('script');
  script.src = 'https://js.hsforms.net/forms/v2.js';
  document.body.appendChild(script);

  script.addEventListener('load', () => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        portalId: '5644251',
        formId: 'f2b5ca43-259b-4608-b77c-090a6ed1a5c7',
        target: '#hubspotForm',
      });
    }
  });
  return (
    <Wrapper>
      <div style={{ textAlign: 'center', width: '85%', margin: '20px auto' }}>
        <div id="hubspotForm" />
      </div>
    </Wrapper>
  );
};

export default NonProfitForm;
