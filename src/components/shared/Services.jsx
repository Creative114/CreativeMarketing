import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Column, Row, SpanSubtitle, SpanTitle, Text } from '../../theme/index';

const Wrapper = styled.div`
  height: 100%;
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.5em 0 4em 0;

  @media (max-width: 780px) {
    width: 95%;
    text-align: center;
    padding: 3em 0 1.5em 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 50px;
  margin: 2em auto 0;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 495px;
  height: 100%;
  width: 80%;

  @media (max-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 375px;
    width: 95%;
    margin: 0 auto;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  border: 1.5px solid #a1aeb7;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f2f5f7;
  cursor: pointer;
  transition: 750ms;
  text-align: center;

  &:hover {
    background: #fff;
    border: 1.5px solid #b9402d;
  }
`;

const Icon = styled.i`
  font-size: 4em;
  color: #b9402d;
  margin: 0.25em 0;

  @media (max-width: 780px) {
    font-size: 3em;
  }

  @media (max-width: 400px) {
    font-size: 2em;
  }
`;

const StyledRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
  width: 75%;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    margin: 1em auto;
    text-align: center;
  }
`;

const StyledTextRow = styled(Row)`
  width: 45%;

  @media (max-width: 1100px) {
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
  }
`;

const Item = ({ title, text, icon }) => {
  return (
    <Div>
      <Column width="85%" alignitems="center" textalign="center">
        <Icon className={icon} />
        <SpanSubtitle primary>{title}</SpanSubtitle>
        <Text secondary>{text}</Text>
      </Column>
    </Div>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
};

const Services = () => {
  const items = [
    {
      title: 'Video Marketing',
      text:
        'Our core mission is to provide value to your organization--telling your story is the most powerful way in which you can do so.',
      icon: 'fas fa-video',
    },
    {
      title: 'Web Design',
      text:
        'At Creative114, we utilize the latest technologies and frameworks to ensure superior performance, security, and SEO.',
      icon: 'fas fa-code',
    },
    {
      title: 'Graphic Design',
      text:
        "Consistency in branding is vital to your organizations' success--our team of experts create brands that represent your vision.",
      icon: 'fas fa-drafting-compass',
    },
    {
      title: 'Photography',
      text: 'A picture tells a thousand words--Nothing fulfills us greater than capturing your happiest moments.',
      icon: 'fas fa-camera',
    },
  ];
  return (
    <Wrapper>
      <StyledRow>
        <StyledTextRow>
          <SpanTitle>Experts in solving problems</SpanTitle>
        </StyledTextRow>
        <StyledTextRow>
          <Text secondary>
            At heart, we&apos;re entrepreneurs just like you; we have the experience, skillset, and know-how to position
            your business for success. We provide scalable strategies for your oganization to meet new heights.
          </Text>
        </StyledTextRow>
      </StyledRow>
      <Grid>
        {items.map((item, index) => (
          <Item key={index} title={item.title} text={item.text} icon={item.icon} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Services;
