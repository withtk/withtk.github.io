import React from 'react';
import '../styles/Dash.css';

const Dash = () => {
  const subscriptions = [
    {
      avatar: "https://cdn.usegalileo.ai/sdxl10/294a9fd6-d44f-42da-aea5-a4c4b2ebe206.png",
      title: "CNN",
      info: "News • 1 hour ago • 1.3M views"
    },
    {
      avatar: "https://cdn.usegalileo.ai/sdxl10/71c71a37-b5ee-4b0d-903f-be758844cf2b.png",
      title: "Tech Insider",
      info: "Tech • 2 hours ago • 1.5M views"
    },
    {
      avatar: "https://cdn.usegalileo.ai/sdxl10/d17eb44b-8a37-42f7-8be3-cfc51662f51e.png",
      title: "Casey Neistat",
      info: "Vlog • 3 hours ago • 1.1M views"
    },
    {
      avatar: "https://cdn.usegalileo.ai/sdxl10/3a89b827-f53a-4e86-b99f-c4bd16bc6171.png",
      title: "Billie Eilish",
      info: "Music • 4 hours ago • 1.7M views"
    },
    {
      avatar: "https://cdn.usegalileo.ai/sdxl10/6ab3c4dd-5202-43b0-912e-51204ebb973a.png",
      title: "PewDiePie",
      info: "Comedy • 5 hours ago • 1.2M views"
    }
  ];

  const comments = [
    {
      avatar: "https://cdn.usegalileo.ai/sdxl10/c42d874e-4790-484e-afbf-1b61e82b34eb.png",
      author: "Alex",
      time: "2 hours ago",
      text: "I love this game, and I'm so excited to see what you guys do with it! I'm also curious to see how it will compare to other games I've played in the past. I'm looking forward to seeing more gameplay, and I hope you'll be able to share some of the design process as well. Keep up the great work!",
      likes: "1.2K",
      dislikes: "12"
    },
    {
      avatar: "https://cdn.usegalileo.ai/sdxl10/41dd44b0-e4a7-461e-80f3-704005be021e.png",
      author: "Anna",
      time: "4 hours ago",
      text: "This is a really cool concept for a game, and I'm looking forward to seeing how it develops. I'm especially interested in the social aspects, and how they will impact the gameplay. I think it has a lot of potential, and I'm excited to see how it will turn out.",
      likes: "856",
      dislikes: "5"
    }
  ];

  return (
    <div className="design-root">
      <div className="layout-container">
        <div className="main-content">
          <div className="sidebar-container">
            <div className="sidebar">
              <div className="nav-section">
                <div className="nav-items">
                  {navItems.map((item, index) => (
                    <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
                      <div className="nav-icon">{item.icon}</div>
                      <p className="nav-text">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <button className="primary-button">
                <span className="truncate">New video</span>
              </button>
            </div>
            <div className="subscriptions-section">
              <h3 className="section-title">Subscriptions</h3>
              {subscriptions.map((sub, index) => (
                <div key={index} className="subscription-card">
                  <div
                    className="subscription-avatar"
                    style={{ backgroundImage: `url("${sub.avatar}")` }}
                  ></div>
                  <div className="subscription-info">
                    <p className="subscription-title">{sub.title}</p>
                    <p className="subscription-info-text">{sub.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="content-section">
            <div className="header-section">
              <p className="hashtag-title">#kinggame</p>
              <button className="secondary-button">
                <span className="truncate">Follow</span>
              </button>
            </div>
            <div
              className="video-container"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/908062a1-972d-49b6-8a8e-cabee2f1456e.png")' }}
            >
              <button className="play-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                </svg>
              </button>
            </div>
            <h1 className="video-title">King Game</h1>
            <p className="video-description">
              Welcome to the King Game! We're a group of content creators who make videos, play games, and have fun together.
            </p>
            <div className="comment-section">
              <p className="comment-count">All 1,023 comments</p>
            </div>
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                <div
                  className="comment-avatar"
                  style={{ backgroundImage: `url("${comment.avatar}")` }}
                ></div>
                <div className="comment-content">
                  <div className="comment-header">
                    <p className="comment-author">{comment.author}</p>
                    <p className="comment-time">{comment.time}</p>
                  </div>
                  <p className="comment-text">{comment.text}</p>
                  <div className="comment-actions">
                    <div className="action-button">
                      <div className="action-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path>
                        </svg>
                      </div>
                      <p className="action-count">{comment.likes}</p>
                    </div>
                    <div className="action-button">
                      <div className="action-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"></path>
                        </svg>
                      </div>
                      <p className="action-count">{comment.dislikes}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const navItems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
      </svg>
    ),
    text: "Home",
    active: true
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M183.89,153.34a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68ZM216,144a88,88,0,0,1-176,0c0-27.92,11-56.47,32.66-84.85a8,8,0,0,1,11.93-.89l24.12,23.41,22-60.41a8,8,0,0,1,12.63-3.41C165.21,36,216,84.55,216,144Zm-16,0c0-46.09-35.79-85.92-58.21-106.33L119.52,98.74a8,8,0,0,1-13.09,3L80.06,76.16C64.09,99.21,56,122,56,144a72,72,0,0,0,144,0Z"></path>
      </svg>
    ),
    text: "Trending"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm36.44-94.66-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17Z"></path>
      </svg>
    ),
    text: "Subscriptions"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40ZM216,200H40V88H216Z"></path>
      </svg>
    ),
    text: "Library"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
      </svg>
    ),
    text: "History"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,88h80v80H40Zm96-16V56h32V72Zm-16,0H88V56h32Zm0,112v16H88V184Zm16,0h32v16H136Zm0-16V88h80v80Zm80-96H184V56h32ZM72,56V72H40V56ZM40,184H72v16H40Zm176,16H184V184h32v16Z"></path>
      </svg>
    ),
    text: "Your videos"
  }
];

export default Dash; 