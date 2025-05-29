import React from "react";
import styles from "./ServicesSection.module.css";

// Import images (adjust paths as per your project structure)
import workSchedule from "../../assets/images/ServicesSection/work-schedule-5317609-4510982.webp";
import scatterData from "../../assets/images/ServicesSection/sactterdata.png";
import inefficientSubscription from "../../assets/images/ServicesSection/4336785.png"; // For remote URLs, use as src directly
import vendorCommunication from "../../assets/images/ServicesSection/vendorcommunication.png";
import complexProduct from "../../assets/images/ServicesSection/complexproduct.png";
import transparency from "../../assets/images/ServicesSection/Transparency.png";
import delayIssues from "../../assets/images/ServicesSection/delayissuesresolutionpng.png";
import ineffectiveReporting from "../../assets/images/ServicesSection/ineffective_reporting.png";
import vendorDealTracking from "../../assets/images/ServicesSection/VendorDealTracking.png";
import userManagement from "../../assets/images/ServicesSection/usermanagement.png";
import untrackedServer from "../../assets/images/ServicesSection/2345332.png"; // Remote URL, use as is
import scrapTracking from "../../assets/images/ServicesSection/scraptracking.png";

const servicesData = [
  {
    id: 1,
    title: "Missed Subscription Renewals",
    description:
      "Sends automated email reminders to ensure timely renewals and uninterrupted services.",
    icon: workSchedule,
    alt: "Missed Subscription Renewals",
  },
  {
    id: 2,
    title: "Scattered Data Management",
    description:
      "Centralizes business-critical information for efficient access and management.",
    icon: scatterData,
    alt: "Scattered Data Management",
  },
  {
    id: 3,
    title: "Inefficient Subscription Updates",
    description:
      "Enables seamless updates with logs for better tracking and transparency.",
    icon: inefficientSubscription,
    alt: "Inefficient Subscription Updates",
    isRemote: true,
  },
  {
    id: 4,
    title: "Vendor Communication Bottlenecks",
    description:
      "Automates deal generation and vendor communication for faster decisions.",
    icon: vendorCommunication,
    alt: "Vendor Communication Bottlenecks",
  },
  {
    id: 5,
    title: "Complex Product Management",
    description:
      "Provides structured categorization and component tracking for products.",
    icon: complexProduct,
    alt: "Complex Product Management",
  },
  {
    id: 6,
    title: "Transparency in Asset Management",
    description:
      "Keeps detailed records of assigned and scrapped assets with export options.",
    icon: transparency,
    alt: "Transparency in Asset Management",
  },
  {
    id: 7,
    title: "Delayed Issue Resolution",
    description:
      "Automates support ticket handling and tracks resolution statuses.",
    icon: delayIssues,
    alt: "Delayed Issue Resolution",
  },
  {
    id: 8,
    title: "Ineffective Reporting",
    description:
      "Generates customizable, exportable reports filtered by branch or product.",
    icon: ineffectiveReporting,
    alt: "Ineffective Reporting",
  },
  {
    id: 9,
    title: "Vendor Deal Tracking",
    description:
      "Monitors quotations and deal flows to enhance procurement efficiency.",
    icon: vendorDealTracking,
    alt: "Vendor Deal Tracking",
  },
  {
    id: 10,
    title: "User Management Scalability",
    description: "Supports bulk user import and user-specific asset tracking.",
    icon: userManagement,
    alt: "User Management Scalability",
  },
  {
    id: 11,
    title: "Untracked Server Room Inventory",
    description:
      "Tracks all items moved to the server room for better hardware management.",
    icon: untrackedServer,
    alt: "Untracked Server Room Inventory",
    isRemote: true,
  },
  {
    id: 12,
    title: "Forgotten Scrap Tracking",
    description:
      "Maintains a dedicated tab for scrapped items, improving accountability.",
    icon: scrapTracking,
    alt: "Forgotten Scrap Tracking",
  },
];

export default function ServicesSection() {
  return (
    <div className={styles.servicesSection}>
      <h2>Key Business Problems Solved</h2>
      <p className={styles.subheading}>
        Smart solutions for real-world operational challenges
      </p>

      <div className={styles.servicesGrid}>
        {servicesData.map(({ id, title, description, icon, alt, isRemote }) => (
          <div key={id} className={styles.serviceCard}>
            {isRemote ? (
              <img src={icon} alt={alt} className={styles.cardIcon} />
            ) : (
              <img src={icon} alt={alt} className={styles.cardIcon} />
            )}
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
