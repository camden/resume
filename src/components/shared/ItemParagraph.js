import styled from 'react-emotion';
import styles from 'config/styles';

export default styled.div`
  font-style: ${props => (props.emphasized ? 'italic' : 'normal')};
  display: ${props => (props.block ? 'inline-block' : 'inline')};
  margin: ${styles.spacing.sectionSubItemVerticalMargin} 0;
`;
