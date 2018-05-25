import React from 'react';
import Work from 'components/Work';
import Projects from 'components/Projects';

class Resume extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <h3>Work:</h3>
        <Work workItems={data.get('work')} />
        <h3>Projects:</h3>
        <Projects
          projectItems={data.getIn(['projects', 'items'])}
          subtitle={data.getIn(['projects', 'subtitle'])}
        />
      </div>
    );
  }
}

export default Resume;
