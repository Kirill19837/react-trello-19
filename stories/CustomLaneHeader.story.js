import React from 'react'
import Board from '../src'

const CustomLaneHeader = ({label, cards, title, current, target}) => {
  const buttonHandler = () => alert(`The label passed to the lane was: ${label}. The lane has ${cards.length} cards!`)
  return (
    <div>
      <header style={{borderBottom: '2px solid #c5c5c5', paddingBottom: 6, marginBottom: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div style={{fontSize: 14, fontWeight: 'bold'}}>{title}</div>
        {label && <div style={{width: '30%', textAlign: 'right', fontSize: 13}}><button onClick={buttonHandler} style={{cursor: 'pointer'}}>?</button></div>}
      </header>
      <div>Percentage: {current || 0}/{target}</div>
    </div>
  )
}

const data = {
  lanes: [
    {
      id: 'lane1', title: 'Planned Tasks', current: '70', target: '100', label: 'First Lane here',
      cards: [
        {id: 'Card1', title: 'John Smith', description: 'Thanks. Please schedule me for an estimate on Monday.'},
        {id: 'Card2', title: 'Card Weathers', description: 'Email received at 1:14pm'}
      ]
    },
    {
      id: 'lane2', title: 'Completed Tasks', label: 'Second Lane here', current: '30', target: '100',
      cards: [
        {id: 'Card3', title: 'Michael Caine', description: 'You are welcome.', tags: [{title: 'Critical', color: 'white', bgcolor: 'red'}, {title: '2d ETA', color: 'white', bgcolor: '#0079BF'}]}
      ]
    }
  ]
}

export default {
  title: 'Custom Components',
}

export const LaneHeader = {
  render: () => <Board data={data} components={{LaneHeader: CustomLaneHeader}} />,
}
