import React from 'react'
import Board from '../src'

const PER_PAGE = 15

function delayedPromise(durationInMs, resolutionPayload) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(resolutionPayload)
    }, durationInMs)
  })
}

function generateCards(requestedPage = 1) {
  const cards = []
  let fetchedItems = (requestedPage - 1) * PER_PAGE
  for (let i = fetchedItems + 1; i <= fetchedItems + PER_PAGE; i++) {
    cards.push({
      id: `${i}`,
      title: `Card${i}`,
      description: `Description for #${i}`
    })
  }
  return cards
}

function paginate(requestedPage) {
  if (requestedPage > 2) {
    return delayedPromise(2000, [])
  }
  return delayedPromise(2000, generateCards(requestedPage))
}

export default {
  title: 'Basic Functions',
}

export const InfiniteScrolling = {
  name: 'Infinite Scrolling',
  render: () => {
    const data = {
      lanes: [{ id: 'Lane1', title: 'Lane1', cards: generateCards() }]
    }
    return <Board data={data} laneSortFunction={(c1, c2) => parseInt(c1.id) - parseInt(c2.id)} onLaneScroll={paginate} />
  },
}
