

const Card = ({ imageSrc, overlayText, paragraph }) => {
    
    return (
        <div className="card">
            <div className="image-container">
                <img src={imageSrc} alt="Card visual" className="card-image" />
            </div>
            <div className="project-title">{overlayText}</div>
            <p className="card-paragraph">{paragraph}</p>
        </div>
    );
};

export default Card;
