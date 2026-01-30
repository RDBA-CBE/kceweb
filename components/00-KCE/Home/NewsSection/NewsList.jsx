import React from 'react';

const NewsList = ({ events }) => {
  return (
    <div className="news-list-sidebar">
      {/* This container hides the overflow */}
      <div className="ticker-wrapper">
        {/* This container moves upward */}
        <div className="ticker-track">
          {events.map((event, index) => (
            <div key={index} className="news-list-item">
              <div className="news-list-date-box">
                <span className="month">{event.month}</span>
                <span className="day">{event.day}</span>
              </div>
              <p className="news-list-item-title">{event.title}</p>
            </div>
          ))}
          {/* Duplicate the items for a seamless loop effect if the list is short */}
          {events.map((event, index) => (
            <div key={`dup-${index}`} className="news-list-item" aria-hidden="true">
              <div className="news-list-date-box">
                <span className="month">{event.month}</span>
                <span className="day">{event.day}</span>
              </div>
              <p className="news-list-item-title">{event.title}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* <div className="sidebar-footer">
        <button className="btn-primary btn-more">MORE NEWS</button>
      </div> */}
      
      <div className="decor-dots"><img src='/images/kce/logo-card/bule-card2.png' /></div>
    </div>
  );
};

export default NewsList;