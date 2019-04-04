import React from "react";
import styled from "styled-components";
import { Input, Label, Button, Title, Text, TextArea } from "../../theme/index";
import { Formik } from "formik";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  width: 550px;
  height: auto;
  margin: 4.5em auto;
  z-index: 10000000;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 780px) {
    align-items: center;
  }
`;

export default function FindYourStoryForm() {
  return (
    <Wrapper>
      <div style={{ textAlign: "center", width: "85%", margin: "0 auto" }}>
        <Title>Apply now</Title>
      </div>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          message: ""
        }}
        onSubmit={values => {
          function formv3() {
            let xhr = new XMLHttpRequest();
            let url =
              "https://api.hsforms.com/submissions/v3/integration/submit/5644251/b20fbe1a-8a15-45f7-bfa0-f3262992a250";
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
                  name: "lastname",
                  value: values.lastname
                },
                {
                  name: "message",
                  value: values.message
                }
              ],
              context: {
                pageUri: "www.creative114.com/#/",
                pageName: "Contact page"
              }
            };
            const final_data = JSON.stringify(data);
            xhr.open("POST", url);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = function() {
              if (xhr.readyState == 4 && xhr.status == 200) {
                window.location.href = "https://creative114.com/#/thanks";
              }
            };
            xhr.send(final_data);
          }
          formv3();
        }}
        render={({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldValue
        }) => (
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="firstname" login>
              First name *
              <Input
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                type="name"
                name="firstname"
              />
            </Label>
            <Label htmlFor="lastname" login>
              Last name *
              <Input
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                type="name"
                name="lastname"
              />
            </Label>
            <Label htmlFor="email" login>
              Email *
              <Input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                name="email"
              />
            </Label>
            <Label htmlFor="message" login>
              Message *
              <TextArea
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                name="message"
              />
            </Label>

            <Button margin=".5em 0 21px 0" primary type="submit">
              Submit
            </Button>
          </Form>
        )}
      />
    </Wrapper>
  );
}
