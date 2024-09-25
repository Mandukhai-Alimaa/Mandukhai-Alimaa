import React, { useState } from 'react';

const RecommendationCarousel = ({ recommendations }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true); // New state for fade effect

    const goToNext = () => {
        setFade(false); // Start fade-out
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
            setFade(true); // Trigger fade-in after change
        }, 300); // Time for fade-out to complete
    };

    const goToPrevious = () => {
        setFade(false); // Start fade-out
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + recommendations.length) % recommendations.length);
            setFade(true); // Trigger fade-in after change
        }, 300); // Time for fade-out to complete
    };

    return (
        <div className="recommendation-carousel">
            <button className="carousel-button left" onClick={goToPrevious}>
                &#8249; {/* Left arrow */}
            </button>

            <div className={`recommendation-content ${fade ? 'fade-in' : 'fade-out'}`}>
                <img 
                    src={recommendations[currentIndex].src} 
                    alt={recommendations[currentIndex].alt} 
                    className="recommendation-img" 
                />
            </div>

            <button className="carousel-button right" onClick={goToNext}>
                &#8250; {/* Right arrow */}
            </button>
        </div>
    );
};

export default RecommendationCarousel;
