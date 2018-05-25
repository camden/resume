import React from 'react';
import { fromJS } from 'immutable';
import Resume from 'components/Resume';

class Index extends React.Component {
  render() {
    const resumeData = fromJS(this.props.data.allResumeHJson.edges[0].node);
    return <Resume data={resumeData} />;
  }
}

export default Index;

export const query = graphql`
  query ResumeQuery {
    allResumeHJson(limit: 1) {
      edges {
        node {
          ...Work
        }
      }
    }
  }
`;
