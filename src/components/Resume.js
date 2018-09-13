import React from 'react';
import Section from 'components/Section';
import sections from 'config/sections';
import styled from 'react-emotion';
import Header from 'components/Header';
import styles from 'config/styles';
import mergeEnvData from 'utils/mergeEnvData';
import fixDataBasedOnQueryString from 'utils/fixDataBasedOnQueryString';

class Resume extends React.Component {
  render() {
    const { data: rawData, queryString } = this.props;

    const data = fixDataBasedOnQueryString(rawData, queryString);

    return (
      <Wrapper>
        <Header data={mergeEnvData(data.get('info'))} />
        {sections.map(section => (
          <Section key={section.title} section={section} data={data} />
        ))}
        <Footer>{data.getIn(['info', 'footer'])}</Footer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  font-family: ${styles.options.serif ? 'Merriweather' : 'sans-serif'};
  font-size: ${styles.fontSize.document};
  margin: 0 0.75rem 0.5rem;
  color: ${styles.colors.text};
  max-width: 8.5in;

  @media (min-width: ${styles.breakpoints.mobile}) {
    margin: 0 2rem 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  font-style: italic;
  text-align: center;
`;

export default Resume;
