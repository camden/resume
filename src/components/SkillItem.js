import React from 'react';
import GenericItem from 'components/GenericItem';
import ItemInlineList from 'components/shared/ItemInlineList';

class SkillItem extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <ItemInlineList title={data.get('type')} items={data.get('list')} />
      </div>
    );
  }
}

export default SkillItem;
