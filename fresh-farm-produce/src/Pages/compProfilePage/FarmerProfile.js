import React from "react";
import profileIcon from "./profileIcon.png";

const FarmerInfo = ({
  name,
  location,
  image,
  editable,
  onNameChange,
  onLocationChange,
  onImageChange,
  onSubmit,
  onToggleEdit,
}) => {
  return (
    <div className="profile">
      <img src={image} style={{ height: "100px" }} />
      <div>
        {editable ? (
          <form onSubmit={onSubmit}>
            <label style={{ color: "white", textAlign: "left" }}>Name:</label>
            <input type="text" value={name} onChange={onNameChange} />
            <label style={{ color: "white", textAlign: "left" }}>
              Location:
            </label>
            <input type="text" value={location} onChange={onLocationChange} />
            <label style={{ color: "white", textAlign: "left" }}>
              Upload Image:
            </label>
            <input type="file" accept="image/*" onChange={onImageChange} />
            <button type="submit" style={{ color: "white" }}>
              Save
            </button>
          </form>
        ) : (
          <>
            <h2 style={{ color: "white" }}>{name}</h2>
            <p style={{ color: "white" }}> Location: {location}</p>
            {/* <p style={{ color: "white" }}>Email: farmer@example.com</p> */}
            <button onClick={onToggleEdit}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default FarmerInfo;
