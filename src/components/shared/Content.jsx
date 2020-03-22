import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Column, SpanTitle, Text } from '../../theme/index';

const Wrapper = styled.div`
  min-height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 780px) {
    height: 100%;
    margin: 3em 0;
  }
`;

const StyledColumn = styled(Column)`
  width: 55%;
  text-align: center;
  align-items: center;

  @media (max-width: 780px) {
    width: 95%;
  }
`;

const Content = ({ title, description }) => {
  return (
    <Wrapper>
      <StyledColumn>
        <SpanTitle>{title && title}</SpanTitle>
        <Text secondary>{description && description}</Text>
      </StyledColumn>
    </Wrapper>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Content;
