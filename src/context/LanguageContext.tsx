import {
  createContext,
  useContext,
  useState
} from 'react'

type Lang = 'RU' | 'EN'

interface LanguageContextType {
  lang: Lang
  toggleLanguage: () => void
}

const LanguageContext =
  createContext<LanguageContextType | null>(null)

export const LanguageProvider = ({
  children
}: {
  children: React.ReactNode
}) => {

  const [lang, setLang] =
    useState<Lang>('RU')

  const toggleLanguage = () => {

    setLang(prev =>
      prev === 'RU'
        ? 'EN'
        : 'RU'
    )

  }

  return (

    <LanguageContext.Provider
      value={{
        lang,
        toggleLanguage
      }}
    >

      {children}

    </LanguageContext.Provider>

  )
}

export const useLanguage = () => {

  const context =
    useContext(LanguageContext)

  if (!context) {

    throw new Error(
      'useLanguage must be used inside LanguageProvider'
    )

  }

  return context
}