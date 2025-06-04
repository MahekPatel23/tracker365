import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          {/* Logo & Description */}
          <div className={styles.footerSection}>
            <img
              src="/images/Footer/a5Q3b000000EMIOEA4_a5S3b0000016OsyEAE-removebg-preview.png"
              alt="HN Techno Logo"
              className={styles.footerLogo}
              style={{ marginTop: "-15px" }}
            />
            <p className={styles.companyDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              vitae asperiores unde eaque ut blanditiis nulla labore... Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Provident ea
              officiis magni accusamus perspiciatis omnis placeat doloremque,
              sit libero eveniet laboriosam ullam asperiores modi temporibus
              quis voluptatum, soluta esse assumenda!
            </p>
          </div>

          {/* Company Links */}
          <div
            className={`${styles.footerSection} ${styles.section2}`}
            style={{ marginLeft: "40px" }}
          >
            <h2>Company</h2>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Inquiry Now</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Cancellation Policies</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`${styles.footerSection} ${styles.section3}`}>
            <h2>Contact Us</h2>
            <div className={styles.contactInfo}>
              <p>
                <i class="fas fa-map-marker-alt"></i>Office No 220,221,2nd
                Floor, Fortune Business Hub, Nr. Shell Petrol Pump, Science
                City, Ahmedabad, Gujarat 380060
              </p>
              <p>
                <i class="fas fa-phone"></i>+91 - 99090 22626
              </p>
              <p>
                <i class="fas fa-envelope"></i>sales@natrajinfo.in
              </p>
            </div>
            <div className={styles.socialLinks}>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Large Text */}
        <div className={styles.largeText}>
          <span className={styles.desktopText}>NATRAJ INFOTECH PVT. LTD.</span>
          <span className={styles.mobileText}>NATRAJ INFOTECH PVT. LTD.</span>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          © 2017 NATRAJ INFOTECH Pvt. Ltd. All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
