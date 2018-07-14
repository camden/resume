import React from 'react';
import WorkItem from 'components/WorkItem';

class Work extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.map(item => (
          <WorkItem key={item.get('company')} {...item.toJS()} />
        ))}
      </div>
    );
  }
}

export default Work;
