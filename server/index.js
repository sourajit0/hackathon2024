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

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
