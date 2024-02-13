import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Connections from "./Connections.js";
import Engage from "./Engage.js";
import Protocols from "./Protocols.js";
import Settings from "./Settings.js";
import { FaSun, FaMoon, FaDoorOpen } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("");
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
  const [userName, setUserName] = useState('');

  const navigate = useNavigate();

  // Assuming you have a function or a way to check if the user is authenticated
  const isAuthenticated = true; // Placeholder; replace with actual authentication check

  useEffect(() => {
    if (!isAuthenticated) {
      handleLogout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const tabs = [
    { id: "connections", label: "Connections", component: <Connections /> },
    { id: "engage", label: "Engage", component: <Engage /> },
    { id: "protocols", label: "Protocols", component: <Protocols /> },
    { id: "settings", label: "Settings", component: <Settings /> },
  ];

  const toggleTab = (tabName) => {
    setActiveTab(activeTab === tabName ? "" : tabName);
  };

  const renderContent = () => {
    const tab = tabs.find(tab => tab.id === activeTab);
    return tab ? tab.component : null;
  };

  const handleModeChange = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    // Reset user state and redirect to login
    setUserName('');
    navigate('/login');
  };

  return (
    <div className={`dashboard ${darkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar">
        <h2>Welcome, {userName}!</h2>
        <ul>
          {tabs.map(tab => (
            <li key={tab.id} className={activeTab === tab.id ? 'active' : ''} onClick={() => toggleTab(tab.id)}>
              {tab.label}
            </li>
          ))}
          <li className="logout" onClick={handleLogout}>
            <FaDoorOpen />
            <span>Logout</span>
          </li>
        </ul>
        <div className='dark-mode-toggle' onClick={handleModeChange}>
          {darkMode ? <FaSun /> : <FaMoon />}
          <span>Toggle Dark Mode</span>
        </div>
      </nav>
      <div className="container">
        <div className="tab-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
