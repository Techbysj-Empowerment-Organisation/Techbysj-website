import React, { useState, useEffect } from "react";
import logo from './assets/Logo.png'
import './App.scss'

function App() {
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    // Set the active item to the first item in the list
    setActiveItem(navItems[0].text);
  }, []);

  const navItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About us",
      href: "/about",
    },
    {
      text: "Services",
      href: "/services",
    },
    {
      text: "Courses",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className="container">
      <div className="nav">
      <img src={logo} alt="Logo" />
      <div className="left-items">
        {navItems.map((item) => (
          <a href={item.href} key={item.text}>{item.text}</a>
        ))}
        <button >Learn</button>
      </div>
      </div>


    </div>
  )
}

export default App
