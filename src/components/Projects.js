import React from 'react';
import ProjectItem from 'components/ProjectItem';

class Projects extends React.Component {
  render() {
    const { projectItems, subtitle } = this.props;
    return (
      <div>
        {subtitle}
        {projectItems.map(item => (
          <ProjectItem key={item.get('title')} {...item.toJS()} />
        ))}
      </div>
    );
  }
}

export default Projects;

export const projectsQuery = graphql`
  fragment Projects on ResumeHJson {
    projects {
      subtitle
      items {
        title
        summary
        techUsed
        dateFinished
        hidden
      }
    }
  }
`;
