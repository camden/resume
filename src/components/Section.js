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
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  color: ${styles.colors.sectionTitle};
  flex-basis: 8rem;
  margin: 0;
`;

const ItemWrapper = styled.div`
  flex-basis: 100%;
  @media print, (min-width: ${styles.breakpoints.mobile}) {
    flex: 1;
  }
`;

export default Section;
