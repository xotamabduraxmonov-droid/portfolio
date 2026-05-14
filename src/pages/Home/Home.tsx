import { Link } from 'react-router-dom'

import { useLanguage } from '../../context/LanguageContext'

import './Home.scss'

import myPhoto from '../../images/me.png'


const Home = () => {

  const { lang } = useLanguage()

  return (

    <section className="home">

      <div className="orb orb1"></div>
      <div className="orb orb2"></div>

      <div className="home-container">

        
        <div className="hero-left">

          <p className="mini-title">
            FRONTEND DEVELOPER
          </p>

          <h1>
            
            {lang === 'RU'
            ? 'Xoтам Абдурахманов' 
            : 'Khotam Abdurakhmonov' 
            }
          </h1>

          <p className="description">

            {lang === 'RU'
              ? 'Создаю современные React приложения с premium дизайном и плавными анимациями.'
              : 'Creating modern React applications with premium design and smooth animations.'}

          </p>

          <div className="hero-buttons">

            <Link to="/projects">
              <button>

                {lang === 'RU'
                  ? 'Проекты'
                  : 'Projects'}

              </button>
            </Link>

            <Link to="/contacts">

              <button className="contact-btn">

                {lang === 'RU'
                  ? 'Контакты'
                  : 'Contacts'}

              </button>

            </Link>

          </div>

          
          <div className="hero-stats">

            <div className="stat glass stat1">
              <h3>15+</h3>
              <p>Projects</p>
            </div>

            <div className="stat glass stat2">
              <h3>React</h3>
              <p>Frontend</p>
            </div>

            <div className="stat glass stat3">
              <h3>UI/UX</h3>
              <p>Design</p>
            </div>

          </div>

        </div>

        
        <div className="hero-right">

          <div className="image-card glass">

            <img
  src={myPhoto}
  alt="me"
/>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Home