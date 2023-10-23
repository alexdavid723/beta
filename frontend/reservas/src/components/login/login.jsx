
import React, { useState } from 'react';
import Home from "../Sidebar/Sidebar.jsx";
import './Login.css';

const Login = () => {
  // Mueve la declaración de los estados dentro del componente
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loginSuccessful, setLoginSuccessful] = useState(false);




  // Mueve la declaración de la función de manejo dentro del componente
  const handleLogin = (e) => {
    e.preventDefault();
    //objeto de la informacion que queremos enviar
    const data = {
      username: username,
      password: password

    };
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log(result.token)
        if (result.token) {
          localStorage.setItem('token', result.token)
          setLoginSuccessful(true);
        } else {
          setLoginSuccessful(false);
        }
      })
      .catch(error => {
        console.log(error)
      })

  };

  return (
    <>{loginSuccessful ? <Home />:
    <div className="login-container">
      <div className="login-form-container">
      <form>
        <label className="login-label">Username: </label>
        <input
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder="username"
          type="text"
        />
        <label className="login-label">Password: </label>
        <input
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="password"
        />
        <button className= "login-button"onClick={handleLogin}>Login</button>
      </form>
    </div>
    </div>
    }</>
  );
}

export default Login;
