import * as React from 'react'
import Button from './Button'
import Card from './Card'
import Pagination from './Pagination'

const cards = [
  { title: 'Hello world!', text: 'How are you?', isBookmarked: false, id: 1 },
  {
    title: 'Hello again',
    text: 'I am fine.',
    isBookmarked: true,
    id: 2,
  },
]

export default () => {
  return (
    <div className="App">
      {cards.map(({ id, title, text, isBookmarked }) => (
        <Card
          key={id}
          title={title}
          copyText={text}
          isBookmarked={isBookmarked}
        />
      ))}
    </div>
  )
}
