import React from 'react';
import Work from 'components/Work';

class Resume extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <h3>Work:</h3>
        <Work workItems={data.get('work')} />
      </div>
    );
  }
}

export default Resume;
