import s from './LoginForm.module.css';
import { useId } from 'react';

// const LoginForm = ({ onLogin }) => {
//   const handleSubmit = evt => {
//     evt.preventDefault();

//     const form = evt.target;
//     const { login, password } = form.elements;

//     onLogin({
//       login: login.value,
//       password: password.value,
//     });

//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };
const LoginForm = () => {
  const loginId = useId();
  const passwordId = useId();

  return (
    <form>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} />

      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
