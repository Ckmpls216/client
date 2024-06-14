// src/components/SurveyResults.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SurveyResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('http://localhost:3000/survey/results');
        setResults(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResults();
  }, []);

  return (
    <div>
      <h1>Yesterday's Results</h1>
      <ul>
        {Object.keys(results).map((question) => (
          <li key={question}>
            <h2>{question}</h2>
            <ul>
              {Object.keys(results[question]).map((answer) => (
                <li key={answer}>
                  {answer}: {results[question][answer]}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SurveyResults;
