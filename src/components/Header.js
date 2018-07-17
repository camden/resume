import React from 'react';
import styled from 'react-emotion';
import styles from 'config/styles';

const Header = () => {
  return (
    <Wrapper>
      <Name>Camden Bickel</Name>
      <Info>info here</Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 0.5em;
`;

const Name = styled.h2`
  font-size: ${styles.fontSize.xLarge};
  margin-top: 0;
`;

const Info = styled.div`
  flex: 1;
  text-align: right;
`;

export default Header;
