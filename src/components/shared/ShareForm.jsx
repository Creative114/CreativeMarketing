import React, { Component } from "react";
import styled from "styled-components";
import { SpanTitle, Text, Button, Column } from "../../theme";
import { Formik } from "formik";

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 4px;
  padding: 50px 0px;
`;

const StyledColumn = styled(Column)`
  width: 80%;
  margin: 0px auto;
`;

const Input = styled.input`
  width: 90%;
  height: 50px;
  padding: 0 1em;
  border-radius: 2px;
  border: solid 1px #d5dce0;
  background-color: #ffffff;
  margin: 0.75em 0;
  outline: none;
  transition: 250ms;
  &:focus {
    border: solid 1px #d21f04;
  }
`;

const StyledText = styled(Text)`
  font-family: Ubuntu;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.38;
  letter-spacing: normal;
  color: #000000;
  margin-top: 0.5em;
`;

export default class ShareForm extends Component {

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';

    const script1= document.createElement('script');
    script1.src = 'https://code.jquery.com/jquery-3.4.1.min.js';

    document.body.appendChild(script);
    document.body.appendChild(script1);
      
    script.addEventListener('load', () => {
      if(window.hbspt) {
        window.hbspt.forms.create({
          portalId: '5644251',
          formId: '4364a36f-ea48-4d24-9c39-75ddf13d247e',
          target: '#hubspotFormFooter',
          onFormSubmitted: () => {            
            this.props.handleSubmitFormVisible(false);
          }
        });
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.submitFormVisible !== this.props.submitFormVisible) {
      document.getElementById("hubspotFormFooter").innerHTML = "";
      if (this.props.submitFormVisible) {
        window.hbspt.forms.create({
          portalId: '5644251',
          formId: '4364a36f-ea48-4d24-9c39-75ddf13d247e',
          target: '#hubspotFormFooter',
          onFormSubmitted: () => {            
            this.props.handleSubmitFormVisible(false);
          }
        });
      } else {
        window.hbspt.forms.create({
          portalId: '5644251',
          formId: '611c1bb0-6110-4379-8cab-15b6f79c78bf',
          target: '#hubspotFormFooter',
          onFormSubmitted: () => {            
            this.props.handleSubmitFormVisible(true);
          }
        });
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <StyledColumn>
          <div id="hubspotFormFooter" />
          {/* <Formik
            initialValues={{
              firstname: "",
              friendsname: "",
              email: ""
            }}
            onSubmit={(values, { setStatus }) => {
              let xhr = new XMLHttpRequest();
              let url =
                "https://api.hsforms.com/submissions/v3/integration/submit/5644251/1d0d4da4-30a6-4397-9e3b-cc75471deb00";
              let data = {
                fields: [
                  {
                    name: "email",
                    value: values.email
                  },
                  {
                    name: "firstname",
                    value: values.firstname
                  },
                  {
                    name: "friendsname",
                    value: values.friendsname
                  }
                ],
                context: {
                  pageUri: "www.creative114.com/#/launch",
                  pageName: "Launch page"
                }
              };
              const final_data = JSON.stringify(data);
              xhr.open("POST", url);
              xhr.setRequestHeader("Content-type", "application/json");
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                  setStatus({ submitted: true });
                }
              };
              xhr.send(final_data);
            }}
            render={({
              values,
              handleSubmit,
              handleChange,
              handleBlur,
              status
            }) => (
              <form onSubmit={handleSubmit}>
                {status && status.submitted && (
                  <div>
                    <SpanTitle>Thanks!</SpanTitle>
                    <Text dark>We've sent your friend an email</Text>
                  </div>
                )}
                {!status && (
                  <div>
                    <SpanTitle margin=".5em 0 0 0">Share the love</SpanTitle>
                    <StyledText>
                      Know Someone Who Would Enjoy These Videos? Share This Page
                      With Them And Download The Series Worksheets For Free!
                    </StyledText>
                    <Input
                      value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="name"
                      name="firstname"
                      placeholder="Your first name"
                    />
                    <Input
                      value={values.friendsname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="friendsname"
                      name="friendsname"
                      placeholder="Your friend's name"
                    />
                    <Input
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="email"
                      name="email"
                      placeholder="Your friend's email"
                    />
                    <Button
                      primary
                      type="submit"
                      style={{ marginBottom: "1em" }}
                    >
                      Get the videos
                    </Button>
                  </div>
                )}
              </form>
            )}
          /> */}
        </StyledColumn>
      </Wrapper>
    );
  }
}
