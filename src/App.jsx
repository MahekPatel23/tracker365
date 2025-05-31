import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SoftwareSubscriptionManagement from "./components/SoftwareSubscriptionManagement/SoftwareSubscriptionManagement";
import ProcurementManagement from "./components/ProcurementManagement/ProcurementManagement";
import HardwareLifeCycle from "./components/HardwareLifeCycle/HardwareLifeCycle";
import SupportTicketManagement from "./components/SupportTicket/SupportTicket";
import ServiceContractManagement from "./components/ServiceContractManagement/ServiceContractManagement";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import InquiryForm from "./components/InquiryForm/InquiryForm";
import Footer from "./components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <SoftwareSubscriptionManagement />
      <ProcurementManagement />
      <HardwareLifeCycle />
      <SupportTicketManagement />
      <ServiceContractManagement />
      <ServicesSection />
      <InquiryForm />
      <Footer />
    </>
  );
};

export default Home;
