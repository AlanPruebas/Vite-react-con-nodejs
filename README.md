# Proyecto MVC Fullstack con Node.js y React (Vite)

Este proyecto es una aplicación web con arquitectura MVC, que incluye:

- **Backend** con Node.js y Express
- **Frontend** con React usando Vite
- Comunicación entre frontend y backend mediante **Axios**

---

## 📁 Estructura del proyecto

raiz/ 
├── backend/ # Servidor Express con rutas y controladores 
├── frontend/ # Aplicación React con Vite 
├── .gitignore
└── README.md


---

## 🚀 Requisitos previos

- Node.js instalado (versión recomendada: 18+)
- npm (viene con Node.js)
- Git (para clonar el repositorio)

---

## 📦 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo

2. Instalar dependencias del backend

cd backend
npm install

3. Instalar dependencias del frontend
cd ../frontend
npm install

⚙️ Configuración
Backend

🗃️ Base de datos: basededatos
Este proyecto requiere una base de datos MySQL llamada basededatos con una tabla llamada productos. Puedes crearla fácilmente ejecutando el siguiente script SQL:

📄 Script SQL para crear la tabla productos

CREATE DATABASE IF NOT EXISTS basededatos;
USE basededatos;

CREATE TABLE productos (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) DEFAULT NULL,
  precio DECIMAL(10,2) DEFAULT NULL,
  PRIMARY KEY (id)
);


## Datos de ejemplo

INSERT INTO productos (nombre, precio) VALUES
('Laptop Lenovo ThinkPad', 850.00),
('Mouse Logitech M170', 15.50),
('Teclado Mecánico Redragon', 45.99),
('Monitor Samsung 24"', 180.75),
('Disco Duro Externo 1TB', 65.20),
('Memoria USB 32GB', 9.99),
('Impresora Epson EcoTank', 210.00),
('Auriculares Sony WH-CH510', 49.90),
('Smartphone Xiaomi Redmi Note 12', 320.00),
('Silla Ergonómica Oficina', 120.00);
