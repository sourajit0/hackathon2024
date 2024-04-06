// const mysql = require("mysql");
const fs = require("fs");
const mysql = require("mysql2");

// Create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwerty69",
  database: "farm",
});

// Read the image file
const image = fs.readFileSync(
  "/Users/sourajitsamanta/Documents/GitHub/hackathon2024/server/image.png"
);

// Insert the image into the database
connection.query(
  "INSERT INTO farmers (username, password, image, location) VALUES (?, ?, ?, ?)",
  ["user", "pass", image, "loca"],
  (error, results, fields) => {
    if (error) throw error;
    console.log("Image inserted successfully");
  }
);

// Close the connection
connection.end();
