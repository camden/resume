import React from 'react';
import Work from 'components/Work';
import Projects from 'components/Projects';
import Section from './Section';

class Resume extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <Section title="Work">
          <Work workItems={data.get('work')} />
        </Section>
        <Section title="Projects">
          <Projects
            projectItems={data.getIn(['projects', 'items'])}
            subtitle={data.getIn(['projects', 'subtitle'])}
          />
        </Section>
      </div>
    );
  }
}

export default Resume;
