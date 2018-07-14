import React from 'react';
import Section from 'components/Section';
import sections from 'config/sections';
import styled from 'react-emotion';

class Resume extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Wrapper>
        {sections.map(section => (
          <Section key={section.title} section={section} data={data} />
        ))}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  font-family: Merriweather;
  font-size: 12px;
`;

export default Resume;
