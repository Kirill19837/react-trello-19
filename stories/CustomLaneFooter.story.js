import React from 'react'
import Board from '../src'

const data = require('./data/collapsible.json')

const LaneFooterComponent = ({onClick, collapsed}) => (
  <div onClick={onClick}>{collapsed ? 'click to expand' : 'click to collapse'}</div>
)

export default {
  title: 'Custom Components',
}

export const LaneFooter = {
  render: () => <Board collapsibleLanes components={{LaneFooter: LaneFooterComponent}} data={data} />,
}
