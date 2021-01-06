import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Column, Row, SpanTitle, Text } from '../../theme/index';
import action from '../../assets/Action.svg';
import audience from '../../assets/Audience.svg';
import connecting from '../../assets/Connecting.svg';
import BG from '../../assets/rectange_bg.png';
import { ProcessText } from './LaunchStory';

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  background: ${(props) => props.bg};
  flex-direction: column;
  align-items: center;
  padding: 10em 0 4em 0;
  @media (max-width: 780px) {
    justify-content: center;
    padding: 5em 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  margin: 2em auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  height: 100%;
  width: 80%;
  @media (max-width: 780px) {
    width: 95%;
    margin: 2em auto;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  // cursor: pointer;
  transition: 750ms;
  text-align: center;
`;

const StyledButton = styled.button`
  width: 225px;
  height: 45px;
  outline: none;
  background: #d21f04;
  border: 1px solid transparent;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 600;
  border-radius: 4px;
  transition: 750ms;
  margin: 0.5em 0;
  text-transform: uppercase;
  &:hover {
    background-color: #f32405;
  }
`;

const Image = styled.img`
  height: 94px;
  margin: 0.75em 0;
`;

const StyledSpan = styled(SpanTitle)`
  color: #000;
  font-weight: bold;
`;

const LaunchWhy = ({ isAuthed, toggleModal }) => {
  return (
    <Wrapper bg={`url('${BG}')`}>
      <Column alignitems="center" textalign="center">
        <StyledSpan margin="0">Don&apos;t Wait! Start Right Now</StyledSpan>
        <ProcessText style={{ margin: '6px 0' }}>
          This free mini-master course will help you generate
          <br />
          results for your business in under an hour.
        </ProcessText>
      </Column>
      <Grid>
        <Div>
          <Column width="85%" alignitems="center" margin=".75em 0">
            <Image src={audience} />
            <Text dark>Why isn&apos;t my business converting more browsers into buyers?</Text>
          </Column>
        </Div>
        <Div>
          <Column width="85%" alignitems="center" margin=".75em 0">
            <Image src={connecting} />
            <Text dark>How can I better reach my ideal target audience?</Text>
          </Column>
        </Div>
        <Div>
          <Column width="85%" alignitems="center" margin=".75em 0">
            <Image src={action} />
            <Text dark>What encourages or makes people click the buy button?</Text>
          </Column>
        </Div>
      </Grid>
      <Row justifycontent="center">
        <StyledButton primary onClick={isAuthed ? () => toggleModal('schedule') : () => toggleModal('launch')}>
          {isAuthed ? 'Schedule a call now' : 'Get the videos'}
        </StyledButton>
      </Row>
    </Wrapper>
  );
};

LaunchWhy.propTypes = {
  isAuthed: PropTypes.bool,
  toggleModal: PropTypes.func,
};

export default LaunchWhy;
