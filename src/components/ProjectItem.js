import React from 'react';
import GenericItem from 'components/GenericItem';
import ItemParagraph from 'components/shared/ItemParagraph';

class ProjectItem extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <GenericItem title={data.get('title')}>
        <ItemParagraph>{data.get('summary')}</ItemParagraph>
      </GenericItem>
    );
  }
}

export default ProjectItem;
