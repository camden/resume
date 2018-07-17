import React from 'react';
import styled from 'react-emotion';
import Title from 'components/shared/Title';
import styles from 'config/styles';

class GenericItem extends React.Component {
  render() {
    const { title, subtitle, children } = this.props;
    return (
      <Wrapper>
        <Header>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Date>Jan 2017 - Jul 2017</Date>
        </Header>
        {children}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-bottom: 1rem;
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

const Date = styled.div`
  flex: 1;
  text-align: right;
  color: ${styles.colors.itemDate};
`;

export default GenericItem;
