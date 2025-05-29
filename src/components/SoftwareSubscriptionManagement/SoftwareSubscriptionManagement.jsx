import React, { useEffect } from "react";
import styles from "./SoftwareSubscriptionManagement.module.css";

// Import images from ../../assets/images
import centerImg from "../../assets/images/upar_vali_image_me_m-removebg-preview.png";

import m1 from "../../assets/images/m1.png";
import m2 from "../../assets/images/m2.png";
import m3 from "../../assets/images/m3.png";
import m3_2 from "../../assets/images/m3 (2).png";
import m4 from "../../assets/images/m4.png";
import m5 from "../../assets/images/m5.png";
import m6 from "../../assets/images/m6.png";
import m7 from "../../assets/images/m7.png";
import m9 from "../../assets/images/m9.png";
import m10 from "../../assets/images/m10.png";

import icon4412993 from "../../assets/images/4412993.png";
import icon3908372 from "../../assets/images/3908372.png";
import createIcon from "../../assets/images/Create an icon simil.png";

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

    const items = document.querySelectorAll(`.${styles["animation-item"]}`);
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className={styles["software-subscription-management"]}>
      <h1 className={styles["page-heading"]}>SOFTWARE SUBSCRIPTION MANAGEMENT</h1>
      <div className={styles["main-wrapper"]}>
        {/* Left Section */}
        <div className={styles.container} style={{ left: "-150px", top: "50px" }}>
          <img src={centerImg} alt="Center Illustration" className={styles["center-image"]} />
          <div className={styles["floating-cards"]}>
            <div className={`${styles.card} ${styles.card1}`}>
              <img src={m1} alt="" />
            </div>
            <div className={`${styles.card} ${styles.card2}`}>
              <img src={m2} alt="" />
            </div>
            <div className={`${styles.card} ${styles.card3}`}>
              <img src={m3} alt="" />
            </div>
            <div className={`${styles.card} ${styles.card4}`}>
              <img src={m4} alt="" />
            </div>
            <div className={`${styles.card} ${styles.card5}`}>
              <img src={m5} alt="" className={styles.a} />
            </div>
            <div className={`${styles.card} ${styles.card6}`}>
              <img src={m6} alt="" className={styles.b} />
            </div>
            <div className={`${styles.card} ${styles.card7}`}>
              <img src={m7} alt="" className={styles.c} />
            </div>
            <div className={`${styles.card} ${styles.card8}`}>
              <img src={m3_2} alt="" />
            </div>
            <div className={`${styles.card} ${styles.card9}`}>
              <img src={m9} alt="" className={styles.d} />
            </div>
            <div className={`${styles.card} ${styles.card10}`}>
              <img src={m10} alt="" />
            </div>
            <div className={`${styles.card} ${styles.card14}`}>
              <img src={icon4412993} alt="" />
            </div>
            <div className={`${styles.card} ${styles.card15}`}>
              <img src={icon3908372} alt="" />
            </div>
            <div className={`${styles.card} ${styles.card16}`}>
              <img src={createIcon} alt="" className={styles.e} />
            </div>
          </div>
        </div>

        {/* Dotted Vertical Line */}
        <div className={styles["dotted-separator"]}></div>

        {/* Right Section */}
        <div className={styles["animation-list"]}>
          <div className={styles["animation-item"]}>
            <strong>Missed Subscription Renewals</strong> Businesses often miss subscription renewal
            deadlines, causing service interruptions.
          </div>
          <div className={styles["animation-item"]}>
            <strong>Inefficient Subscription Updates</strong> Difficulty in updating subscription
            details like extending end dates or modifying quantities.
          </div>
          <div className={styles["animation-item"]}>
            <strong>Complex Product Management</strong> Managing products with multiple components (e.g.,
            desktops with peripherals) becomes cumbersome.
          </div>
          <div className={styles["animation-item"]}>
            <strong>Lack of Transparency in Asset Management</strong> Tracks user-assigned assets and scrapped
            items with detailed, exportable reports for better inventory control.
          </div>
          <div className={styles["animation-item"]}>
            <strong>Limited Scalability for User Management</strong> Adding and managing large numbers of
            users and their assets manually is unsustainable.
          </div>
          <div className={styles["animation-item"]}>
            <strong>Untracked Server Room Inventory</strong> No clear system to track items moved to the
            server room.
          </div>
          <div className={styles["animation-item"]}>
            <strong>Forgotten or Manual Scrap Tracking</strong> Businesses lose track of scrapped items or
            fail to document them properly.
          </div>
          <div className={styles["animation-item"]}>
            <strong>Vendor Communication Bottlenecks</strong> Manual processes for obtaining vendor
            quotations and comparing prices are time-consuming.
          </div>
          <div className={styles["animation-item"]}>
            <strong>Vendor Deal Tracking Challenges</strong> Lack of a streamlined system to track procurement
            deals and vendor communications.
          </div>
          <div className={styles["animation-item"]}>
            <strong>Delayed Issue Resolution</strong> Manual handling of customer issues and support tickets
            leads to delays and inefficiencies.
          </div>
          <div className={styles["animation-item"]}>
            <strong>Ineffective Reporting</strong> Generating meaningful reports manually is tedious and
            often lacks actionable insights.
          </div>
          <div className={styles["animation-item"]}>
            <strong>Scattered Data Management</strong> Managing subscriptions, product details, users, and
            assets across multiple tools is inefficient and error-prone.
          </div>
          <div className={styles["animation-item"]}>
            <strong>Inefficient Compliance and Branding Documentation</strong> Maintaining accurate company
            details and branding information is often overlooked.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSubscriptionManagement;
