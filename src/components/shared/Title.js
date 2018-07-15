import styled from 'react-emotion';

export default styled.h4`
  flex: 0 0 auto;
  font-weight: bold;
  margin: 0;
  display: ${props => (props.inline ? 'inline' : 'inline-block')};
  margin-right: ${props => (props.inline ? '0' : '1rem')};
`;
