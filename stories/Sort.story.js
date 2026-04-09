import React from 'react'
import Board from '../src'

const data = require('./data/data-sort.json')

export default {
  title: 'Basic Functions',
}

export const SortedLane = {
  name: 'Sorted Lane',
  render: () => <Board data={data} laneSortFunction={(c1, c2) => new Date(c1.metadata.completedAt) - new Date(c2.metadata.completedAt)} />,
}

export const ReverseSortedLane = {
  name: 'Reverse Sorted Lane',
  render: () => <Board data={data} laneSortFunction={(c1, c2) => new Date(c2.metadata.completedAt) - new Date(c1.metadata.completedAt)} />,
}
