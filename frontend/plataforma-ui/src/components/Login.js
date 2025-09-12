// src/components/Login.js
import React from 'react';
import './Login.css';
import { FaGraduationCap } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-section">
          <FaGraduationCap className="logo-icon-login" />
          <h1 className="logo-text-login">ENCUENTROS INTERPOLITÉCNICOS</h1>
        </div>
        <h2 className="login-title">Inicio de Sesión</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input type="text" id="username" name="username" placeholder="Ingresa tu usuario" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" />
          </div>
          <button type="submit" className="login-btn">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;