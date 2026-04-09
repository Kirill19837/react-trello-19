import React from 'react'
import Board from '../src'
import './board.css'

const data = require('./data/base.json')

const dataWithLaneStyles = {
  lanes: [
    {
      id: 'PLANNED',
      title: 'Planned Tasks',
      label: '20/70',
      style: {width: 280, backgroundColor: '#3179ba', color: '#fff', boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.75)'},
      cards: [
        {id: 'Milk', title: 'Buy milk', label: '15 mins', description: '2 Gallons of milk at the Deli store'},
        {id: 'Plan2', title: 'Dispose Garbage', label: '10 mins', description: 'Sort out recyclable and waste as needed'}
      ]
    },
    {
      id: 'DONE',
      title: 'Doned tasks',
      label: '10/70',
      style: {width: 280, backgroundColor: '#ba7931', color: '#fff', boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.75)'},
      cards: [{id: 'burn', title: 'Burn Garbage', label: '10 mins', description: 'Sort out recyclable and waste as needed'}]
    },
    {
      id: 'ARCHIVE',
      title: 'Archived tasks',
      label: '1/2',
      cards: [{id: 'archived', title: 'Archived', label: '10 mins'}]
    }
  ]
}

const dataWithCardStyles = {
  lanes: [
    {
      id: 'PLANNED',
      title: 'Planned Tasks',
      label: '20/70',
      cards: [
        {id: 'Milk', title: 'Buy milk', label: '15 mins', description: '2 Gallons of milk at the Deli store', style: {backgroundColor: '#eec'}},
        {id: 'Plan2', title: 'Dispose Garbage', label: '10 mins', description: 'Sort out recyclable and waste as needed'},
        {id: 'Plan3', title: 'Burn Garbage', label: '20 mins'}
      ]
    }
  ]
}

export default {
  title: 'Styling',
}

export const BoardStyling = {
  name: 'Board Styling',
  render: () => <Board data={data} style={{padding: '30px 20px', fontFamily: 'Verdana'}} className="boardContainer" />,
}

export const LaneStyling = {
  name: 'Lane Styling',
  render: () => <Board data={dataWithLaneStyles} laneStyle={{backgroundColor: '#666'}} style={{backgroundColor: '#eee'}} />,
}

export const CardStyling = {
  name: 'Card Styling',
  render: () => <Board data={dataWithCardStyles} cardStyle={{backgroundColor: '#ffe'}} />,
}
