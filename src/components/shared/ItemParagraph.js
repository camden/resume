import styled from 'react-emotion';

export default styled.p`
  font-style: ${props => (props.emphasized ? 'italic' : 'normal')};
`;
