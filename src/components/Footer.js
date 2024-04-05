import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="footer-inner" style={styles.inner}>
        <div className="column" style={styles.column}>
          <h3>Contact Us</h3>
          <p>Email: info@freshfarmproduce.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Farm Rd, Farmville, USA</p>
        </div>
        <div className="column" style={styles.column}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="column" style={styles.column}>
          <h3>Follow Us</h3>
          <p>Stay updated on our latest news and offers</p>
          <div style={styles.socialIcons}>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom" style={styles.bottom}>
        <p>&copy; 2024 Fresh Farm Produce. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#2c2c2ced",
    color: "#fff",
    padding: "20px 0",
    height: "300px", // Fixed height for the footer
    overflowY: "auto", // Enable vertical scrolling
  },
  inner: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between", // To evenly space out the columns
  },
  column: {
    flex: "0 1 calc(33.33% - 40px)", // Three columns with 40px spacing between
    margin: "0 20px",
    marginBottom: "20px",
  },
  socialIcons: {
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    borderTop: "1px solid #fff",
    paddingTop: "20px",
    textAlign: "center",
  },
};

export default Footer;
