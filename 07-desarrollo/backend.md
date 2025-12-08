---
layout: default
title: Desarrollo Backend
---

# 🧠 Desarrollo Backend

En esta sección se documenta el desarrollo del **backend** de la *Plataforma Web de Gestión de Almacén y Embarques – Diesel Global Logistics Inc.*

El backend es el núcleo del sistema, encargado de procesar la lógica de negocio, gestionar la base de datos y exponer los servicios a través de APIs.

---

## 🎯 Objetivo del Backend

- Gestionar la lógica de inventarios y embarques.
- Procesar solicitudes del frontend.
- Garantizar seguridad y control de accesos.
- Mantener la integridad de la información.

---

## 🏗️ Arquitectura del Backend

El sistema backend está basado en una arquitectura:

- Tipo: **REST API**
- Patrón: **MVC (Modelo – Vista – Controlador)**

Componentes:

| Capa | Función |
|------|---------|
| Controladores | Reciben y procesan las solicitudes HTTP |
| Servicios | Ejecutan la lógica de negocio |
| Modelos | Representan las tablas de la base de datos |
| Rutas | Definen los endpoints de la API |

---

## 🛠️ Tecnologías Utilizadas

| Categoría | Herramienta |
|----------|-------------|
| Lenguaje | JavaScript (Node.js) |
| Framework | Express.js |
| Base de Datos | PostgreSQL |
| ORM | Sequelize |
| Autenticación | JSON Web Tokens (JWT) |
| Pruebas | Jest |
| Documentación | Swagger / OpenAPI |

---

## 🧩 Módulos Implementados

### 📦 Módulo de Inventarios

Funciones:

- Registro de materiales
- Actualización de stock
- Consulta de inventario
- Historial de movimientos

---

### 🚚 Módulo de Embarques

Funciones:

- Creación de órdenes de embarque
- Validación mediante código QR
- Seguimiento de estados

---

### 👥 Módulo de Usuarios y Seguridad

Funciones:

- Registro de usuarios
- Inicio de sesión
- Roles y permisos (RBAC)
- Cifrado de contraseñas

---

## 🔗 Endpoints Principales

| Método | Endpoint | Descripción |
|--------|---------|-------------|
| POST | `/api/v1/auth/login` | Iniciar sesión |
| GET | `/api/v1/inventarios` | Consultar inventario |
| POST | `/api/v1/inventarios` | Crear material |
| GET | `/api/v1/embarques` | Listar embarques |
| POST | `/api/v1/embarques` | Crear embarque |

---

## 🧪 Pruebas Realizadas

- Pruebas unitarias con Jest
- Pruebas de integración de API con Postman
- Validación de seguridad en autenticación

---

## ✅ Buenas Prácticas Aplicadas

- Separación por capas (MVC)
- Manejo centralizado de errores
- Validaciones de entrada
- Uso de variables de entorno

---

## 📂 Entregables del Backend

| Entregable | Estado |
|------------|--------|
| API REST funcional | ✅ Completa |
| Conexión a base de datos | ✅ Operativa |
| Autenticación implementada | ✅ Lista |
| Documentación Swagger | ✅ Generada |

---

## 🔗 Navegación

- [← Volver a Desarrollo](index)
- [Ir a Frontend →](frontend)

---

<div class="text-center text-gray">
  <small>Última actualización: 06 de diciembre de 2025</small><br>
  <small>© 2025 Diesel Global Logistics Inc.</small>
</div>
