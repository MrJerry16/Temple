import React, { useState } from 'react';
import './Main.css'; // Import the CSS file

export default function Main() {
  const [slideIndex, setSlideIndex] = useState(0);

  const changeSlide = (n) => {
    const newIndex = slideIndex + n;
    if (newIndex >= 0 && newIndex < document.getElementsByClassName("images")[0].children.length) {
      setSlideIndex(newIndex);
    }
  };

  return (
    <>
      <div className='Box-container'>
        <div className="images" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
          <img src='' />
          <img src='' />
        </div>
        <a className="prev" onClick={() => changeSlide(-1)}>&#10094;</a>
        <a className="next" onClick={() => changeSlide(1)}>&#10095;</a>
      </div>
      <div>
        <a href="https://www.youtube.com/@GuruvayurDevaswomOfficial/streams" target="_blank" rel="noopener noreferrer">
          <img src="/Need/img2.jpg" alt="Live" />
        </a>
      </div>


      <div className='about'>
        <title>About</title>
        <p>Shri Saibaba Sansthan Trust, Shirdi, is the Governing and Administrative body of Shri Saibaba's Samadhi Temple and all others temples in this premises, and devoted towards teachings of Saibaba "Sabka Malik Ek" and providing amenities to Sai devotees who are visiting Shirdi and Sai Samadhi Temple.</p>
        <a href="/About">More</a>
/*</div>
      <div className="container">
        <h2 className="title">Festials</h2>
        <ul className="festival-list">
          <li className="festival-item">
            <span className="festival-name">Festival Name 1</span>
            <span className="festival-date">Date Range</span>
          </li>
          <li className="festival-item">
            <span className="festival-name">Festival Name 2</span>
            <span className="festival-date">Date Range</span>
          </li>
        </ul>
      </div>


      <div className="schedule-container">
        <h2 className="title">Daily Programme</h2>
        <ul className="schedule-list">
          <li className="schedule-item">
            <span className="time">04:45 AM</span>
            <span className="event">Temple Open</span>
          </li>
          <li className="schedule-item">
            <span className="time">05:00 AM</span>
            <span className="event">Bhupali</span>
          </li>
          <li className="schedule-item">
            <span className="time">05:15 AM</span>
            <span className="event">Kakad Aarti (Morning)</span>
          </li>
          <li className="schedule-item">
            <span className="time">5:50 AM</span>
            <span className="event">Mangal Snan In Samadhi Mandir</span>
          </li>
        </ul>
      </div>*/
      <div class="temple-container">
  <h2>Temple Nearby</h2>
  <p class="temple-description">
    This is a brief description of the temple located within the premises. 
    You can add details about the deity worshipped, timings, significance, 
    and any other relevant information.
  </p>
  <a href="#" class="temple-link">Learn More</a>
</div>



    </>
  );
}
