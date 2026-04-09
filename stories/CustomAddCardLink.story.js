import React from 'react'
import Board from '../src'

const data = require('./data/collapsible.json')

const CustomAddCardLink = ({onClick, t}) => <button onClick={onClick}>{t('Click to add card')}</button>

export default {
  title: 'Custom Components',
}

export const AddCardLink = {
  render: () => <Board data={data} editable components={{AddCardLink: CustomAddCardLink}} />,
}
