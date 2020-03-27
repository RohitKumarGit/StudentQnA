import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function Navbar() {
  return (
    <Menu>
      <Menu.Item header>Student Q&A</Menu.Item>
      <Menu.Menu position="right">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/login" className="item">
          Login
        </Link>
        <Link to="/signup" className="item">
          Sign Up
        </Link>
      </Menu.Menu>
    </Menu>
  );
}
