import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Column, SpanTitle } from '../../theme/index';
import BG from '../../assets/rectange_bg.png';
import launchimg from '../../assets/10X_launch_img.png';
import { ProcessText } from './LaunchStory';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  background: ${(props) => props.bg};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 8em 0 4em 0;
  @media (max-width: 780px) {
    justify-content: center;
    padding: 5em 0;
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 450px;
  @media (max-width: 500px) {
    width: 325px;
    margin-top: 2em;
  }
`;

const StyledButton = styled.button`
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
const StyledSpan = styled(SpanTitle)`
  color: #000;
  font-weight: bold;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  margin: 2em auto;
  // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: auto;
  height: 100%;
  width: 90%;
  @media (max-width: 780px) {
    width: 95%;
    margin: 2em auto;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

const TenXShare = ({ toggleModal }) => {
  return (
    <Wrapper bg={`url('${BG}')`}>
      <Grid>
        <Column alignitems="center" textalign="center">
          <Item onClick={() => toggleModal('tenx')}>
            <Image src={launchimg} />
          </Item>
        </Column>
        <Column alignitems="center" textalign="center" margin="3.5em 0 0 0">
          <StyledSpan margin="0 0 20px 0">10X YOUR LEAD GENERATION</StyledSpan>
          <ProcessText style={{ margin: '0 0 20px 0' }}>
            This free mini-master course will help you increase your brand&apos;s awareness and generate new leads with
            video content
          </ProcessText>
          <Link to="/tenx">
            <StyledButton primary selected={true} onClick={() => toggleModal('launch')}>
              Get the Videos
            </StyledButton>
          </Link>
        </Column>
      </Grid>
    </Wrapper>
  );
};

TenXShare.propTypes = {
  toggleModal: PropTypes.func,
};

export default TenXShare;
