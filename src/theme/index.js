import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

// TYPE

export const Title = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-weight: 800;
  color: #505d68;
  font-size: 42px;
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
      color: ${props => (props.home ? "#000" : "#fff")};
      font-size: ${props => props.home && "72px"};
      line-height: ${props => props.home && "80px"};
      margin: ${props => props.margin || ".25em 0"};
      @media (max-width: 1200px) {
        font-size: 72px;
        line-height: 90px;
      }
      @media (max-width: 900px) {
        line-height: 62px;
        line-height: 80px;
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
      margin: 0;
      line-height: 1.5em;
      font-size: 16px;
    `};
  ${props =>
    props.post &&
    css`
      font-size: 14px;
      line-height: 22px;
    `};
  ${props =>
    props.contact &&
    css`
      color: ${props =>
        props.home ? "#D21F04" : props.active ? "#D21F04" : "#fff"};
      text-transform: uppercase;
      text-decoration: none;
      margin: 0 1em;
      font-weight: 700;
      font-size: 16px;
      transition: 500ms;
      cursor: pointer;
      line-height: 1em;
      @media (max-width: 780px) {
        margin: 0 0.5em;
        font-size: 14px;
      }
    `};
`;

export const StyledNavLink = styled(NavLink)`
  color: ${props => (props.active ? "#D21F04" : "#fff")};
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 1em;
  font-weight: 700;
  font-size: 16px;
  font-family: "Ubuntu", sans-serif;
  transition: 500ms;
  ${props =>
    props.home &&
    css`
      color: #d21f04;
    `};
  @media (max-width: 780px) {
    margin: 0 0.5em;
    font-size: 14px;
  }
`;

export const Input = styled.input`
  width: 360px;
  height: 41px;
  background-color: #efefef;
  border: 1px solid transparent;
  margin: 0.5em 0;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0 0.25em;
  border-radius: 4px;
  color: #6d6d6d;
  transition: 250ms;
  @media (max-width: 780px) {
    width: 275px;
  }
  &:focus {
    border: 1px solid #546887;
  }
`;

export const TextArea = styled.textarea`
  width: 360px;
  height: 80px;
  background-color: #efefef;
  border: 1px solid transparent;
  margin: 0.5em 0;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0.25em;
  border-radius: 4px;
  color: #6d6d6d;
  transition: 250ms;
  @media (max-width: 780px) {
    width: 275px;
  }
  &:focus {
    border: 1px solid #546887;
  }
`;

export const Label = styled.label`
  font-family: "Ubuntu", sans-serif;
  text-transform: uppercase;
  color: #989898;
  font-size: 14px;
  ${props =>
    props.login &&
    css`
      font-size: 12px;
      margin: 0.5em 0;
      text-transform: none;
    `};
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
      background: #d21f04;
      width: ${props => (props.small ? "135px" : "165px")};
      height: 45px;
      border: 1px solid transparent;
      color: #fff;
      &:hover {
        background-color: #d25a47;
      }
    `};
  ${props =>
    props.footer &&
    css`
      background: #fff;
      width: ${props => (props.small ? "135px" : "165px")};
      height: 45px;
      border: 1px solid transparent;
      color: #d21f04;
      &:hover {
        background-color: #d25a47;
      }
    `};
`;
