import React from 'react';
import Section from 'components/Section';
import sections from 'config/sections';
import styled from 'react-emotion';
import Header from 'components/Header';
import styles from 'config/styles';

class Resume extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Wrapper>
        <Header />
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
  margin: 0 2rem;
  color: ${styles.colors.text};
  max-width: 8.5in;
`;

export default Resume;
