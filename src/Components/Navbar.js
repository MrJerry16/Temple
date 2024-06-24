import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul className="nav">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/About">About</Link>
  </li><li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/photos">photos</Link>
  </li><li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/Service">Service</a>
  </li>
  <li className="nav-item dropdown">
    <Link className="nav-link dropdown-toggle nav  nav-pills" data-bs-toggle="dropdown" to="/E-Library" role="button" aria-expanded="false">E-Library</Link>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="/Need/calender.pdf">Calender</a></li>
      <li><a className="dropdown-item" href="/Need/book.pdf">Books</a></li>
    </ul>
  </li>
  
      </ul>
    </div>
  )
}
