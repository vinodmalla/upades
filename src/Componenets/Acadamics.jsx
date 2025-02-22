import React from 'react';

export default function Acadamics() {
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

  const textStyle = {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6'
  };

  const degreeStyle = {
    fontWeight: 'bold',
    color: '#333'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Academics</h2>
      <p style={textStyle}>
        <span style={degreeStyle}>Bachelor of Technology</span> - Vignan’s Institute of Information and Technology <br />
        <strong>07/2019 - 07/2023</strong>, Visakhapatnam, India
      </p>
      <p style={textStyle}>
        <span style={degreeStyle}>Intermediate</span> - Narayana Junior College <br />
        <strong>06/2017 - 06/2019</strong>, Visakhapatnam, India
      </p>
      <p style={textStyle}>
        <span style={degreeStyle}>Matriculation</span> - Sri Sarada Vidya Nilayam <br />
        <strong>06/2016 - 06/2017</strong>, Visakhapatnam, India
      </p>
    </div>
  );
}
