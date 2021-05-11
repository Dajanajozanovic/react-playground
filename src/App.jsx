import * as React from 'react'
import Card from './Card'

const cards = [
  {
    title: 'Frage',
    questionText: 'Wie geht es Dir?',
    answerText: 'Prima!',
    isAnswerVisible: false,
    id: 1,
  },
  {
    title: 'Frage',
    questionText: 'Was machst Du?',
    answerText: 'Codes schreiben!',
    isAnswerVisible: true,
    id: 2,
  },
]

export default () => {
  return (
    <div className="App">
      {cards.map(({ id, title, questionText, answerText, isAnswerVisible }) => (
        <Card
          key={id}
          title={title}
          isAnswerVisible={isAnswerVisible}
          questionText={questionText}
          answerText={answerText}
        />
      ))}
    </div>
  )
}
