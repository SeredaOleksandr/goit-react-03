import { useState } from 'react';
import './App.css';
import LoginForm from './LoginForm/LoginForm';
import SearchBar from './SearchBar/SearchBar';

const App = () => {
  const handleLogin = userData => {
    console.log(userData);
  };
  return (
    <>
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onLogin={handleLogin} />
      <SearchBar />
    </>
  );
};

export default App;
