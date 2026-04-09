import React from 'react'
import debug from './helpers/debug'
import Board from '../src'

const data = require('./data/base.json')
const smallData = require('./data/data-sort')

const disallowAddingCardData = {...data}
disallowAddingCardData.lanes[0].title = 'Disallowed adding card'
disallowAddingCardData.lanes[0].disallowAddingCard = true

export default {
  title: 'Editable Board',
}

export const AddDeleteCards = {
  name: 'Add/Delete Cards',
  render: () => (
    <Board
      data={data}
      draggable
      id="EditableBoard1"
      onDataChange={nextData => { debug('Board has changed'); debug(nextData) }}
      onCardDelete={(cardId, laneId) => debug(`Card: ${cardId} deleted from lane: ${laneId}`)}
      onCardAdd={(card, laneId) => { debug(`New card added to lane ${laneId}`); debug(card) }}
      onCardClick={(cardId, metadata, laneId) => alert(`Card with id:${cardId} clicked. Card in lane: ${laneId}`)}
      editable
    />
  ),
}

export const AddNewLane = {
  name: 'Add New Lane',
  render: () => (
    <Board
      data={smallData}
      editable
      canAddLanes
      onLaneAdd={t => debug('You added a line with title ' + t.title)}
    />
  ),
}

export const DisallowAddingCard = {
  name: 'Disallow Adding Card for specific Lane',
  render: () => <Board data={disallowAddingCardData} editable />,
}

export const InlineEditLaneTitle = {
  name: 'Inline Edit Lane Title and Cards',
  render: () => (
    <Board
      data={smallData}
      editable
      canAddLanes
      editLaneTitle
      onCardUpdate={(cardId, d) => debug(`onCardUpdate: ${cardId} -> ${JSON.stringify(d, null, 2)}`)}
      onLaneUpdate={(laneId, d) => debug(`onLaneUpdate: ${laneId} -> ${d.title}`)}
      onLaneAdd={t => debug('You added a line with title ' + t.title)}
    />
  ),
}
