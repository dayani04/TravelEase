import React from 'react';
import './index.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="https://static2.tripoto.com/media/filter/tst/img/2216603/UserPhoto/1646997946_company_logo.png" alt="Logo" />  
        </div>
        <div className="footer-social">  
          <div className="social-icons">
            <img src="https://th.bing.com/th/id/OIP.p1qhAUaiuMBYlZznfjfxOgHaHw?w=186&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Logo" /> <br /> <h6> +94-761823450 </h6> 
            <img src="https://th.bing.com/th/id/OIP.2_abjNWqXmhRA4a05pa3eQHaGS?w=234&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Logo" /> <br /> <h6> TravelEase</h6>
            <img src="https://th.bing.com/th/id/OIP.B2f-eAfkoOpjofxK1RC4XgAAAA?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Logo" />  <br /> <h6>TravelkEase Page</h6>   
          </div>
        </div>
        <div className="footer-links">
            <h5> Contact: 091 222 2222 <br />
            www.TravelEaseLanka.lk</h5>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Travel Agency.TravelEase</p>
      </div>
    </footer>
  );
};

export default Footer;


