import React, { useEffect } from "react";
import styles from "./SupportTicket.module.css";

import mainImg from "../../assets/images/SupportTicket/main.png";
import s1 from "../../assets/images/SupportTicket/s1.png";
import s2 from "../../assets/images/SupportTicket/s2.png";
import s14 from "../../assets/images/SupportTicket/s14.png";
import s4 from "../../assets/images/SupportTicket/s4.png";
import s8 from "../../assets/images/SupportTicket/s8.png";
import s6 from "../../assets/images/SupportTicket/s6.png";
import s5 from "../../assets/images/SupportTicket/s5.png";
import s10 from "../../assets/images/SupportTicket/s10.png";
import s11 from "../../assets/images/SupportTicket/s11.png";
import s13 from "../../assets/images/SupportTicket/s13.png";
import s12 from "../../assets/images/SupportTicket/s12.png";
import s3 from "../../assets/images/SupportTicket/s3.png";

const cardData = [
  { id: 1, imgSrc: s1, imgClass: styles.a, cardClass: styles.card1 },
  { id: 2, imgSrc: s2, imgClass: styles.b, cardClass: styles.card2 },
  { id: 3, imgSrc: s14, imgClass: styles.c, cardClass: styles.card3 },
  { id: 4, imgSrc: s4, imgClass: styles.d, cardClass: styles.card4 },
  { id: 5, imgSrc: s8, imgClass: styles.e, cardClass: styles.card5 },
  { id: 6, imgSrc: s6, imgClass: styles.f, cardClass: styles.card6 },
  { id: 8, imgSrc: s5, imgClass: styles.g, cardClass: styles.card8 },
  { id: 14, imgSrc: s10, imgClass: styles.h, cardClass: styles.card14 },
  { id: 16, imgSrc: s11, imgClass: styles.i, cardClass: styles.card16 },
  { id: 15, imgSrc: s13, imgClass: styles.j, cardClass: styles.card15 },
  { id: 17, imgSrc: s12, imgClass: styles.k, cardClass: styles.card17 },
  { id: 18, imgSrc: s3, imgClass: styles.l, cardClass: styles.card18 },
];

const animationItems = [
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

export default function SupportTicketManagement() {
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
    <div className={styles["support-ticket-management"]}>
      <h1 className={styles["page-heading"]}>SUPPORT TICKET MANAGENEMT</h1>

      <div className={styles["main-wrapper"]}>
        {/* Left Section */}
        <div className={`${styles.container} ${styles["position-adjust"]}`}>
          <img
            src={mainImg}
            alt="Center Illustration"
            className={styles["center-image"]}
          />
          <div className={styles["floating-cards"]}>
            {cardData.map(({ id, imgSrc, imgClass, cardClass }) => (
              <div key={id} className={`${styles.card} ${cardClass}`}>
                <img src={imgSrc} alt="" className={imgClass} />
              </div>
            ))}
          </div>
        </div>

        {/* Dotted Vertical Line */}
        <div className={styles["dotted-separator"]}></div>

        {/* Right Section */}
        <div className={styles["animation-list"]}>
          {animationItems.map(({ title, desc }, index) => (
            <div key={index} className={styles["animation-item"]}>
              <strong>{title}</strong> {desc}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
