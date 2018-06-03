import React from 'react';
import GenericItem from 'components/GenericItem';

class ProjectItem extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <GenericItem title={data.get('title')}>{data.get('summary')}</GenericItem>
    );
  }
}

export default ProjectItem;
