import { FaLinkedin, FaGithubSquare, FaDribbbleSquare } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import style from '@/components/Contact/style.module.css';

const Contact = () => {
  const currentYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  return (
    <section id='contact' className={style.container}>
      <h2 className={style.sectionTitle}>Get in touch</h2>
      <div className={style.textContainer}>
        <p className={style.text}>
          Hey there! How are you? I hope you're doing great! :)
        </p>
        <p className={style.text}>
          If you have an inquiry, you may reach me at LinkedIn or send a message
          to below email.
        </p>
        <p className={`${style.text} ${style.email}`}>
          <span className={style.primaryColor}> lipata.ronaldo@gmail.com</span>
        </p>
        <div className={style.socialIconsContainer}>
          <a
            href='https://www.linkedin.com/in/ronaldolipata/'
            aria-label='Know more about Ronaldo Lipata in LinkedIn'
            target='_blank'
            className={style.socialIcon}
          >
            <FaLinkedin />
          </a>
          <a
            href='https://github.com/ronaldolipata'
            aria-label='Know more about Ronaldo Lipata in GitHub'
            target='_blank'
            className={style.socialIcon}
          >
            <FaGithubSquare />
          </a>
          <a
            href='https://dribbble.com/ronaldolipata'
            aria-label='Know more about Ronaldo Lipata in Dribbble'
            target='_blank'
            className={`${style.socialIcon} ${style.dribbleIcon}`}
          >
            <FaDribbbleSquare />
          </a>
        </div>
        <div className={style.upworkContainer}>
          <a
            className={`${style.text} ${style.hire}`}
            aria-label='Hire Ronaldo Lipata in Upwork'
            href='https://www.upwork.com/freelancers/~0198bbbb2a2f09177a'
            target='_blank'
          >
            <span className={style.primaryColor}>Hire me!</span>
            <SiUpwork className={style.upwork} />
          </a>
        </div>
        <p className={style.copyright}>
          <span>Ronaldo Lipata &copy; {currentYear()}</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
