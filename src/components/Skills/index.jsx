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
  SiNextdotjs,
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
  SiInsomnia,
  SiGoogleanalytics,
  SiFramer,
} from 'react-icons/si';
import { DiScrum } from 'react-icons/di';
import { ReactComponent as RestIcon } from '@/assets/svg/rest-api-icon.svg';
import { ReactComponent as MongooseIcon } from '@/assets/svg/mongoose-icon.svg';

export default function Skills() {
  const skillsData = [
    {
      scope: 'Application and Data',
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
          tech: 'Sass',
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
          tech: 'React.js',
          img: <FaReact />,
        },
        {
          tech: 'Next.js',
          img: <SiNextdotjs />,
        },
        {
          tech: 'Redux Toolkit',
          img: <SiRedux />,
        },
        {
          tech: 'Material UI',
          img: <SiMaterialui />,
        },
        {
          tech: 'Chakra UI',
          img: <SiChakraui />,
        },
        {
          tech: 'Node.js',
          img: <FaNodeJs />,
        },
        {
          tech: 'Express.js',
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
        {
          tech: 'Vite',
          img: <SiVite />,
        },
        {
          tech: 'Webpack',
          img: <SiWebpack />,
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
    {
      scope: 'Business Tools',
      skills: [
        {
          tech: 'Scrum',
          img: <DiScrum className={style.scrumIcon} />,
        },
        {
          tech: 'Figma',
          img: <FaFigma />,
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
      scope: 'Utilities',
      skills: [
        {
          tech: 'Insomia',
          img: <SiInsomnia />,
        },
        {
          tech: 'Google Analytics',
          img: <SiGoogleanalytics />,
        },
        {
          tech: 'Framer',
          img: <SiFramer />,
        },
      ],
    },
  ];

  return (
    <section id='skills' className={style.container}>
      <h2 className={style.sectionTitle}>Tech Stacks</h2>
      <div className={style.subContainer}>
        {skillsData.map(({ scope, skills }) => (
          <div key={scope} className={style.skillsContainer}>
            <h3 className={style.primaryColor}>{scope}</h3>
            <div className={style.skillsSubContainer}>
              {skills.map(({ tech, img }) => (
                <span key={tech} className={style.iconFlex}>
                  {tech} {img}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
