const express = require("express");
const mysql = require("mysql2/promise");
const multer = require("multer");
const fs = require("fs");
const cors = require("cors"); // Import the cors package

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.use(express.json());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "qwerty69",
  database: "farm",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const upload = multer({ dest: "uploads/" });

// Signup route
app.post("/signup", upload.single("image"), async (req, res) => {
  const { username, password, location } = req.body;
  const imageFile = req.file;

  try {
    if (!imageFile) {
      return res
        .status(400)
        .json({ success: false, message: "Image is required" });
    }

    const image = fs.readFileSync(imageFile.path);

    const connection = await pool.getConnection();
    await connection.execute(
      "INSERT INTO farmers (username, password, image, location) VALUES (?, ?, ?, ?)",
      [username, password, image, location]
    );
    connection.release();

    res.json({ success: true, message: "Signup successful" });
  } catch (error) {
    console.error("Error during signup:", error);
    res
      .status(500)
      .json({ success: false, message: "An error occurred during signup" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute(
      "SELECT id FROM farmers WHERE username = ? AND password = ?",
      [username, password]
    );
    connection.release();

    if (rows.length > 0) {
      const userId = rows[0].id;
      res.json({ success: true, message: "Login successful", userId });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res
      .status(500)
      .json({ success: false, message: "An error occurred during login" });
  }
});
// Get current user profile
app.get("/profile/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute(
      "SELECT * FROM farmers WHERE id = ?",
      [userId]
    );
    connection.release();

    if (rows.length > 0) {
      const userProfile = rows[0];
      res.json({ success: true, profile: userProfile });
    } else {
      res
        .status(404)
        .json({ success: false, message: "User profile not found" });
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch user profile" });
  }
});
// Add product route
app.post("/add-product", upload.single("productImage"), async (req, res) => {
  const { productName, productPrice, productQuantity, userId } = req.body;
  const productImage = req.file;

  try {
    if (!productImage) {
      return res
        .status(400)
        .json({ success: false, message: "Product image is required" });
    }

    const image = fs.readFileSync(productImage.path);

    const connection = await pool.getConnection();
    await connection.execute(
      "INSERT INTO Products (product_name, product_price, quantity, image_data, farmer_id) VALUES (?, ?, ?, ?, ?)",
      [productName, productPrice, productQuantity, image, userId]
    );
    connection.release();

    res.json({ success: true, message: "Product uploaded successfully" });
  } catch (error) {
    console.error("Error uploading product:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while uploading product",
    });
  }
});

// index.js

// Assuming you have required all necessary modules and set up your app

// Fetch products by user ID
// GET /products endpoint to fetch products by user ID
app.get("/products", async (req, res) => {
  try {
    const userId = req.query.userId; // Extract user ID from query parameters

    // If userId is provided, fetch products for the specified user
    if (userId) {
      // Fetch products for the specified user from the database
      const connection = await pool.getConnection();
      const [rows] = await connection.execute(
        "SELECT * FROM products WHERE farmer_id = ?",
        [userId]
      );
      connection.release();

      // Send products for the specified user as JSON response
      res.json({ success: true, products: rows });
    } else {
      // If userId is not provided, fetch all products
      // Fetch all products from the database
      const connection = await pool.getConnection();
      const [rows] = await connection.execute("SELECT * FROM products");
      connection.release();

      // Send all products as JSON response
      res.json({ success: true, products: rows });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch products" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
