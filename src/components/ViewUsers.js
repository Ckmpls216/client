// src/components/ViewUsers.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewUsers = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {Object.keys(users).map((username) => (
          <li key={username}>
            <strong>{username}</strong>: {JSON.stringify(users[username])}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewUsers;
