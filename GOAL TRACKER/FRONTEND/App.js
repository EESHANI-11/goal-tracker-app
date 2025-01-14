import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GoalForm from './components/GoalForm';
import GoalsList from './components/GoalsList';
import './styles/app.css';

const App = () => {
  const [goals, setGoals] = useState([]);

  const fetchGoals = () => {
    axios.get('/api/goals/')
      .then(response => setGoals(response.data))
      .catch(error => console.error('Error fetching goals:', error));
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const addGoal = (goal) => {
    axios.post('/api/goals/', goal)
      .then(response => setGoals([...goals, response.data]))
      .catch(error => console.error('Error adding goal:', error));
  };

  const updateGoal = (id, progress) => {
    axios.put(`/api/goals/${id}/`, { progress })
      .then(response => {
        const updatedGoals = goals.map(goal => (goal.id === id ? response.data : goal));
        setGoals(updatedGoals);
      })
      .catch(error => console.error('Error updating goal:', error));
  };

  const deleteGoal = (id) => {
    axios.delete(`/api/goals/${id}/`)
      .then(() => setGoals(goals.filter(goal => goal.id !== id)))
      .catch(error => console.error('Error deleting goal:', error));
  };

  return (
    <div>
      <header style={{ backgroundColor: '#1b1464', color: 'white', padding: '10px', textAlign: 'center' }}>
        Goal Tracking App
      </header>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <GoalForm addGoal={addGoal} />
        <button
          onClick={() => window.location.href = '/api/report'}
          style={{ padding: '10px 20px', backgroundColor: 'yellow', borderRadius: '5px' }}
        >
          Weekly Report
        </button>
        <button
          onClick={() => window.open('/api/report?download=true', '_blank')}
          style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', borderRadius: '5px' }}
        >
          Download Report
        </button>
      </div>

      <GoalsList goals={goals} updateGoal={updateGoal} deleteGoal={deleteGoal} />
    </div>
  );
};

export default App;
