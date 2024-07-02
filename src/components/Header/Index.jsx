import React, { useEffect, useState } from "react";
import "./Index.css";
import { NavLink } from "react-router-dom";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdCategory } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaIndustry } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiMailAddFill } from "react-icons/ri";
import { FaMoon } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

const Index = () => {
  const [active, setActive] = useState("");
  const [isDark, setIsDark] = useState(false);

  const handleClick = (event) => {
    if (event.currentTarget.id === "img-link") {
      setActive("1");
    } else if (event.currentTarget.id === "5") {
      setActive("");
    } else {
      setActive(event.currentTarget.id);
    }
  };

  const applyDarkMode = () => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
      * {
        background-color: #333 !important;
        color: white !important;
      }
    `;
    document.head.appendChild(styleElement);
  };

  const removeDarkMode = () => {
    const styleElements = document.head.querySelectorAll("style");
    styleElements.forEach((styleElement) => {
      if (styleElement.innerHTML.includes("background-color: #333")) {
        document.head.removeChild(styleElement);
      }
    });
  };

  const toggleDark = () => {
    if (!isDark) {
      applyDarkMode();
      localStorage.setItem("isDark", "true");
    } else {
      removeDarkMode();
      localStorage.setItem("isDark", "false");
    }
    setIsDark(!isDark);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("isDark");
    if (savedTheme === "true") {
      applyDarkMode();
      setIsDark(true);
    }
  }, []);

  return (
    <header className="py-lg-3 px-lg-5 px-md-1 py-md-1 px-0 py-0">
      <div className="header_all d-flex align-items-center justify-content-between">
        <div className="header_left col-lg-6 col-md-6 d-flex gap-1 align-items-center">
          <NavLink
            to="/"
            className="w-25 me-2 img-link header_logo"
            onClick={handleClick}
          >
            <img
              src="https://classic.jobsearch.az/simple/images/jobsearch.svg"
              alt="asdas"
            />
          </NavLink>
          <NavLink
            to="/"
            key={1}
            id={"1"}
            className={`header_adv d-flex align-items-center gap-1 ${
              active === "1" ? "header_left_active" : ""
            }`}
            onClick={handleClick}
          >
            <RiAdvertisementFill />
            Elanlar
          </NavLink>
          <NavLink
            to="/category"
            className={`header_adv d-flex align-items-center gap-1 ${
              active === "2" ? "header_left_active" : ""
            }`}
            key={2}
            id={"2"}
            onClick={handleClick}
          >
            <MdCategory />
            Kateqoriyalar
          </NavLink>
          <NavLink
            to="/industry"
            className={`header_adv d-flex align-items-center gap-1 ${
              active === "3" ? "header_left_active" : ""
            }`}
            key={3}
            id={"3"}
            onClick={handleClick}
          >
            <BiSolidCategoryAlt />
            Sənaye
          </NavLink>
          <NavLink
            to="/company"
            className={`header_adv d-flex align-items-center gap-1 ${
              active === "4" ? "header_left_active" : ""
            }`}
            key={4}
            id={"4"}
            onClick={handleClick}
          >
            <FaIndustry />
            Şirkətlər
          </NavLink>
        </div>
        <div className="header_right col-lg-6 d-flex gap-1 align-items-center gap-3 justify-content-end">
          <NavLink to="/about" className="header_right_link">
            Haqqımızda
          </NavLink>
          <NavLink to="/service" className="header_right_link">
            Xidmətlər
          </NavLink>
          <NavLink
            to="/contact"
            className={`header_right_box_a ${
              active === 5 ? "header_left_active" : ""
            }`}
            key={5}
            id={"5"}
            onClick={handleClick}
          >
            Əlaqə
          </NavLink>
          <NavLink to="/wishlist" className="header_right_box_a">
            <FaHeart />
          </NavLink>
          <NavLink to="/" className="header_right_box_a">
            <RiMailAddFill />
          </NavLink>
          <select
            style={{
              color: "#838383",
              border: "1px solid #dfdfdf",
              padding: "2px",
              borderRadius: "5px",
            }}
            className="header_option_lang"
            name=""
            id=""
          >
            <option value="az">AZ</option>
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>

          <div className="header_right_box_a" id="dark">
            <NavLink onClick={toggleDark}>
              <FaMoon className="right-icons" />
            </NavLink>
          </div>

          <div className="header_burger_menu">
            <IoIosMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
