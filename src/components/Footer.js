const year = new Date().getFullYear();

function Footer() {
    return (
        <footer id="contact-section" className="footer-banner">
            <div className="footer-content">
                <div className="contact-info">
                    <h2 id="contact-me-text">Contact Info</h2>
                    <p>Email: mandukhaialimaa@gmail.com</p>
                    <p>Phone: (507) 703-2395</p>
                </div>
                <div className="social-links">
                    <a href="https://github.com/mandukhai-alimaa" target="_blank" rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/github-mark-white.png`} alt="GitHub" className="social-logo" />
                    </a>
                    <a href="https://linkedin.com/in/mandy-alimaa" target="_blank" rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/ln-White-14.png`} alt="LinkedIn" className="social-logo" />
                    </a>
                </div>
                <div className="copyright">
                    <p>© {year} Mandukhai Alimaa. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;