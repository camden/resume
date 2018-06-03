import React from 'react';
import Section from 'components/Section';
import sections from 'config/sections';

class Resume extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        {sections.map(section => (
          <Section key={section.title} section={section} data={data} />
        ))}
      </div>
    );
  }
}

export default Resume;
