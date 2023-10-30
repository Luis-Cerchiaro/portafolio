import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react"

const Header = () => {
  
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);
  
    return (
        <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
        <a href="/" className="logo text-2xl font-bold text-accent">
          Luis
        </a>
  
        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex">
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1ugumpTwoA8vtAAWw2ezI0CZP2IGUwPzF/view"
                target="_blank"
                without
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
  
        {/* Mobile Nav */}
        <nav
          className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
        >
          <ul className="flex flex-col">
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
            <li>
              <a href="/#resume">Resume</a>
            </li>
          </ul>
        </nav>
  
        {/* Toggle button */}
        <button onClick={handleToggle} className="block md:hidden">
          {!toggle ? <IconMenu2 size={30}/> : <IconX size={30} />}
        </button>
      </header>
  )
}
export default Header