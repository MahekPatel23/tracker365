import React, { useState } from "react";
import styles from "./InquiryForm.module.css";

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
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    if (!validateForm()) {
      e.preventDefault();
      return;
    }
    alert("Form submitted successfully!");
    // Allow default form submission to Formspree
  };

  return (
    <div className={styles.inquiryForm}>
      <div className={styles.formWrapper}>
        <div className={styles.formSection}>
          <header className={styles.header}>Inquiry</header>

          <form action="#" onSubmit={handleSubmit}>
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
                placeholder="Any Message"
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
