import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo_blue.png";
import heroImage from "../../assets/images/main_front_page_img.png";

const Header = () => {
  const dotColors = [
    "#0077cc",
    "#005fa3",
    "#3399ff",
    "#66b3ff",
    "#99ccff",
    "#cce5ff",
    "#e6f2ff",
    "#4da6ff",
    "#1a8cff",
    "#0066cc",
    "#004080",
    "#00264d",
  ];

  return (
    <div>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Petpooja Payroll Logo" />
        </div>
      </header>

      {/* Hero Section */}
      <main className={styles.heroSection}>
        <h2>
          Streamlined Business Control - From
          <br />
          Assets to Support...
        </h2>
        <p>
          "A Comprehensive Business Management Solution for Streamlined
          Procurement, Asset Tracking, Subscription Management, and Support
          Ticket Resolution."
        </p>
        <a href="#" className={styles.ctaButton}>
          Take A Demo
        </a>
      </main>

      {/* Animated Card Section */}
      <div className={styles.container}>
        <div className={styles.ring}></div>
        <div className={styles.dots}>
          {dotColors.map((color, i) => (
            <div
              key={i}
              className={styles.dot}
              style={{ "--i": i, background: color }}
            ></div>
          ))}
        </div>

        <div className={styles.floatingCards}>
          <div className={`${styles.card} ${styles.card1}`}>
            <i className="fa-solid fa-calendar-check" />
            SOFTWARE SUBSCRIPTION
            <br />
            MANAGEMENT
          </div>
          <div className={`${styles.card} ${styles.card2}`}>
            <i className="fa-solid fa-boxes-packing" />
            HARDWARE LIFE CYCLE
            <br />
            MANAGEMENT
          </div>
          <div className={`${styles.card} ${styles.card3}`}>
            <i className="fa-solid fa-handshake" />
            PROCUREMENT
            <br />
            MANAGEMENT
          </div>
          <div className={`${styles.card} ${styles.card4}`}>
            <i className="fa-solid fa-chart-bar" />
            SERVICE CONTRACT
            <br />
            MANAGEMENT
          </div>
          <div className={`${styles.card} ${styles.card5}`}>
            <i className="fa-solid fa-ticket" />
            ADVANCE SUPPORT
            <br />
            TICKETST
            <br />
            MANAGEMENT
          </div>
          <div className={`${styles.card} ${styles.card6}`}>
            <i className="fa-solid fa-file-lines" />
            REPORT
            <br />
            MANAGEMENT
          </div>
        </div>

        <img
          src={heroImage}
          alt="Girl Cartoon"
          className={styles.centerImage}
        />
      </div>
    </div>
  );
};

export default Header;
