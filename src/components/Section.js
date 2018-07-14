import React from 'react';

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
    <div>
      <h2>{title}</h2>
      {itemData.map(item => (
        <ItemComponent key={item.get(itemKey)} data={item} />
      ))}
    </div>
  );
};

export default Section;
