import { useLanguage } from '../../context/LanguageContext'

import './About.scss'

const About = () => {

  const { lang } = useLanguage()

  const skills = [

    {
      name: 'HTML',
      value: 8,
      color: 'html'
    },

    {
      name: 'CSS',
      value: 7,
      color: 'css'
    },

    {
      name: 'JavaScript',
      value: 9,
      color: 'js'
    },

    {
      name: 'React',
      value: 6,
      color: 'react'
    }

  ]

  return (

    <section className="about-page">

      <div className="about-container">

        

        <div className="about-left glass">

          <p className="mini-title">

            {lang === 'RU'
              ? 'ОБО МНЕ'
              : 'ABOUT ME'}

          </p>

          <h1>

            Frontend <span>Developer</span>

          </h1>

          <p className="about-description">

            {lang === 'RU'
              ? 'Я занимался разработкой проектов на React, HTML, CSS и JavaScript. Создаю современные и адаптивные интерфейсы с premium дизайном.'
              : 'I worked on projects using React, HTML, CSS and JavaScript. Creating modern and responsive interfaces with premium design.'}

          </p>

          <div className="about-tags">

            <div className="tag glass">
              React
            </div>

            <div className="tag glass">
              HTML
            </div>

            <div className="tag glass">
              CSS
            </div>

            <div className="tag glass">
              JavaScript
            </div>

          </div>

        </div>

        

        <div className="about-right glass">

          <h2>

            {lang === 'RU'
              ? 'Навыки'
              : 'Skills'}

          </h2>

          <div className="skills-list">

            {skills.map((skill, index) => (

              <div
                key={index}
                className="skill-item"
              >

                <div className="skill-top">

                  <h3>
                    {skill.name}
                  </h3>

                  <span>
                    {skill.value}/10
                  </span>

                </div>

                <div className="skill-bar">

                  <div
                    className={`skill-progress ${skill.color}`}
                    style={{
                      width: `${skill.value * 10}%`
                    }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  )
}

export default About