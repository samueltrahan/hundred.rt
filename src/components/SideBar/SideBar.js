import React from "react";
import "./SideBar.css";
import { slide as Menu } from "react-burger-menu";

export default function SideBar() {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/projects">
        Projects
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
    </Menu>
  );
}
