import React from 'react';
import styled from 'react-emotion';

class GenericItem extends React.Component {
  render() {
    const { title, subtitle, children } = this.props;
    return (
      <Wrapper>
        <Header>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Header>
        {children}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h4`
  flex: 0 0 auto;
  font-weight: bold;
  margin: 0;
  margin-right: 1rem;
`;

const Subtitle = styled.span`
  flex: 1;
  font-style: italic;
  font-weight: lighter;
`;

export default GenericItem;
