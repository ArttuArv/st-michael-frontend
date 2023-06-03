import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

const translationFi = {
  nav: {
    Etusivu: 'Etusivu',
    Tuotteet: 'Tuotteet',
    Viskit: 'Viskit',
    Tarina: 'Tarina',
    Kirjaudu: 'Kirjaudu',
  },
  hero: {
    aukioloHeader: 'Avoinna',
  },
  games: {
    header: 'Pelejä moneen makuun',
    text: 'Lautapelit ovat keskustelun jatkamista toisin keinoin',
    author: 'tuntematon',
  },
  events: {
    header: 'Ajankohtaista',
  },
  karppa: {
    header: 'Kärppapelit',
    paragraph1: 'Bussikuljetukset jäähallille Kärppien Liiga-kotiotteluihin.',
    paragraph2: 'Kyyti lähtee baarin edestä 20min ennen pelin alkua, liput ilmaiseen bussikyytiin saat tiskiltä.',
    paragraph3: 'Näytämme kaikki Kärppien pelit myös TV:sta.',
  },
  tuotteet: {
    nimi: 'Nimi',
    tyyppi: 'Tyyppi',
    maa: 'Maa',
  },
  viskit: {
    header1: 'Lista löytyy myös baaritiskiltä.',
    header2: 'Viskilista elää viikottain. Pidätämme oikeudet muutoksiin.',
    header3: 'Kysy uutuuksista henkilökunnalta.',
    haku: 'Haku',
    hakuPlaceholder: 'Etsi viskejä',
    tooMany: 'Liikaa tuloksia. Rajaa hakua.',
    notFound: 'Haulla ei löytynyt viskin viskiä',
    nimi: 'Nimi',
  },
  footer: {
    content: 'Sisältö',
    tuotteet: 'Tuotteet',
    viskit: 'Viskit',
    tarina: 'Tarina',
    aukioloHeader: 'Avoinna',
  }
}

const translationEn = {
  nav:{
    Etusivu: 'Home',
    Tuotteet: 'Products',
    Viskit: 'Whiskeys',
    Tarina: 'Story',
    Kirjaudu: 'Login',
  },
  hero: {
    aukioloHeader: 'Opening Hours',
  },
  games: {
    header: 'Games for Everyone',
    text: 'Board games are continuation of the conversation by other means',
    author: 'anonymous',
  },
  events: {
    header: 'Upcoming',
  },
  karppa: {
    header: 'Karpat',
    paragraph1: 'Bus transportation to the hockey hall for Liiga home matches.',
    paragraph2: 'The bus leaves from the pub 20 minutes before the match starts, you can get a free bus ticket from the pub.',
    paragraph3: 'We will show all Karpat games on TV as well.',
  },
  tuotteet: {
    nimi: 'Name',
    tyyppi: 'Type',
    maa: 'Country',
  },
  viskit: {
    header1: 'The list can also be found at the bar counter.',
    header2: 'The whiskey list is updated weekly. We reserve the right to make changes.',
    header3: 'Ask about new arrivals from the staff.',
    haku: 'Search',
    hakuPlaceholder: 'Search for whiskeys',
    tooMany: 'Too many results. Narrow your search.',
    notFound: 'No whiskey found with that search',
    nimi: 'Name',
  },
  footer: {
    content: 'Content',
    tuotteet: 'Products',
    viskit: 'Whiskeys',
    tarina: 'Story',
    aukioloHeader: 'Opening Hours',
  }


}

i18next
  .use(initReactI18next)
  .init({
    lng: 'fi',
    fallbackLng: 'fi',
    debug: false,
    resources: {
      en: {
        translation: translationEn         
      },
      fi: {
        translation: translationFi
      }
    }
})

export default i18next