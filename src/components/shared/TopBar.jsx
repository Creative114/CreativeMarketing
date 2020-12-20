import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  background-color: #d21f04;
  display: flex;
`;

const Span = styled.span`
  color: #fff;
  text-allign: center;

  @media (max-width: 767px) {
    font-size: 14px;
    text-align: center;
  }
`;

const Div = styled.div`
  margin: 0 auto 8px;
  justify-content: center;
  align-items: center;
`;

const TopBarButton = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid #fff;
  color: #fff;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  height: 40px;
  justify-content: center;
  // margin: 0.5em 0;
  outline: none;
  text-transform: uppercase;
  transition: 750ms;
  width: 146px;
  margin-left: 16px;

  &:hover {
    background-color: #f32405;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto;
  grid-auto-rows: auto;
  height: 100%;
  width: auto;
  padding: 4px 0;
  text-align: center;
  align-items: center;
  justify-items: center;

  @media (max-width: 767px) {
    width: auto;
    margin: 0;
    grid-template-columns: auto;
    grid-auto-rows: auto;
    grid-gap: 1px;
    text-align: center;
  }
`;

const TopBar = () => {
  return (
    <Wrapper>
      <Div>
        <Grid>
        <Span>
          Sign up for Limited Access to the <strong>Free Story Formula</strong>
        </Span>
        <Link to="/launch">
          <TopBarButton>Access Now</TopBarButton>
        </Link>
        </Grid>
      </Div>
    </Wrapper>
  );
};

export default TopBar;
