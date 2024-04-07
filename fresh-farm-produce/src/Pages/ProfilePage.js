// import React, { useState } from "react";
import FarmerInfo from "./compProfilePage/FarmerProfile";
import "./StyleProfile.css/StyleProfile.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import { useCurrentUser } from "./Login/CurrentUserContext";

function FarmerProfile() {
  // State variables to hold farmer information
  const { user } = useCurrentUser();
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [editable, setEditable] = useState(false);
  useEffect(() => {
    // Fetch current user profile when the component mounts
    const userId = user; // Implement a function to get the current user's ID
    axios
      .get(`http://localhost:3001/profile/${userId}`)
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }
  const base64Image = Buffer.from(profile.image).toString("base64");
  const imageUrl = `data:image/png;base64,${base64Image}`;
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
    <>
      <div className="container123">
        <h1 className="heading">Farmer Profile</h1>
        <FarmerInfo
          name={profile.username}
          location={profile.location}
          image={imageUrl}
          editable={editable}
          onNameChange={(e) => setName(e.target.value)}
          onLocationChange={(e) => setLocation(e.target.value)}
          onImageChange={(e) => setImage(e.target.value)}
          onSubmit={handleSubmit}
          onToggleEdit={toggleEdit}
        />
      </div>
    </>
  );
}

export default FarmerProfile;

// // function Profile() {
// //   const [profile, setProfile] = useState(null);

// //   useEffect(() => {
// //     // Fetch current user profile when the component mounts
// //     const userId = getUserId(); // Implement a function to get the current user's ID
// //     axios.get(`http://localhost:3001/profile/${userId}`)
// //       .then(response => {
// //         setProfile(response.data.profile);
// //       })
// //       .catch(error => {
// //         console.error("Error fetching profile:", error);
// //       });
// //   }, []);

// //   if (!profile) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <h2>User Profile</h2>
// //       <p>Name: {profile.username}</p>
// //       <p>Location: {profile.location}</p>
// //       <img src={profile.image} alt="Profile" />
// //       {/* Add additional profile information here */}
// //     </div>
// //   );
// // }

// // export default Profile;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Buffer } from "buffer";

// function Profile() {
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     // Fetch current user profile when the component mounts
//     const userId = 5; // Implement a function to get the current user's ID
//     axios
//       .get(`http://localhost:3001/profile/${userId}`)
//       .then((response) => {
//         setProfile(response.data.profile);
//       })
//       .catch((error) => {
//         console.error("Error fetching profile:", error);
//       });
//   }, []);

//   if (!profile) {
//     return <div>Loading...</div>;
//   }

//   console.log(profile);
//   return (
//     <div>
//       <h2>User Profile</h2>
//       <p>Name: {profile.username}</p>
//       <p>Location: {profile.location}</p>
//       <img src={imageUrl} alt="Profile" />
//       {/* Add additional profile information here */}
//     </div>
//   );
// }

// export default Profile;
