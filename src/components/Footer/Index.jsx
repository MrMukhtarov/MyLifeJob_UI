import React from "react";
import "./Index.css";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <footer>
      <div className="footer_all d-flex justify-content-between">
        <div className="footer_left d-flex gap-5">
          <span>© JobSearch.az 2006—2024</span>
          <div className="d-flex gap-3">
            <NavLink to="/">Haqqımızda</NavLink>
            <NavLink to="/">Xidmətlər</NavLink>
            <NavLink to="/">Əlaqə</NavLink>
          </div>
        </div>
        <div className="footer_right">
          <span>Site by Nicat Muxtarov Studio</span>
        </div>
      </div>
    </footer>
  );
};

export default Index;
