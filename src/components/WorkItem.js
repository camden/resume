import React from 'react';
import GenericItem from 'components/GenericItem';

class WorkItem extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <GenericItem title={data.get('company')}>
        {data.get('position')}
      </GenericItem>
    );
  }
}

export default WorkItem;
