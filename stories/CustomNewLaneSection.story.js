import React from 'react'
import Board from '../src'

const data = require('./data/data-sort.json')

const NewLaneSection = ({t, onClick}) => <button onClick={onClick}>{t('Add another lane')}</button>

export default {
  title: 'Custom Components',
}

export const NewLaneSectionStory = {
  name: 'NewLaneSection',
  render: () => <Board editable canAddLanes components={{NewLaneSection: NewLaneSection}} data={data} />,
}
