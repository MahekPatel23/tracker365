import React from "react";
import styles from "./Header.module.css";

const dotsData = [
  { i: 0, background: "#0077cc" },
  { i: 1, background: "#005fa3" },
  { i: 2, background: "#3399ff" },
  { i: 3, background: "#66b3ff" },
  { i: 4, background: "#99ccff" },
  { i: 5, background: "#cce5ff" },
  { i: 6, background: "#e6f2ff" },
  { i: 7, background: "#4da6ff" },
  { i: 8, background: "#1a8cff" },
  { i: 9, background: "#0066cc" },
  { i: 10, background: "#004080" },
  { i: 11, background: "#00264d" },
];

const cardsData = [
  { className: "card1", icon: "fa-solid fa-calendar-check", text: "SOFTWARE SUBSCRIPTION\nMANAGEMENT" },
  { className: "card2", icon: "fa-solid fa-boxes-packing", text: "HARDWARE LIFE CYCLE\nMANAGEMENT" },
  { className: "card3", icon: "fa-solid fa-handshake", text: "PROCUREMENT\nMANAGEMENT" },
  { className: "card4", icon: "fa-solid fa-chart-bar", text: "SERVICE CONTRACT\nMANAGEMENT" },
  { className: "card5", icon: "fa-solid fa-ticket", text: "ADVANCE SUPPORT\nTICKETS\nMANAGEMENT" },
  { className: "card6", icon: "fa-solid fa-file-lines", text: "REPORT\nMANAGEMENT" },
];

const Header = () => {
  return (
    <div className={styles.body}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/images/Header/logo_blue.png" alt="Petpooja Payroll Logo" />
        </div>
      </header>

      {/* Hero Section */}
      <main className={styles.heroSection}>
        <h2>
          Streamlined Business Control – From
          <br />
          Assets to Support...
        </h2>
        <p>
          "A Comprehensive Business Management Solution for Streamlined Procurement,
          Asset Tracking, Subscription Management, and Support Ticket Resolution."
        </p>
        <a href="#" className={styles.ctaButton}>
          Take A Demo
        </a>
      </main>

      {/* Animated Card Section */}
      <div className={styles.container} style={{ left: "10px", top: "50px" }}>
        <div className={styles.ring}></div>
        <div className={styles.dots}>
          {dotsData.map(({ i, background }) => (
            <div
              key={i}
              className={styles.dot}
              style={{ "--i": i, background }}
            />
          ))}
        </div>

        <div className="floating-cards">
          {cardsData.map(({ className, icon, text }, idx) => (
            <div
              key={idx}
              className={`${styles.card} ${styles[className]}`}
            >
              <i className={icon}></i>
              {text.split("\n").map((line, idx2) => (
                <React.Fragment key={idx2}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>

        <img
          src="/images/Header/main_front_page_img.png"
          alt="Girl Cartoon"
          className={styles.centerImage}
        />
      </div>
    </div>
  );
};

export default Header;
