import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

<Link class="navbar-brand" to="/add">BOOK APP</Link>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
<Link class="nav-link" to="/add">Add Book</Link>
      </li>
      <li class="nav-item">
<Link class="nav-link" to="/view">View Book</Link>
      </li>
      
    </ul>
  </div>
</nav>

    </div>
  )
}

export default Header