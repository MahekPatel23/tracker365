import React from "react";
import styles from "./ServiceCards.module.css";

const services = [
  {
    img: "/images/ServiceCards/work-schedule-5317609-4510982.webp",
    title: "Missed Subscription Renewals",
    desc: "Sends automated email reminders to ensure timely renewals and uninterrupted services.",
  },
  {
    img: "/images/ServiceCards/sactterdata.png",
    title: "Scattered Data Management",
    desc: "Centralizes business-critical information for efficient access and management.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4336/4336785.png",
    title: "Inefficient Subscription Updates",
    desc: "Enables seamless updates with logs for better tracking and transparency.",
  },
  {
    img: "/images/ServiceCards/vendorcommunication.png",
    title: "Vendor Communication Bottlenecks",
    desc: "Automates deal generation and vendor communication for faster decisions.",
  },
  {
    img: "/images/ServiceCards/complexproduct.png",
    title: "Complex Product Management",
    desc: "Provides structured categorization and component tracking for products.",
  },
  {
    img: "/images/ServiceCards/Transparency.png",
    title: "Transparency in Asset Management",
    desc: "Keeps detailed records of assigned and scrapped assets with export options.",
  },
  {
    img: "/images/ServiceCards/delayissuesresolutionpng.png",
    title: "Delayed Issue Resolution",
    desc: "Automates support ticket handling and tracks resolution statuses.",
  },
  {
    img: "/images/ServiceCards/ineffective_reporting.png",
    title: "Ineffective Reporting",
    desc: "Generates customizable, exportable reports filtered by branch or product.",
  },
  {
    img: "/images/ServiceCards/VendorDealTracking.png",
    title: "Vendor Deal Tracking",
    desc: "Monitors quotations and deal flows to enhance procurement efficiency.",
  },
  {
    img: "/images/ServiceCards/usermanagement.png",
    title: "User Management Scalability",
    desc: "Supports bulk user import and user-specific asset tracking.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/2345/2345332.png",
    title: "Untracked Server Room Inventory",
    desc: "Tracks all items moved to the server room for better hardware management.",
  },
  {
    img: "/images/ServiceCards/scraptracking.png",
    title: "Forgotten Scrap Tracking",
    desc: "Maintains a dedicated tab for scrapped items, improving accountability.",
  },
];

const ServiceCards = () => {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.servicesSection}>
        <h2>Key Business Problems Solved</h2>
        <p className={styles.subheading}>
          Smart solutions for real-world operational challenges
        </p>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div className={styles.serviceCard} key={index}>
              <img
                src={service.img}
                alt={service.title}
                className={styles.cardIcon}
              />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceCards;
