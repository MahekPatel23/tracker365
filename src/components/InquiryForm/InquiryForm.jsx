import React, { useState } from "react";
import styles from "./InquiryForm.module.css";
import emailjs from "@emailjs/browser";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const phoneValid = /^\d{10}$/.test(formData.phone);
    if (!phoneValid) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("here");
    if (validateForm()) {
      console.log("ok");
      emailjs.send(
        "service_8t1u1ai",
        "template_qsn7uz4",
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          user_company: formData.company,
          message: formData.message,
          subject: "New Inquiry Alert",
          reciever_email: "sales@natrajinfo.in",
        },
        "UocUVkO5K6o2biJ7F"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      alert("Form submitted successfully!");
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.formWrapper}>
        <div className={styles.formSection}>
          <header className={styles.header}>Inquiry</header>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter Your Number"
                  pattern="[0-9]{10}"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div style={{ marginTop: "30px" }}>
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter your Company Name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div style={{ marginTop: "30px" }}>
              <label htmlFor="message">Any Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Any Message..."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className={styles.submitContainer}>
              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
