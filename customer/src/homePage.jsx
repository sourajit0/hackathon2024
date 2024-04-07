import React, { useState } from 'react';
import NavBar from "./components/nav2";
import Footer from "./components/footer2";
import "./homePage.css";

const Dropdown = () => {
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);
  // State to store selected location
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle location selection
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    toggleDropdown(); // Close dropdown after selection
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Select Location
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <div className="dropdown-menu">
          {["Mumbai", "Kolkata", "Chennai", "Delhi", "Pune", "Bangalore", "Hyderabad", "Noida", "Gurgaon"].map((location, index) => (
            <div key={index} className="dropdown-item" onClick={() => handleLocationSelect(location)}>
              {location}
            </div>
          ))}
        </div>
      )}
      {/* Display selected location */}
      {selectedLocation && <p style={{ color: "#fff" }}>Selected Location: {selectedLocation}</p>}

    </div>
  );
};

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className='SearchBarContainer'>
    <div className="search-bar" >
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button onClick={() => alert(`Search for: ${searchQuery}`)}>Search</button>
    </div>
    </div>
  );
};

function HomePage() {
  const handleViewProducts = () => {
    // Navigate to the view products page
    // You can use any method for navigation here
    // For example, window.location.href or window.location.replace
    // For demonstration, I'll just alert that the button is clicked
    alert("View Products button clicked");
  };

  return (
    <div>
      <NavBar />
      {/* Header */}
      <header style={{ 
        textAlign: "center", 
        padding: "20px", 
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "80%", // Adjust header width as needed
        margin: "10px auto", // Center the header horizontally
        border: "2px solid #fff", // Add thin white border
        borderRadius: "8px", // Add border radius for rounded corners
      }}>
        <h1 style={{ 
          color: "#82d757", // Green color for "Fresh From Farm" text
          fontSize: "50px", // Increase font size of "Fresh From Farm" text
          marginBottom: "0px", // Add margin below "Fresh From Farm" text
        }}>
          Fresh From Farm
        </h1>
        <h2 style={{ 
          color: "#fff", // White color for "At Your Doorstep" text
          fontSize: "40px", // Increase font size of "At Your Doorstep" text
        }}>
          At Your Doorstep
        </h2>
      </header>
      {/* Render the Dropdown component */}
      <Dropdown />
      {/* Render the SearchBar component */}
      <SearchBar />
      {/* Button to view products */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={handleViewProducts} style={{ 
            marginBottom: "200px",
            padding: "10px 20px", 
            fontSize: "20px", 
            backgroundColor: "#82d757", 
            color: "#fff", 
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer" 
        }}>View Products</button>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
