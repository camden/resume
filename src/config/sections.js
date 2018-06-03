import WorkItem from 'components/WorkItem';
import ProjectItem from 'components/ProjectItem';

export default [
  {
    title: 'Work',
    itemComponent: WorkItem,
    mainPropertyPath: ['work'],
    itemKey: 'company',
    fragment: graphql`
      fragment Work on ResumeHJson {
        work {
          company
          website
          position
          startDate
          endDate
          summary
          techUsed
        }
      }
    `,
  },
  {
    title: 'Projects',
    itemComponent: ProjectItem,
    mainPropertyPath: ['projects', 'items'],
    itemKey: 'title',
    fragment: graphql`
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
    `,
  },
];
