import React from 'react';
import styled from 'react-emotion';
import styles from 'config/styles';

const Section = props => {
  const { section, data } = props;
  const {
    title,
    mainPropertyPath,
    itemKey,
    itemComponent: ItemComponent,
  } = section;
  const itemData = data.getIn(mainPropertyPath);

  if (!itemData) {
    console.log(data);
    throw new Error(`Could not get item data for ${title}.`);
  }
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ItemWrapper>
        {itemData.map(item => (
          <ItemComponent key={item.get(itemKey)} data={item} />
        ))}
      </ItemWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  color: blue;
  flex-basis: 10rem;
`;

const ItemWrapper = styled.div`
  color: red;

  flex-basis: 100%;
  @media (min-width: ${styles.breakpoints.mobile}) {
    flex: 1;
  }
`;

export default Section;
