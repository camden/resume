import React from 'react';
import styled from 'react-emotion';
import Title from 'components/shared/Title';

const ItemInlineList = props => {
  const { title, items } = props;
  let formattedItems;

  if (typeof items === 'string') {
    formattedItems = items;
  } else if (Array.isArray(items)) {
    formattedItems = items.join(', ');
  }
  return (
    <div>
      <Title inline={true}>{title}:</Title>
      <Items>{formattedItems}</Items>
    </div>
  );
};

const Items = styled.span`
  margin-left: 0.5em;
`;

export default ItemInlineList;
