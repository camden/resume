import React from 'react';
import Section from 'components/Section';
import sections from 'config/sections';
import styled from 'react-emotion';
import Header from 'components/Header';
import styles from 'config/styles';
import mergeEnvData from 'utils/mergeEnvData';

class Resume extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Wrapper>
        <Header data={mergeEnvData(data.get('info'))} />
        {sections.map(section => (
          <Section key={section.title} section={section} data={data} />
        ))}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  font-family: ${styles.options.serif ? 'Merriweather' : 'sans-serif'};
  font-size: ${styles.fontSize.document};
  margin: 0 2rem 1rem;
  color: ${styles.colors.text};
  max-width: 8.5in;
`;

export default Resume;
