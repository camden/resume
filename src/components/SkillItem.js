import React from 'react';
import GenericItem from 'components/GenericItem';

class SkillItem extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <GenericItem title={data.get('type')}>{data.get('list')}</GenericItem>
    );
  }
}

export default SkillItem;
