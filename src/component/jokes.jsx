import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Jokes() {
  const [joke, setJoke] = useState('');
  
  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await axios.get('https://official-joke-api.appspot.com/jokes/random');
        setJoke(response.data.setup + ' ' + response.data.punchline);
      } catch (error) {
        console.error('Failed to fetch joke:', error);
      }
    };
    
    fetchJoke();
  }, []);

  return (
    <div className="jokes">
      <h2 className='text-2xl' style={{ fontFamily: 'Comic Sans MS' }}>Have fun while at it...😄</h2>
      <p className='text-yellow-400'>{joke}</p>
    </div>
  );
}

export default Jokes;
