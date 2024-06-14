// src/components/CreateAccount.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const countries = {
  "United States": ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia"],
  "Canada": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"],
  // Add more countries and their regions
};

const pronounsList = ["He/Him", "She/Her", "They/Them", "Other"];

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [selectedPronouns, setSelectedPronouns] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('#ffffff');
  const navigate = useNavigate();

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setRegion(''); // Reset region when country changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/create-account', {
        username,
        password,
        age,
        country,
        region,
        pronouns: selectedPronouns,
        favoriteColor,
      });
      console.log(response.data);
      setUsername('');
      setPassword('');
      setAge('');
      setCountry('');
      setRegion('');
      setSelectedPronouns('');
      setFavoriteColor('#ffffff');
      navigate(`/account/${username}`);
    } catch (error) {
      console.error(error);
    }
  };

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
        <select value={country} onChange={handleCountryChange} required>
          <option value="">Select Country</option>
          {Object.keys(countries).map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Region/State/Province</label>
        <select value={region} onChange={(e) => setRegion(e.target.value)} required>
          <option value="">Select Region</option>
          {country && countries[country].map((region) => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Preferred Pronouns</label>
        <select value={selectedPronouns} onChange={(e) => setSelectedPronouns(e.target.value)} required>
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
