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
  SiGoogleanalytics,
} from 'react-icons/si';
import { ReactComponent as RestIcon } from '@/assets/svg/rest-api-icon.svg';
import { ReactComponent as MongooseIcon } from '@/assets/svg/mongoose-icon.svg';

const Skills = () => {
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
          tech: 'Material UI',
          img: <SiMaterialui />,
        },
        {
          tech: 'Chakra UI',
          img: <SiChakraui />,
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
          tech: 'Postman',
          img: <SiPostman />,
        },
        {
          tech: 'Insomia',
          img: <SiInsomnia />,
        },
        {
          tech: 'GA',
          img: <SiGoogleanalytics />,
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
