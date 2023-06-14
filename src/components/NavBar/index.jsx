import { useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import style from '@/components/NavBar/style.module.css';

export default function NavBar() {
  const refHeader = useRef('hidden');
  const refMenu = useRef('hidden');
  const refToggleMenu = useRef('hidden');
  const refNavLink = useRef('hidden');

  const navLinks = [
    'home',
    'about',
    'skills',
    'projects',
    'certifications',
    'contact',
  ];

  // Show menu if hamburger menu is clicked
  const toggleOnClick = () => {
    refMenu.current.classList.toggle(`${style.active}`);
    refToggleMenu.current.classList.toggle(`${style.active}`);
    document.body.classList.toggle(`${style.active}`);
  };

  // Hide menu if close is clicked
  const removeStyle = () => {
    refMenu.current.classList.remove(`${style.active}`);
    refToggleMenu.current.classList.remove(`${style.active}`);
    document.body.classList.remove(`${style.active}`);
  };

  return (
    <header className={style.container} ref={refHeader}>
      <div className={style.subContainer}>
        <a href="#home" className={style.logo}>
          <LazyLoadImage
            src="https://res.cloudinary.com/dkpg4tdoq/image/upload/v1676132061/Web%20Dev%20Portfolio/dark-theme/dark-theme-logo_fwtr6i.svg"
            alt="Logo"
          />
        </a>
        <nav>
          <ul className={`${style.menu}`} ref={refMenu}>
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className={style.navLink}
                  ref={refNavLink}
                  onClick={removeStyle}
                >
                  {link}
                </a>
              </li>
            ))}
            <a
              href="https://drive.google.com/file/d/1zN7vpDvcsuMO8EadKvthIiojV8Y9i8mx/view?usp=share_link"
              className={`${style.ctaButton} ${style.mobile}`}
              onClick={removeStyle}
              target="_blank"
              download
              rel="noreferrer"
            >
              Resume
            </a>
          </ul>
        </nav>
        <a
          href="https://drive.google.com/file/d/1zN7vpDvcsuMO8EadKvthIiojV8Y9i8mx/view?usp=share_link"
          className={`${style.ctaButton} ${style.desktop}`}
          target="_blank"
          download
          rel="noreferrer"
        >
          Resume
        </a>
        <div
          className={style.toggleMenu}
          onClick={toggleOnClick}
          ref={refToggleMenu}
        >
          <div className={`${style.bar} ${style.bar1}`} />
          <div className={`${style.bar} ${style.bar2}`} />
          <div className={`${style.bar} ${style.bar3}`} />
        </div>
      </div>
    </header>
  );
}
