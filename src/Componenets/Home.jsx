import React from 'react';
import back from './istockphoto-1296089956-612x612.jpg';

export default function Home() {
  const myStyle = {
    backgroundImage: `url(${back})`,
    height: '100vh',
    marginTop: '-70px',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  };

  const textStyle = {
    color: 'white',
    fontSize: '2rem',
    fontWeight: "Bold"
  };

  return (
    <div style={myStyle}>
      <div>
        <h1 style={textStyle}>OMMI VIJAY PAVAN CHAKRAVARTHY</h1>
        <h2 style={textStyle}>SD Consultant</h2>
      </div>
    </div>
  );
}
