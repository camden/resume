import React from 'react';
import GenericItem from 'components/GenericItem';

class EducationItem extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <GenericItem title={data.get('institution')}>
        {data.get('college')}
      </GenericItem>
    );
  }
}

export default EducationItem;
