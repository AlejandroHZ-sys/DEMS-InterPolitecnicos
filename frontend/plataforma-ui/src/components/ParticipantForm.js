// src/components/ParticipantForm.js
import React from 'react';
import './ParticipantForm.css';

const ParticipantForm = () => {
    return (
        <div className="form-container-full">
            <div className="form-card-full">
                <h2>Registro de Participante</h2>
                <form>
                    <div className="form-section">
                        <h3>Datos Personales y de Contacto</h3>
                        <div className="form-group">
                            <label htmlFor="fullName">Nombre Completo</label>
                            <input type="text" id="fullName" name="fullName" placeholder="Ej. Juan Pérez" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input type="email" id="email" name="email" placeholder="ejemplo@ipn.mx" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Número de Teléfono Móvil</label>
                            <input type="tel" id="phone" name="phone" placeholder="Ej. 55 1234 5678" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nss">NSS (Número de Seguro Social)</label>
                            <input type="text" id="nss" name="nss" placeholder="Ej. 12345678901" />
                        </div>
                    </div>

                    <div className="form-section">
                        <h3>Datos Académicos y de Identificación</h3>
                        <div className="form-group">
                            <label htmlFor="boleta">Número de Boleta</label>
                            <input type="text" id="boleta" name="boleta" placeholder="Ej. 2021630123" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="curp">CURP</label>
                            <input type="text" id="curp" name="curp" placeholder="Ej. ABCDEF123456GHIJKL01" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rfc">RFC con Homoclave</label>
                            <input type="text" id="rfc" name="rfc" placeholder="Ej. ABC123456DEF" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="credential">Credencial (INE o Institucional)</label>
                            <input type="file" id="credential" name="credential" accept=".pdf,.png,.jpg,.jpeg" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="proof">Comprobante de Inscripción (PDF)</label>
                            <input type="file" id="proof" name="proof" accept=".pdf" />
                        </div>
                    </div>

                    <button type="submit" className="submit-btn-full">Guardar y Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default ParticipantForm;