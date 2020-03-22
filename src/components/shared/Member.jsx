import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Column, Row, SpanSubtitle, Text } from '../../theme/index';

const Wrapper = styled.div`
  display: flex;
  height: auto;
  min-height: 550px;
  width: 100%;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledColumn = styled(Column)`
  justify-content: center;
  align-items: center;
  background-color: inherit;
  padding: 2em 0;

  @media (max-width: 1200px) {
    width: 100%;
    align-items: center;
  }
`;

const StyledRow = styled(Row)`
  width: 82%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
    align-items: center;
    flex-direction: column;
  }
`;

const StyledTextColumn = styled(Column)`
  margin: 1em 0;
  width: 90%;

  @media (max-width: 1200px) {
    width: 90%;
    text-align: center;
    margin: 0 auto;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 500px) {
    width: 225px;
    height: 225px;
  }
`;

const Member = ({ title, description, img, name }) => {
  return (
    <Wrapper>
      <StyledRow>
        <StyledColumn>
          <Img src={img} alt={description} />
        </StyledColumn>
        <StyledColumn>
          <StyledTextColumn>
            <SpanSubtitle>{name}</SpanSubtitle>
            <Text title>{title}</Text>
            <Text>{description}</Text>
          </StyledTextColumn>
        </StyledColumn>
      </StyledRow>
    </Wrapper>
  );
};

Member.propTypes = {
  description: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

export default Member;
