import WorkItem from 'components/WorkItem';
import ProjectItem from 'components/ProjectItem';
import EducationItem from 'components/EducationItem';
import VolunteerItem from 'components/VolunteerItem';
import SkillItem from 'components/SkillItem';

export default [
  {
    title: 'Education',
    itemComponent: EducationItem,
    mainPropertyPath: ['education'],
    itemKey: 'institution',
  },
  {
    title: 'Experience',
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
  {
    title: 'Volunteering',
    itemComponent: VolunteerItem,
    mainPropertyPath: ['volunteer'],
    itemKey: 'organization',
  },
  {
    title: 'Skills',
    itemComponent: SkillItem,
    mainPropertyPath: ['skills'],
    itemKey: 'type',
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
      highlights
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

  fragment Skills on ResumeHJson {
    skills {
      type
      list
    }
  }

  fragment Volunteer on ResumeHJson {
    volunteer {
      organization
      position
      startDate
      endDate
      summary
    }
  }
`;
