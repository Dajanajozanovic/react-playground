import * as React from 'react'
import './Navigation.css'

export default () => {
  return (
    <nav className="Navigation">
      <ul className="Navigation-list">
        <li>
          <button data-active className="Nav-button">
            Home
          </button>
        </li>
        <li>
          <button className="Nav-button">Profile</button>
        </li>
        <li>
          <button className="Nav-button">Settings</button>{' '}
        </li>
      </ul>
    </nav>
  )
}
