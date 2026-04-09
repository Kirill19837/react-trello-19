import React from 'react'
import Board from '../src'

const data = require('./data/drag-drop.json')

export default {
  title: 'Drag-n-Drop',
}

export const RestrictLanes = {
  name: 'Restrict lanes',
  render: () => <Board data={data} draggable />,
}

export const DragCardsNotLanes = {
  name: 'Drag Cards not Lanes',
  render: () => <Board data={data} draggable laneDraggable={false} />,
}
