// src/components/UserManagement.js
import React from 'react';
import { Link } from 'react-router-dom';
import './UserManagement.css';
import { FiEdit, FiTrash2, FiKey, FiSearch, FiPlus, FiFilter } from 'react-icons/fi';

const UserManagement = () => {
  // Datos de ejemplo. Aquí es donde se conectará tu backend de Django más tarde.
  const users = [
    { id: 1, name: 'Juan Pérez', email: 'juan.perez@ipn.mx', role: 'Asesor', center: 'ESCOM' },
    { id: 2, name: 'Ana Gómez', email: 'ana.gomez@ipn.mx', role: 'Coordinador', center: 'CECyT 1' },
    { id: 3, name: 'Luis Cárdenas', email: 'luis.cardenas@ipn.mx', role: 'Participante', center: 'ESIA' },
    { id: 4, name: 'Sofía Robles', email: 'sofia.robles@ipn.mx', role: 'Participante', center: 'UPIICSA' },
  ];

  return (
    <div className="user-management-container">
      <div className="user-management-header">
        <h1>Gestión de Usuarios</h1>
         <Link to="/users/create" className="create-user-btn">
                    <FiPlus className="btn-icon" />Crear Nuevo Usuario
         </Link>
      </div>

      <div className="toolbar">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Buscar usuarios..." />
        </div>
        <button className="filter-btn">
            <FiFilter className="btn-icon" />Filtros
        </button>
      </div>

      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Nombre Completo</th>
              <th>Correo Electrónico</th>
              <th>Rol</th>
              <th>Centro</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.center}</td>
                <td className="actions">
                  <button><FiEdit /></button>
                  <button><FiTrash2 /></button>
                  <button><FiKey /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;