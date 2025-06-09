import React, { useState } from 'react';

function App() {
  const [timestamp, setTimestamp] = useState(null);

  const handleClick = () => {
    setTimestamp(new Date().toLocaleString());
  };

  return (
    <div className="app-container">
      <h1>Hello from CodeBuild + React!</h1>
      <p>This is a demo React application.</p>
      <button onClick={handleClick}>Show Current Time</button>
      {timestamp && (
        <p className="timestamp">Current time: {timestamp}</p>
      )}
    </div>
  );
}

export default App;
