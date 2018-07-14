import React from 'react';
import styled from 'react-emotion';

class GenericItem extends React.Component {
  render() {
    const { title, subtitle, children } = this.props;
    return (
      <Wrapper>
        <h4>{title}</h4>
        {children}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

export default GenericItem;
