# ¿Qué es Adiuvare?

Adiuvare es una aplicación web de gestión de eventos solidarios que conecta **asociaciones** con **voluntarios**. Desarrollada como proyecto académico para la asignatura de **Desarrollo de Interfaces (UT2)**.

La idea de esta app es que permita a las asociaciones publicar eventos (recogidas de alimentos, paseos de perros, charlas de salud mental, etc.) y a los voluntarios inscribirse en ellos. La interfaz está diseñada **mobile-first**, simulando una pantalla de iPhone 17 en el navegador de escritorio.


### Funcionalidades destacadas

- **Modo claro/oscuro** persistente (guardado en `localStorage`)
- **Login y Registro** con validación y feedback al usuario (mensajes de error, éxito, etc.)
- **Home** con buscador, categorías y tarjetas de eventos
- **Perfil** de usuario con preferencias y cierre de sesión
- **Ayuda** con preguntas frecuentes desplegables
- **Página 404** personalizada para rutas inexistentes
- **Diseño responsive** adaptado a móvil y escritorio
- **Accesibilidad**: mensajes de confirmación y de ayuda para el usuario.


## Instalación y uso

### Requisitos previos
- Node.js 18+ y npm instalados

### Pasos

# 1. Clonar el repositorio
git clone https://github.com/Jvdith/adiuvare-app-react.git

# 2. Entrar a la carpeta
cd prototipo-app-react

# 3. Instalar dependencias
npm install

# 4. Arrancar el servidor de desarrollo
npm run dev