// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import Survey from './components/Survey';
import SurveyResults from './components/SurveyResults';
import ViewUsers from './components/ViewUsers';
import AccountPage from './components/AccountPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-account">Create Account</Link>
            </li>
            <li>
              <Link to="/survey">Today's Questionnaire</Link>
            </li>
            <li>
              <Link to="/survey-results">Yesterday's Results</Link>
            </li>
            <li>
              <Link to="/login">Login/My Account</Link>
            </li>
            <li>
              <Link to="/view-users">View Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/survey-results" element={<SurveyResults />} />
          <Route path="/view-users" element={<ViewUsers />} />
          <Route path="/account/:username" element={<AccountPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
