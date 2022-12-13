import style from '@/components/Home/style.module.css';
import heroImage from '@/assets/img/Ron.svg';

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
          I am a Web Developer that helps businesses leverage the internet by
          building Websites and Web Applications. I mostly use MERN stack and
          related technologies to create aesthetic and secured applications.
        </p>
        <a className={style.ctaButton} href='#contact'>
          Get in touch
        </a>
      </div>
      <img className={style.heroImage} src={heroImage} alt='Ronaldo Lipata' />
    </section>
  );
};

export default Home;
