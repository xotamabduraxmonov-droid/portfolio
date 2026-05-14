import { useLanguage } from '../../context/LanguageContext'

import './contacts.scss'

const Contacts = () => {

  const { lang } = useLanguage()

  return (

    <section className="contacts-page">

      <div className="contacts-wrapper">

        
        <div className="contact-info glass">

          <p className="mini-title">
            {lang === 'RU'
              ? 'КОНТАКТЫ'
              : 'CONTACTS'}
          </p>

          <h1>

            {lang === 'RU'
              ? 'Связаться со мной'
              : 'Contact Me'}

          </h1>

          <p>

            {lang === 'RU'
              ? 'Вы можете написать мне через социальные сети.'
              : 'You can contact me through social media.'}

          </p>

          <div className="socials">

            <a href="https://t.me/kk1wb" target="_blank">
              Telegram
            </a>

            <a href="https://instagram.com" target="_blank">
              Instagram
            </a>

            <a href="https://tiktok.com" target="_blank">
              TikTok
            </a>

            <a href="https://github.com/xotamabduraxmonov-droid" target="_blank">
              GitHub
            </a>

          </div>

        </div>

        
        <div className="contact-form glass">

          <input
            type="text"
            placeholder={
              lang === 'RU'
                ? 'Ваше имя'
                : 'Your Name'
            }
          />

          <input
            type="email"
            placeholder={
              lang === 'RU'
                ? 'Ваш Email'
                : 'Your Email'
            }
          />

          <textarea
            placeholder={
              lang === 'RU'
                ? 'Ваше сообщение'
                : 'Your Message'
            }
          ></textarea>

          <button>

            {lang === 'RU'
              ? 'Отправить'
              : 'Send Message'}

          </button>

        </div>

      </div>

    </section>

  )
}

export default Contacts