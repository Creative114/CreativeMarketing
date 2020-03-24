import React, { Component } from 'react';
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
  cursor: pointer;
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
  font-family: 'Ubuntu', sans-serif;
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

const StyledColumn = styled(Column)`
  align-items: center;
  width: 70%;
  margin: 3em auto;
  text-align: center;
`;

const Image = styled.img`
  height: 94px;
  margin: 0.75em 0;
`;

export default class LaunchWhy extends Component {
  render() {
    const { isAuthed, toggleModal } = this.props;
    return (
      <Wrapper bg={`url('${BG}')`}>
        <Column alignitems="center" textalign="center">
          <SpanTitle margin="0">If Your Videos Are Boring</SpanTitle>
          <ProcessText style={{ margin: '6px 0' }}>They Won&apos;t Get You Results</ProcessText>
        </Column>
        <Grid>
          <Div>
            <Column width="85%" alignitems="center" margin=".75em 0">
              <Image src={audience} />
              <Text dark>Why aren’t my videos connecting with people?</Text>
            </Column>
          </Div>
          <Div>
            <Column width="85%" alignitems="center" margin=".75em 0">
              <Image src={connecting} />
              <Text dark>How can I reach my ideal target audience?</Text>
            </Column>
          </Div>
          <Div>
            <Column width="85%" alignitems="center" margin=".75em 0">
              <Image src={action} />
              <Text dark>What encourages or makes people take action?</Text>
            </Column>
          </Div>
        </Grid>
        <StyledColumn>
          <ProcessText>
            Overcome the obstacles that keep you from connecting with your customers.
            <br />
            Start supercharging your message with emotionally <b>engaging video stories.</b>
          </ProcessText>
        </StyledColumn>
        <Row justifycontent="center">
          <StyledButton primary onClick={isAuthed ? () => toggleModal('schedule') : () => toggleModal('launch')}>
            {isAuthed ? 'Schedule a call now' : 'Get the videos'}
          </StyledButton>
        </Row>
      </Wrapper>
    );
  }
}

LaunchWhy.propTypes = {
  isAuthed: PropTypes.bool,
  toggleModal: PropTypes.func,
};
