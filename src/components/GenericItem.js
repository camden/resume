import React from 'react';
import styled from 'react-emotion';
import Title from 'components/shared/Title';
import styles from 'config/styles';
import fecha from 'fecha';

const formatDate = ISODateString => {
  try {
    const date = fecha.parse(ISODateString, 'YYYY-MM-DD');
    return fecha.format(date, 'MMM YYYY');
  } catch (e) {
    return ISODateString;
  }
};

class GenericItem extends React.Component {
  renderDate() {
    const { startDate, endDate } = this.props;
    const formattedEndDate = endDate && ` - ${formatDate(endDate)}`;
    return (
      <Date>
        {formatDate(startDate)}
        {formattedEndDate}
      </Date>
    );
  }

  render() {
    const { title, subtitle, children } = this.props;
    return (
      <Wrapper>
        <Header>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          {this.renderDate()}
        </Header>
        {children}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-bottom: 0.8rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Subtitle = styled.span`
  flex: 1;
  font-style: italic;
  font-weight: lighter;
`;

const Date = styled.div`
  text-align: right;
  color: ${styles.colors.itemDate};
`;

export default GenericItem;
