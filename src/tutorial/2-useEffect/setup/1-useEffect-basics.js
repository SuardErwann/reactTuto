import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log(`Clicked ${value} times`);
    document.title = value > 0 ? `New messages (${value})` : `No messages`;
  }, [value]);

  useEffect(() => {
    console.log('Second use effect');
  }, []);
  return (
    <>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue(value + 1)}>Click me</button>
    </>
  );
};

export default UseEffectBasics;
