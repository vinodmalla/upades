import React from 'react';
import pic from './WhatsApp Image 2025-02-07 at 20.42.57_40d4258e.jpg';

export default function About() {
  const containerStyle = {
    maxWidth: '600px',
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
    fontSize: '18px',
    fontWeight: 'bold'
  };

  const subHeadingStyle = {
    color: '#555',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  const textStyle = {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6'
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginTop: '15px',
    objectFit: 'cover',
    border: '3px solid #ddd'
  };

  return (
    <div style={containerStyle}>
      <h6 style={headingStyle}>About</h6>
      <h3 style={subHeadingStyle}>
        Ommi Vijay Pavan Chakravarthy is an SAP SD Consultant with expertise in managing and optimizing SAP Sales and Distribution (SD) projects.
      </h3>
      <p style={textStyle}>
        SAP Functional Consultant with around 1 year of experience in implementation projects in Sales and Distribution (SD). 
        Currently associated with Accenture as an Associate Consultant.
      </p>
      <img src={pic} alt='Ommi Vijay Pavan Chakravarthy' style={imageStyle} />
    </div>
  );
}
