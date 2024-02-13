import React from 'react';
import "./Protocols.css";
import { FaAngleRight } from 'react-icons/fa';

const Protocols = () => {
  return (
    <div className="protocols-container">
      <h1 className="protocols-title">Improve data quality with Protocols</h1>
      <p className="protocols-learn-more">
        Automate and scale data validation and improve trust in your data.
        <a href="a" className="protocols-learn-more-link">
          Learn more <FaAngleRight className="protocols-learn-more-icon" />
        </a>
      </p>

      <div className="protocols-section">
        <h2 className="protocols-section-title">Shared data dictionary</h2>
        <p className="protocols-section-desc">
          Align stakeholders on your event tracking approach to improve decision making with Tracking Plans as a single
          source of truth.
        </p>
      </div>

      <div className="protocols-section">
        <h2 className="protocols-section-title">Data quality</h2>
        <p className="protocols-section-desc">
          Diagnose and enforce the quality of your data with violations and built-in controls to block non-conforming
          events.
        </p>
      </div>

      <div className="protocols-section">
        <h2 className="protocols-section-title">Powerful integrations</h2>
        <p className="protocols-section-desc">
          Use the Segment Public API to extend your workflow and Typewriter tool to reduce implementation errors for your
          developers.
        </p>
      </div>
    </div>
  );
};

export default Protocols;