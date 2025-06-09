import React from 'react';
import '../styles/Dash.css';

export default function Dash() {
  const navItems = [
    {
      icon: (
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Home"
    },
    {
      icon: (
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 6H23V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Trending"
    },
    {
      icon: (
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Subscriptions"
    },
    {
      icon: (
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 19.5V4.5C4 3.67157 4.67157 3 5.5 3H18.5C19.3284 3 20 3.67157 20 4.5V19.5C20 20.3284 19.3284 21 18.5 21H5.5C4.67157 21 4 20.3284 4 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Library"
    },
    {
      icon: (
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.05 11C3.27151 9.85888 3.87923 8.83023 4.78997 8.06698C5.70071 7.30373 6.86177 6.85067 8.07 6.78C9.68044 6.66322 11.2883 6.96655 12.738 7.66C14.1878 8.35345 15.4167 9.41174 16.29 10.73C17.1633 12.0483 17.6444 13.5683 17.68 15.13C17.7156 16.6917 17.3047 18.2333 16.5 19.58C15.6953 20.9267 14.5266 22.0217 13.15 22.73C11.7734 23.4383 10.2451 23.7293 8.72 23.57C7.19492 23.4107 5.73967 22.8062 4.53 21.82C3.32033 20.8338 2.40506 19.5056 1.89 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "History"
    },
    {
      icon: (
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 10L19.5528 7.72361C19.8343 7.55115 20.1854 7.50189 20.5055 7.58899C20.8256 7.67609 21.0858 7.89115 21.2179 8.17954C21.35 8.46794 21.3402 8.79747 21.191 9.07705L17.809 15.9229C17.6598 16.2025 17.3996 16.4176 17.0795 16.5047C16.7594 16.5918 16.4083 16.5425 16.1268 16.3701L12 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18.5H5C4.46957 18.5 3.96086 18.2893 3.58579 17.9142C3.21071 17.5391 3 17.0304 3 16.5V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Your videos"
    }
  ];

  const subscriptions = [
    {
      avatar: "https://i.pravatar.cc/150?img=1",
      title: "Gaming Channel",
      info: "1.2M subscribers"
    },
    {
      avatar: "https://i.pravatar.cc/150?img=2",
      title: "Game Reviews",
      info: "500K subscribers"
    },
    {
      avatar: "https://i.pravatar.cc/150?img=3",
      title: "Game Tips",
      info: "300K subscribers"
    }
  ];

  const comments = [
    {
      avatar: "https://i.pravatar.cc/150?img=4",
      author: "John Doe",
      time: "2 hours ago",
      text: "This game is amazing! I've been playing it for hours.",
      likes: 120,
      dislikes: 5
    },
    {
      avatar: "https://i.pravatar.cc/150?img=5",
      author: "Jane Smith",
      time: "3 hours ago",
      text: "The graphics are stunning and the gameplay is smooth.",
      likes: 85,
      dislikes: 2
    }
  ];

  return (
    <div className="design-root">
      <div className="layout-container">
        <div className="main-content">
          <div className="sidebar-container">
            <div className="sidebar">
              <div className="nav-section">
                {navItems.map((item, index) => (
                  <div key={index} className="nav-item">
                    {item.icon}
                    <span className="nav-text">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="subscriptions-section">
                <h3 className="section-title">Subscriptions</h3>
                {subscriptions.map((sub, index) => (
                  <div key={index} className="subscription-item">
                    <img src={sub.avatar} alt={sub.title} className="subscription-avatar" />
                    <div className="subscription-info">
                      <span className="subscription-title">{sub.title}</span>
                      <span className="subscription-subscribers">{sub.info}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="content-section">
            <div className="video-container">
              <div className="video-thumbnail">
                <img src="https://picsum.photos/800/450" alt="Video thumbnail" />
                <button className="play-button">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
              <h2 className="video-title">King Game - Official Gameplay Trailer</h2>
              <div className="video-info">
                <span className="video-views">1.2M views</span>
                <span className="video-date">2 days ago</span>
              </div>
            </div>
            <div className="comments-section">
              <h3 className="section-title">Comments ({comments.length})</h3>
              {comments.map((comment, index) => (
                <div key={index} className="comment">
                  <img src={comment.avatar} alt={comment.author} className="comment-avatar" />
                  <div className="comment-content">
                    <div className="comment-header">
                      <span className="comment-author">{comment.author}</span>
                      <span className="comment-time">{comment.time}</span>
                    </div>
                    <p className="comment-text">{comment.text}</p>
                    <div className="comment-actions">
                      <button className="action-button">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{comment.likes}</span>
                      </button>
                      <button className="action-button">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 14L12 9L7 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{comment.dislikes}</span>
                      </button>
                      <button className="action-button">Reply</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 