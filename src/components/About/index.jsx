import style from '@/components/About/style.module.css';

const About = () => {
  return (
    <section id='about' className={style.container}>
      <h2 className={style.sectionTitle}>About me</h2>
      <div className={style.subContainer}>
        <p className={style.text}>
          I am <span className={style.primaryColor}>Ronaldo Lipata</span>,
          graduated with a Bachelor's degree in IT. Aside from Web Development,
          I am also a Blockchain enthusiast.
        </p>
        <p className={style.text}>
          Being passionate in Web Development makes me feel elated every time I
          completed projects
        </p>
        <p className={style.text}>
          Having a growth mindset helps me develop my skills through hard work
          and perseverance
        </p>
      </div>
    </section>
  );
};

export default About;
