import { lazy, Suspense, useEffect } from 'react';
import style from '@/components/App/style.module.css';

const NavBar = lazy(() => import('@/components/NavBar'));
const Home = lazy(() => import('@/components/Home'));
const About = lazy(() => import('@/components/About'));
const Skills = lazy(() => import('@/components/Skills'));
const FeaturedProjects = lazy(() => import('@/components/FeaturedProjects'));
const FreelanceProjects = lazy(() => import('@/components/FreelanceProjects'));
const PersonalProjects = lazy(() => import('@/components/PersonalProjects'));
const Certifications = lazy(() => import('@/components/Certifications'));
const Contact = lazy(() => import('@/components/Contact'));

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
      <Suspense fallback={<div className={style.loading}>Loading...</div>}>
        <NavBar />
        <div className={style.container}>
          <main>
            <Home />
            <About />
            <Skills />
            <FeaturedProjects />
            <FreelanceProjects />
            {/* <PersonalProjects /> */}
            <Certifications />
            <Contact />
          </main>
        </div>
      </Suspense>
    </>
  );
}

export default App;
