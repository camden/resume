import React from 'react';
import GenericItem from 'components/GenericItem';
import ItemParagraph from 'components/shared/ItemParagraph';
import ItemInlineList from 'components/shared/ItemInlineList';
import Spacer from 'components/shared/Spacer';

class EducationItem extends React.Component {
  render() {
    const { data } = this.props;
    const subarea = data.get('subarea') && (
      <span>
        <Spacer />
        {data.get('subarea')}
      </span>
    );
    return (
      <GenericItem
        title={data.get('institution')}
        subtitle={data.get('gpa')}
        startDate={data.get('startDate')}
        endDate={data.get('endDate')}
      >
        <ItemParagraph emphasized={true} block={true}>
          <div>{data.get('college')}</div>
          <div>
            {data.get('area')}
            {subarea}
          </div>
        </ItemParagraph>
        <ItemInlineList title={'Activities'} items={data.get('activities')} />
        <ItemInlineList title={'Awards/Honors'} items={data.get('awards')} />
        { !!data.get('highlights') && 
         <ItemInlineList title={'Highlights'} items={data.get('highlights')} />
        }
        <ItemInlineList
          title={'Relevant Coursework'}
          items={data.get('relevantCoursework')}
        />
      </GenericItem>
    );
  }
}

export default EducationItem;
