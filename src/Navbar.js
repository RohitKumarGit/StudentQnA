import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div class="ui menu">
      {/* <div class="ui container"> */}
      <div class="header item">Student Q&A</div>
      <div class="right menu">
        <Link to="/" class="item">
          Home
        </Link>
        <Link to="/login" class="item">
          Login
        </Link>
        <Link to="/signup" class="item">
          Sign Up
        </Link>
        {/* </div> */}
      </div>
    </div>
    // <header class="navbar-wrapper">
    //   <style>
    //     @import
    //     url('https://fonts.googleapis.com/css?family=Cabin:500&display=swap');
    //   </style>
    //   <nav class="ui container navbar">
    //     <Link to="/" class="navbar__title">
    //       Title
    //     </Link>
    //     <ul class="navbar__items">
    //       <li class="navbar__item">
    //         <Link to="/" class="navbar__link">
    //           Home
    //         </Link>
    //       </li>
    //       <li class="navbar__item">
    //         <Link to="/login" class="navbar__link">
    //           Login
    //         </Link>
    //       </li>
    //       <li class="navbar__item">
    //         <Link to="/signup" class="navbar__link">
    //           Sign up
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
}
