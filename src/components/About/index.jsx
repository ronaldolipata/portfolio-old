import style from '@/components/About/style.module.css';

export default function About() {
  return (
    <section id='about' className={style.container}>
      <h2 className={style.sectionTitle}>About me</h2>
      <div className={style.subContainer}>
        <p className={style.text}>
          I am passionate about creating
          <span className={style.primaryColor}> intuitive and responsive </span>
          web applications that provide a seamless user experience.
        </p>
        <p className={style.text}>
          With my skills in Figma, MERN stack, I can develop {''}
          <span className={style.primaryColor}>
            dynamic and interactive
          </span>{' '}
          frontend interface, as well as{' '}
          <span className={style.primaryColor}>efficient and robust</span>{' '}
          backend that align with clients&apos; business objectives.
        </p>
        <p className={style.text}>
          I am a firm believer in the importance of staying up-to-date with the
          latest industry trends and technologies. As such, I am constantly
          expanding my skillset and learning new tools to improve my work.
        </p>
      </div>
    </section>
  );
}
