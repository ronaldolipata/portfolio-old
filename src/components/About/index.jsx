import style from '@/components/About/style.module.css';

const About = () => {
  return (
    <section id='about' className={style.container}>
      <h2 className={style.sectionTitle}>About me</h2>
      <div className={style.subContainer}>
        <p className={style.text}>
          I am passionate about creating{' '}
          <span className={style.primaryColor}>intuitive and responsive</span>{' '}
          web applications that provide a seamless user experience.
        </p>
        <p className={style.text}>
          With my skills in HTML, CSS, JavaScript, and React, I can develop{' '}
          <span className={style.primaryColor}>
            dynamic and interactive front-end designs
          </span>{' '}
          that align with clients' business objectives.
        </p>
        <p className={style.text}>
          I am a firm believer in the importance of staying up-to-date with the
          latest industry trends and technologies. As such, I am constantly
          expanding my skillset and learning new tools to improve my work.
        </p>
      </div>
    </section>
  );
};

export default About;
