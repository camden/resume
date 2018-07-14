import WorkItem from 'components/WorkItem';
import ProjectItem from 'components/ProjectItem';
import EducationItem from 'components/EducationItem';

export default [
  {
    title: 'Education',
    itemComponent: EducationItem,
    mainPropertyPath: ['education'],
    itemKey: 'institution',
  },
  {
    title: 'Work',
    itemComponent: WorkItem,
    mainPropertyPath: ['work'],
    itemKey: 'company',
  },
  {
    title: 'Projects',
    itemComponent: ProjectItem,
    mainPropertyPath: ['projects', 'items'],
    itemKey: 'title',
  },
];

export const fragments = graphql`
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

  fragment Education on ResumeHJson {
    education {
      institution
      college
      area
      subarea
      gpa
      studyType
      startDate
      endDate
      awards
      activities
      highlights
    }
  }
`;
