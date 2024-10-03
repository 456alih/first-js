import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li>
          <a href="#home" style={styles.navLink}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" style={styles.navLink}>
            About
          </a>
        </li>
        <li>
          <a href="#services" style={styles.navLink}>
            Services
          </a>
        </li>
        <li>
          <a href="#contact" style={styles.navLink}>
            Contact
          </a>
        </li>
        <li>
          <a href="#loginSignup" style={styles.navLink}>
            Sign Up / Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

// CSS Styles
const styles = {
  navbar: {
    padding: "9px",
    backgroundColor: "skyblue",
    color: "white",
    fontSize: "16px",
    marginTop: "5px",
    marginLeft: "5px",
    marginRight: "5px",
  },
  navList: {
    display: "flex",
    justifyContent: "space-around",
    listStyle: "none",
    padding: 0,
    margin: "10px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
  },
};

// Media queries for responsiveness
const responsiveStyles = `
  /* Tablet screen and below (medium screens) */
  @media (max-width: 768px) {
    nav ul {
      flex-direction: column;
      align-items: centre;
      padding: 10px; /* Remove padding */
      margin: 0;  
      margin-left: 20px; /* Remove margin */
    }

    nav li {
      margin-bottom: 15px; /* Increase margin for better spacing */
      width: 100%; /* Ensure full width for each list item */
      text-align: right; /* Center text */
    }

    nav {
      padding: 10px; /* Add padding to nav for better spacing */
    }
  }

  /* Mobile screen (small screens) */
  @media (max-width: 500px) {
    nav {
      font-size: 14px; /* Adjust font size for small screens */
      padding: 8px; /* Increase padding */
    }

    nav ul {
      flex-direction: column; /* Keep menu items stacked vertically */
    }

    nav li {
      margin-bottom: 12px; /* Adjust margin for smaller screens */
      width: 100%; /* Full width for each item */
    }
  }
`;

// Inject responsive styles dynamically
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = responsiveStyles;
document.head.appendChild(styleSheet);

export default Navbar;
