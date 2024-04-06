import React from "react";
import Logo from "./logo.png"; // Import your logo
import Instagram from "./instagram_logo.png";
import facebook from "./facebook_logo.png";
import Twitter from "./twitter_icon.png";
function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="footer-inner" style={styles.inner}>
        <div className="column" style={styles.column}>
          <Link href="/">
            <img src={Logo} alt="Logo" style={{ height: "40px" }} />
          </Link>
          <br />
          {""}
          <br />
          {""}
          <h3>Contact Us</h3>
          <p>Email: info@GreenGrocer.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: Techno Main Salt Lake, Kolkata</p>
        </div>
        <div className="column" style={styles.column}>
          <h3>Quick Links</h3>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link href="/" style={{ color: "#a9ff00", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#" style={{ color: "#a9ff00", textDecoration: "none" }}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" style={{ color: "#a9ff00", textDecoration: "none" }}>
                Products
              </Link>
            </li>
            <li>
              <Link href="#" style={{ color: "#a9ff00", textDecoration: "none" }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="column" style={styles.column}>
          <h3>Follow Us</h3>
          <p>Stay updated on our latest news and offers</p>
          <div style={styles.socialIcons}>
            <Link href="#">
              <i className="fab fa-facebook-f"></i>
              <img
                src={facebook}
                alt="Logo"
                style={{ height: "30px", marginRight: "30px" }}
              />
            </Link>
            <Link href="#">
              <i className="fab fa-twitter"></i>
              <img
                src={Twitter}
                alt="Logo"
                style={{ height: "30px", marginRight: "30px" }}
              />
            </Link>
            <Link href="#">
              <i className="fab fa-instagram"></i>
              <img
                src={Instagram}
                alt="Logo"
                style={{ height: "30px", marginRight: "30px" }}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom" style={styles.bottom}>
        <p>&copy; 2024 GreenGrocer. All rights reserved.</p>
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
    alignItems: "left",
    justifyContent: "left",
  },
  bottom: {
    borderTop: "1px solid #fff",
    paddingTop: "20px",
    textAlign: "center",
  },
};

export default Footer;
