import React from 'react';
import { fromJS } from 'immutable';
import Resume from 'components/Resume';

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

    return <Resume data={resumeData} />;
  }
}

export default Index;

export const query = graphql`
  query ResumeQuery {
    allResumeHJson(limit: 1) {
      edges {
        node {
          ...Education
          ...Work
          ...Projects
        }
      }
    }
  }
`;
