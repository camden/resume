import React from 'react';
import { fromJS } from 'immutable';
import Resume from 'components/Resume';
import styled, { injectGlobal } from 'react-emotion';

class Index extends React.Component {
  render() {
    console.log(this.props.data);
    const resumeData = fromJS(this.props.data).getIn([
      'allResumeHJson',
      'edges',
      0,
      'node',
    ]);

    if (!resumeData) {
      return (
        <div>
          Oops! Something went wrong. Check the gatsby console to see if there
          are any errors.
        </div>
      );
    }

    return (
      <Wrapper>
        <Resume data={resumeData} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

injectGlobal`
  @page {
    margin: 0;
  }

  body {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-print-color-adjust
    -webkit-print-color-adjust: exact;
  }
`;

export default Index;

export const query = graphql`
  query ResumeQuery {
    allResumeHJson(limit: 1) {
      edges {
        node {
          ...Info
          ...Education
          ...Work
          ...Projects
          ...Skills
          ...Volunteer
        }
      }
    }
  }
`;
