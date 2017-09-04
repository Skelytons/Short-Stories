import React from 'react'
import { Link } from 'react-router'

const ShortStoriesButton = () => {
  return(
    <li className="pure-menu-item">
        <Link to="/shortstories" className="pure-menu-link">Short Stories</Link>
    </li>
  )
}

export default ShortStoriesButton
