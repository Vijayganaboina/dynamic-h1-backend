import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {

  
  const [h1Text, setH1Text] = useState('');
  const [newText, setNewText] = useState('');

  useEffect(() => {
    const fetchH1Text = async () => {
      try {
        const response = await axios.get('dynamic-h1-backend-4qolkey2b-vijay-kumars-projects-d38e2753.vercel.app/api/h1-text');
        setH1Text(response.data.h1Text);
      } catch (error) {
        console.error('Error fetching h1 text:', error);
      }
    };
    fetchH1Text();
  }, []);

  const handleUpdateText = async () => {
    try {
      const response = await axios.post('dynamic-h1-backend-4qolkey2b-vijay-kumars-projects-d38e2753.vercel.app/api/update-h1', { newText });
      if (response.data.success) {
        setH1Text(response.data.h1Text);
        setNewText('');
      }
    } catch (error) {
      console.error('Error updating h1 text:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-6 text-white  p-4 rounded-md">{h1Text}</h1>
      <div className="admin-panel bg-gray-100 p-4 rounded-lg shadow-md">
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="border-2 border-gray-300 p-3 mb-4 w-full rounded-md focus:outline-none focus:border-blue-500 transition duration-200"
          placeholder="Enter new h1 text"
        />
        <button
          onClick={handleUpdateText}
          className="bg-blue-600 text-white p-3 rounded-md w-full hover:bg-blue-700 transition duration-200 transform hover:scale-105"
        >
          Update H1 Text
        </button>
      </div>
      
    </div>
  );
};

export default App;
