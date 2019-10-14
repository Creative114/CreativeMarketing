import React, { Component } from "react";
import styled from "styled-components";
import { Text, Button, Column } from "../../theme";
import { Formik } from "formik";

const Wrapper = styled.div`
  width: auto;
  max-width: 380px;
  height: auto;
  border-radius: 4px;
  background-color: #ffffff;
`;

const StyledColumn = styled(Column)`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 1em;
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
  margin-top: 2em;
`;

export default class LaunchForm extends Component {
  render() {
    const { handleAuth, toggleModal } = this.props;
    return (
      <Wrapper>
        <StyledColumn>
          <StyledText>
            Four FREE VIDEOS That Will Help You Transform The Way You Tell Your
            Brand Stories
          </StyledText>
          <Text red>Sign up now</Text>
          <Formik
            initialValues={{
              firstname: "",
              email: ""
            }}
            onSubmit={values => {
              function formv3() {
                let xhr = new XMLHttpRequest();
                let url =
                  "https://api.hsforms.com/submissions/v3/integration/submit/5644251/6fbb79fc-c8f5-4747-80e9-ec2a2f3ac23c";
                let data = {
                  fields: [
                    {
                      name: "firstname",
                      value: values.firstname
                    },
                    {
                      name: "email",
                      value: values.email
                    }
                  ],
                  context: {
                    pageUri: "www.creative114.com/#/launch",
                    pageName: "Landing page"
                  }
                };
                const final_data = JSON.stringify(data);
                xhr.open("POST", url);
                xhr.setRequestHeader("Content-type", "application/json");
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4 && xhr.status === 200) {
                    handleAuth();
                    toggleModal();
                  }
                };
                xhr.send(final_data);
              }
              formv3();
            }}
            render={({ values, handleSubmit, handleChange, handleBlur }) => (
              <form onSubmit={handleSubmit}>
                <Input
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="name"
                  name="firstname"
                  placeholder="First name"
                />
                <Input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <Button primary type="submit" style={{ marginBottom: "1em" }}>
                  Get the videos
                </Button>
              </form>
            )}
          />
        </StyledColumn>
      </Wrapper>
    );
  }
}
