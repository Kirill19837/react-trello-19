import React from 'react'
import Board from '../src'
import debug from './helpers/debug'

const data = require('./data/base.json')

export default {
  title: 'Drag-n-Drop',
}

export const Basic = {
  render: () => {
    const handleDragStart = (cardId, laneId) => {
      debug('drag started')
      debug(`cardId: ${cardId}`)
      debug(`laneId: ${laneId}`)
    }

    const handleDragEnd = (cardId, sourceLaneId, targetLaneId, position, card) => {
      debug('drag ended')
      debug(`cardId: ${cardId}`)
      debug(`sourceLaneId: ${sourceLaneId}`)
      debug(`targetLaneId: ${targetLaneId}`)
      debug(`newPosition: ${position}`)
      debug(`cardDetails:`)
      debug(card)
    }

    const handleLaneDragStart = laneId => {
      debug(`lane drag started for ${laneId}`)
    }

    const handleLaneDragEnd = (removedIndex, addedIndex, {id}) => {
      debug(`lane drag ended from position ${removedIndex} for laneId=${id}`)
      debug(`New lane position: ${addedIndex}`)
    }

    const shouldReceiveNewData = nextData => {
      debug('data has changed')
      debug(nextData)
    }

    const onCardMoveAcrossLanes = (fromLaneId, toLaneId, cardId, addedIndex) => {
      debug(`onCardMoveAcrossLanes: ${fromLaneId}, ${toLaneId}, ${cardId}, ${addedIndex}`)
    }

    return (
      <Board
        data={data}
        draggable
        onCardMoveAcrossLanes={onCardMoveAcrossLanes}
        onDataChange={shouldReceiveNewData}
        handleDragStart={handleDragStart}
        handleDragEnd={handleDragEnd}
        handleLaneDragStart={handleLaneDragStart}
        handleLaneDragEnd={handleLaneDragEnd}
      />
    )
  },
}

export const DragStyling = {
  name: 'Drag Styling',
  render: () => <Board data={data} cardDragClass="draggingCard" laneDragClass="draggingLane" draggable />,
}
