import React from 'react'
import Board from '../src'

const data1 = require('./data/base.json')
const data2 = require('./data/other-board')

const containerStyles = {height: 500, padding: 20}

export default {
  title: 'Multiple Boards',
}

export const TwoBoards = {
  name: 'Two Boards',
  render: () => (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={containerStyles}><Board id="board1" data={data1} draggable /></div>
      <div style={containerStyles}><Board id="board2" data={data2} draggable /></div>
    </div>
  ),
}
