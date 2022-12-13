import style from '@/components/Contact/style.module.css';

const Contact = () => {
  const currentYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  return (
    <section id='contact' className={style.container}>
      <h3 className={style.sectionTitle}>Get in touch</h3>
      <div className={style.textContainer}>
        <p>
          Hey there! How are you? Thank you for visiting my Website. I hope
          you're doing great! :)
        </p>
        <p className={style.text}>
          If you have inquiries, you may drop a message to my email or LinkedIn.
          I will get back to you the soonest, have a good one!
        </p>
        <p className={`${style.text} ${style.email}`}>
          E-mail Address:
          <span className={style.primaryColor}> lipata.ronaldo@gmail.com</span>
        </p>
        <div className={style.socialIconsContainer}>
          <a
            href='https://www.linkedin.com/in/ronaldolipata/'
            target='_blank'
            className={style.socialIcon}
          >
            <i className='fa-brands fa-linkedin-in'></i>
          </a>
          <a
            href='https://github.com/ronaldolipata'
            target='_blank'
            className={style.socialIcon}
          >
            <i className='fa-brands fa-github-alt'></i>
          </a>
          <a
            href='https://dribbble.com/ronaldolipata'
            target='_blank'
            className={`${style.socialIcon} ${style.dribbleIcon}`}
          >
            <i className='fa-brands fa-dribbble'></i>
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
