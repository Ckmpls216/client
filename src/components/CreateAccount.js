// src/components/CreateAccount.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/create-account', {
        username,
        password,
        age,
        country,
        region,
        pronouns,
        favoriteColor,
      });
      if (response.status === 201) {
        navigate(`/account/${username}`);
      }
    } catch (error) {
      console.error('There was an error creating the account:', error);
    }
  };

  const pronounsList = ['He/Him', 'She/Her', 'They/Them', 'Other'];

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <label>Age</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
      </div>
      <div>
        <label>Country</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)} required>
          {/* Add your country options here */}
        </select>
      </div>
      <div>
        <label>Region/State/Province</label>
        <input type="text" value={region} onChange={(e) => setRegion(e.target.value)} required />
      </div>
      <div>
        <label>Preferred Pronouns</label>
        <select value={pronouns} onChange={(e) => setPronouns(e.target.value)} required>
          <option value="">Select Pronouns</option>
          {pronounsList.map((pronoun) => (
            <option key={pronoun} value={pronoun}>{pronoun}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Favorite Color</label>
        <input type="color" value={favoriteColor} onChange={(e) => setFavoriteColor(e.target.value)} />
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
};

export default CreateAccount;
