import React, { useState } from 'react';
import './Privacy.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const PrivacyPolicy = () => {
  const [showPolicy, setShowPolicy] = useState(false);

  const handleTogglePolicy = () => {
    setShowPolicy(!showPolicy);
  };

  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy for JAY MARKETING AMBIANCE - Personalized Marketing Platform</h1>

    

      <p className="privacy-intro">
        Welcome to JAY MARKETING AMBIANCE, a personalized marketing platform designed to enhance your marketing
        experience. At JAY MARKETING AMBIANCE, we are committed to protecting your privacy and safeguarding your personal
        information. This privacy policy explains how we collect, use, disclose, and store your data. By accessing or using
        our platform, you consent to the practices outlined in this policy.
      </p>

  

      <div className="privacy-section">
        <h2 className="privacy-section-title">How We Use Your Information:</h2>

        <p>
          a. Personalization: We use your information to personalize your marketing experience, deliver targeted
          advertisements, and offer tailored content.
        </p>

        <p>
          b. Communication: We may use your contact information to send you marketing communications, updates, and
          promotional offers. You can opt-out of these communications at any time.
        </p>

        <p>
          c. Payment Processing: Your payment details are used solely for processing transactions related to our services.
        </p>

        <p>
          d. Analytics: We analyze user data to improve our platform, troubleshoot issues, and optimize user experience.
        </p>

        <p>
          e. Legal Obligations: We may use or disclose your information as required by law or to protect our rights, privacy,
          safety, or property.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-section-title">Data Sharing and Third Parties:</h2>

        <p>
          a. Service Providers: We may share your information with trusted third-party service providers who assist us in
          delivering our services, but only to the extent necessary.
        </p>

        <p>
          b. Aggregated Data: We may share aggregated and anonymized data with partners, advertisers, or other third parties
          for research, analysis, or marketing purposes.
        </p>

        <p>
          c. Business Transfers: In the event of a merger, acquisition, or sale of our company assets, your information may
          be transferred to the new entity.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-section-title">Data Security:</h2>

        <p>
          We take data security seriously and implement industry-standard measures to protect your information from
          unauthorized access, disclosure, or alteration.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-section-title">Data Retention:</h2>

        <p>
          We will retain your information only as long as necessary to fulfill the purposes outlined in this policy, or as
          required by law.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-section-title">Your Rights:</h2>

        <p>
          You have the right to access, correct, or delete your personal information. You can do this by contacting us at{' '}
          <a href="mailto:[email address]" className="privacy-contact-link">
            jones@jayambiance.io
          </a>. We will respond to your request within a reasonable timeframe.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-section-title">Children's Privacy:</h2>

        <p>
          Our platform is not intended for children under the age of 13. We do not knowingly collect or store personal
          information from children.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-section-title">Updates to the Privacy Policy:</h2>

        <p>
          We may update this privacy policy from time to time to reflect changes in our practices or for legal reasons. We
          will notify you of any significant changes and obtain your consent if required by law.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-section-title">Contact Us:</h2>

        <p>
          If you have any questions, concerns, or requests regarding this privacy policy, please contact us at{' '}
          <a href="mailto:[email address]" className="privacy-contact-link">
            jones@jayambiance.io
          </a>.
        </p>
      </div>

      <p className="privacy-disclaimer">
        By using JAY MARKETING AMBIANCE, you acknowledge that you have read and understood this privacy policy and agree
        to its terms.
      </p>
    </div>
  );
};

export default PrivacyPolicy;