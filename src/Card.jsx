import * as React from 'react'
import './Card.css'

export default function Card({
  title,
  questionText,
  answerText,
  isAnswerVisible,
  tags,
}) {
  return (
    <section className="Card">
      <h2>{title}</h2>
      <p>{questionText}</p>
      <p className={isAnswerVisible ? 'answerText' : 'hidden'}>{answerText}</p>
      {tags.map(tag => (
        <div className="input-tags" key={tag}>
          {tag}
        </div>
      ))}
    </section>
  )
}
