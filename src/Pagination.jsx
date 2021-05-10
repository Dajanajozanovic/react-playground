nes (12 sloc) 361 Bytes
import * as React from 'react'
import './Pagination.css'
import Button from './Button'

export default function Pagination({ text, isLeftDisabled, isRightDisabled }) {
  return (
    <section className="Pagination">
      <Button isActive={!isLeftDisabled}>&lt;</Button>
      {text}
      <Button isActive={!isRightDisabled}>&gt;</Button>
    </section>
  )
}