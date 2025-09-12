// src/components/ValidationTable.js
import React from 'react';
import './ValidationTable.css';
import { FiCheckCircle, FiXCircle, FiEye } from 'react-icons/fi';

const ValidationTable = () => {
    // Datos de prueba para la validación
    const pendingRecords = [
        { id: 1, name: 'Luis Cárdenas', role: 'Participante', status: 'Pendiente' },
        { id: 2, name: 'Sofía Robles', role: 'Participante', status: 'Pendiente' },
    ];

    return (
        <div className="validation-container">
            <div className="validation-header">
                <h2>Validación de Registros</h2>
            </div>
            <div className="validation-toolbar">
                <input type="text" placeholder="Buscar por nombre..." className="search-input" />
            </div>
            <div className="table-card">
                <table className="validation-table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Rol</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingRecords.map(record => (
                            <tr key={record.id}>
                                <td>{record.name}</td>
                                <td>{record.role}</td>
                                <td><span className="status-pending">{record.status}</span></td>
                                <td className="action-buttons">
                                    <button className="view-btn"><FiEye /></button>
                                    <button className="approve-btn"><FiCheckCircle /></button>
                                    <button className="reject-btn"><FiXCircle /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ValidationTable;