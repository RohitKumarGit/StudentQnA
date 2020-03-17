import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header class="navbar-wrapper">
      <style>
        @import
        url('https://fonts.googleapis.com/css?family=Cabin:500&display=swap');
      </style>
      <nav class="navbar">
        <Link to="/" class="navbar__title">
          Title
        </Link>
        <ul class="navbar__items">
          <li class="navbar__item">
            <Link to="/" class="navbar__link">
              Home
            </Link>
          </li>
          <li class="navbar__item">
            <Link to="/login" class="navbar__link">
              Login
            </Link>
          </li>
          <li class="navbar__item">
            <Link to="/signup" class="navbar__link">
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
