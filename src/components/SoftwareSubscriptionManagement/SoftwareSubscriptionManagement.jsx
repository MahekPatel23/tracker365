import React, { useEffect } from "react";
import styles from "./SoftwareSubscriptionManagement.module.css";

const problems = [
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

const SoftwareSubscriptionManagement = () => {
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

    const items = document.querySelectorAll(`.${styles.animationItem}`);
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.pageHeading}>SOFTWARE SUBSCRIPTION MANAGEMENT</h1>

      <div className={styles.mainWrapper}>
        <div
          className={styles.container}
          style={{ left: "-150px", top: "50px" }}
        >
          <img
            src="/images/SoftwareSubscriptionManagement/upar_vali_image_me_m-removebg-preview.png"
            alt="Center Illustration"
            className={styles.centerImage}
          />

          <div className={styles.floatingCards}>
            <div className={`${styles.card} ${styles.card1}`}>
              <img src="/images/SoftwareSubscriptionManagement/m1.png" alt="" />
            </div>
            <div className={`${styles.card} ${styles.card2}`}>
              <img src="/images/SoftwareSubscriptionManagement/m2.png" alt="" />
            </div>
            <div className={`${styles.card} ${styles.card3}`}>
              <img src="/images/SoftwareSubscriptionManagement/m3.png" alt="" />
            </div>
            <div className={`${styles.card} ${styles.card4}`}>
              <img src="/images/SoftwareSubscriptionManagement/m4.png" alt="" />
            </div>
            <div className={`${styles.card} ${styles.card5} ${styles.a}`}>
              <img src="/images/SoftwareSubscriptionManagement/m5.png" alt="" />
            </div>
            <div className={`${styles.card} ${styles.card6} ${styles.b}`}>
              <img src="/images/SoftwareSubscriptionManagement/m6.png" alt="" />
            </div>
            <div className={`${styles.card} ${styles.card7} ${styles.c}`}>
              <img src="/images/SoftwareSubscriptionManagement/m7.png" alt="" />
            </div>
            <div className={`${styles.card} ${styles.card8}`}>
              <img src="/images/SoftwareSubscriptionManagement/m3 (2).png" alt="" />
            </div>
            <div className={`${styles.card} ${styles.card9} ${styles.d}`}>
              <img src="/images/SoftwareSubscriptionManagement/m9.png" alt="" />
            </div>
            <div className={`${styles.card} ${styles.card10}`}>
              <img src="/images/SoftwareSubscriptionManagement/m10.png" alt="" />
            </div>
            <div className={`${styles.card} ${styles.card14}`}>
              <img src="/images/SoftwareSubscriptionManagement/4412993.png" alt="" />
            </div>
            <div className={`${styles.card} ${styles.card15}`}>
              <img src="/images/SoftwareSubscriptionManagement/3908372.png" alt="" />
            </div>
            <div className={`${styles.card} ${styles.card16} ${styles.e}`}>
              <img src="/images/SoftwareSubscriptionManagement/Create an icon simil.png" alt="" />
            </div>
          </div>
        </div>

        <div className={styles.dottedSeparator}></div>

        <div className={styles.animationList}>
          {problems.map((problem, i) => {
            return (
              <div key={i} className={styles.animationItem}>
                <strong>{problem.title}</strong> {problem.desc}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SoftwareSubscriptionManagement;
