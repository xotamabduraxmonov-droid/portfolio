import { useLanguage } from '../../context/LanguageContext'

import game1Img from '../../images/game1.png'
import mountainsImg from '../../images/mountains.png'
import parfumeImg from '../../images/parfume.jpg'
import porscheImg from '../../images/porsche.png'
import routerImg from '../../images/react-router.png'
import todoImg from '../../images/todo.png'
import './projects.scss'
const Projects = () => {

  const { lang } = useLanguage()

  const projects = [

    {
      title: 'Game1',
      image: game1Img,
      link:
        'https://xotamabduraxmonov-droid.github.io/game1/'
    },

    {
      title: 'Parfume',
      image: parfumeImg,
      link:
        'https://xotamabduraxmonov-droid.github.io/Mountains/'
    },

    {
      title: 'Mountains',
      image: mountainsImg,
      link:
        'https://xotamabduraxmonov-droid.github.io/Parfume/'
    },

    {
      title: 'Porsche',
      image: porscheImg,
      link:
        'https://xotamabduraxmonov-droid.github.io/Porsche/'
    },

    {
      title: 'React Router',
      image: routerImg,
      link:
        'https://react-router-rho-ruby.vercel.app/'
    },

    {
      title: 'To-Do List',
      image: todoImg,
      link:
        'https://to-do-list-beta-bice-25.vercel.app/'
    }

  ]

  return (

    <section className="projects-page">

      <div className="projects-header">

        <h1>
          {lang === 'RU'
            ? 'Проекты'
            : 'Projects'}
        </h1>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div
            key={index}
            className="project-card glass"
          >

            
            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            
            <h2>
              {project.title}
            </h2>

            
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >

              <button>

                {lang === 'RU'
                  ? 'Открыть'
                  : 'Open Project'}

              </button>

            </a>

          </div>

        ))}

      </div>

    </section>

  )
}

export default Projects