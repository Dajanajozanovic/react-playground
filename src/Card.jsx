import * as React from 'react'
import './Card.css'

export default function Card({
  title,
  questionText,
  answerText,
  isAnswerVisible,
  inputTag1,
  inputTag2,
  inputTag3,
}) {
  return (
    <section className="Card">
      <h2>{title}</h2>
      <p>{questionText}</p>
      <p className={isAnswerVisible ? 'answerText' : 'hidden'}>{answerText}</p>
      <div className="input-tags">{inputTag1}</div>
      <div className="input-tags">{inputTag2}</div>
      <div className="input-tags">{inputTag3}</div>
    </section>
  )
}
