import React from 'react';

const GoalsList = ({ goals, updateGoal, deleteGoal }) => {
  return (
    <div className="container">
      <h2>Goals</h2>
      {goals.length === 0 ? (
        <p>No goals added yet!</p>
      ) : (
        <ul>
          {goals.map((goal) => (
            <li key={goal.id} style={{ marginBottom: '10px' }}>
              <strong>{goal.name}</strong> - Target: {goal.target}, Progress: {goal.progress}
              <div style={{ marginTop: '5px' }}>
                <button onClick={() => updateGoal(goal.id, goal.progress + 1)}>+1 Progress</button>
                <button onClick={() => deleteGoal(goal.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoalsList;
