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
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  margin: 0 5px;
  box-sizing: border-box;
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

const StandaloneButton = styled.button`
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

export default class TenXTestimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'nonProfit',
    };
  }

  handleClick = (id, client) => {
    this.setState(() => {
      return {
        selected: id,
        title: client,
      };
    });
  };

  render() {
    const { selected } = this.state;
    const { type } = this.props;
    const { toggleModal } = this.props;

    return (
      <Wrapper>
        <Reveal effect="fadeIn">
          <>
            <Column margin="30px 0 0 0" alignitems="center">
              <SpanTitle style={{ marginBottom: '0', color: '#000000' }}>
                {type === 'tenx' ? "What's holding you back" : "What they're saying"}
              </SpanTitle>
              {type === 'tenx' && (
                <>
                  <ProcessText style={{ margin: '6px 0' }}>
                    Stop wasting money on video stragegies that don&apos;t work.
                    <br />
                    You can overcome the obstacles that keepy you from growing your business.
                    <br />
                    Start supercharging your message with a video strategy that works.
                  </ProcessText>
                </>
              )}
            </Column>
            <Div>
              <>
                <Row alignitems="center" justifycontent="center">
                  <MenuItem
                    id="nonProfit"
                    client="Mission City Church"
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
            {type === 'tenx' && (
              <Row justifycontent="center">
                <StandaloneButton primary selected={true} onClick={() => toggleModal('launch')}>
                  Get the Videos
                </StandaloneButton>
              </Row>
            )}
          </>
        </Reveal>
      </Wrapper>
    );
  }
}

TenXTestimonials.propTypes = {
  type: PropTypes.string,
  toggleModal: PropTypes.func,
};
