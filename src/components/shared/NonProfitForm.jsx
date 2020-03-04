import React from "react";
import styled from "styled-components";
import { Input, Label, Button, SpanTitle } from "../../theme/index";
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

// const StyledInputButton = styled(Input)`
//   background: #d21f04;
//   width: ${props => (props.small ? "135px" : "165px")};
//   height: 45px;
//   border: 1px solid transparent;
//   color: #fff;
//   &:hover {
//     background-color: #f32405;
//     box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
//   }
// `;

export default function NonProfitForm() {
  const script = document.createElement('script');
  script.src = 'https://js.hsforms.net/forms/v2.js';
  document.body.appendChild(script);
    
  script.addEventListener('load', () => {
    if(window.hbspt) {
      window.hbspt.forms.create({
        portalId: '5644251',
        formId: 'f2b5ca43-259b-4608-b77c-090a6ed1a5c7',
        target: '#hubspotForm'
      })
    }
  });
  return (
    <Wrapper>
      <div style={{ textAlign: "center", width: "85%", margin: "20px auto" }}>
        <div id="hubspotForm" />
      </div>
      {/* <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          company: ""
        }}
        onSubmit={values => {
          function formv3() {
            let xhr = new XMLHttpRequest();
            let url =
              "https://api.hsforms.com/submissions/v3/integration/submit/5644251/f2b5ca43-259b-4608-b77c-090a6ed1a5c7";
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
                  name: "company",
                  value: values.company
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
              if (xhr.readyState === 4 && xhr.status === 200) {
                window.location.href = "https://creative114.com/#/thanks";
              }
            };
            xhr.send(final_data);
          }
          formv3();
        }}
        render={({ values, handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="company" login>
              Non profit name *
              <Input
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                type="name"
                name="company"
              />
            </Label>
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
            <Button margin=".5em 0 21px 0" primary type="submit">
              Submit
            </Button>
          </Form>
        )}
      /> */}
    </Wrapper>
  );
}
