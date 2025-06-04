import React, { useEffect } from "react";
import styles from "./ProcurementManagement.module.css";

const issues = [
  {
    title: "Missed Subscription Renewals",
    desc: "Businesses often miss subscription renewal deadlines, causing service interruptions.",
  },
  {
    title: "Inefficient Subscription Updates",
    desc: "Difficulty in updating subscription details like extending end dates or modifying quantities.",
  },
  {
    title: "Complex Product Management",
    desc: "Managing products with multiple components (e.g., desktops with peripherals) becomes cumbersome.",
  },
  {
    title: "Lack of Transparency in Asset Management",
    desc: "Tracks user-assigned assets and scrapped items with detailed, exportable reports for better inventory control.",
  },
  {
    title: "Limited Scalability for User Management",
    desc: "Adding and managing large numbers of users and their assets manually is unsustainable.",
  },
  {
    title: "Untracked Server Room Inventory",
    desc: "No clear system to track items moved to the server room.",
  },
  {
    title: "Forgotten or Manual Scrap Tracking",
    desc: "Businesses lose track of scrapped items or fail to document them properly.",
  },
  {
    title: "Vendor Communication Bottlenecks",
    desc: "Manual processes for obtaining vendor quotations and comparing prices are time-consuming.",
  },
  {
    title: "Vendor Deal Tracking Challenges",
    desc: "Lack of a streamlined system to track procurement deals and vendor communications.",
  },
  {
    title: "Delayed Issue Resolution",
    desc: "Manual handling of customer issues and support tickets leads to delays and inefficiencies.",
  },
  {
    title: "Ineffective Reporting",
    desc: "Generating meaningful reports manually is tedious and often lacks actionable insights.",
  },
  {
    title: "Scattered Data Management",
    desc: "Managing subscriptions, product details, users, and assets across multiple tools is inefficient and error-prone.",
  },
  {
    title: "Inefficient Compliance and Branding Documentation",
    desc: "Maintaining accurate company details and branding information is often overlooked.",
  },
];

const ProcurementManagement = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(`.${styles.animationItem}`).forEach((item) => {
      observer.observe(item);
    });
  }, []);

  return (
    <div className={styles.page}>
      <h1 className={styles.pageHeading}>PROCUREMENT MANAGEMENT</h1>
      <div className={styles.mainWrapper}>
        <div
          className={styles.container}
          style={{ left: "-150px", top: "50px" }}
        >
          <img
            src="/images/ProcurementManagement/main.png"
            alt="Center Illustration"
            className={styles.centerImage}
          />
          <div
            className={styles.floatingCards}
            style={{ display: "flex", flexDirection: "row", gap: "16px" }}
          >
            <div className={`${styles.card} ${styles.card1}`}>
              <img src="/images/ProcurementManagement/p1.png" alt="" />
            </div>
            <div className={`${styles.card} ${styles.card2}`}>
              <img
                src="/images/ProcurementManagement/p2.png"
                alt=""
                style={{ height: "50px", width: "50px" }}
              />
            </div>
            <div className={`${styles.card} ${styles.card3}`}>
              <img src="/images/ProcurementManagement/p3.png" alt="" />
            </div>
            <div className={`${styles.card} ${styles.card4}`}>
              <img src="/images/ProcurementManagement/p4.png" alt="" />
            </div>
            <div className={`${styles.card} ${styles.card5}`}>
              <img
                src="/images/ProcurementManagement/p5.png"
                alt=""
                style={{ height: "50px", width: "50px" }}
              />
            </div>
            <div className={`${styles.card} ${styles.card6}`}>
              <img
                src="/images/ProcurementManagement/p6.png"
                alt=""
                style={{ height: "60px", width: "60px" }}
              />
            </div>
            <div className={`${styles.card} ${styles.card8}`}>
              <img
                src="/images/ProcurementManagement/p8.png"
                alt=""
                style={{ height: "100px", width: "70px" }}
              />
            </div>
            <div className={`${styles.card} ${styles.card14}`}>
              <img
                src="/images/ProcurementManagement/p11.png"
                alt=""
                style={{ height: "80px", width: "80px" }}
              />
            </div>
            <div className={`${styles.card} ${styles.card16}`}>
              <img
                src="/images/ProcurementManagement/p7.png"
                alt=""
                style={{ height: "60px", width: "100px" }}
              />
            </div>
            <div className={`${styles.card} ${styles.card15}`}>
              <img
                src="/images/ProcurementManagement/vendor-management.png"
                alt=""
              />
            </div>
            <div className={`${styles.card} ${styles.card17}`}>
              <img
                src="/images/ProcurementManagement/p12.png"
                alt=""
                style={{ height: "50px", width: "50px" }}
              />
            </div>
          </div>
        </div>
        <div className={styles.dottedSeparator}></div>

        {/* Right */}
        <div className={styles.animationList}>
          {issues.map((issue, i) => (
            <div key={i} className={styles.animationItem}>
              <strong>{issue.title}</strong>
              {issue.desc}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcurementManagement;
