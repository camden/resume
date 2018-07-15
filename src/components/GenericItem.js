import React from 'react';
import styled from 'react-emotion';
import Title from 'components/shared/Title';

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

const Subtitle = styled.span`
  flex: 1;
  font-style: italic;
  font-weight: lighter;
`;

export default GenericItem;
