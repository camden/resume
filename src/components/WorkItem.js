import React from 'react';
import GenericItem from 'components/GenericItem';
import styled from 'react-emotion';

class WorkItem extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <GenericItem title={data.get('company')} subtitle={data.get('position')}>
        <HighlightsList>
          {data
            .get('highlights')
            .map(highlight => (
              <Highlight key={highlight.substr(0, 30)}>{highlight}</Highlight>
            ))}
        </HighlightsList>
      </GenericItem>
    );
  }
}

const HighlightsList = styled.ul`
  list-style-position: outside;
  padding: 0 1.2rem;
`;

const Highlight = styled.li``;

export default WorkItem;
