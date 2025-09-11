import React, { useState } from 'react';
import './AdminDashboard.css';// Importa los íconos de la librería
import { Link } from 'react-router-dom'; // Importa el componente Link
import { FiHome, FiUsers, FiSettings, FiDownload, FiCalendar, FiUser, FiCalendar as FiCalendarAlt, FiCheckCircle, FiPlusCircle, FiList, FiEdit2, FiMenu } from 'react-icons/fi';
import { FaGraduationCap, FaBuilding  } from 'react-icons/fa';

const AdminDashboard = () => {
    // 1. Estado para controlar si el menú está abierto o cerrado
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className="dashboard-container">
            {/* 2. Botón de menú de hamburguesa para móviles */}
            <div className="menu-button" onClick={toggleSidebar}>
                <FiMenu />
            </div>
            {/* 3. La barra lateral ahora tiene una clase condicional */}
            <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="logo-container">
                    <FaGraduationCap className="logo-icon" /> {/* Icono a la izquierda */}
                    <div className="logo-text">
                        <h1>ENCUENTROS</h1>
                        <h2>INTERPOLITECNICOS</h2>
                    </div>
                </div>
                <nav className="main-nav">
                    <ul>
                        <li><Link to="/" className="active"><FiHome className="icon" />Dashboard</Link></li>
                        <li><Link to="/users"><FiUsers className="icon" />Gestión de Usuarios</Link></li>
                        <li><a href="#encuentros"><FiCalendar className="icon" />Configutación de encuentros</a></li>
                        <li><a href="#configuracion"><FiSettings className="icon" />Configuración</a></li>
                        <li><a href="#descargas"><FiDownload className="icon" />Módulo de Descargas</a></li>
                    </ul>
                </nav>
            </aside>

            {/* 2. Área de Contenido Principal */}
            <main className="main-content">
                <div className="main-header">
                    <h1 className="main-title">Dashboard del Administrador</h1>
                    <div className="user-info">
                        <div className="avatar"></div>
                        <span>Administrador</span>
                    </div>
                </div>

                {/* Tarjetas de Resumen */}
                <div className="summary-cards">
                    {/* Tarjeta 1: Usuarios Totales */}
                    <div className="card blue-card">
                        <div className="card-header">
                            <h3>Usuarios Totales</h3>
                            <FiUser className="card-icon" /> {/* Ícono de Usuarios */}
                        </div>
                        <div className="card-footer">
                            <span className="card-number">1,250</span>
                        </div>
                    </div>

                    {/* Tarjeta 2: Encuentros Activos */}
                    <div className="card green-card">
                        <div className="card-header">
                            <h3>Encuentros Activos</h3>
                            <FiCalendarAlt className="card-icon" /> {/* Ícono de Calendario */}
                        </div>
                        <div className="card-footer">
                            <span className="card-number">5</span>
                        </div>
                    </div>

                    {/* Tarjeta 3: Participantes Validados */}
                    <div className="card orange-card">
                        <div className="card-header">
                            <h3>Participantes Validados</h3>
                            <FiCheckCircle className="card-icon" /> {/* Ícono de Check */}
                        </div>
                        <div className="card-footer">
                            <span className="card-number">890</span>
                        </div>
                    </div>

                    {/* Tarjeta 4: Centros Registrados */}
                    <div className="card purple-card">
                        <div className="card-header">
                            <h3>Centros Registrados</h3>
                            <FaBuilding className="card-icon" /> {/* Ícono de Edificio */}
                        </div>
                        <div className="card-footer">
                            <span className="card-number">15</span>
                        </div>
                    </div>
                </div>

                {/* Sección de Tareas Rápidas */}
                <div className="quick-links">
                    <button><FiPlusCircle className="button-icon" />Crear Nuevo Usuario</button>
                    <button><FiList className="button-icon" />Configurar Ventanas de Tiempo</button>
                    <button><FiEdit2 className="button-icon" />Revisar Registros Pendientes</button>
                    <button><FaBuilding className="button-icon" />Registrar Centros</button>
                </div>

            </main>
        </div>
    );
};

export default AdminDashboard;