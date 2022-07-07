import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';
import Testimonial from './Testimonial';
import { Row } from '../../theme/index';

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

// const SiiCheck = ({ toggleModal, isAuthed }) => {
export default class SiiCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'curiosity',
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
    // const { type } = this.props;
    // const { toggleModal } = this.props;

    return (
      <Wrapper>
        <Reveal effect="fadeIn">
          <>
            <StyledRow>
              <HeaderText>Check These Out</HeaderText>
            </StyledRow>
            {/* <div>
            <Testimonial type="video" src={'https://fast.wistia.com/embed/medias/261qh1r2tl/swatch'} src2={''} />
          </div>
          <div>
            <Testimonial type="video" src={'https://fast.wistia.com/embed/medias/lvojnzcpd1/swatch'} src2={''} />
          </div>
          <div>
            <Testimonial type="video" src={'https://fast.wistia.com/embed/medias/j0nizelhql/swatch'} src2={''} />
          </div> */}

            <Div>
              <>
                <Row alignitems="center" justifycontent="center">
                  <MenuItem
                    id="curiosity"
                    client=""
                    title="Curiosity"
                    handleClick={this.handleClick}
                    selected={selected}
                  />
                  <MenuItem
                    id="enlightenment"
                    client=""
                    title="Enlightenment"
                    handleClick={this.handleClick}
                    selected={selected}
                  />
                  <MenuItem
                    id="commitment"
                    client="The Collective Genius"
                    title="Commitment"
                    handleClick={this.handleClick}
                    selected={selected}
                  />
                </Row>

                <Row>
                  {selected === 'curiosity' && (
                    <Testimonial
                      type="video"
                      src={'https://fast.wistia.com/embed/medias/261qh1r2tl/swatch'}
                      src2={''}
                    />
                  )}
                  {selected === 'enlightenment' && (
                    <Testimonial
                      type="video"
                      src={'https://fast.wistia.com/embed/medias/lvojnzcpd1/swatch'}
                      src2={''}
                    />
                  )}
                  {selected === 'commitment' && (
                    <Testimonial
                      type="video"
                      src={'https://fast.wistia.com/embed/medias/j0nizelhql/swatch'}
                      src2={''}
                    />
                  )}
                </Row>
              </>
            </Div>
          </>
        </Reveal>
      </Wrapper>
    );
  }
}

SiiCheck.propTypes = {
  toggleModal: PropTypes.func,
  isAuthed: PropTypes.bool,
};
