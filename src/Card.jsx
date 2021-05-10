import * as React from 'react'
import './Card.css'

export default function Card({ isActive }) {
  return (
    <section className="Card">
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit.</p>
      <div
        role="button"
        className={isActive ? 'Card__bookmark--selected' : 'Card__bookmark'}
        aria-label="Add bookmarks"
      ></div>
    </section>
  )
}
