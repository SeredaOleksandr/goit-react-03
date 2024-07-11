import { useState } from 'react';
import './App.css';
import LoginForm from './LoginForm/LoginForm';
import SearchBar from './SearchBar/SearchBar';
import LangSwitcher from './LangSwitcher/LangSwitcher';
import CoffeeCheck from './CoffeeCheck/CoffeeCheck';
import CheckboxAccept from './CheckboxAccept/CheckboxAccept';
import FeedbackForm from './FeedbackForm/FeedbackForm';

const App = () => {
  const handleLogin = userData => {
    console.log(userData);
  };

  const [lang, setLang] = useState('uk');

  return (
    <>
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onLogin={handleLogin} />
      <SearchBar />
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <CoffeeCheck />
      <CheckboxAccept />
      <FeedbackForm />
    </>
  );
};

export default App;
