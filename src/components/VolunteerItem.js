import React from 'react';
import GenericItem from 'components/GenericItem';

class VolunteerItem extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <GenericItem title={data.get('organization')}>
        {data.get('position')}
      </GenericItem>
    );
  }
}

export default VolunteerItem;
