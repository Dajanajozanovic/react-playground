import * as React from 'react'
import Card from './Card'

const cards = [
  {
    title: 'Frage',
    questionText: 'Wie geht es Dir?',
    inputTag1: 'Prima',
    inputTag2: 'Super',
    inputTag3: 'bestens',
    id: 1,
  },
  {
    title: 'Frage',
    questionText: 'Was machst Du?',
    inputTag1: 'Codes schreiben',
    inputTag2: 'lesen',
    inputTag3: 'schlafen',
    isAnswerVisible: true,
    id: 2,
  },
]

export default () => {
  return (
    <div className="App">
      {cards.map(
        ({
          id,
          title,
          questionText,
          inputTag1,
          inputTag2,
          inputTag3,
          isAnswerVisible,
        }) => (
          <Card
            key={id}
            title={title}
            isAnswerVisible={isAnswerVisible}
            questionText={questionText}
            inputTag1={inputTag1}
            inputTag2={inputTag2}
            inputTag3={inputTag3}
          />
        )
      )}
    </div>
  )
}
