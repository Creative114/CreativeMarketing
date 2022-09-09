import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Button, Column, Row, StyledALink, StyledNavLink, Text } from '../../theme/index';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #d21f04;
  padding: 4em 0;

  @media (max-width: 920px) {
    height: 100%;
    min-height: 100px;
    padding: 2em 0;
  }
`;

const Image = styled.img`
  width: 220px;
  height: 30px;
  margin-bottom: 1.5em;

  @media (max-width: 920px) {
    margin: 0.75em 0;
  }
`;

const StyledRow = styled(Row)`
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledContentRow = styled(Row)`
  @media (max-width: 920px) {
    margin: 1em 0;
  }
`;

const StyledColumn = styled(Column)`
  justify-content: space-between;

  @media (max-width: 920px) {
    text-align: center;
    width: 95%;
    margin: 0.5em auto 0.75em auto;
    align-items: center;
  }
  ${(props) =>
    props.first &&
    css`
      width: 35%;
      @media (max-width: 980px) {
        width: auto;
      }
    `}
`;

const Icon = styled.i`
  font-size: 2em;
  margin-right: 0.75em;
  color: #fff;

  @media (max-width: 920px) {
    margin: 0 0.5em;
    font-size: 1.5em;
  }
`;

const MobileDiv = styled.div`
  margin: 0;
  display: none;

  @media (max-width: 920px) {
    display: flex;
    justify-content: center;
  }
`;

const DesktopDiv = styled(Row)`
  width: 100%;
  display: inline-flex;
  justify-content: end;

  @media (max-width: 920px) {
    margin: 0;
    display: none;
  }
`;

const LinkRow = styled(StyledContentRow)`
  @media (max-width: 560px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 0.2em 0;
    font-size: 10em;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <StyledRow>
        <StyledColumn first>
          <Link to="/">
            <Image src={Logo} alt="" />
          </Link>
          <div style={{ width: '80%' }}>
            <Text footer>
              {/* If you&apos;re struggling to be interesting, relevant, and relatable, we’ll help you identify and
              communicate emotionally engaging video stories that generate results (and goosebumps). */}
              Most businesses struggle to be relevant or relatable to their ideal customers. Using high-impact emotional
              video storyselling, we help them connect with their audience in a deeper and more meaningful way that
              gives them results.
            </Text>
          </div>
        </StyledColumn>
        <MobileDiv>
          <Link to="/quote">
            <Button footer smallText>
              {/* Free Story Formula */}
              Request Quote
            </Button>
          </Link>
        </MobileDiv>
        <StyledColumn justifycontent="space-between">
          <LinkRow alignitems="center">
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/work">Work</StyledNavLink>
            <StyledNavLink to="/about">About</StyledNavLink>
            <StyledNavLink to="/impact">Impact</StyledNavLink>
            <StyledALink href="https://blog.creative114.com">Resources</StyledALink>
            <StyledNavLink to="/contact">Contact</StyledNavLink>
            <StyledNavLink to="/sii60">Sell It In 60</StyledNavLink>
          </LinkRow>
          <StyledContentRow>
            <a href="https://www.linkedin.com/showcase/creative114/" target="_blank" rel="noopener noreferrer">
              <Icon social className="fab fa-linkedin-in" />
            </a>
            <a href="https://www.facebook.com/114brands" target="_blank" rel="noopener noreferrer">
              <Icon social className="fab fa-facebook-f" />
            </a>

            <a href="https://www.instagram.com/creative1.14/" target="_blank" rel="noopener noreferrer">
              <Icon social className="fab fa-instagram" />
            </a>
            <a href="https://vimeo.com/channels/1439000" target="_blank" rel="noopener noreferrer">
              <Icon social className="fab fa-vimeo-v" />
            </a>

            <DesktopDiv>
              <Button footer smallText>
                Request Quote
              </Button>
            </DesktopDiv>
          </StyledContentRow>
          <Text footer>2021 &copy; Creative114 | Made with &hearts; in Tampa, FL</Text>
        </StyledColumn>
        {/* <DesktopDiv>
          <Link to="/quote">
            <Button footer smallText>
              Request Quote
            </Button>
          </Link>
        </DesktopDiv> */}
      </StyledRow>
    </Wrapper>
  );
};

Footer.propTypes = {
  toggleModal: PropTypes.func,
};

export default Footer;
