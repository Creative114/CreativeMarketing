import React from 'react';
import styled from 'styled-components';
import { Button, Input, Label, SpanTitle, Text } from '../../theme/index';
import { Formik } from 'formik';

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 780px) {
    align-items: center;
  }
`;

const FindYourStoryForm = () => {
  return (
    <Wrapper>
      <div style={{ textAlign: 'center', width: '85%', margin: '0 auto' }}>
        <SpanTitle>Find your story</SpanTitle>
        <Text post>
          When your feet hit the floor in the morning, you’re going to work because of the impact that you make, not
          just to cash a paycheck. As their guide, you are helping your customers - the heroes - win their battles. You
          are making a difference. Why not you tell the emotional impact of the good that you do with videos stories?
        </Text>
        <Text post>
          According to Hubspot, 85% of consumers want to see more video content from brands. Tubular insight has found
          that 73% of marketers say video positively impacts their ROI. Emotional Storytelling is a surefire way to
          connect, engage and resonate with your targeted audience. People rely on emotions, rather than information, to
          make decisions.
        </Text>
        <Text post>
          To help you get started, we’re sharing a copy of the internal process we use to tell emotionally impacting
          stories. If you like a copy of the exact process we use internally (our secret sauce), download it for free
          here.
        </Text>
      </div>
      <Formik
        initialValues={{
          firstname: '',
          email: '',
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
              if (xhr.readyState === 4 && xhr.status === 200) window.location.href = 'https://creative114.com/#/thanks';
            };
            xhr.send(finalData);
          };
          formv3();
        }}
        render={({ values, handleSubmit, handleChange, handleBlur, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="firstname" login>
              Name *
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

            <Button margin=".5em 0 21px 0" primary type="submit">
              Submit
            </Button>
          </Form>
        )}
      />
    </Wrapper>
  );
};

export default FindYourStoryForm;
