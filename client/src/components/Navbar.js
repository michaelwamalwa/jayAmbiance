import React, { useState } from "react";
import logo from "../images/logo.png";
import "../styles/Navigation.css";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Privacy from "../pages/Privacy/Privacy";
import Contact from "../pages/Contact/Contact";


export default function Navbar() {
  const [activeTab, setActiveTab] = useState("");

  const tabs = [
    { id: "home", label: "Home", component: <Home /> },
    { id: "about", label: "About", component: <About /> },
    { id: "privacy", label: "Privacy", component: <Privacy /> },
    { id: "contact", label: "Contact", component: <Contact /> },

   
  ];

  const toggleTab = (tabName) => {
    setActiveTab(activeTab === tabName ? "" : tabName);
  };

  const renderContent = () => {
    const tab = tabs.find((tab) => tab.id === activeTab);
    return tab ? tab.component : null;
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => toggleTab("home")}>
          <img src={logo} alt="logo" className="logo-img" />
          <h1 className="logo-text">Jay Marketing Ambiance</h1>
        </div>
        <div className="navbar-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`navbar-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => toggleTab(tab.id)}
              aria-label={tab.label}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>
      <div className="content">
        {activeTab && <div className="tab-content">{renderContent()}</div>}
      </div>
    </>
  );
}
