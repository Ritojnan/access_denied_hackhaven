import React, { useState, useEffect } from 'react';

const Response = () => {
  const [detectedObjects, setDetectedObjects] = useState([]);

  const fetchDetectedObjects = async () => {
    try {
      const response = await fetch('http://localhost:3001/detected-objects');
      if (response.ok) {
        const data = await response.json();
        setDetectedObjects(data);
      } else {
        console.error('Failed to fetch detected objects');
      }
    } catch (error) {
      console.error('Error fetching detected objects:', error);
    }
  };

  useEffect(() => {
    fetchDetectedObjects();
  }, []); // Fetch detected objects when the component mounts

  return (
    <div>
      <h2>Detected Objects:</h2>
      <button onClick={fetchDetectedObjects}>Fetch Detected Objects</button>
      <ul>
        {detectedObjects.map((object, index) => (
          <li key={index}>
            Class: {object.class}, Score: {object.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Response;
