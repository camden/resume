import React from 'react';
import GenericItem from 'components/GenericItem';
import ItemParagraph from 'components/shared/ItemParagraph';

class VolunteerItem extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <GenericItem title={data.get('organization')}>
        <ItemParagraph>{data.get('position')}</ItemParagraph>
      </GenericItem>
    );
  }
}

export default VolunteerItem;
