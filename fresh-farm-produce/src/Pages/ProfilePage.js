import React, { useState } from "react";

function FarmerProfile() {
  // State variables to hold farmer information
  const [name, setName] = useState("John Doe");
  const [location, setLocation] = useState("New York, USA");
  const [image, setImage] = useState("profile-pic.jpg");
  const [editable, setEditable] = useState(false);

  // Function to toggle edit mode
  const toggleEdit = () => {
    setEditable(!editable);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically submit the updated data to a backend or update state in a more sophisticated application
    setEditable(false);
  };

  return (
    <div className="container">
      <div className="profile">
        <img src={image} alt="Profile Picture" />
        <div>
          {editable ? (
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Location:</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <label>Image URL:</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <button type="submit">Save</button>
            </form>
          ) : (
            <>
              <h2>{name}</h2>
              <p>Location: {location}</p>
              <p>Email: farmer@example.com</p>
              <button onClick={toggleEdit}>Edit</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FarmerProfile;
