import React from 'react';
import styled from 'styled-components';
import { Button, Input, Label, Select, SpanTitle, TextArea } from '../../theme/index';
import { Formik } from 'formik';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  width: 475px;
  height: 775px;
  margin: 4.5em auto;
  z-index: 900;
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

const StartNowForm = () => {
  return (
    <Wrapper>
      <div style={{ textAlign: 'center' }}>
        <SpanTitle>Start now</SpanTitle>
      </div>
      <Formik
        initialValues={{
          businessName: '',
          businessWebsite: '',
          firstname: '',
          email: '',
          phone: '',
          budget: '',
          objective: '',
        }}
        onSubmit={(values) => {
          const formv3 = () => {
            const xhr = new XMLHttpRequest();
            const url =
              'https://api.hsforms.com/submissions/v3/integration/submit/5644251/9cdcc4d4-244b-4dcf-bc3c-501fc78e9aea';
            const data = {
              fields: [
                {
                  name: 'email',
                  value: values.email,
                },
                {
                  name: 'firstname',
                  value: values.firstname,
                },
              ],
              context: {
                pageUri: 'www.creative114.com/#/',
                pageName: 'Contact page',
              },
            };
            const finalData = JSON.stringify(data);
            xhr.open('POST', url);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.onreadystatechange = () => {
              if (xhr.readyState === 4 && xhr.status === 200) {
                console.log('success');
              }
            };
            xhr.send(finalData);
          };
          formv3();
        }}
        render={({ values, handleSubmit, handleChange, handleBlur, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="businessName" login>
              Business name *
              <Input
                value={values.businessName}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="businessName"
              />
            </Label>
            <Label htmlFor="businessWebsite" login>
              Business website *
              <Input
                value={values.businessWebsite}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="businessWebsite"
              />
            </Label>
            <Label htmlFor="firstname" login>
              Contact name *
              <Input
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                type="name"
                name="firstname"
              />
            </Label>
            <Label htmlFor="email" login>
              Email *
              <Input value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" name="email" />
            </Label>
            <Label htmlFor="phone" login>
              Phone *
              <Input value={values.phone} onChange={handleChange} onBlur={handleBlur} type="phone" name="phone" />
            </Label>

            <Label htmlFor="budget" login>
              Budget *
              <Select
                value={values.budget}
                id="budget"
                name="budget"
                onChange={(value) => {
                  setFieldValue('budget', value);
                }}
              >
                <option value="first">$1,000-$2,500</option>
                <option value="second">$2,500-$5,000</option>
                <option value="third">$5,000-$7,500</option>
                <option value="forth">$7,500-$10,000</option>
                <option value="fifth">$10,000 +</option>
              </Select>
            </Label>

            <Label htmlFor="objective" login>
              Objective *
              <TextArea value={values.objective} onChange={handleChange} onBlur={handleBlur} name="objective" />
            </Label>

            <Button primary type="submit">
              Submit
            </Button>
          </Form>
        )}
      />
    </Wrapper>
  );
};

export default StartNowForm;
