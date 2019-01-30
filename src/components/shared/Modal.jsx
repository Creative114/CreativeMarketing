import React, { Component } from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 1000000;
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
`;

export default class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <Backdrop>
        <Header>
          <Icon onClick={this.props.togglemodal} className="fas fa-times" />
        </Header>
        {this.props.children}
      </Backdrop>
    );
  }
}
