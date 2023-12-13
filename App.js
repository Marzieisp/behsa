import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'


const App = () => {
  const [names, setNames] = useState(['marzii', 'mahnaz', 'mahtab']);
  const [inputValue, setInputValue] = useState('');

  const randomName = () => {
    const random = Math.floor(Math.random() * names.length);
    alert(names[randomIndex]);
  };

  const addToList = () => {
    setNames([...names, inputValue]);
    setInputValue('');
  };
  return (
    
    <div>
      <button onClick={randomName}>نمایش نام تصادفی</button>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={AddTolist}>اضافه کردن نام</button>
    </div>
  );
};
export default App;
