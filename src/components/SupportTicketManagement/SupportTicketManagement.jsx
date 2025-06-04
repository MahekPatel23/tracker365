import React, { useEffect } from "react";
import styles from "./SupportTicketManagement.module.css";

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

const SupportTicketManagement = () => {
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
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>SUPPORT TICKET MANAGEMENT</h1>
      <div className={styles.mainWrapper}>
        <div className={styles.container} style={{left: "-150px", top: "50px"}}>
          <img
            className={styles.centerImage}
            src="/images/SupportTicketManagement/main.png"
            alt="Center Illustration"
          />
          <div className={styles.floatingCards}>
            <div className={`${styles.card} ${styles.card1}`}>
              <img src="/images/SupportTicketManagement/s1.png" alt="s1" />
            </div>
            <div className={`${styles.card} ${styles.card2}`}>
              <img src="/images/SupportTicketManagement/s2.png" alt="s2" />
            </div>
            <div className={`${styles.card} ${styles.card3}`}>
              <img src="/images/SupportTicketManagement/s12.png" alt="s3" />
            </div>
            <div className={`${styles.card} ${styles.card4}`}>
              <img src="/images/SupportTicketManagement/s4.png" alt="s4" />
            </div>
            <div className={`${styles.card} ${styles.card5}`}>
              <img src="/images/SupportTicketManagement/s8.png" alt="s5" />
            </div>
            <div className={`${styles.card} ${styles.card6}`}>
              <img src="/images/SupportTicketManagement/s6.png" alt="s6" />
            </div>
            <div className={`${styles.card} ${styles.card7}`}>
              <img src="/images/SupportTicketManagement/s15.png" alt="s7" />
            </div>
            <div className={`${styles.card} ${styles.card8}`}>
              <img src="/images/SupportTicketManagement/s10.png" alt="s8" />
            </div>
            <div className={`${styles.card} ${styles.card9}`}>
              <img src="/images/SupportTicketManagement/s11.png" alt="s9" />
            </div>
            <div className={`${styles.card} ${styles.card10}`}>
              <img src="/images/SupportTicketManagement/s13.png" alt="s10" />
            </div>
            <div className={`${styles.card} ${styles.card14}`}>
              <img src="/images/SupportTicketManagement/s5.png" alt="s14" />
            </div>
            <div className={`${styles.card} ${styles.card15}`}>
              <img src="/images/SupportTicketManagement/s3.png" alt="s15" />
            </div>
            <div className={`${styles.card} ${styles.card16}`}>
              <img src="/images/SupportTicketManagement/s14.png" alt="s16" />
            </div>
          </div>
        </div>

        <div className={styles.dottedSeparator}></div>
        <div className={styles.animationList}>
          {issues.map((issue, index) => (
            <div className={styles.animationItem} key={index}>
              <strong>{issue.title}</strong>
              {issue.desc}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportTicketManagement;
