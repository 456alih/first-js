import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const About: React.FC = () => {
  return (
    <section id="about" style={styles.section}>
      <h1>About Us</h1>
      <p>Learn more about our journey and values.</p>

      {/* Section for images */}
      <div style={styles.mediaContainer}>
        <img
          src="https://via.placeholder.com/300"
          alt="Our Journey"
          style={styles.image}
        />
        <img
          src="https://via.placeholder.com/300"
          alt="Our Values"
          style={styles.image}
        />
      </div>

      {/* Section for videos */}
      <div style={styles.mediaContainer}>
        <video controls style={styles.video}>
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <video controls style={styles.video}>
          <source
            src="https://www.w3schools.com/html/movie.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

// CSS Styles
const styles = {
  section: {
    padding: "100px",
    backgroundColor: "#fff",
    textAlign: "center" as const,
  },
  mediaContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap" as const,
    margin: "20px 0",
  },
  image: {
    width: "800px",
    height: "200px",
    objectFit: "cover" as const,
    margin: "10px",
  },
  video: {
    width: "200px",
    height: "200px",
    margin: "10px",
    backgroundColor: "#000",
  
  },
};

// Add responsive media queries
const responsiveStyles = `
  @media (max-width: 768px) {
    img, video {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 500px) {
    section {
      padding: 0px 10px;
    }
  }
`;

// Add styles dynamically
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = responsiveStyles;
document.head.appendChild(styleSheet);

export default About;
