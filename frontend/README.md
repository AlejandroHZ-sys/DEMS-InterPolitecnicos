# Frontend de la Plataforma

Este directorio contiene la interfaz de usuario de la plataforma, construida con [Framework de JavaScript].

## Tecnologías Utilizadas

- **Framework:** [Nombre del Framework, p. ej., React, Vue.js]
- **Gestor de Paquetes:** [Nombre del gestor de paquetes, p. ej., npm, yarn]

## Requisitos

- Node.js (versión recomendada)

## Configuración y Ejecución

1.  Abre una terminal y navega a este directorio (`/frontend`).
2.  Instala todas las dependencias del proyecto:
    `[comando de instalación, p. ej., npm install o yarn install]`
3.  Inicia el servidor de desarrollo del frontend:
    `[comando para iniciar el servidor, p. ej., npm start o yarn serve]`

Una vez que el servidor esté en funcionamiento, podrás acceder a la interfaz de usuario en tu navegador en la URL `http://localhost:[puerto]`.

## Estructura del Proyecto

- **`src/`**: Contiene todo el código fuente del frontend.
- **`src/components/`**: Componentes reutilizables de la interfaz de usuario.
- **`src/pages/`**: Vistas principales de la aplicación (p. ej., Inicio de sesión, Dashboard de administrador).
- **`src/services/`**: Lógica para interactuar con la API del backend.

## Integración con el Backend

El frontend se comunica con el backend a través de la API REST. Asegúrate de que el servidor de Django (`python manage.py runserver`) esté corriendo para que la aplicación funcione correctamente. Las configuraciones de la URL de la API se encuentran en [especificar la ubicación, p. ej., `src/config.js`].
