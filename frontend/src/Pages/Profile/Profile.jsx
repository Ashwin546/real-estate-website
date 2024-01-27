// Profile.js

import React, { useState, useEffect } from 'react';

import Cookies from 'js-cookie';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { isLoggedIn } = useAuth();
  const [userData, setUserData] = useState(null);
 const {logout}=useAuth()
 const Navigate=useNavigate();
 const handlelogout=()=>{
    logout();
    Navigate('/')
 }
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const authToken = Cookies.get('authToken');

        if (!authToken) {
          console.error('Authentication token not found.');
          return;
        }
        // Make an API request to fetch user data
        const response = await fetch('http://localhost:8000/api/user/profile', {
          method:"GET",
          headers: {
            Authorization: `${authToken}`, // Include the authentication token
          },
        });
        //console.log(response);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        // Handle error
        console.error('Error fetching user data:', error.message);
      }
    };

    // Fetch user data only if logged in
    if (isLoggedIn) {
      fetchUserData();
    }
  }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Welcome to your Profile, {userData?.username || 'User'}!</h2>
          {userData && (
            <div>
              <p>Username: {userData.username}</p>
              <p>Email: {userData.email}</p>
              {/* Add more profile information here */}
            </div>

          )}
          <button onClick={handlelogout} className='logoutbtn'>Logout</button>
        </>
      ) : (
        <h2>Please log in to view your profile.</h2>
      )}
    </div>
  );
};

export default Profile;
