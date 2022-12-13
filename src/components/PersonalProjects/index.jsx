import style from '@/components/PersonalProjects/style.module.css';
import memoirs from '@/assets/img/personal-project-memoirs.svg';
import portfolio from '@/assets/img/personal-project-portfolio.svg';
import paytaka from '@/assets/img/personal-project-paytaka.svg';
import cardMatchingGame from '@/assets/img/personal-project-card-matching-game.svg';
import weatherApp from '@/assets/img/personal-project-weather-app.svg';
import pokemonApp from '@/assets/img/personal-project-pokemon-app.svg';
import simonGame from '@/assets/img/personal-project-simon-game.svg';
import diceGame from '@/assets/img/personal-project-dice-game.svg';
import drumKit from '@/assets/img/personal-project-drum-kit.svg';

const PersonalProjects = () => {
  return (
    <div className={style.container}>
      <h3 className={style.sectionTitle}>Personal Projects</h3>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.subContainer}>
            <img
              className={style.projectImage}
              src={portfolio}
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
            href='https://ronaldolipata.github.io/memoirs-frontend/'
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
              src={memoirs}
              alt='personal project image'
            />
            <div className={style.projectDescription}>
              <h4 className={`${style.projectTitle} ${style.primaryColor}`}>
                Memoirs
              </h4>
              <p>
                Memoirs is an application focuses in sharing important events in
                life and telling memorable stories to share. Users can input
                Title, Content and upload their photos.
              </p>
              <p className={style.techUsed}>
                Vite
                <span className={style.techSeparator}> &#10022; </span>
                React
                <span className={style.techSeparator}> &#10022; </span>
                CSS
                <span className={style.techSeparator}> &#10022; </span>
                Node
                <span className={style.techSeparator}> &#10022; </span>
                Express
                <span className={style.techSeparator}> &#10022; </span>
                MongoDB
                <span className={style.techSeparator}> &#10022; </span>
                RESTful API
              </p>
            </div>
          </div>
          <a
            href='https://ronaldolipata.github.io/memoirs-frontend/'
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
              src={paytaka}
              alt='personal project image'
            />
            <div className={style.projectDescription}>
              <h4 className={`${style.projectTitle} ${style.primaryColor}`}>
                Paytaka - Virtual Wallet
              </h4>
              <p>
                Paytaka has seven main features: Signup, Login, Cash in,
                Transfer Funds, Receive Funds, See Balance, See Latest
                Transactions
              </p>
              <p className={style.techUsed}>
                Vite
                <span className={style.techSeparator}> &#10022; </span>
                React
                <span className={style.techSeparator}> &#10022; </span>
                CSS
                <span className={style.techSeparator}> &#10022; </span>
                m3O API
              </p>
            </div>
          </div>
          <a
            href='https://ronaldolipata.github.io/Paytaka-Virtual-Wallet/'
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
              src={cardMatchingGame}
              alt='personal project image'
            />
            <div className={style.projectDescription}>
              <h4 className={`${style.projectTitle} ${style.primaryColor}`}>
                Card Matching Game - Space Theme
              </h4>

              <p>
                The mechanics is to match the cards by flipping each cards
                within 100 seconds to win. The Players can also see their flip
                count to record their best scores.
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
            href='https://ronaldolipata.github.io/Card-Matching-Game-Space-Theme/'
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
              src={weatherApp}
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
              src={pokemonApp}
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
              src={simonGame}
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
              src={diceGame}
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
              src={drumKit}
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
