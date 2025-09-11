// src/components/UserForm.js
import React, { useState } from 'react';
import './UserForm.css';

const UserForm = () => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Crear Nuevo Usuario</h2>
        <form>
          {/* Campos universales para todos los roles */}
          <div className="form-group">
            <label htmlFor="fullName">Nombre Completo</label>
            <input type="text" id="fullName" name="fullName" placeholder="Ej. Juan Pérez" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" placeholder="ejemplo@ipn.mx" />
          </div>

          <div className="form-group">
            <label htmlFor="role">Rol/Perfil</label>
            <select id="role" name="role" onChange={handleRoleChange} value={selectedRole}>
              <option value="">Seleccionar rol</option>
              {/* Opción de Supervisor solo para Administrador, por ahora se muestra */}
              <option value="supervisor">Supervisor</option>
              <option value="coordinador">Coordinador</option>
              <option value="asesor">Asesor</option>
              <option value="participante">Participante</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="center">Unidad Académica</label>
            <select id="center" name="center">
              <option value="">Seleccionar centro</option>
              <option value="escom">ESCOM</option>
              <option value="cecyt1">CECyT 1</option>
            </select>
          </div>

          {/* Campo de Credencial para todos los roles que lo requieren */}
          {(selectedRole === 'coordinador' || selectedRole === 'asesor' || selectedRole === 'participante') && (
            <div className="form-group">
                <label htmlFor="credential">Credencial</label>
                <input type="file" id="credential" name="credential" accept=".pdf,.png,.jpg,.jpeg" />
            </div>
          )}

          {/* === Campos Específicos para el Rol === */}
          {selectedRole === 'asesor' && (
            <>
              <div className="form-group">
                <label htmlFor="employeeId">Número de Empleado</label>
                <input type="text" id="employeeId" name="employeeId" placeholder="Ej. 12345" />
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
                <label htmlFor="phone">Número de Teléfono Móvil</label>
                <input type="tel" id="phone" name="phone" placeholder="Ej. 55 1234 5678" />
              </div>
            </>
          )}

          {selectedRole === 'participante' && (
            <>
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
                <label htmlFor="phone">Número de Teléfono Móvil</label>
                <input type="tel" id="phone" name="phone" placeholder="Ej. 55 1234 5678" />
              </div>
              <div className="form-group">
                <label htmlFor="nss">NSS (Número de Seguro Social)</label>
                <input type="text" id="nss" name="nss" placeholder="Ej. 12345678901" />
              </div>
              <div className="form-group">
                <label htmlFor="proof">Comprobante de Inscripción (PDF)</label>
                <input type="file" id="proof" name="proof" accept=".pdf" />
              </div>
              <div className="form-group">
                <label htmlFor="folio">Folio Consecutivo</label>
                <input type="text" id="folio" name="folio" value="[Generado por el sistema]" readOnly />
              </div>
            </>
          )}

          <button type="submit" className="submit-btn">Crear Usuario</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;