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
  SiChakraui,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiJest,
  SiJirasoftware,
  SiTestinglibrary,
} from 'react-icons/si';

const Skills = () => {
  return (
    <section id='skills' className={style.container}>
      <h2 className={style.sectionTitle}>Skills & Technologies</h2>
      <div className={style.skillsMainContainer}>
        <div className={style.skillsSubContainer}>
          <h3 className={style.primaryColor}>Front-End Technologies</h3>
          <div className={style.skillsContainer}>
            <span className={style.iconFlex}>
              HTML
              <FaHtml5 />
            </span>
            <span className={style.iconFlex}>
              CSS
              <FaCss3Alt />
            </span>
            <span className={style.iconFlex}>
              Tailwind
              <SiTailwindcss />
            </span>
            <span className={style.iconFlex}>
              Bootstrap
              <FaBootstrap />
            </span>
            <span className={style.iconFlex}>
              SASS
              <FaSass />
            </span>
            <span className={style.iconFlex}>
              JavaScript
              <SiJavascript />
            </span>
            <span className={style.iconFlex}>
              TypeScript
              <SiTypescript />
            </span>
            <span className={style.iconFlex}>
              React
              <FaReact />
            </span>
            <span className={style.iconFlex}>
              Redux
              <SiRedux />
            </span>
            <span className={style.iconFlex}>
              Chakra UI
              <SiChakraui />
            </span>
            <span className={style.iconFlex}>
              Figma
              <FaFigma />
            </span>
          </div>
        </div>
        <div className={style.skillsSubContainer}>
          <h3 className={style.primaryColor}>Back-End Technologies</h3>
          <div className={style.skillsContainer}>
            <span className={style.iconFlex}>
              JavaScript
              <SiJavascript />
            </span>
            <span className={style.iconFlex}>
              TypeScript
              <SiTypescript />
            </span>
            <span className={style.iconFlex}>
              Node JS
              <FaNodeJs />
            </span>
            <span className={style.iconFlex}>
              Express JS
              <SiExpress />
            </span>
            <span className={style.iconFlex}>
              MongoDB
              <SiMongodb />
            </span>
          </div>
        </div>
        <div className={style.skillsSubContainerFlexRow}>
          <div className={style.skillsSubContainer}>
            <h3 className={style.primaryColor}>Build Tools / Bundler</h3>
            <div className={style.skillsContainer}>
              <span className={style.iconFlex}>
                Vite
                <SiVite />
              </span>
              <span className={style.iconFlex}>
                Webpack
                <SiWebpack />
              </span>
            </div>
          </div>

          <div className={style.skillsSubContainer}>
            <h3 className={style.primaryColor}>DevOps / Version Control</h3>
            <div className={style.skillsContainer}>
              <span className={style.iconFlex}>
                Git
                <FaGitAlt />
              </span>
              <span className={style.iconFlex}>
                GitHub
                <FaGithub />
              </span>
              <span className={style.iconFlex}>
                GitLab
                <FaGitlab />
              </span>
            </div>
          </div>
        </div>
        <div className={style.skillsSubContainerFlexRow}>
          <div className={style.skillsSubContainer}>
            <h3 className={style.primaryColor}>Project Management</h3>
            <div className={style.skillsContainer}>
              <span className={style.iconFlex}>
                Jira
                <SiJirasoftware />
              </span>
              <span className={style.iconFlex}>
                Trello
                <FaTrello />
              </span>
            </div>
          </div>

          <div className={style.skillsSubContainer}>
            <h3 className={style.primaryColor}>Testing</h3>
            <div className={style.skillsContainer}>
              <span className={style.iconFlex}>
                Jest
                <SiJest />
              </span>
              <span className={style.iconFlex}>
                RTL
                <SiTestinglibrary />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
