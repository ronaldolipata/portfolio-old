import style from '@/components/FeaturedProjects/style.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiVite, SiJavascript, SiExpress, SiMongodb } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const FeaturedProjects = () => {
  const featuredProjectsData = [
    {
      name: 'Memoirs',
      desc: 'An application focuses in sharing important events in life and memorable stories. Users can input Title, Content and upload their photos.',
      src: {
        iphone:
          'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1677150055/Web%20Dev%20Portfolio/featured-projects/memoirs-iphone_hrpbrj.png',
        mackbook:
          'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1677149869/Web%20Dev%20Portfolio/featured-projects/memoirs-macbook_y4dcfz.png',
      },
      techUsed: [
        {
          tech: 'Vite',
          src: <SiVite />,
        },
        {
          tech: 'React',
          src: <FaReact />,
        },
        {
          tech: 'CSS',
          src: <FaCss3Alt />,
        },
        {
          tech: 'Node',
          src: <FaNodeJs />,
        },
        {
          tech: 'Express',
          src: <SiExpress />,
        },
        {
          tech: 'REST API',
          src: <TbApi />,
        },
        {
          tech: 'MongoDB',
          src: <SiMongodb />,
        },
      ],
      demo: 'https://ronaldolipata.github.io/memoirs-frontend/',
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
          src: <SiVite />,
        },
        {
          tech: 'React',
          src: <FaReact />,
        },
        {
          tech: 'CSS',
          src: <FaCss3Alt />,
        },
        {
          tech: 'm30 API',
          src: <TbApi />,
        },
      ],
      demo: 'https://ronaldolipata.github.io/Paytaka-Virtual-Wallet/',
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
          src: <FaHtml5 />,
        },
        {
          tech: 'CSS',
          src: <FaCss3Alt />,
        },
        {
          tech: 'JavaScript',
          src: <SiJavascript />,
        },
      ],
      demo: 'https://ronaldolipata.github.io/Card-Matching-Game-Space-Theme/',
    },
  ];

  return (
    <section id='projects'>
      {featuredProjectsData.map(
        ({ name, desc, src, techUsed, demo }, index) => (
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
                  {techUsed.map(({ tech, src }) => (
                    <span key={tech} className={style.iconFlex}>
                      {tech} {src}
                    </span>
                  ))}
                </div>
                <a href={demo} target='_blank' className={style.ctaButton}>
                  View Demo
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
