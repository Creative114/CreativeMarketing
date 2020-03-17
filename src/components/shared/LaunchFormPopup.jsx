import React, { Component } from "react";
import styled from "styled-components";
import { Text, Button, Column } from "../../theme";

const Wrapper = styled.div`
  width: auto;
  max-width: 380px;  
  height: auto;
  border-radius: 4px;
  background-color: #ffffff;
  @media (max-width: 920px) {
    margin: 0px 20px 100px 20px;
  }
`;

const StyledColumn = styled(Column)`
  width: 90%;
  margin: 0 auto;
  margin: 1.5em;
`;
export default class LaunchFormPopup extends Component {

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';

    const script1= document.createElement('script');
    script1.src = 'https://code.jquery.com/jquery-3.4.1.min.js';

    document.body.appendChild(script);
    document.body.appendChild(script1);
      
    script.addEventListener('load', () => {
      if(window.hbspt) {        
        this.getForm();
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.submitFormVisible !== this.props.submitFormVisible) {
      this.getForm();
    }
  }

  getForm = () => {
    if (this.props.submitFormVisible) {
      document.getElementById("hubspotFormHeaderPopup").innerHTML = "";
      window.hbspt.forms.create({
        portalId: '5644251',
        formId: '4364a36f-ea48-4d24-9c39-75ddf13d247e',
        target: '#hubspotFormHeaderPopup',
        onFormSubmitted: () => {            
          this.props.handleSubmitFormVisible(false);
          this.props.handleAuth();
          this.props.toggleModal();
        }
      });
    }
  }

  render() {
    return (
      <Wrapper>
        {
          this.props.submitFormVisible && <StyledColumn id="hubspotFormHeaderPopup" />
        }        
      </Wrapper>
    );
  }
}
