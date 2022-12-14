import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Home from '@/components/Home';
import About from '@/components/About';
import FreelanceProjects from '@/components/FreelanceProjects';
import PersonalProjects from '@/components/PersonalProjects';
import Contact from '@/components/Contact';
import style from '@/components/App/style.module.css';

function App() {
  useEffect(() => {
    // Remove location hash from the URL
    const removeLocationHash = () => {
      const noHashURL = window.location.href.replace(/#.*$/, '');
      window.history.replaceState('', document.title, noHashURL);
    };

    window.addEventListener('popstate', () => {
      removeLocationHash();
    });

    window.addEventListener('hashchange', (event) => {
      event.preventDefault();
      removeLocationHash();
    });

    window.addEventListener('load', () => {
      removeLocationHash();
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className={style.container}>
        <main>
          <Home />
          <About />
          <FreelanceProjects />
          <PersonalProjects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
