// src/components/SurveyForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SurveyForm = () => {
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question</label>
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </div>
      <div>
        <label>Answer</label>
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
      </div>
      <div>
        <label>User</label>
        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SurveyForm;
