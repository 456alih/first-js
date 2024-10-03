import React from "react";

const Contact = () => {
  return (
    <section id="contact" style={sectionStyle}>
      <h2>Contact Us</h2>
      <p>Email: info@mywebsite.com</p>
      <p>Phone: +123 456 789</p>
    </section>
  );
};

const sectionStyle = {
  padding: "50px",
  textAlign: "center",
  backgroundColor: "#f4f4f4",
};

export default Contact;
