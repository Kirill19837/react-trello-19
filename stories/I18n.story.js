import React from 'react'
import {I18nextProvider} from 'react-i18next'
import Board from '../src'
import i18n from './helpers/i18n'
import createTranslate from 'rt/helpers/createTranslate'

const smallData = require('./data/data-sort')

const TEXTS = {
  'Add another lane': 'NEW LANE',
  'Click to add card': 'Click to add card',
  'Delete lane': 'Delete lane',
  'Lane actions': 'Lane actions',
  button: {'Add lane': 'Add lane', 'Add card': 'Add card', Cancel: 'Cancel'},
  placeholder: {title: 'title', description: 'description', label: 'label'}
}

const FLAT_TRANSLATION_TABLE = {
  'Add another lane': '+ Weitere Liste erstellen',
  'Click to add card': 'Klicken zum Erstellen einer Karte',
  'Delete lane': 'Liste löschen',
  'Lane actions': 'Listenaktionen',
  'button.Add lane': 'Liste hinzufügen',
  'button.Add card': 'Karte hinzufügen',
  'button.Cancel': 'Abbrechen',
  'placeholder.title': 'Titel',
  'placeholder.description': 'Beschreibung',
  'placeholder.label': 'Label'
}

export default {
  title: 'I18n',
}

export const CustomTexts = {
  name: 'Custom texts',
  render: () => <Board data={smallData} t={createTranslate(TEXTS)} editable canAddLanes draggable />,
}

export const FlatTranslationTable = {
  name: 'Flat translation table',
  render: () => <Board data={smallData} t={key => FLAT_TRANSLATION_TABLE[key]} editable canAddLanes draggable />,
}

export const UsingI18next = {
  name: 'Using i18next',
  decorators: [story => <I18nextProvider i18n={i18n}>{story()}</I18nextProvider>],
  render: () => {
    const I18nBoard = () => {
      const {useTranslation} = require('react-i18next')
      const {t} = useTranslation()
      return (
        <div>
          <div>
            <button onClick={() => i18n.changeLanguage('en')}>English</button>
            <button onClick={() => i18n.changeLanguage('ru')}>Русский</button>
          </div>
          <Board data={smallData} t={t} editable canAddLanes draggable />
        </div>
      )
    }
    return <I18nBoard />
  },
}
