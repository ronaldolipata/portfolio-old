import style from '@/components/Skills/style.module.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaTrello,
  FaGithub,
  FaGitlab,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiVite,
  SiWebpack,
  SiRedux,
  SiMaterialui,
  SiChakraui,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiJest,
  SiJirasoftware,
  SiTestinglibrary,
  SiPostman,
  SiInsomnia,
} from 'react-icons/si';
import { DiScrum } from 'react-icons/di';
import { ReactComponent as RestIcon } from '@/assets/svg/rest-api-icon.svg';
import { ReactComponent as MongooseIcon } from '@/assets/svg/mongoose-icon.svg';
import { ReactComponent as TDDIcon } from '@/assets/svg/tdd-icon.svg';

const Skills = () => {
  const skillsData = [
    {
      scope: 'Front End Technologies',
      skills: [
        {
          tech: 'HTML',
          img: <FaHtml5 />,
        },
        {
          tech: 'CSS',
          img: <FaCss3Alt />,
        },
        {
          tech: 'Tailwind',
          img: <SiTailwindcss />,
        },
        {
          tech: 'Bootstrap',
          img: <FaBootstrap />,
        },
        {
          tech: 'SASS',
          img: <FaSass />,
        },
        {
          tech: 'JavaScript',
          img: <SiJavascript />,
        },
        {
          tech: 'TypeScript',
          img: <SiTypescript />,
        },
        {
          tech: 'React',
          img: <FaReact />,
        },
        {
          tech: 'Redux',
          img: <SiRedux />,
        },
        {
          tech: 'MUI',
          img: <SiMaterialui />,
        },
        {
          tech: 'Chakra UI',
          img: <SiChakraui />,
        },
        {
          tech: 'Figma',
          img: <FaFigma />,
        },
      ],
    },
    {
      scope: 'Back End Technologies',
      skills: [
        {
          tech: 'JavaScript',
          img: <SiJavascript />,
        },
        {
          tech: 'TypeScript',
          img: <SiTypescript />,
        },
        {
          tech: 'Node JS',
          img: <FaNodeJs />,
        },
        {
          tech: 'Express JS',
          img: <SiExpress />,
        },
        {
          tech: 'REST API',
          img: <RestIcon className={style.restIcon} />,
        },
        {
          tech: 'MongoDB',
          img: <SiMongodb />,
        },
        {
          tech: 'Mongoose',
          img: <MongooseIcon className={style.mongooseIcon} />,
        },
        {
          tech: 'Postman',
          img: <SiPostman />,
        },
        {
          tech: 'Insomia',
          img: <SiInsomnia />,
        },
      ],
    },
    {
      scope: 'Build Tools / Bundler',
      skills: [
        {
          tech: 'Vite',
          img: <SiVite />,
        },
        {
          tech: 'Webpack',
          img: <SiWebpack />,
        },
      ],
    },
    {
      scope: 'DevOps',
      skills: [
        {
          tech: 'Git',
          img: <FaGitAlt />,
        },
        {
          tech: 'GitHub',
          img: <FaGithub />,
        },
        {
          tech: 'GitLab',
          img: <FaGitlab />,
        },
      ],
    },
    {
      scope: 'Project Management',
      skills: [
        {
          tech: 'Scrum',
          img: <DiScrum className={style.scrumIcon} />,
        },
        {
          tech: 'Jira',
          img: <SiJirasoftware />,
        },
        {
          tech: 'Trello',
          img: <FaTrello />,
        },
      ],
    },
    {
      scope: 'Testing',
      skills: [
        {
          tech: 'TDD',
          img: <TDDIcon className={`${style.iconFlex} ${style.TDDIcon}`} />,
        },
        {
          tech: 'Jest',
          img: <SiJest />,
        },
        {
          tech: 'RTL',
          img: <SiTestinglibrary />,
        },
      ],
    },
  ];

  return (
    <section id='skills' className={style.container}>
      <h2 className={style.sectionTitle}>Skills & Technologies</h2>
      <div className={style.subContainer}>
        {skillsData.map(({ scope, skills }) => (
          <div key={scope} className={style.skillsContainer}>
            <h3 className={style.primaryColor}>{scope}</h3>
            <div className={style.skillsSubContainer}>
              {skills.map(({ tech, img }, index) => (
                <span key={index} className={style.iconFlex}>
                  {tech} {img}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
