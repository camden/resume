import React from 'react';
import WorkItem from 'components/WorkItem';

class Work extends React.Component {
  render() {
    const { workItems } = this.props;
    return (
      <div>
        {workItems.map(item => (
          <WorkItem key={item.get('company')} {...item.toJS()} />
        ))}
      </div>
    );
  }
}

export default Work;
