import React from 'react';
import GenericItem from 'components/GenericItem';
import ItemParagraph from 'components/shared/ItemParagraph';
import ItemInlineList from 'components/shared/ItemInlineList';
import Spacer from 'components/shared/Spacer';

class EducationItem extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <GenericItem title={data.get('institution')} subtitle={data.get('gpa')}>
        <ItemParagraph emphasized={true}>{data.get('college')}</ItemParagraph>
        <ItemParagraph emphasized={true}>
          {data.get('area')}
          <Spacer />
          {data.get('subarea')}
        </ItemParagraph>
        <ItemInlineList title={'Activities'} items={data.get('activities')} />
        <ItemInlineList title={'Awards/Honors'} items={data.get('awards')} />
        <ItemInlineList title={'Highlights'} items={data.get('highlights')} />
      </GenericItem>
    );
  }
}

export default EducationItem;
