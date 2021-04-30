import React from "react";
import "../Style/CommonStyle.css";

let Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark h-40">
        <a className="navbar-brand" href="/#" onClick={(e) => e.preventDefault()}>
          {/* Report Generation System */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/#" onClick={(e) => e.preventDefault()}>
                UserName
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Header;
