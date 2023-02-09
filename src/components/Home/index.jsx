import style from '@/components/Home/style.module.css';

const Home = () => {
  return (
    <section id='home' className={style.container}>
      <div className={style.text}>
        <p className={style.textOpacity}>Hello! My name is</p>
        <h1 className={style.title}>
          <span className={style.primaryColor}>Ronaldo Lipata.</span>
          <br /> I build things for the
          <span className={style.underline}> Web.</span>
        </h1>
        <p className={style.textOpacity}>
          I am a Full-stack Developer, specializing in Front-end Development. I
          help businesses leverage the internet by building Websites and Web
          Applications. I use MERN stack, REST API and related technologies to
          create aesthetic and secured applications.
        </p>
        <a className={style.ctaButton} href='#contact'>
          Get in touch
        </a>
      </div>
      <img
        className={style.heroImage}
        src='https://drive.google.com/uc?id=1W20LUP5csqI1DQpyCIMiSjBM1FrVSnd7'
        alt='Ronaldo Lipata'
      />
    </section>
  );
};

export default Home;
