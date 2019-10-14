import React, { Component } from "react";
import styled from "styled-components";
import { Title, Text, Button, Column } from "../../theme";
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
  render() {
    return (
      <Wrapper>
        <StyledColumn>
          <Formik
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
                    <Title>Thanks!</Title>
                    <Text dark>We've sent your friend an email</Text>
                  </div>
                )}
                {!status && (
                  <div>
                    <Title margin=".5em 0 0 0">Share the love</Title>
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
          />
        </StyledColumn>
      </Wrapper>
    );
  }
}
