import React from 'react';

export default function Experience() {
  const containerStyle = {
    maxWidth: '800px',
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

  const subHeadingStyle = {
    color: '#555',
    marginBottom: '10px'
  };

  const textStyle = {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6'
  };

  const listStyle = {
    paddingLeft: '20px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Work Experience</h1>
      <h3 style={subHeadingStyle}>Projects</h3>
      <p style={textStyle}>
        <strong>Client Name:</strong> GENERAL ELECTRIC <br />
        <strong>Type of Project:</strong> Application Maintenance and Support <br />
        <strong>Location:</strong> Hyderabad <br />
        <strong>Role:</strong> Associate constulant
      </p>
      <h3 style={subHeadingStyle}>Roles and Responsibilities</h3>
      <ul style={{ ...textStyle, ...listStyle }}>
        <li>Daily monitoring of the Batch Jobs and fixing issues of failed jobs.</li>
        <li>Resolved issues related to missing sales and failure of IDocs.</li>
        <li>Scheduled and monitored different background jobs as per business needs.</li>
        <li>Performed system health checks and monitoring.</li>
        <li>Analyzed the Archiving process of SD documents.</li>
        <li>Output determination – created new output types and worked on Smart Forms layouts with the technical team.</li>
        <li>Knowledge of various business processes such as OTC, Standard Order Process, Return Orders, and Partner Determination.</li>
        <li>Worked on Customer Material Info Record, Material Determination, Material Exclusion/Inclusion, and Third-Party Sales.</li>
        <li>Familiar with Item Proposal, Cross-Selling, and Rounding Profiles in Sales Order.</li>
        <li>Extracted data based on business requirements.</li>
        <li>Created, processed, and reprocessed IDOCs.</li>
        <li>Developed queries as per business needs.</li>
      </ul>
    </div>
  );
}
