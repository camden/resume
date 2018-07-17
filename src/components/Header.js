import React from 'react';
import styled from 'react-emotion';
import styles from 'config/styles';

const Header = () => {
  return <Name>Camden Bickel</Name>;
};

const Name = styled.h2`
  font-size: ${styles.fontSize.xLarge};
  margin-top: 0.25em;
`;

export default Header;
