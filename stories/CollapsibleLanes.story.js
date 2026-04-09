import React from 'react'
import debug from './helpers/debug'
import Board from '../src'

const data = require('./data/collapsible.json')

export default {
  title: 'Advanced Features',
}

export const CollapsibleLanes = {
  name: 'Collapsible Lanes',
  render: () => (
    <Board
      data={data}
      draggable
      collapsibleLanes
      onDataChange={nextData => { debug('data has changed'); debug(nextData) }}
    />
  ),
}
