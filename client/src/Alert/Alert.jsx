import React, { useEffect } from 'react';
import { Prompt } from 'react-router-dom'; // Import Prompt from react-router-dom, not react-router

const Promptt = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; 
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <Prompt
      when={true}
      message="Are you sure you want to leave?"
    />
  );
};

export default Promptt;
