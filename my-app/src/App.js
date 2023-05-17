import React, { useState } from "react";
import "./App.css";

function App() {
  const [section, setSection] = useState("Home");
  const [showDropdown, setShowDropdown] = useState(false);

  const showHomePage = () => {
    return (
      <div>
        <h2>Welcome to the University Clubs Dashboard!</h2>
        <p>Use the sidebar to navigate to different sections.</p>
      </div>
    );
  };

  const showClubsResources = () => {
    return (
      <div>
        <h2>Clubs Resources</h2>
        <div>
          <h3>GDSC Resources</h3>
          <iframe
            src="https://gdscbpdc.github.io/"
            width="800"
            height="400"
          ></iframe>
        </div>
        <div>
          <h3>ACM Resources</h3>
          <iframe
            src="https://openlib-cs.acmbpdc.org/"
            width="800"
            height="400"
          ></iframe>
        </div>
        <div>
          <h3>Ahmed Thahir's Notes</h3>
          <iframe
            src="https://uni-notes.netlify.app/"
            width="800"
            height="400"
          ></iframe>
        </div>
      </div>
    );
  };

  const showUniversityResources = () => {
    return (
      <div>
        <h2>University Resources</h2>
        <div>
          <h3>Library Resources</h3>
          <iframe
            src="http://webopac.bits-dubai.ac.ae/AutoLib/index.jsp"
            width="800"
            height="400"
          ></iframe>
        </div>
        <div>
          <h3>Courses & LMS</h3>
          <iframe
            src="https://lms.bitspilanidubai.ae/login/index.php"
            width="800"
            height="400"
          ></iframe>
        </div>
        <div>
          <h3>BITS ERP</h3>
          <iframe
            src="https://erp.bits-pilani.ac.in/"
            width="800"
            height="400"
          ></iframe>
        </div>
      </div>
    );
  };

  const handleSectionChange = (selectedSection) => {
    setSection(selectedSection);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h2 className="subheading">Menu</h2>

        {/* Fancy Dropdown Navigation */}
        <div className="dropdown-container">
          <div
            className={`dropdown ${showDropdown ? "active" : ""}`}
            onClick={toggleDropdown}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {showDropdown && (
            <div className="dropdown-menu">
              <ul>
                <li
                  className={section === "Home" ? "active" : ""}
                  onClick={() => handleSectionChange("Home")}
                >
                  Home
                </li>
                <li
                  className={section === "Clubs Resources" ? "active" : ""}
                  onClick={() => handleSectionChange("Clubs Resources")}
                >
                  Clubs Resources
                </li>
                <li
                  className={section === "University Resources" ? "active" : ""}
                  onClick={() => handleSectionChange("University Resources")}
                >
                  University Resources
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="content">
        <h1 className="heading">University Clubs Dashboard</h1>
        <hr />

        {/* Content */}
        {section === "Home" && showHomePage()}
        {section === "Clubs Resources" && showClubsResources()}
        {section === "University Resources" && showUniversityResources()}

        <hr />
        <p className="footer">Designed & Developed by HUSAM</p>
      </div>
    </div>
  );
}

export default App;
