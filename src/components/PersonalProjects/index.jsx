import style from '@/components/PersonalProjects/style.module.css';

const PersonalProjects = () => {
  return (
    <div className={style.container}>
      <h2 className={style.sectionTitle}>Personal Projects</h2>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.subContainer}>
            <img
              className={style.projectImage}
              src='https://res.cloudinary.com/dkpg4tdoq/image/upload/v1676132058/Web%20Dev%20Portfolio/personal-projects/personal-project-portfolio_ocydq4.svg'
              alt='personal project image'
            />
            <div className={style.projectDescription}>
              <h4 className={`${style.projectTitle} ${style.primaryColor}`}>
                Ronaldo Lipata - Web Dev Portfolio
              </h4>
              <p>
                My online portfolio which I showcase my professional and
                personal projects, skills and what I do in the Tech Industry.
              </p>
              <p className={style.techUsed}>
                Vite
                <span className={style.techSeparator}> &#10022; </span>
                React
                <span className={style.techSeparator}> &#10022; </span>
                CSS
              </p>
            </div>
          </div>
          <a
            href='https://ronaldolipata.github.io/Portfolio/'
            target='_blank'
            className={style.ctaButton}
          >
            View Demo
          </a>
        </div>
        <div className={style.card}>
          <div className={style.subContainer}>
            <img
              className={style.projectImage}
              src='https://res.cloudinary.com/dkpg4tdoq/image/upload/v1676132059/Web%20Dev%20Portfolio/personal-projects/personal-project-weather-app_hi6w4e.svg'
              alt='personal project image'
            />
            <div className={style.projectDescription}>
              <h4 className={`${style.projectTitle} ${style.primaryColor}`}>
                Weather App
              </h4>

              <p>
                Displays the Current, Hourly and Daily Forecasts. It shows the
                Air Temperature, Air Pressure, Cloud Area Fraction, Relative
                Humidity, Wind From Direction and Wind Speed of the specified
                location.
              </p>
              <p className={style.techUsed}>
                Vite
                <span className={style.techSeparator}> &#10022; </span>
                React
                <span className={style.techSeparator}> &#10022; </span>
                CSS
                <span className={style.techSeparator}> &#10022; </span>
                MET Norway Weather API
              </p>
            </div>
          </div>
          <a
            href='https://ronaldolipata.github.io/Weather-App/'
            target='_blank'
            className={style.ctaButton}
          >
            View Demo
          </a>
        </div>
        <div className={style.card}>
          <div className={style.subContainer}>
            <img
              className={style.projectImage}
              src='https://res.cloudinary.com/dkpg4tdoq/image/upload/v1676132057/Web%20Dev%20Portfolio/personal-projects/personal-project-pokemon-app_hmngpa.svg'
              alt='personal project image'
            />
            <div className={style.projectDescription}>
              <h4 className={`${style.projectTitle} ${style.primaryColor}`}>
                Pokemon App
              </h4>

              <p>
                List the Pokemons by type. Once the type is selected, it will
                display all the Pokemons of that type and if a Pokemon is
                clicked, it will shows the details of selected Pokemon.
              </p>
              <p className={style.techUsed}>
                Vite
                <span className={style.techSeparator}> &#10022; </span>
                React
                <span className={style.techSeparator}> &#10022; </span>
                CSS
                <span className={style.techSeparator}> &#10022; </span>
                Poké API
              </p>
            </div>
          </div>
          <a
            href='https://ronaldolipata.github.io/Pokemon-App/'
            target='_blank'
            className={style.ctaButton}
          >
            View Demo
          </a>
        </div>
        <div className={style.card}>
          <div className={style.subContainer}>
            <img
              className={style.projectImage}
              src='https://res.cloudinary.com/dkpg4tdoq/image/upload/v1676132058/Web%20Dev%20Portfolio/personal-projects/personal-project-simon-game_r0z65m.svg'
              alt='personal project image'
            />
            <div className={style.projectDescription}>
              <h4 className={`${style.projectTitle} ${style.primaryColor}`}>
                Simon Game
              </h4>

              <p>
                The game creates a series of tones and lights and requires a
                user to repeat the sequence. If the user succeeds, the series
                becomes progressively longer and more complex. Once the user
                fails or the time limit runs out, the game is over.
              </p>
              <p className={style.techUsed}>
                HTML
                <span className={style.techSeparator}> &#10022; </span>
                CSS
                <span className={style.techSeparator}> &#10022; </span>
                JavaScript
              </p>
            </div>
          </div>
          <a
            href='https://ronaldolipata.github.io/Simon-Game/'
            target='_blank'
            className={style.ctaButton}
          >
            View Demo
          </a>
        </div>
        <div className={style.card}>
          <div className={style.subContainer}>
            <img
              className={style.projectImage}
              src='https://res.cloudinary.com/dkpg4tdoq/image/upload/v1676132057/Web%20Dev%20Portfolio/personal-projects/personal-project-dice-game_riqakn.svg'
              alt='personal project image'
            />
            <div className={style.projectDescription}>
              <h4 className={`${style.projectTitle} ${style.primaryColor}`}>
                Dice Game
              </h4>

              <p>
                The game roll the dice and display who is the winner every time
                the user refresh the page.
              </p>
              <p className={style.techUsed}>
                HTML
                <span className={style.techSeparator}> &#10022; </span>
                CSS
                <span className={style.techSeparator}> &#10022; </span>
                JavaScript
              </p>
            </div>
          </div>
          <a
            href='https://ronaldolipata.github.io/Dice-Game/'
            target='_blank'
            className={style.ctaButton}
          >
            View Demo
          </a>
        </div>
        <div className={style.card}>
          <div className={style.subContainer}>
            <img
              className={style.projectImage}
              src='https://res.cloudinary.com/dkpg4tdoq/image/upload/v1676132057/Web%20Dev%20Portfolio/personal-projects/personal-project-drum-kit_a4l9xz.svg'
              alt='personal project image'
            />
            <div className={style.projectDescription}>
              <h4 className={`${style.projectTitle} ${style.primaryColor}`}>
                Drum Kit
              </h4>

              <p>
                The game creates sounds by clicking or pressing the keys written
                on each drum. The user can be creative by playing the drums and
                produce a great beat.
              </p>
              <p className={style.techUsed}>
                HTML
                <span className={style.techSeparator}> &#10022; </span>
                CSS
                <span className={style.techSeparator}> &#10022; </span>
                JavaScript
              </p>
            </div>
          </div>
          <a
            href='https://ronaldolipata.github.io/Drum-Kit/'
            target='_blank'
            className={style.ctaButton}
          >
            View Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
