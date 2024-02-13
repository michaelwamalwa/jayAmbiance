import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure your project is set up to handle CSS

const Home = () => {
  
  const [isNavExpanded, setIsNavExpanded] = useState(false);
 const [ isHovered, setIsHovered] = useState(false);
  const navItems = [
    {
      name: 'PRODUCT',
      link: '/product',
      subMenu: [
        { name: 'Product Overview', link: '/product/overview' },
        { name: 'Email', link: '/product/email' },
        { name: 'SMS', link: '/product/sms' },
        { name: 'Retail Solutions', link: '/product/retail' },
        { name: 'Media Solutions', link: '/product/media' },
        { name: 'AI + Machine Learning', link: '/product/ai-machine-learning' },
        { name: 'Lifecycle Optimization', link: '/product/customer-lifecycle-optimization' },
      ],
    },
    {
      name: 'CUSTOMERS',
      link: '/customers',
    },
    {
      name: 'EVENTS',
      link: '/events',
      subMenu: [
        { name: 'Past Events', link: '/events/past' },
        { name: 'Upcoming Events', link: '/events/upcoming' },
      ],
    },
    {
      name: 'RESOURCES',
      link: '/resources',
      subMenu: [
        { name: 'View All', link: '/resources/all' },
      ],
    },
  ];

  return (
    <div className="page-wrap">
      <header className="header">
        <div className="container">
          <button
            className={`menu-toggle ${isNavExpanded ? 'active' : ''}`}
            aria-expanded={isNavExpanded}
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav-container ${isNavExpanded ? 'expanded' : ''}`} aria-label="Main navigation">
            <ul className="navigation-main">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.link}>{item.name}</Link>
                  {item.subMenu && (
                    <ul className="navigation-sub">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link to={subItem.link}>{subItem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section className="main-content">
        <div className="container">
          <article className="ad-msg-block">
            <h2>Making every message a little more personal.</h2>
            <p>
              Data is power, and our customer profiles are the most robust in the industry.
              Capture key insights on consumers such as interests, email and omnichannel
              behavior, purchase tendencies, and more. Then easily personalize messaging
              for every single customer — no matter the channel.
            </p>
            <Link to="/signup" className="btn btn-primary">Join Us</Link>
          </article>
        </div>
      </section>

      <footer className="footer-dark">
        <div className="container">
          <div className="social-buttons">
            <a href="https://www.linkedin.com/company/andikamichael/" target="_blank" rel="noopener noreferrer" className="social-button">LinkedIn</a>
            <a href="https://twitter.com/andikamichael" target="_blank" rel="noopener noreferrer" className="social-button">Twitter</a>
            <a href="https://www.facebook.com/andikamichael" target="_blank" rel="noopener noreferrer" className="social-button">Facebook</a>
            <a href="https://www.instagram.com/andikamichael/" target="_blank" rel="noopener noreferrer" className="social-button">Instagram</a>
          </div>
          {/* LEGAL LINKS*/}
          <div className="legal-links">
      <Link
        to="/terms"
        className="link"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Terms
      </Link>
      <Link
        to="/privacy"
        className="link"
        style={{
          color: isHovered ? '#c3b1e1' : '#9a76d6',
          transition: 'color 0.3s ease',
        }}
      >
        Privacy
      </Link>
    </div>
          <div className="copyright">
            <p>© 2024 JayAmbiance.inc</p>
            <p>Isanda Trading Center, Suite 49A. Kiamyko, KE 10007</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
