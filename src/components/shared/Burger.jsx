import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class BurgerIcon extends Component {
  render() {
    return (
      <div className={this.props.open ? 'burger-menu open' : 'burger-menu'} {...this.props}>
        <div className="bar1" key="b1" />
        <div className="bar2" key="b2" />
        <div className="bar3" key="b3" />
      </div>
    );
  }
}

BurgerIcon.propTypes = {
  open: PropTypes.bool,
};

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
`;

const StyledLi = styled.li`
  margin: 1em 0;
  font-size: 1.4em;
  font-family: 'Ubuntu', sans-serif;
  list-style: none;
`;

const BurgerMenu = ({ close }) => {
  return (
    <div className="menu">
      <StyledUl>
        <Link to="/">
          <StyledLi onClick={close}>Home</StyledLi>
        </Link>
        <Link to="/work">
          <StyledLi onClick={close}>Work</StyledLi>
        </Link>
        <Link to="/about">
          <StyledLi onClick={close}>About</StyledLi>
        </Link>
        <Link to="/impact">
          <StyledLi onClick={close}>Impact</StyledLi>
        </Link>
        <Link to="/contact">
          <StyledLi onClick={close}>Contact</StyledLi>
        </Link>
        <a href="https://blog.creative114.com" style={{ color: 'black' }}>
          <StyledLi onClick={close}>Blog</StyledLi>
        </a>
        <Link to="/launch">
          <StyledLi onClick={close}>Free Story Formula</StyledLi>
        </Link>
      </StyledUl>
    </div>
  );
};

BurgerMenu.propTypes = {
  close: PropTypes.func,
};

const contentStyle = {
  background: 'rgba(255,255,255,0)',
  width: '100%',
  border: 'none',
};

const Burger = () => {
  return (
    <Popup
      modal
      overlayStyle={{ background: 'rgba(255,255,255,0.98' }}
      contentStyle={contentStyle}
      closeOnDocumentClick
      trigger={(open) => <BurgerIcon open={open} />}
    >
      {(close) => <BurgerMenu close={close} />}
    </Popup>
  );
};

export default Burger;
