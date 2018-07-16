import styled from 'react-emotion';
import styles from 'config/styles';

export default styled.p`
  font-style: ${props => (props.emphasized ? 'italic' : 'normal')};
  margin: ${styles.spacing.sectionSubItemVerticalMargin} 0;
`;
