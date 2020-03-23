import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Testimonial from './Testimonial';
import { Column, Row, SpanTitle } from '../../theme/index';
import Reveal from 'react-reveal/Reveal';
import { ProcessText } from './LaunchStory';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2em 0;

  @media (max-width: 780px) {
    text-align: center;
    padding: 3em 0 2em 0;
  }
`;

const StyledButton = styled.button`
  width: 195px;
  height: 45px;
  background: ${(props) => (props.active ? '#D21F04' : '#f2f5f7')};
  color: ${(props) => (props.active ? '#fff' : '#505d68')};
  display: flex;
  text-transform: uppercase;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  margin: 0 0.75em;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 250ms;
  border: none;

  &:hover {
    background-color: #f32405;
    color: #fff;
  }
  @media (max-width: 920px) {
    font-size: 14px;
  }
  @media (max-width: 370px) {
    font-size: 11px;
  }
`;

const Div = styled.div`
  display: block;
  margin-top: 2em;

  @media (max-width: 920px) {
    margin-top: 2em;
  }
`;

const MenuItem = ({ id, selected, title, handleClick, client }) => {
  return (
    <StyledButton id={id} onClick={() => handleClick(id, client)} active={id === selected}>
      {title}
    </StyledButton>
  );
};

MenuItem.propTypes = {
  client: PropTypes.string,
  handleClick: PropTypes.func,
  id: PropTypes.string,
  selected: PropTypes.string,
  title: PropTypes.string,
};

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'nonProfit',
    };
  }

  handleClick(id, client) {
    this.setState(() => {
      return {
        selected: id,
        title: client,
      };
    });
  }

  render() {
    const { selected } = this.state;
    const { type } = this.props;

    return (
      <Wrapper>
        <Reveal effect="fadeIn">
          <>
            <Column alignitems="center">
              <SpanTitle>{type === 'launch' ? 'Make An Emotional Impact' : "What they're saying"}</SpanTitle>
              {type === 'launch' && (
                <>
                  <ProcessText>
                    Many Business Owners Are Wasting Money
                    <br />
                    Creating Videos That Just Don’t Work.
                    <b>I Don’t Want That To Be You!</b>
                  </ProcessText>
                </>
              )}
            </Column>
            <Div>
              <>
                <Row alignitems="center" justifycontent="center">
                  <MenuItem
                    id="nonProfit"
                    client="Movement 2819"
                    title="Non Profit"
                    handleClick={this.handleClick}
                    selected={selected}
                  />
                  <MenuItem
                    id="startUp"
                    client="Litacore"
                    title="Startup"
                    handleClick={this.handleClick}
                    selected={selected}
                  />
                  <MenuItem
                    id="business"
                    client="The Collective Genius"
                    title="Business"
                    handleClick={this.handleClick}
                    selected={selected}
                  />
                </Row>

                <Row>
                  {selected === 'nonProfit' && (
                    <Testimonial
                      type="video"
                      src={'https://fast.wistia.com/embed/medias/ubvv0c8re9/swatch'}
                      src2={''}
                    />
                  )}

                  {selected === 'startUp' && (
                    <Testimonial
                      type="video"
                      src={'https://fast.wistia.com/embed/medias/2cxnagybwy/swatch'}
                      src2={''}
                    />
                  )}
                  {selected === 'business' && (
                    <Testimonial
                      type="video"
                      src={'https://fast.wistia.com/embed/medias/dhmx0u7je8/swatch'}
                      src2={''}
                    />
                  )}
                </Row>
              </>
            </Div>
            {type === 'launch' && (
              <Row justifycontent="center" margin="2.5em 0 0 0" style={{ textAlign: 'center' }}>
                <ProcessText>
                  People Will Respond To Your Videos After You Implement <br />
                  <b>What You Learn Here.</b>
                </ProcessText>
              </Row>
            )}
          </>
        </Reveal>
      </Wrapper>
    );
  }
}

Testimonials.propTypes = {
  type: PropTypes.string,
};
