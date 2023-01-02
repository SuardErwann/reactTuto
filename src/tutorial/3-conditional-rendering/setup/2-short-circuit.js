import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const firstValue = text || 'hello world';  // Return la première true value
  const secondValue = text && 'hello world'; // Return la première falsy value

  return (
  <>
  <h1>Value : {firstValue}</h1>
  <h1>Value : {secondValue}</h1>
  </>
    );
};

export default ShortCircuit;
