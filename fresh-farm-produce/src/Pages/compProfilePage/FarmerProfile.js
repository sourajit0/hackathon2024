import React from "react";

const FarmerInfo = ({ name, location, image, editable, onNameChange, onLocationChange, onImageChange, onSubmit, onToggleEdit }) => {
  return (
    <div className="profile">
      <img src={image} alt="Profile Picture" />
      <div>
        {editable ? (
          <form onSubmit={onSubmit}>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={onNameChange}
            />
            <label>Location:</label>
            <input
              type="text"
              value={location}
              onChange={onLocationChange}
            />
            <label>Upload Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={onImageChange}
            />
            <button type="submit">Save</button>
          </form>
        ) : (
          <>
            <h2>{name}</h2>
            <p>Location: {location}</p>
            <p>Email: farmer@example.com</p>
            <button onClick={onToggleEdit}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
}

export default FarmerInfo;
