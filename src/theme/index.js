import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

// TYPE

export const Title = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  color: #505d68;
  font-size: 50px;
  line-height: 64px;
  ${props =>
    props.header &&
    css`
      color: #fff;
      font-size: ${props => props.home && "80px"};
      line-height: ${props => props.home && "100px"};
    `};
`;

export const Subtitle = styled.h2`
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  color: #505d68;
  font-size: ${props => (props.logo ? "28px" : "21px")};
  line-height: 38px;
`;

export const Text = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  color: #a1aeb7;
  font-size: 16px;
  line-height: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 1em;
  font-weight: 700;
  font-size: 16px;
  font-family: "Ubuntu", sans-serif;
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
