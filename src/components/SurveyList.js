// src/components/SurveyList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SurveyList = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await axios.get('http://localhost:3000/survey');
        setSurveys(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSurveys();
  }, []);

  return (
    <div>
      <h2>Survey Questions</h2>
      <ul>
        {surveys.map((survey) => (
          <li key={survey.id}>
            {survey.question} - {survey.answer} (by {survey.user})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SurveyList;
