import React from 'react';
import './Connections.css';

import {
  FaUsers,
  FaArrowRight,
  FaChartBar,
  FaCheck,
  FaExternalLinkAlt,
} from 'react-icons/fa';

export default function Connections() {
  return (
    <div className="connections-container">
      <div className="sidebar">
        <h2>Connections</h2>
        <ul>
          <li className="active">
            <FaUsers className="sidebar-icon" />
            <span>Components</span>
          </li>
          <li>
            <FaArrowRight className="sidebar-icon" />
            <span>Sources</span>
          </li>
          <li>
            <FaExternalLinkAlt className="sidebar-icon" />
            <span>Destinations</span>
          </li>
          <li>
            <FaChartBar className="sidebar-icon" />
            <span>Health</span>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <section className="content-section">
          <h1>Components</h1>
          <div className="content-item">
            <FaCheck className="content-icon" />
            <div>
              <h3>User Segmentation</h3>
              <p>The Components section allows you to manage and configure various elements of your personalized marketing platform. Here are some key components you can work with.</p>
            </div>
          </div>
          <div className="content-item">
            <FaCheck className="content-icon" />
            <div>
              <h3>Campaign Automation</h3>
              <p>The Campaign Automation section allows you to set up automated campaigns triggered by specific events or customer actions. Set up automated campaigns triggered by specific events or customer actions for personalized messaging.</p>
            </div>
          </div>
          {/* Add more content items for Components here */}
        </section>

        <section className="content-section">
          <h1>Sources</h1>
          <div className="content-item">
            <FaCheck className="content-icon" />
            <div>
              <h3>CRM Systems</h3>
              <p>Connect customer data from CRM systems for more effective targeting and messaging.</p>
            </div>
          </div>
          {/* Add more content items for Sources here */}
        </section>

        <section className="content-section">
          <h1>Destinations</h1>
          <div className="content-item">
            <FaCheck className="content-icon" />
            <div>
              <h3>Email Marketing Providers</h3>
              <p>Push personalized email messages and content to popular email marketing providers for wider reach.</p>
            </div>
          </div>
          {/* Add more content items for Destinations here */}
        </section>

        <section className="content-section">
          <h1>Health</h1>
          <div className="content-item">
            <FaCheck className="content-icon" />
            <div>
              <h3>Error Monitoring</h3>
              <p>Monitor for any system or integration errors and receive timely notifications for quick resolution.</p>
            </div>
          </div>
          {/* Add more content items for Health here */}
        </section>
      </div>
    </div>
  );
}