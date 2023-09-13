import React from 'react';
import UTRGVlogo from '../styles/images/College-Logo-Horizontal.png';
import FBIcon from '../styles/images/facebook-icon.png';
import IGIcon from '../styles/images/instagram-icon.png';
import YTIcon from '../styles/images/youtube-icon.png';
import '../styles/footer.css';

const Footer = () => (
    <footer className="footer_EU">
        <div className="col left-section-footer">
            <div className="containerLogo">
                <a href="https://www.utrgv.edu/cecs/" target="_blank" rel="noopener noreferrer">
                    <img className="utrgv-foot-logo" src={UTRGVlogo} alt="University Logo" />
                </a>
            </div>
        </div>
        <div className="middle-section-footer text-center">
            <p className="m-0">Energy & U 2023</p>
        </div>
        <div className="col right-section-EU text-end">
            <div className="social-media-footer">
                <a href="https://www.facebook.com/utrgv.cecs/" target="_blank" rel="noopener noreferrer">
                    <img src={FBIcon} alt="Facebook Icon" style={{ width: '25px' }} />
                </a>
                <a href="https://www.instagram.com/utrgv_cecs/" target="_blank" rel="noopener noreferrer">
                    <img src={IGIcon} alt="Instagram Icon" style={{ width: '25px' }} />
                </a>
                <a href="https://www.youtube.com/@collegeofengineeringcomput5926/featured" target="_blank" rel="noopener noreferrer">
                    <img src={YTIcon} alt="YouTube Icon" style={{ width: '25px' }} />
                </a>
            </div>
        </div>
    </footer>
);


export default Footer;