import React from 'react';

export default function Contact() {
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
    color: '#333'
  };

  const textStyle = {
    fontSize: '16px',
    color: '#555',
    margin: '10px 0'
  };

  const linkStyle = {
    color: '#0073b1',
    textDecoration: 'none'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Contact Us</h2>
      <p style={textStyle}><strong>Address:</strong> Visakhapatnam, India</p>
      <p style={textStyle}>
        <strong>Mail ID:</strong> 
        <a href="mailto:vijaypavanyadav@gmail.com" style={linkStyle}> vijaypavanyadav@gmail.com</a>
      </p>
      <p style={textStyle}>
        <strong>Mobile Number:</strong> 
        <a href="tel:+917075752522" style={linkStyle}> +91 7075752522</a>
      </p>
      <p style={textStyle}>
        <strong>LinkedIn:</strong> 
        <a href="https://www.linkedin.com/in/vijay-pavan-chakravarthy-714816204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " 
           target="_blank" 
           rel="noopener noreferrer" 
           style={linkStyle}>
          linkedin.com/in/vijay-pavan-chakravarthy
        </a>
      </p>
    </div>
  );
}
