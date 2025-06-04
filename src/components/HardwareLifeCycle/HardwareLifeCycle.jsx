import React, { useEffect } from "react";
import styles from "./HardwareLifeCycle.module.css";

const HardwareLifeCycle = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(styles.visible, entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll(`.${styles.animationItem}`);
    items.forEach((item) => observer.observe(item));
    return () => items.forEach((item) => observer.unobserve(item));
  }, []);

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

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.pageHeading}>HARDWARE LIFE CYCLE MANAGEMENT</h1>
      <div className={styles.mainWrapper}>
        <div className={styles.container} style={{ left: "-150px", top: "50px" }}>
          <img
            src="/images/HardwareLifeCycle/main.png"
            alt="Center Illustration"
            className={styles.centerImage}
          />
          <div className={styles.floatingCards}>
            <div className={styles.card + " " + styles.card1 }>
              <img src="/images/HardwareLifeCycle/h1.png" alt="card-0" />
            </div>
            <div className={styles.card + " " + styles.card2}>
              <img src="/images/HardwareLifeCycle/h12.png" alt="card-1" className={styles.img100} />
            </div>
            <div className={styles.card + " " + styles.card3}>
              <img src="/images/HardwareLifeCycle/h3.webp" alt="card-2" />
            </div>
            <div className={styles.card + " " + styles.card4}>
              <img src="/images/HardwareLifeCycle/h5.png" alt="card-3" />
            </div>
            <div className={styles.card + " " + styles.card5}>
              <img src="/images/HardwareLifeCycle/h4.png" alt="card-4" className={styles.img60x60} />
            </div>
            <div className={styles.card + " " + styles.card6}>
              <img src="/images/HardwareLifeCycle/h6.png" alt="card-5" className={styles.img80x100} />
            </div>
            <div className={styles.card + " " + styles.card7}>
              <img src="/images/HardwareLifeCycle/h13.png" alt="card-6" className={styles.img90x90} />
            </div>
            <div className={styles.card + " " + styles.card8}>
              <img src="/images/HardwareLifeCycle/h2.png" alt="card-7" className={styles.img130x90} />
            </div>
            <div className={styles.card + " " + styles.card9}>
              <img src="/images/HardwareLifeCycle/h10.png" alt="card-8" className={styles.img60x80} />
            </div>
            <div className={styles.card + " " + styles.card10}>
              <img src="/images/HardwareLifeCycle/h8.png" alt="card-9" className={styles.img130} />
            </div>
            <div className={styles.card + " " + styles.card11}>
              <img src="/images/HardwareLifeCycle/h15.png" alt="card-10" />
            </div>
            <div className={styles.card + " " + styles.card12}>
              <img src="/images/HardwareLifeCycle/h11.png" alt="card-11" />
            </div>
            <div className={styles.card + " " + styles.card13}>
              <img src="/images/HardwareLifeCycle/h7.png" alt="card-12" className={styles.img60x100} />
            </div>
          </div>
        </div>

        <div className={styles.dottedSeparator}></div>

        <div className={styles.animationList}>
          {issues.map((item, i) => (
            <div key={i} className={styles.animationItem}>
              <strong>{item.title}:</strong> {item.desc}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HardwareLifeCycle;
