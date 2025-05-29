import React from 'react';
import styles from './Footer.module.css';
import footerLogo from '../../assets/images/footerLogo.png'; // Adjust path as per your structure

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Logo & Description */}
        <div className={styles.footerSection}>
          <img
            src={footerLogo}
            alt="HN Techno Logo"
            className={styles.footerLogo}
            style={{ marginTop: '-15px' }}
          />
          <p className={styles.companyDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vitae asperiores unde eaque ut blanditiis nulla labore...
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ea officiis magni accusamus perspiciatis omnis placeat doloremque, 
            sit libero eveniet laboriosam ullam asperiores modi temporibus quis voluptatum, soluta esse assumenda!
          </p>
        </div>

        {/* Company Links */}
        <div className={`${styles.footerSection} ${styles.section2}`} style={{ marginLeft: '40px' }}>
          <h2>Company</h2>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Inquiry Now</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Cancellation Policies</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={`${styles.footerSection} ${styles.section3}`}>
          <h2>Contact Us</h2>
          <div className={styles.contactInfo}>
            <p><i className="fas fa-map-marker-alt"></i> Office No 219,220,2nd Floor, Fortune Business Hub, Nr. Shell Petrol Pump, Science City, Ahmedabad, Gujarat 380060</p>
            <p><i className="fas fa-phone"></i> +91 - 99090 22626</p>
            <p><i className="fas fa-envelope"></i> abc@gmail.com</p>
          </div>
          <div className={styles.socialLinks}>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Decorative Large Text */}
      <div className={styles.largeText}>NATRAJ INFOTECH PVT. LTD.</div>

      {/* Copyright */}
      <div className={styles.copyright}>
        © 2017 NATRAJ INFOTECH Pvt. Ltd. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
