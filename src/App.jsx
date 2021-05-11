import * as React from 'react'
import Card from './Card'
import Navigation from './Navigation'

const cards = [
  {
    title: 'Frage',
    questionText: 'Wie geht es Dir?',
    tags: ['Prima', 'super', 'bestens'],
    id: 1,
  },
  {
    title: 'Frage',
    questionText: 'Was machst Du?',
    tags: ['Codes schreiben'],
    isAnswerVisible: true,
    id: 2,
  },
]

export default () => {
  return (
    <div className="App">
      <Navigation />
      {cards.map(({ id, title, questionText, tags, isAnswerVisible }) => (
        <Card
          key={id}
          title={title}
          isAnswerVisible={isAnswerVisible}
          questionText={questionText}
          tags={tags}
        />
      ))}
    </div>
  )
}
