import style from '@/components/FeaturedProjects/style.module.css';
import { ReactComponent as M30Icon } from '../../assets/svg/m30-api-icon.svg';
import { ReactComponent as RestIcon } from '../../assets/svg/rest-api-icon.svg';
import { ReactComponent as MongooseIcon } from '../../assets/svg/mongoose-icon.svg';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiVite, SiJavascript, SiExpress, SiMongodb } from 'react-icons/si';

const FeaturedProjects = () => {
  return (
    <>
      <section id='projects' className={style.container}>
        <div>
          <h2 className={style.sectionTitle}>Featured Projects</h2>
          <div className={style.subContainer}>
            <div className={style.projectDescription}>
              <h3 className={`${style.primaryColor} ${style.projectTitle}`}>
                Memoirs
              </h3>
              <p>
                An application focuses in sharing important events in life and
                telling memorable stories to share. Users can input Title,
                Content and upload their photos.
              </p>
              <div className={style.techUsed}>
                <span className={style.iconFlex}>
                  Vite
                  <SiVite />
                </span>
                <span className={style.iconFlex}>
                  React
                  <FaReact />
                </span>
                <span className={style.iconFlex}>
                  CSS
                  <FaCss3Alt />
                </span>
                <span className={style.iconFlex}>
                  Node
                  <FaNodeJs className={style.m30Icon} />
                </span>
                <span className={style.iconFlex}>
                  Express
                  <SiExpress className={style.m30Icon} />
                </span>
                <span className={style.iconFlex}>
                  REST API
                  <RestIcon className={style.restIcon} />
                </span>
                <span className={style.iconFlex}>
                  MongoDB
                  <SiMongodb className={style.m30Icon} />
                </span>
                <span className={style.iconFlex}>
                  Mongoose
                  <MongooseIcon className={style.mongooseIcon} />
                </span>
              </div>
              <a
                href='https://ronaldolipata.github.io/memoirs-frontend/'
                target='_blank'
                className={style.ctaButton}
              >
                View Demo
              </a>
            </div>
            <div className={style.projectImageContainer}>
              <img
                className={style.projectImageIphone}
                src='https://drive.google.com/uc?id=1UeYQ9Vx_HBezgK8DkT2sH-8l5JO2JlNn'
                alt='featured project image'
              />
              <img
                className={style.projectImageMacbook}
                src='https://drive.google.com/uc?id=1ocxgxwO207tVBeJp73MVHI-ELim01onP'
                alt='featured project image'
              />
            </div>
          </div>
        </div>
      </section>
      <section className={style.container}>
        <div className={`${style.subContainer} ${style.subContainerReverse}`}>
          <div className={style.projectDescription}>
            <h3 className={`${style.primaryColor} ${style.projectTitle}`}>
              Paytaka
            </h3>
            <p>
              Paytaka is a Virtual Wallet that has seven main features: Signup,
              Login, Cash in, Transfer Funds, Receive Funds, See Balance, See
              Latest Transactions
            </p>
            <div className={style.techUsed}>
              <span className={style.iconFlex}>
                Vite
                <SiVite />
              </span>
              <span className={style.iconFlex}>
                React
                <FaReact />
              </span>
              <span className={style.iconFlex}>
                CSS
                <FaCss3Alt />
              </span>
              <span className={style.iconFlex}>
                m30 API
                <M30Icon className={style.m30Icon} />
              </span>
            </div>
            <a
              href='https://ronaldolipata.github.io/Paytaka-Virtual-Wallet/'
              target='_blank'
              className={style.ctaButton}
            >
              View Demo
            </a>
          </div>
          <div className={style.projectImageContainer}>
            <img
              className={style.projectImageIphone}
              src='https://drive.google.com/uc?id=1EEx1lGrzwghNSH21aYo29c49nQuqRm7I'
              alt='featured project image'
            />
            <img
              className={style.projectImageMacbook}
              src='https://drive.google.com/uc?id=1IObTcb8TJR0POX-Wjjq8QvgYzM_kE-RQ'
              alt='featured project image'
            />
          </div>
        </div>
      </section>
      <section className={style.container}>
        <div className={style.subContainer}>
          <div className={style.projectDescription}>
            <h3 className={`${style.primaryColor} ${style.projectTitle}`}>
              Card Matching Game - Space Theme
            </h3>
            <p>
              The mechanic is to match the cards by flipping each cards within
              100 seconds to win. The Players can also see their flip count to
              record their best scores.
            </p>
            <div className={style.techUsed}>
              <span className={style.iconFlex}>
                HTML
                <FaHtml5 />
              </span>
              <span className={style.iconFlex}>
                CSS
                <FaCss3Alt />
              </span>
              <span className={style.iconFlex}>
                JavaScript
                <SiJavascript />
              </span>
            </div>
            <a
              href='https://ronaldolipata.github.io/Card-Matching-Game-Space-Theme/'
              target='_blank'
              className={style.ctaButton}
            >
              View Demo
            </a>
          </div>
          <div className={style.projectImageContainer}>
            <img
              className={style.projectImageIphone}
              src='https://drive.google.com/uc?id=1O8N6DxPmCv4DRjISeE9oF9mSgjVmLNst'
              alt='featured project image'
            />
            <img
              className={style.projectImageMacbook}
              src='https://drive.google.com/uc?id=18JBdRIht61TTDSbSfA-_6uK0bTJqcNJL'
              alt='featured project image'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProjects;
