import { LazyLoadImage } from 'react-lazy-load-image-component';
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
          I am proficient in both front-end and back-end web development,
          capable of building complete and functional web applications. With
          expertise in JavaScript, databases, and frameworks, I can design,
          develop, and deploy web solutions that meet clients' needs.
        </p>
        <a className={style.ctaButton} href='#contact'>
          Get in touch
        </a>
      </div>
      <div>
        <LazyLoadImage
          className={style.heroImage}
          src='https://res.cloudinary.com/dkpg4tdoq/image/upload/v1676132066/Web%20Dev%20Portfolio/hero-picture/Ron_taapsq.svg'
          alt='Ronaldo Lipata'
        />
      </div>
    </section>
  );
};

export default Home;
