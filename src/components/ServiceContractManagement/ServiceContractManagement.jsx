import React, { useEffect } from 'react';
import styles from './ServiceContractManagement.module.css';

// Import your images here - example paths
import mainImg from '../../assets/images/ServiceContractManagement/main.png';
import s1 from '../../assets/images/ServiceContractManagement/s1.png';
import s2 from '../../assets/images/ServiceContractManagement/s2.png';
import s3 from '../../assets/images/ServiceContractManagement/s3.png';
import s4 from '../../assets/images/ServiceContractManagement/s4.png';
import s5 from '../../assets/images/ServiceContractManagement/s5.png';
import s6 from '../../assets/images/ServiceContractManagement/s6.png';
import s7 from '../../assets/images/ServiceContractManagement/s7.png';
import s8 from '../../assets/images/ServiceContractManagement/s8.png';

const cardData = [
  { id: 1, imgSrc: s1, cardClass: styles.card1 },
  { id: 2, imgSrc: s2, cardClass: styles.card2, imgClass: styles['img-100'] },
  { id: 5, imgSrc: s3, cardClass: styles.card5, imgClass: styles['img-60x60'] },
  { id: 8, imgSrc: s4, cardClass: styles.card8, imgClass: styles['img-130x90'] },
  { id: 10, imgSrc: s5, cardClass: styles.card10, imgClass: styles['img-130'] },
  { id: 14, imgSrc: s6, cardClass: styles.card14 },
  { id: 15, imgSrc: s7, cardClass: styles.card15 },
  { id: 16, imgSrc: s8, cardClass: styles.card16, imgClass: styles['img-60x100'] },
];

const animationItems = [
  { title: "Missed Subscription Renewals", desc: "Businesses often miss subscription renewal deadlines, causing service interruptions." },
  { title: "Inefficient Subscription Updates", desc: "Difficulty in updating subscription details like extending end dates or modifying quantities." },
  { title: "Complex Product Management", desc: "Managing products with multiple components (e.g., desktops with peripherals) becomes cumbersome." },
  { title: "Lack of Transparency in Asset Management", desc: "Tracks user-assigned assets and scrapped items with detailed, exportable reports for better inventory control." },
  { title: "Limited Scalability for User Management", desc: "Adding and managing large numbers of users and their assets manually is unsustainable." },
  { title: "Untracked Server Room Inventory", desc: "No clear system to track items moved to the server room." },
  { title: "Forgotten or Manual Scrap Tracking", desc: "Businesses lose track of scrapped items or fail to document them properly." },
  { title: "Vendor Communication Bottlenecks", desc: "Manual processes for obtaining vendor quotations and comparing prices are time-consuming." },
  { title: "Vendor Deal Tracking Challenges", desc: "Lack of a streamlined system to track procurement deals and vendor communications." },
  { title: "Delayed Issue Resolution", desc: "Manual handling of customer issues and support tickets leads to delays and inefficiencies." },
  { title: "Ineffective Reporting", desc: "Generating meaningful reports manually is tedious and often lacks actionable insights." },
  { title: "Scattered Data Management", desc: "Managing subscriptions, product details, users, and assets across multiple tools is inefficient and error-prone." },
  { title: "Inefficient Compliance and Branding Documentation", desc: "Maintaining accurate company details and branding information is often overlooked." },
];

export default function ServiceContractManagement() {
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

    const items = document.querySelectorAll(`.${styles['animation-item']}`);
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className={styles['service-contract-management']}>
      <h1 className={styles['page-heading']}>SERVICE CONTRACT MANAGEMENT</h1>

      <div className={styles['main-wrapper']}>

        {/* Left Section */}
        <div className={`${styles.container} ${styles['offset-container']}`}>
          <img src={mainImg} alt="Center Illustration" className={styles['center-image']} />
          <div className={styles['floating-cards']}>
            {cardData.map(({ id, imgSrc, cardClass, imgClass }) => (
              <div key={id} className={`${styles.card} ${cardClass}`}>
                <img src={imgSrc} alt="" className={imgClass || ''} />
              </div>
            ))}
          </div>
        </div>

        {/* Dotted Vertical Line */}
        <div className={styles['dotted-separator']}></div>

        {/* Right Section */}
        <div className={styles['animation-list']}>
          {animationItems.map(({ title, desc }, index) => (
            <div key={index} className={styles['animation-item']}>
              <strong>{title}</strong> {desc}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
