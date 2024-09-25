
const Course = ({courseName, description, logoSrc }) => {
    return (
        <div className="course-container">
            <h1 className="course-name">{courseName}</h1>
            <div className="line-container">
                <div className="line" />
                <img src={logoSrc} alt={`${courseName} logo`} className="course-logo" />
            </div>
            <p className="course-description">{description}</p>
        </div>
    );
};

export default Course;
