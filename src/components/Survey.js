// src/components/Survey.js
import React, { useState } from 'react';
import axios from 'axios';

const Survey = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [user, setUser] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/survey', {
        question,
        answer,
        user,
      });
      console.log(response.data);
      setQuestion('');
      setAnswer('');
      setUser('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Today's Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question</label>
          <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} required />
        </div>
        <div>
          <label>Answer</label>
          <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} required />
        </div>
        <div>
          <label>User</label>
          <input type="text" value={user} onChange={(e) => setUser(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Survey;
