import React, { useState } from 'react';

function InputForm(props) {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call a function to handle form submission, passing inputText as an argument.
    props.onSubmit(inputText);
    setInputText(''); // Clear the input field after submission.
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter your question"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputForm;
