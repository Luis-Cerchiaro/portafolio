import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";

import { LANGUAGES } from "../constants";
import { useTranslation } from "react-i18next";

const isActive = ({ isActive }) => `link ${isActive ? "active" : ""}`;

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  const { i18n, t } = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold text-accent">
        Luis
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about">{t("header-about")}</a>
          </li>
          <li>
            <a href="/#projects">{t("header-projects")}</a>
          </li>
          <li>
            <a href="/#contact">{t("header-contact")}</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/11ORfoeIQqDfuHKwF5cP97gCT72kRvRiT/view?usp=sharing"
              target="_blank"
              without
              rel="noreferrer"
            >
              {t("header-resume")}
            </a>
          </li>
          <li>
            <select defaultValue={i18n.language} onChange={onChangeLang}>
              {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
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
        {!toggle ? <IconMenu2 size={30} /> : <IconX size={30} />}
      </button>
    </header>
  );
};
export default Header;
