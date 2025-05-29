import React, { useEffect } from 'react';
import styles from './ProcurementManagement.module.css';

import mainImg from '../../assets/images/main.png';
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.png';
import p3 from '../../assets/images/p3.png';
import p4 from '../../assets/images/p4.png';
import p5 from '../../assets/images/p5.png';
import p6 from '../../assets/images/p6.png';
import p7 from '../../assets/images/p7.png';
import p8 from '../../assets/images/p8.png';
import p11 from '../../assets/images/p11.png';
import vendorManagement from '../../assets/images/vendor-management.png';
import p12 from '../../assets/images/p12.png';

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

    const items = document.querySelectorAll(`.${styles.animationItem}`);
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className={styles.procurementManagement}>
      <h1 className={styles.pageHeading}>Procurement Management</h1>
      <div className={styles.mainWrapper}>
        {/* Left Section */}
        <div className={`${styles.container} ${styles.positionAdjust}`}>
          <img src={mainImg} alt="Center Illustration" className={styles.centerImage} />
          <div className={styles.floatingCards}>
            <div className={`${styles.card} ${styles.card1}`}>
              <img src={p1} alt="" />
            </div>
            <div className={`${styles.card} ${styles.card2}`}>
              <img src={p2} alt="" className={styles.size50} />
            </div>
            <div className={`${styles.card} ${styles.card3}`}>
              <img src={p3} alt="" />
            </div>
            <div className={`${styles.card} ${styles.card4}`}>
              <img src={p4} alt="" />
            </div>
            <div className={`${styles.card} ${styles.card5}`}>
              <img src={p5} alt="" className={styles.size50} />
            </div>
            <div className={`${styles.card} ${styles.card6}`}>
              <img src={p6} alt="" className={styles.size60} />
            </div>
            <div className={`${styles.card} ${styles.card8}`}>
              <img src={p8} alt="" className={styles.size10070} />
            </div>
            <div className={`${styles.card} ${styles.card14}`}>
              <img src={p11} alt="" className={styles.size80} />
            </div>
            <div className={`${styles.card} ${styles.card16}`}>
              <img src={p7} alt="" className={styles.size60100} />
            </div>
            <div className={`${styles.card} ${styles.card15}`}>
              <img src={vendorManagement} alt="" />
            </div>
            <div className={`${styles.card} ${styles.card17}`}>
              <img src={p12} alt="" className={styles.size50} />
            </div>
          </div>
        </div>

        {/* Dotted vertical line */}
        <div className={styles.dottedSeparator}></div>

        {/* Right Section */}
        <div className={styles.animationList}>
          <div className={styles.animationItem}>
            <strong>Missed Subscription Renewals</strong> Businesses often miss subscription renewal deadlines, causing service interruptions.
          </div>
          <div className={styles.animationItem}>
            <strong>Inefficient Subscription Updates</strong> Difficulty in updating subscription details like extending end dates or modifying quantities.
          </div>
          <div className={styles.animationItem}>
            <strong>Complex Product Management</strong> Managing products with multiple components (e.g., desktops with peripherals) becomes cumbersome.
          </div>
          <div className={styles.animationItem}>
            <strong>Lack of Transparency in Asset Management</strong> Tracks user-assigned assets and scrapped items with detailed, exportable reports for better inventory control.
          </div>
          <div className={styles.animationItem}>
            <strong>Limited Scalability for User Management</strong> Adding and managing large numbers of users and their assets manually is unsustainable.
          </div>
          <div className={styles.animationItem}>
            <strong>Untracked Server Room Inventory</strong> No clear system to track items moved to the server room.
          </div>
          <div className={styles.animationItem}>
            <strong>Forgotten or Manual Scrap Tracking</strong> Businesses lose track of scrapped items or fail to document them properly.
          </div>
          <div className={styles.animationItem}>
            <strong>Vendor Communication Bottlenecks</strong> Manual processes for obtaining vendor quotations and comparing prices are time-consuming.
          </div>
          <div className={styles.animationItem}>
            <strong>Payment Tracking Challenges</strong> Difficult to track pending, partial, and completed payments with due dates.
          </div>
          <div className={styles.animationItem}>
            <strong>Complex Document Generation</strong> Generating invoices, receipts, purchase orders, and related documents requires multiple manual steps.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcurementManagement;
