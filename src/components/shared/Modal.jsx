import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row } from '../../theme/index';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 900;
  transition: 250ms;
  overflow: scroll;
  backdrop-filter: blur(5px);
`;

const Header = styled.div`
  width: 100%;
  height: 45px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
`;

const Icon = styled.i`
  font-size: 2em;
  color: #666;
  cursor: pointer;
  z-index: 1000;
  margin-right: 1em;
  margin-top: 4.5em;
  transition: 500ms;

  &:hover {
    color: #ccc;
  }
`;

const StyledRow = styled(Row)`
  // width: 75%;
  width: 60%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transition: 250ms;
  @media (max-width: 780px) {
    width: 95%;
  }
`;

const Modal = ({ show, togglemodal, children }) => {
  if (!show) return null;

  return (
    <Backdrop className="fadeIn">
      <Header>
        <Icon onClick={togglemodal} className="fas fa-times-circle" />
      </Header>
      <StyledRow>{children}</StyledRow>
    </Backdrop>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  togglemodal: PropTypes.func,
  children: PropTypes.array,
};

export default Modal;
