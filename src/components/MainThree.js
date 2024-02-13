import React from 'react';

const MainThree = () => {
  const testimonialsContainerStyle = {
    position: 'relative',
    marginTop: '50px',
    width: '800px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gridArea: 'testimonials',
  };

  const testimonialStyle = {
    backgroundColor: '#f8f8f8',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '200px',
  };

  const getRandomText = () => {
    const texts = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ];

    return texts[Math.floor(Math.random() * texts.length)];
  };

  return (
    <div style={testimonialsContainerStyle}>
      {/* 1st Testimonial */}
      <div style={testimonialStyle}>
        <div className="rating">5 Stars</div>
        <div className="name">John Doe</div>
        <div className="review-text">{getRandomText()}</div>
      </div>

      {/* 2nd Testimonial */}
      <div style={testimonialStyle}>
        <div className="rating">4 Stars</div>
        <div className="name">Jane Doe</div>
        <div className="review-text">{getRandomText()}</div>
      </div>

      {/* 3rd Testimonial */}
      <div style={testimonialStyle}>
        <div className="rating">5 Stars</div>
        <div className="name">Bob Smith</div>
        <div className="review-text">{getRandomText()}</div>
      </div>
    </div>
  );
};

export default MainThree;
