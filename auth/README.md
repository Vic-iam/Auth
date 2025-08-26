🔐 Auth API (Login & Register)

Este proyecto implementa un sistema de autenticación con Node.js, Express, MongoDB y JWT, incluyendo rutas para registro, login, logout y refresh de tokens.

🚀 Tecnologías

Node.js

Express

MongoDB + Mongoose

JWT (jsonwebtoken)

bcrypt

dotenv

cors

nodemon

📦 Instalación

Clona el repositorio e instala dependencias:

git clone https://github.com/tuusuario/tu-repo.git
cd tu-repo
npm install


Crea un archivo .env en la raíz del proyecto:

PORT=3200
MONGO_URI=mongodb://localhost:27017/authdb
JWT_SECRET=miclavesecreta

▶️ Ejecutar el servidor

En modo desarrollo (con recarga automática):

npm run dev


En producción:

npm start

📌 Endpoints principales
Registro de usuario

POST /api/signup
Body (JSON):

{
  "username": "juan",
  "email": "juan@example.com",
  "password": "123456"
}

Login

POST /api/login
Body (JSON):

{
  "email": "juan@example.com",
  "password": "123456"
}


Respuesta (ejemplo):

{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}

Obtener datos del usuario autenticado

GET /api/user
Header:

Authorization: Bearer <token>

Logout

POST /api/signout

Refresh Token

POST /api/refresh-token

📖 Próximos pasos

Agregar validaciones con Joi o express-validator

Proteger rutas con middleware de autenticación

Implementar roles de usuario (admin / user)