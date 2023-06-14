import style from '@/components/FeaturedProjects/style.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiVite,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
} from 'react-icons/si';
import { ReactComponent as M30Icon } from '@/assets/svg/m30-api-icon.svg';
import { ReactComponent as RestIcon } from '@/assets/svg/rest-api-icon.svg';
import { ReactComponent as MongooseIcon } from '@/assets/svg/mongoose-icon.svg';

const FeaturedProjects = () => {
  const featuredProjectsData = [
    {
      name: 'Koolweld Engineering Contractor',
      desc: 'Improve overall designs, implemented upload feature for files and pictures, allowing the company to showcase their work and engage potential clients.',
      src: {
        iphone:
          './assets/images/featured-projects/koolweld/koolweld-iphone.png',
        mackbook:
          './assets/images/featured-projects/koolweld/koolweld-macbook.png',
      },
      techUsed: [
        {
          tech: 'Next.js 13',
          img: <SiNextdotjs />,
        },
        {
          tech: 'Tailwind',
          img: <SiTailwindcss />,
        },
        {
          tech: 'Node',
          img: <FaNodeJs />,
        },
        {
          tech: 'Express',
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
      demo: 'https://koolweld.com/',
      availability: true,
    },
    {
      name: 'Paytaka',
      desc: 'A Virtual Wallet that has seven main features: Signup, Login, Cash in, Transfer Funds, Receive Funds, See Balance, and See Latest Transactions.',
      src: {
        iphone:
          'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1677150054/Web%20Dev%20Portfolio/featured-projects/paytaka-iphone_yikaby.png',
        mackbook:
          'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1677149868/Web%20Dev%20Portfolio/featured-projects/paytaka-macbook_sh8rld.png',
      },

      techUsed: [
        {
          tech: 'Vite',
          img: <SiVite />,
        },
        {
          tech: 'React',
          img: <FaReact />,
        },
        {
          tech: 'CSS',
          img: <FaCss3Alt />,
        },
        {
          tech: 'm30 API',
          img: <M30Icon className={style.m30Icon} />,
        },
      ],
      demo: 'https://ronaldolipata.github.io/Paytaka-Virtual-Wallet/',
      availability: false,
    },
    {
      name: 'Card Matching Game - Space Theme',
      desc: 'The mechanic is to match the cards by flipping each cards within 100 seconds to win. The Players can also see their flip count to record their best scores.',
      src: {
        iphone:
          'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1677150055/Web%20Dev%20Portfolio/featured-projects/mixmatch-iphone_q44ydp.png',
        mackbook:
          'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1677149869/Web%20Dev%20Portfolio/featured-projects/mixmatch-macbook_twuojg.png',
      },
      techUsed: [
        {
          tech: 'HTML',
          img: <FaHtml5 />,
        },
        {
          tech: 'CSS',
          img: <FaCss3Alt />,
        },
        {
          tech: 'JavaScript',
          img: <SiJavascript />,
        },
      ],
      demo: 'https://ronaldolipata.github.io/Card-Matching-Game-Space-Theme/',
      availability: true,
    },
  ];

  return (
    <section id='projects'>
      {featuredProjectsData.map(
        ({ name, desc, src, techUsed, demo, availability }, index) => (
          <div key={name} className={style.container}>
            {index !== 0 ? (
              false
            ) : (
              <h2 className={style.sectionTitle}>Featured Projects</h2>
            )}
            <div
              className={
                index % 2 === 0
                  ? style.subContainer
                  : `${style.subContainer} ${style.subContainerReverse}`
              }
            >
              <div className={style.projectDescription}>
                <h3 className={`${style.primaryColor} ${style.projectTitle}`}>
                  {name}
                </h3>
                <p>{desc}</p>
                <div className={style.techUsed}>
                  {techUsed.map(({ tech, img }) => (
                    <span key={tech} className={style.iconFlex}>
                      {tech} {img}
                    </span>
                  ))}
                </div>
                <a
                  href={demo}
                  target='_blank'
                  onClick={
                    availability ? false : (event) => event.preventDefault()
                  }
                  className={style.ctaButton}
                >
                  {availability ? 'View Demo' : 'Not available'}
                </a>
              </div>
              <div className={style.projectImageContainer}>
                <LazyLoadImage
                  className={style.projectImageIphone}
                  src={src.iphone}
                  alt='featured project image in iphone'
                />
                <LazyLoadImage
                  className={style.projectImageMacbook}
                  src={src.mackbook}
                  alt='featured project image in macbook'
                />
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default FeaturedProjects;
