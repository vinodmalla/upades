import React from 'react';

export default function Certificates() {
  const containerStyle = {
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'left'
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '15px'
  };

  const listStyle = {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
    paddingLeft: '20px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Certificates</h2>
      <ul style={listStyle}>
        <a href='https://cp.certmetrics.com/amazon/en/public/verify/credential' target="_blank" 
           rel="noopener noreferrer" style={{color: '#0073b1',
    textDecoration: 'none'}}><li><strong>Cloud Practitioner</strong> – AWS</li></a>
        
        <a href='https://catalog-education.oracle.com/ords/certview/sharebadge?id=FAB362363FD205D4E02F6E049A48E8872FDF0CE3C7E66FBB8ADF0ABA04EA95F7l' target="_blank" 
           rel="noopener noreferrer" style={{color: '#0073b1',
    textDecoration: 'none'}}><li><strong>Oracle Cloud Infrastructure</strong> – Oracle Cloud Computing</li></a>
       <a href='' target="_blank" 
           rel="noopener noreferrer" style={{color: '#0073b1',
    textDecoration: 'none'}}> <li><strong>Cloud Computing</strong> – NPTEL</li></a>
        <a href='https://learn.microsoft.com/en-gb/users/chakravarthyommivijaypavan-8493/transcript/degj2i26wx0x6wo' target="_blank" 
           rel="noopener noreferrer" style={{color: '#0073b1',
    textDecoration: 'none'}}><li><strong>Microsoft SC-900</strong> – Microsoft</li></a>
    <a href='https://learn.microsoft.com/en-gb/users/chakravarthyommivijaypavan-8493/transcript/degj2i26wx0x6wo' target="_blank" 
           rel="noopener noreferrer" style={{color: '#0073b1',
    textDecoration: 'none'}}><li><strong>Microsoft AZ-500</strong> – Microsoft</li></a>
      </ul>
    </div>
  );
}
