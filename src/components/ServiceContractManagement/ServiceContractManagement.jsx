import React, { useEffect } from "react";
import styles from "./ServiceContractManagement.module.css";

const ServiceContractManagement = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(styles.visible, entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(`.${styles.animationItem}`).forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageHeading}>SERVICE CONTRACT MANAGEMENT</h1>
      <div className={styles.mainWrapper}>
        {/* Left Section */}
        <div
          className={styles.container}
          style={{ left: "-150px", top: "50px" }}
        >
          <img
            src="/images/ServiceContractManagement/main.png"
            alt="Center Illustration"
            className={styles.centerImage}
          />
          <div className={styles.floatingCards}>
            <div className={`${styles.card} ${styles.card1}`}>
              <img src="/images/ServiceContractManagement/s1.png" alt="" />
            </div>
            <div className={`${styles.card} ${styles.card2}`}>
              <img
                src="/images/ServiceContractManagement/s2.png"
                alt=""
                className={styles.img100}
              />
            </div>
            <div className={`${styles.card} ${styles.card5}`}>
              <img
                src="/images/ServiceContractManagement/s3.png"
                alt=""
                className={styles.img60x60}
              />
            </div>
            <div className={`${styles.card} ${styles.card8}`}>
              <img
                src="/images/ServiceContractManagement/s4.png"
                alt=""
                className={styles.img130x90}
              />
            </div>
            <div className={`${styles.card} ${styles.card10}`}>
              <img
                src="/images/ServiceContractManagement/s5.png"
                alt=""
                className={styles.img130}
              />
            </div>
            <div className={`${styles.card} ${styles.card14}`}>
              <img src="/images/ServiceContractManagement/s6.png" alt="" />
            </div>
            <div className={`${styles.card} ${styles.card15}`}>
              <img src="/images/ServiceContractManagement/s7.png" alt="" />
            </div>
            <div className={`${styles.card} ${styles.card16}`}>
              <img
                src="/images/ServiceContractManagement/s8.png"
                alt=""
                className={styles.img60x100}
              />
            </div>
          </div>
        </div>

        {/* Dotted Line */}
        <div className={styles.dottedSeparator}></div>

        {/* Right Section */}
        <div className={styles.animationList}>
          {[
            [
              "Missed Subscription Renewals",
              "Businesses often miss subscription renewal deadlines, causing service interruptions.",
            ],
            [
              "Inefficient Subscription Updates",
              "Difficulty in updating subscription details like extending end dates or modifying quantities.",
            ],
            [
              "Complex Product Management",
              "Managing products with multiple components (e.g., desktops with peripherals) becomes cumbersome.",
            ],
            [
              "Lack of Transparency in Asset Management",
              "Tracks user-assigned assets and scrapped items with detailed, exportable reports for better inventory control.",
            ],
            [
              "Limited Scalability for User Management",
              "Adding and managing large numbers of users and their assets manually is unsustainable.",
            ],
            [
              "Untracked Server Room Inventory",
              "No clear system to track items moved to the server room.",
            ],
            [
              "Forgotten or Manual Scrap Tracking",
              "Businesses lose track of scrapped items or fail to document them properly.",
            ],
            [
              "Vendor Communication Bottlenecks",
              "Manual processes for obtaining vendor quotations and comparing prices are time-consuming.",
            ],
            [
              "Vendor Deal Tracking Challenges",
              "Lack of a streamlined system to track procurement deals and vendor communications.",
            ],
            [
              "Delayed Issue Resolution",
              "Manual handling of customer issues and support tickets leads to delays and inefficiencies.",
            ],
            [
              "Ineffective Reporting",
              "Generating meaningful reports manually is tedious and often lacks actionable insights.",
            ],
            [
              "Scattered Data Management",
              "Managing subscriptions, product details, users, and assets across multiple tools is inefficient and error-prone.",
            ],
            [
              "Inefficient Compliance and Branding Documentation",
              "Maintaining accurate company details and branding information is often overlooked.",
            ],
          ].map(([title, desc], index) => (
            <div key={index} className={styles.animationItem}>
              <strong>{title}</strong>
              {desc}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceContractManagement;
