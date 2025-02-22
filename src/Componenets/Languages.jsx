import React from 'react';

export default function Languages() {
  const containerStyle = {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
  };

  const headingStyle = {
    color: '#333',
    marginBottom: '15px'
  };

  const textStyle = {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
    textAlign: 'left'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Languages</h2>
      <p style={textStyle}>
        <strong>English:</strong> Native or Bilingual Proficiency <br />
        <strong>Telugu:</strong> Native or Bilingual Proficiency
      </p>
    </div>
  );
}
