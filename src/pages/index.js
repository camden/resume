import React from 'react';
import { fromJS } from 'immutable';
import Resume from 'components/Resume';
import styled, { injectGlobal } from 'react-emotion';
import Helmet from 'react-helmet';
import favicon from 'assets/favicon.png';

class Index extends React.Component {
  render() {
    const resumeData = fromJS(this.props.data).getIn([
      'allResumeHJson',
      'edges',
      0,
      'node',
    ]);

    if (!resumeData) {
      return (
        <div>
          Oops! Something went wrong. Ping me at{' '}
          <a href="https://twitter.com/camdenbickel">@camdenbickel</a>, please!
        </div>
      );
    }

    return (
      <Wrapper>
        <Helmet title={"Camden Bickel's Résumé"}>
          <link rel="icon" type="image/png" href={favicon} sizes="64x64" />
        </Helmet>
        <Resume data={resumeData} queryString={this.props.location.search} />
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
