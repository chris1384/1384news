import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-links-body">
                <div className='footer-link-redirect'><GitHubIcon/></div>
                <YouTubeIcon className='footer-link-redirect'/>
                <FacebookIcon className='footer-link-redirect'/>
            </div>
            <p style={{margin: "0px"}}><a href="https://youtube.com" className="footer-auth-link">@Cristi T. Valentin</a> - 2024. All rights reserved.</p>
        </div>
    )
}

export default Footer;