import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Text, Button, Column, SpanSubtitle } from '../../theme/index';
import Reveal from 'react-reveal/Reveal';
import SelectIcon from '../../assets/Select-Gray-Icon.png';
import ScriptsIcon from '../../assets/Script-Gray-Icon.png';
import ShootIcon from '../../assets/Shoot-Gray-Icon.png';
// import { Link } from 'react-router-dom';
import Testimonial from './Testimonial';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(rgb(242, 245, 247), #ffffff);
  padding: 2em 0 2.5em 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 0 auto;
    padding: 3em 0 1.5em 0;
    text-align: center;
  }
`;

export const ProcessText = styled.p`
  color: #212121;
  /*display: flex;
  flex-direction: column;
  flex-wrap: wrap;*/
  font-family: 'Montserrat', sans-serif;
  font-size: 23px;
  font-weight: 100;
  justify-content: center;
  padding: 0;
  text-align: center;
  width: 75%;
  margin: 0.75em auto;
`;

export const HeaderText = styled.p`
  color: #212121;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: 'Montserrat', sans-serif;
  font-size: 54px;
  font-weight: bold;
  justify-content: center;
  padding: 0;
  text-align: center;
  width: 100%;
  margin: 0.5em 0 0 0;

  span {
    margin-top: 10px;
  }

  @media (max-width: 375px) {
    width: 90%;

    span {
      margin-top: 0;
    }
  }
`;

const StyledRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  margin: 0;
  @media (max-width: 780px) {
    width: 95%;
  }
`;

const StyledSpan = styled.span`
  font-weight: bold;
`;

const RedStyledSpan = styled.span`
  display: inline;
  font-weight: bold;
  color: #d21f04;
`;

const StyledList = styled.ul`
  list-style: none;
  column-count: 2;
  column-gap: 80px;
  font-size: 23px;

  li {
    padding: 4px 0;
  }

  li:before {
    padding-right: 4px;
    content: '+';
    color: #d21f04;
    font-weight: bold;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 50px;
  width: 85%;
  margin: 2em auto 0;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  height: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 375px;
    width: 95%;
    margin: 0 auto;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 750ms;
  text-align: center;
`;

const Image = styled.img`
  /*width: 150px;*/
  height: 175px;
  margin: 0.25em 0;
`;

const Item = ({ title, text, img }) => {
  return (
    <Div>
      <Column width="95%" alignitems="center" textalign="center">
        <Image src={img} />
        <SpanSubtitle primary>{title}</SpanSubtitle>
        <Text secondary>{text}</Text>
      </Column>
    </Div>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
};

const SiiStory = ({ toggleModal, isAuthed, scrollToContent }) => {
  const items = [
    {
      title: 'SELECT',
      text:
        "You'll select up to 60 topics that are the most relevant to your business. There are over 160 topics currently available on our menu.",
      img: SelectIcon,
    },
    {
      title: 'SCRIPTS',
      text:
        'Receive and review professional scripts. Leading real estate investors have found our scripts highly effective and beneficial to their process.',
      img: ScriptsIcon,
    },
    {
      title: 'SHOOT',
      text:
        "Schedule a shoot date and record everything in 2-3 days. We'll handle the brandin, post-production, and delivery from there.",
      img: ShootIcon,
    },
  ];

  return (
    <Wrapper>
      <Reveal effect="fadeIn">
        <>
          <StyledRow>
            <HeaderText>Content Your Customers Will Love</HeaderText>
          </StyledRow>
          <StyledRow>
            <ProcessText>
              <StyledSpan>Sell It In 60</StyledSpan> offers you an easy, hassle-free way to walk your potential sellers
              through
              <br />
              questions, objections, and challenges they may face at various stages of the sales process.
            </ProcessText>
          </StyledRow>
          <StyledRow>
            <ProcessText>
              <StyledSpan>Receive up to </StyledSpan>
              <RedStyledSpan>60 professional videos</RedStyledSpan>
              <br />
              <StyledSpan>ready for you to share anywhere!</StyledSpan>
            </ProcessText>
          </StyledRow>
          <StyledRow>
            <StyledList>
              <li>Social channel ads</li>
              <li>Television commercials</li>
              <li>CRM and drip campaign</li>
              <li>Social media content</li>
              <li>Website</li>
              <li>And more!</li>
            </StyledList>
          </StyledRow>
          <div style={{ width: '80%', margin: '0 auto' }}>
            <Testimonial type="video" src={'https://fast.wistia.com/embed/medias/nzs0atyfx1/swatch'} src2={''} />
          </div>
          <StyledRow>
            <HeaderText>It&apos;s This Easy</HeaderText>
          </StyledRow>

          <Grid>
            {items.map((item, index) => (
              <Item key={index} title={item.title} text={item.text} img={item.img} />
            ))}
          </Grid>
          <Row margin="3.5em 0 2em 0" justifycontent="center">
            {/* <Link to="/pricing">
              <Button primary smallText>
                Get Started
              </Button>
            </Link> */}
            <Button primary onClick={() => scrollToContent()}>
              Get Started
            </Button>
          </Row>
        </>
      </Reveal>
    </Wrapper>
  );
};

SiiStory.propTypes = {
  toggleModal: PropTypes.func,
  isAuthed: PropTypes.bool,
  scrollToContent: PropTypes.func,
};

export default SiiStory;
