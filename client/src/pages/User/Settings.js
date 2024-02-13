import React, { useState } from 'react';
import './Settings.css';
import { FaRegEnvelope, FaPlus } from 'react-icons/fa';

const Settings = () => {
  const [incidentContacts, setIncidentContacts] = useState([]);
  const [showAddContact, setShowAddContact] = useState(false);
  const [newContact, setNewContact] = useState('');

  const handleAddContact = () => {
    setIncidentContacts([...incidentContacts, newContact]);
    setNewContact('');
    setShowAddContact(false);
  }

  return (
    <div className="settings">
      <h1>Workspace settings</h1>

      {/* General Settings */}
      <section className="settings-section">
        <h2>General Settings</h2>
        
        
        
        <div className="setting">
          <span className="label">Incident Contacts</span>
          <div className="contacts">
            <div className="add-contact">
              {showAddContact ? (
                <>
                  <input type="text" placeholder="Enter email address" value={newContact} onChange={(e) => setNewContact(e.target.value)} />
                  <button className="add-contact-button" onClick={handleAddContact}><FaPlus /></button>
                </>
              ) : (
                <button className="add-contact-button" onClick={() => setShowAddContact(true)}>Add Contact</button>
              )}
            </div>
            {incidentContacts.length > 0 ? (
              incidentContacts.map((contact, index) => (
                <div key={index} className="contact">
                  <FaRegEnvelope />
                  <span className="email">{contact}</span>
                </div>
              ))
            ) : (
              <div className="no-contacts">There are no incident contacts added yet.</div>
            )}
          </div>
        </div>
      </section>

      {/* Audit Forwarding */}
      <section className="settings-section">
        <h2>Audit Forwarding</h2>
        <div className="setting">
          <span className="label">Business tier</span>
          <span className="value">Stay connected with your workspace via Audit Forwarding</span>
        </div>
        <div className="setting">
          <p>On our Business Plan, You can forward all workspace events to a source.</p>
          <a href="/sales" className="cta-button">Talk to Sales</a>
        </div>
        <div className="setting">
          <p>Choose to forward events happening within this workspace to a Segment Source. These events include all user and system-generated events.</p>
          <p>You have no compatible Sources available. Add a new Source.</p>
          <p>We recommend creating a dedicated Source for forwarded events to avoid contaminating integrations and warehouses.</p>
        </div>
      </section>

      {/* Support Access */}
      <section className="settings-section">
        <h2>Support Access</h2>
        <div className="setting">
          <a href="/contact-support" className="cta-button">Contact Segment to open a new support request.</a>
        </div>
        <div className="setting">
          <p>If required, you can grant Segment access to your account for 7 days to help debug workspace issues. Segment will be given administration privileges to your user account during this time.</p>
          <a href="/grant-access" className="cta-button">Grant Access</a>
        </div>
      </section>

</div>
  );
};

export default Settings;