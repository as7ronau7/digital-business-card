import emailIcon from './assets/Mail.png'
import linkedinIcon from './assets/linkedin.png'
import twitterIcon from './assets/TwitterIcon.png'
import facebookIcon from './assets/FacebookIcon.png'
import instagramIcon from './assets/InstagramIcon.png'
import gitHubIcon from './assets/GitHubIcon.png'


function BusinessCard() {
  return (
    <div className="business-card">
      <div className="profile-photo">
      </div>
      <div className="info">
        <h1 className="name">Scott Nguyen</h1>
        <p className="title">Frontend Developer</p>
        <p className="website">astronautcodes</p>
        <div className="contact-btn">
          <button className="email"><img src={emailIcon} alt="email icon" />Email</button>
          <button className="linkedin"><img src={linkedinIcon} alt="linkedin icon" />LinkedIn</button>
        </div>
        <div className="about">
          <h3>About</h3>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and always thinking of entrepreneurial ideas.</p>
          <h3>Interest</h3>
          <p>Travel. Food. Family</p>
        </div>
      </div>
      <div className="socials">
          <a href="#"><img src={twitterIcon} alt="twitter" /></a>
          <a href="#"><img src={facebookIcon} alt="facebook" /></a>
          <a href="#"><img src={instagramIcon} alt="twitter" /></a>
          <a href="#"><img src={gitHubIcon} alt="github" /></a>
      </div>
    </div>
  );
}

export default BusinessCard