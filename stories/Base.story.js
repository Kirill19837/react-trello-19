import React from 'react'
import Board from '../src'

const data = require('./data/base.json')

export default {
  title: 'Basic Functions',
}

export const FullBoardExample = {
  name: 'Full Board example',
  render: () => <Board data={data} />,
}
