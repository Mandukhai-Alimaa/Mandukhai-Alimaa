import Card from './Card.js';
import Course from './Course.js';
import Recommendation from './Recomendation.js';
import coursesData from './data/coursesData.js';
import projectsData from './data/projectsData.js';
import recommendationData from './data/recommendationData.js';


function MainPage() {
    return (
        <div class="main-content">
            <div class="text-above-round-img">
                Mandukhai Alimaa
            </div>
            <div >
                <img src={`${process.env.PUBLIC_URL}/myPhoto.png`} alt="Mandukhai Alimaa's professional portrait" class="round-image"/>
            </div>
            <div class="text-below-round-img">
                Full-Stack Developer and Master's student focused on impactful software solutions.
            </div>
            <div id="resume-section" className="resume-banner">
                <h1 class="resume-text-in-banner">Resume</h1>
                <a 
                    href={`${process.env.PUBLIC_URL}/MandukhaiAlimaaResume.pdf`} 
                    download 
                    className="resume-button"
                >
                    Download
                </a>
            </div>
            <div id="project-section" class="projects-section">
                <h1 class="section-header">Projects</h1>
                <div class="projects-card">
                    {projectsData.map((projectItem) => {
                        return (
                            <Card
                                imageSrc={projectItem.imageSrc}
                                overlayText={projectItem.overlayText}
                                paragraph={projectItem.paragraph}
                            />
                        );
                    })}
                </div>
            </div>
            <div id="course-section" className="course-work-section">
                <h1 className="section-header">Course Work</h1>
                <div className="courses-container">
                    {coursesData.map((courseItem) => {
                        return (
                            <Course
                                courseName={courseItem.courseName}
                                description={courseItem.courseDescription}
                                logoSrc={courseItem.logoSrc}
                            />
                        );
                    })}
                </div>
            </div>
            <div id="recommendation-section" className="recommendation-section">
                <h1 className="section-header">Feedback from Previous Employers</h1>
                <div className="recommendation-container">
                    <Recommendation recommendations={recommendationData} />
                </div>                
            </div>

        </div>
    );
}

export default MainPage;
