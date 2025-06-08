import React from 'react';
import '../styles/How.css';

const How = () => {
  const steps = [
    {
      number: "1",
      title: "Choose Your Role",
      description: "Select your character and customize your appearance to stand out in the game."
    },
    {
      number: "2",
      title: "Join a Game",
      description: "Enter a game room or create your own to start playing with friends or other players."
    },
    {
      number: "3",
      title: "Follow the Rules",
      description: "Each game has specific rules and objectives. Pay attention to the instructions."
    },
    {
      number: "4",
      title: "Play and Win",
      description: "Use your skills and strategy to outplay others and become the King!"
    }
  ];

  return (
    <div className="design-root">
      <div className="layout-container">
        <div className="header">
          <h1 className="header-title">How to Play King Game</h1>
          <nav className="nav-links">
            <a href="/" className="nav-link">Home</a>
            <a href="/how" className="nav-link active">How to Play</a>
            <a href="/dash" className="nav-link">Dashboard</a>
          </nav>
        </div>
        <div className="content-container">
          <div className="page-title">Get Started with King Game</div>
          <p className="page-description">
            Learn how to play King Game and become the ultimate ruler! Follow these simple steps to get started.
          </p>
          <button className="primary-button">
            <span className="truncate">Play Now</span>
          </button>
          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={index} className="step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="step-connector">
                    <div className="step-line"></div>
                    <div className="step-dot"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default How; 