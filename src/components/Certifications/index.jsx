import style from '@/components/Certifications/style.module.css';

const Certifications = () => {
  return (
    <section id='certifications' className={style.container}>
      <h2 className={style.sectionTitle}>Certifications</h2>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.subContainer}>
            <img
              className={style.cardImage}
              src='https://drive.google.com/uc?id=1c2ko6WPWqCJgtqdlY8O75vp3LEVjpw1C'
              alt='certificate image'
            />
            <div className={style.cardDescription}>
              <p>
                <span className={`${style.cardTitle} ${style.primaryColor}`}>
                  Full Stack Web Development (MERN) {''}
                </span>
                from Uplift Code Camp
              </p>
            </div>
          </div>
          <a
            href='https://drive.google.com/file/d/1Bt8v-lysQKv90u3Y91T6ttUqzU9MWVIR/view?usp=share_link'
            target='_blank'
            className={style.ctaButton}
          >
            View Certificate
          </a>
        </div>
        <div className={style.card}>
          <div className={style.subContainer}>
            <img
              className={style.cardImage}
              src='https://drive.google.com/uc?id=1AkfLNULGYTs3kM_XnIPZRjiz09r73_CH'
              alt='certificate image'
            />
            <div className={style.cardDescription}>
              <p>
                <span className={`${style.cardTitle} ${style.primaryColor}`}>
                  Figma for Beginners {''}
                </span>
                from PWA Pilipinas
              </p>
            </div>
          </div>
          <a
            href='https://drive.google.com/file/d/17mdHZSdgHU_8fsHppKPpmk88x6aCZoMf/view?usp=share_link'
            target='_blank'
            className={style.ctaButton}
          >
            View Certificate
          </a>
        </div>
        <div className={style.card}>
          <div className={style.subContainer}>
            <img
              className={style.cardImage}
              src='https://drive.google.com/uc?id=19RFvCmUCiupFc-hey4CbeMcnhYlYYSJK'
              alt='certificate image'
            />
            <div className={style.cardDescription}>
              <p>
                <span className={`${style.cardTitle} ${style.primaryColor}`}>
                  Conquering Responsive Layouts {''}
                </span>
                from Kevin Powell
              </p>
            </div>
          </div>
          <a
            href='https://drive.google.com/file/d/1RbC5BJVMERjp-b_eMJS-jIIys8kaqFYz/view?usp=share_link'
            target='_blank'
            className={style.ctaButton}
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
