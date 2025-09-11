// src/components/AdminDashboard.js
import React from 'react';
import './AdminDashboard.css'; // Para los estilos CSS

const AdminDashboard = () => {
    return (
        <div className="dashboard-container">
            {/* 1. Sidebar de Navegación */}
            <aside className="sidebar">
                <div className="logo-container">
                    <h1>POLITÉCNICA</h1>
                </div>
                <nav className="main-nav">
                    <ul>
                        <li><a href="#dashboard">Dashboard</a></li>
                        <li><a href="#usuarios">Gestión de Usuarios</a></li>
                        <li><a href="#configuracion">Configuración</a></li>
                    </ul>
                </nav>
            </aside>

            {/* 2. Área de Contenido Principal */}
            <main className="main-content">
                <h1>Dashboard del Administrador</h1>

                {/* Tarjetas de Resumen */}
                <div className="summary-cards">
                    <div className="card">
                        <h3>Usuarios Totales</h3>
                        <span>1,250</span>
                    </div>
                    <div className="card">
                        <h3>Encuentros Activos</h3>
                        <span>5</span>
                    </div>
                    <div className="card">
                        <h3>Participantes Validados</h3>
                        <span>890</span>
                    </div>
                </div>

                {/* Sección de Tareas Rápidas */}
                <div className="quick-links">
                    <button>Crear Nuevo Usuario</button>
                    <button>Configurar Tiempos</button>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;