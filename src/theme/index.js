import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

// TYPE

export const Title = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  color: #505d68;
  font-size: 50px;
  line-height: 52px;
  margin: ${props => props.margin || ".5em 0"};
  @media (max-width: 780px) {
    font-size: 38px;
  }
  @media (max-width: 400px) {
    font-size: 28px;
  }
  ${props =>
    props.header &&
    css`
      color: #fff;
      font-size: ${props => props.home && "68px"};
      line-height: ${props => props.home && "100px"};
      @media (max-width: 1200px) {
        font-size: 50px;
        line-height: 90px;
      }
      @media (max-width: 900px) {
        line-height: 72px;
      }
      @media (max-width: 780px) {
        font-size: 48px;
        line-height: 64px;
      }
      @media (max-width: 500px) {
        font-size: 38px;
        line-height: 48px;
      }
    `};
`;

export const Subtitle = styled.h2`
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  color: #505d68;
  font-size: ${props => (props.logo ? "28px" : "21px")};
  line-height: 38px;
  margin: ${props => props.margin || "0.5em 0"};
`;

export const Text = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  color: #a1aeb7;
  font-size: ${props => (props.logo ? "22px" : "18px")};
  line-height: 38px;
  margin: ${props => props.margin || "0.5em 0"};
  @media (max-width: 780px) {
    font-size: 16px;
    line-height: 32px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
    line-height: 26px;
  }
  ${props =>
    props.header &&
    css`
      color: #fff;
      font-size: 22px;
    `};
  ${props =>
    props.title &&
    css`
      margin: 0;
      font-size: 21px;
    `};
  ${props =>
    props.footer &&
    css`
      color: #fff;
    `};
`;

export const StyledNavLink = styled(NavLink)`
  color: ${props => (props.active ? "#E38B3D" : "#fff")};
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 1em;
  font-weight: 700;
  font-size: 16px;
  font-family: "Ubuntu", sans-serif;
  transition: 500ms;
  @media (max-width: 780px) {
    margin: 0 0.5em;
    font-size: 14px;
  }
`;

// CONTAINERS

export const Row = styled.div`
  display: flex;
  width: ${props => props.width};
  margin: ${props => props.margin};
  align-items: ${props => props.alignitems};
  justify-content: ${props => props.justifycontent};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  align-items: ${props => props.alignitems};
  justify-content: ${props => props.justifycontent};
  margin: ${props => props.margin};
  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Button = styled.button`
  background-color: inherit;
  width: 146px;
  height: 40px;
  outline: none;
  border: 1px solid #505d68;
  color: #505d68;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  border-radius: 3px;
  transition: 750ms;
  margin: 0.5em 0;
  &:hover {
    background-color: #667785;
    color: #fff;
  }

  ${props =>
    props.primary &&
    css`
      background: #b9402d;
      width: 165px;
      height: 45px;
      border: 1px solid transparent;
      color: #fff;
      &:hover {
        background-color: #d25a47;
      }
    `};
`;
