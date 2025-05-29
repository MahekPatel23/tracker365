import React, { useEffect } from "react";
import styles from "./HardwareLifeCycle.module.css";
import mainImg from "../../assets/images/main.png";
import h1 from "../../assets/images/h1.png";
import h2 from "../../assets/images/h2.png";
import h3 from "../../assets/images/h3.webp";
import h4 from "../../assets/images/h4.png";
import h5 from "../../assets/images/h5.png";
import h6 from "../../assets/images/h6.png";
import h7 from "../../assets/images/h7.png";
import h8 from "../../assets/images/h8.png";
import h10 from "../../assets/images/h10.png";
import h11 from "../../assets/images/h11.png";
import h12 from "../../assets/images/h12.png";
import h13 from "../../assets/images/h13.png";
import h15 from "../../assets/images/h15.png";

const imageMap = {
  card1: h1,
  card2: h12,
  card3: h3,
  card4: h5,
  card5: h4,
  card6: h6,
  card7: h13,
  card8: h2,
  card9: h10,
  card10: h8,
  card14: h15,
  card15: h11,
  card16: h7,
};

const hardwareIssues = [
  {
    title: "Missed Subscription Renewals",
    description:
      "Businesses often miss subscription renewal deadlines, causing service interruptions.",
  },
  {
    title: "Inefficient Subscription Updates",
    description:
      "Difficulty in updating subscription details like extending end dates or modifying quantities.",
  },
  {
    title: "Complex Product Management",
    description:
      "Managing products with multiple components (e.g., desktops with peripherals) becomes cumbersome.",
  },
  {
    title: "Lack of Transparency in Asset Management",
    description:
      "Tracks user-assigned assets and scrapped items with detailed, exportable reports for better inventory control.",
  },
  {
    title: "Limited Scalability for User Management",
    description:
      "Adding and managing large numbers of users and their assets manually is unsustainable.",
  },
  {
    title: "Untracked Server Room Inventory",
    description: "No clear system to track items moved to the server room.",
  },
  {
    title: "Forgotten or Manual Scrap Tracking",
    description:
      "Businesses lose track of scrapped items or fail to document them properly.",
  },
  {
    title: "Vendor Communication Bottlenecks",
    description:
      "Manual processes for obtaining vendor quotations and comparing prices are time-consuming.",
  },
  {
    title: "Vendor Deal Tracking Challenges",
    description:
      "Lack of a streamlined system to track procurement deals and vendor communications.",
  },
  {
    title: "Delayed Issue Resolution",
    description:
      "Manual handling of customer issues and support tickets leads to delays and inefficiencies.",
  },
  {
    title: "Ineffective Reporting",
    description:
      "Generating meaningful reports manually is tedious and often lacks actionable insights.",
  },
  {
    title: "Scattered Data Management",
    description:
      "Managing subscriptions, product details, users, and assets across multiple tools is inefficient and error-prone.",
  },
  {
    title: "Inefficient Compliance and Branding Documentation",
    description:
      "Maintaining accurate company details and branding information is often overlooked.",
  },
];

const HardwareLifeCycle = () => {
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
    return () => items.forEach((item) => observer.unobserve(item));
  }, []);

  return (
    <div className={styles.containerWrapper}>
      <h1 className={styles.pageHeading}>HARDWARE LIFE CYCLE MANAGEMENT</h1>
      <div className={styles.mainWrapper}>
        {/* Left Visual Section */}
        <div className={`${styles.container} ${styles.offsetContainer}`}>
          <img src={mainImg} alt="Center" className={styles.centerImage} />
          <div className={styles.floatingCards}>
            {Object.entries(imageMap).map(([className, src]) => (
              <div
                key={className}
                className={`${styles.card} ${styles[className]}`}
              >
                <img src={src} alt={className} />
              </div>
            ))}
          </div>
        </div>

        {/* Dotted Line */}
        <div className={styles.dottedSeparator}></div>

        {/* Right Issue Section */}
        <div className={styles.animationList}>
          {hardwareIssues.map((issue, index) => (
            <div key={index} className={styles.animationItem}>
              <strong>{issue.title}</strong>
              {issue.description}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HardwareLifeCycle;
