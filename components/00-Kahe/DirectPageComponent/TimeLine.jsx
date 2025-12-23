import React from 'react'

const TimeLine = () => {
  return (
      <div className="timeline-container">
          <h1 className="timeline-header">The Journey of Our Vision</h1>
          <p className="timeline-quote">
            "To enable, enlighten and enrich them to serve and lead the
            society."
          </p>

          <div className="timeline">
            {visionSteps.map((item, index) => (
              <div key={item.step} className="timeline-item">
                <div className="timeline-dot">
                  {/* Using a font-awesome style icon name, though you'd need the library imported */}
                  <i className={`fa fa-${item.icon}`} aria-hidden="true"></i>
                </div>
                <div className="timeline-content">
                  <span className="timeline-step">STEP {item.step}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-detail">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default TimeLine