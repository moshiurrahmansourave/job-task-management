import './Footer.css'
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>Job Task</a>

            <ul className='links'>
            <li><a href="#banner">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#services">Experiance</a></li>
            <li><a href="#work">Services</a></li>
            </ul>

            <div className='footer_socials'>
                <a href='https://www.facebook.com/moshiurshak.mosheur?mibextid=gik2fB' target='_blank' rel='noopener noreferrer'><FaFacebook/></a>
                <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target='_blank' rel='noopener noreferrer'><FaLinkedin/></a>
            </div>
               
            <div className='footer_copyright'>
                
                <div className='dividerr'></div>
                <small>&copy ; Developer Tutorial . All rights reserved. </small>
            </div>

        </footer>
    ); 
};

export default Footer;