import React, { useState } from "react";
import FarmerInfo from "./compProfilePage/FarmerProfile";
import "./StyleProfile.css/StyleProfile.css";

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
    <div className="container3">
      <h1 className="heading3">Farmer Profile</h1>
      <div className="profile3">
        <FarmerInfo
          name={name}
          location={location}
          image={image}
          editable={editable}
          onNameChange={(e) => setName(e.target.value)}
          onLocationChange={(e) => setLocation(e.target.value)}
          onImageChange={(e) => setImage(e.target.value)}
          onSubmit={handleSubmit}
          onToggleEdit={toggleEdit}
        />
      </div>
    </div>
  );
}

export default FarmerProfile;
