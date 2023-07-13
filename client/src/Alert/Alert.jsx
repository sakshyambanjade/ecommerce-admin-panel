import React, { useEffect } from 'react';
import { Prompt } from 'react-router';

const LeavingPrompt = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; // Display an empty string to bypass browser default dialog
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

export default LeavingPrompt;
