import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Column, Row, SpanTitle, StyledColumn, Text } from '../../theme/index';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 2em 0;

  @media (max-width: 780px) {
    padding: 0 0 3em 0;
    text-align: center;
  }
`;

const CustomColumn = styled(Column)`
  width: 50%;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 780px) {
    text-align: center;
    width: 95%;
  }
`;

const Apply = ({ title, text, toggleModal, type }) => {
  return (
    <Wrapper>
      <StyledColumn>
        <SpanTitle>{title}</SpanTitle>
      </StyledColumn>
      <Text logo margin="0">
        to #shareyourimpact
      </Text>
      <CustomColumn>
        <Text>{text}</Text>
        <Row margin=".5em 0">
          <Button onClick={() => toggleModal(type === 'impact' ? 'nonprofit' : 'apply')} primary>
            Apply today
          </Button>
        </Row>
      </CustomColumn>
    </Wrapper>
  );
};

Apply.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  toggleModal: PropTypes.func,
  type: PropTypes.string,
};

export default Apply;
