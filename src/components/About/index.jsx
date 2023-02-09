import style from '@/components/About/style.module.css';

const About = () => {
  return (
    <section id='about' className={style.container}>
      <h3 className={style.sectionTitle}>About me</h3>
      <div className={style.subContainer}>
        <p className={style.text}>
          I am <span className={style.primaryColor}>Ronaldo Lipata</span>,
          graduated with a Bachelor's degree in IT. Aside from Web Development,
          I am also a Blockchain enthusiast.
        </p>
        <p className={style.text}>
          Having a passion in Web Development makes me feel elated every time I
          completed projects.
        </p>
      </div>
    </section>
  );
};

export default About;
