// src/components/AccountPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AccountPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/account/${username}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [username]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{username}'s Account</h1>
      <p>Age: {user.age}</p>
      <p>Country: {user.country}</p>
      <p>Region: {user.region}</p>
      <p>Pronouns: {user.pronouns}</p>
      <p>Favorite Color: <span style={{ backgroundColor: user.favoriteColor, padding: '5px 10px' }}>{user.favoriteColor}</span></p>
      <p>Gold Medals: {user.goldMedals}</p>
      <p>Silver Medals: {user.silverMedals}</p>
      <p>Bronze Medals: {user.bronzeMedals}</p>
      <p>Tokens: {user.tokens}</p>
      <p>Wallet Address: {user.walletAddress}</p>
    </div>
  );
};

export default AccountPage;
