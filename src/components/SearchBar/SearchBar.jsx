import React, { useState } from 'react';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <input type="text" />
      <p>{inputValue}</p>
    </div>
  );
};

export default SearchBar;
