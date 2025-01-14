import React, { useState } from 'react';

const GoalForm = ({ addGoal }) => {
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');
  const [progress, setProgress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addGoal({ name, target, progress });
    setName('');
    setTarget('');
    setProgress('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Goal Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Target" value={target} onChange={(e) => setTarget(e.target.value)} />
      <input type="number" placeholder="Progress" value={progress} onChange={(e) => setProgress(e.target.value)} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;
