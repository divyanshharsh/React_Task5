import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const App = () => {
  const [startDate, setStartDate] = useState(null);
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (startDate) {
      const currentYear = new Date().getFullYear();
      const enteredYear = startDate.getFullYear();
      const calculatedAge = currentYear - enteredYear;
      setAge(calculatedAge);
    }
  };

  const commonStyles = {
    fontSize: '20px', 
    textAlign: 'center',
    margin: '10px',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ ...commonStyles }}>
        <h1 style={{ fontSize: '36px' }}>Age Calculator</h1>
        <br />
        <br />
        <h2 style={{ fontSize: '24px' }}>Enter your Age here</h2>
        <br />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd-MM-yyyy"
          placeholderText="Select your birthdate"
          style={{ width: '200px', fontSize: '20px' }} 
        />
        <br />
        <br />
        <button style={{ fontSize: '20px' }} onClick={calculateAge}>
          Calculate Age
        </button>
        <br />
        <br />
        {age !== null && <p style={{ fontSize: '24px' }}>Your age is: {age} years</p>}
      </div>
    </div>
  );
};

export default App;
