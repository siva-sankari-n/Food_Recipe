import axios from 'axios';
import React, { useState, useEffect } from 'react';

const JokeApp = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await axios.get("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" },
          });
        console.log(response)
        setJoke(response.data.joke);
      } catch (error) {
        console.error("Error fetching joke:", error);
        setJoke("Oops! The joke could not be found.");
      }
    };

    fetchJoke();
    
  }, []);

  return <p>{joke}</p>;
};

export default JokeApp;
