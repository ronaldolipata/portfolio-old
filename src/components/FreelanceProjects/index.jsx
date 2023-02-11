import style from '@/components/FreelanceProjects/style.module.css';

const FreelanceProjects = () => {
  return (
    <>
      <section className={style.container}>
        <h2 className={style.sectionTitle}>Freelance Projects</h2>
        <div className={style.subContainer}>
          <div>
            <h4 className={`${style.primaryColor} ${style.projectTitle}`}>
              Koolweld Engineering Contractor
            </h4>
            <div className={style.card}>
              <p>
                A website for Construction Company. The project was to enhance
                designs, add more functionalities and update details.
              </p>
              <hr className={style.projectSeparator} />
              <p className={style.techUsed}>
                HTML
                <span className={style.techSeparator}> &#10022; </span>
                CSS
                <span className={style.techSeparator}> &#10022; </span>
                JavaScript
                <span className={style.techSeparator}> &#10022; </span>
                JQuery
                <span className={style.techSeparator}> &#10022; </span>
                LightSlider
                <span className={style.techSeparator}> &#10022; </span>
                Adobe XD
              </p>
            </div>
            <a
              href='https://koolweld.com/'
              target='_blank'
              className={style.ctaButton}
            >
              View Demo
            </a>
          </div>
          <img
            src='https://res.cloudinary.com/dkpg4tdoq/image/upload/v1676132057/Web%20Dev%20Portfolio/freelance-projects/project-koolweld_olrpyk.svg'
            alt='Koolweld Project'
            className={style.projectImage}
          />
        </div>
      </section>
      <section className={style.container}>
        <div className={`${style.subContainer} ${style.subContainerReverse}`}>
          <div>
            <h4 className={`${style.primaryColor} ${style.projectTitle}`}>
              J4SC2 Security Agency
            </h4>
            <div className={style.card}>
              <p>
                A website for Security Agency. The project was to create a
                landing page for SEC registration and to showcase the company's
                services.
              </p>
              <hr className={style.projectSeparator} />
              <p className={style.techUsed}>
                HTML
                <span className={style.techSeparator}>&#10022;</span>
                CSS
                <span className={style.techSeparator}>&#10022;</span>
                JavaScript
                <span className={style.techSeparator}>&#10022;</span>
                JQuery
                <span className={style.techSeparator}>&#10022;</span>
                LightSlider
                <span className={style.techSeparator}>&#10022;</span>
                Adobe XD
              </p>
            </div>
            <a
              href='https://j4sc2securityagency.com/'
              target='_blank'
              className={style.ctaButton}
            >
              View Demo
            </a>
          </div>
          <img
            src='https://res.cloudinary.com/dkpg4tdoq/image/upload/v1676132057/Web%20Dev%20Portfolio/freelance-projects/project-j4sc2_i3i93g.svg'
            alt='J4SC2'
            className={style.projectImage}
          />
        </div>
      </section>
    </>
  );
};

export default FreelanceProjects;
