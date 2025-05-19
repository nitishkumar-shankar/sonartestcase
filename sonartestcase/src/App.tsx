import React, { useState } from 'react';
import AppButton from './components/atoms/Button'; // Adjust the path as necessary
import Input from './components/atoms/Textfield'; // Adjust the path as necessary

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    alert(`Button clicked! Input value: ${inputValue}`);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9fafb',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Input
        placeholder="Enter some text"
        value={inputValue}
        onChange={setInputValue}
      />
      <AppButton label="Submit" onClick={handleButtonClick} />
    </div>
  );
};

export default App;