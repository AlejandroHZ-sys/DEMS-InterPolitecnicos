// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import UserManagement from './components/UserManagement';
import UserForm from './components/UserForm';
import './index.css'; // Asegúrate de que este archivo exista para los estilos globales

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/users/create" element={<UserForm />} />
        {/* Aquí podrás añadir más rutas en el futuro */}
      </Routes>
    </Router>
  );
}

export default App;