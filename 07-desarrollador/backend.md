---
layout: default
title: Desarrollo Backend
---

# 🧠 Desarrollo Backend

Este documento describe la implementación del **Backend** de la Plataforma Web de Gestión de Almacén y Embarques – Diesel Global Logistics Inc.

El backend es responsable de la lógica de negocio, la seguridad y la comunicación con la base de datos.

---

## 🛠️ Tecnologías Utilizadas

| Componente | Tecnología |
|------------|------------|
| Lenguaje | Python / PHP |
| Entorno de ejecución | Node.js |
| Framework | Express.js |
| Base de datos | MySQL / PostGRES |
| ORM | Sequelize |
| Autenticación | JWT |
| Control de versiones | Git + GitHub |

---

## 🔐 Seguridad Implementada

El sistema incluye:

- Autenticación con JWT
- Encriptación de contraseñas con bcrypt
- Control de acceso por roles (RBAC)
- Middleware de validación de datos
- Protección contra ataques comunes

---

## 📡 Endpoints Principales Implementados

### 🧩 Autenticación

| Método | Endpoint | Función |
|--------|----------|---------|
| POST | /api/v1/auth/login | Iniciar sesión |
| GET | /api/v1/auth/profile | Obtener perfil |

---

### 📦 Inventarios

| Método | Endpoint |
|--------|----------|
| GET | /api/v1/inventarios |
| POST | /api/v1/inventarios |
| PUT | /api/v1/inventarios/:id |
| DELETE | /api/v1/inventarios/:id |

---

### 🚚 Embarques

| Método | Endpoint |
|--------|----------|
| GET | /api/v1/embarques |
| POST | /api/v1/embarques |
| PUT | /api/v1/embarques/:id |
| POST | /api/v1/embarques/:id/validar |

---

## 🔁 Flujo Básico de una Petición

1. El cliente envía una petición HTTP.
2. La ruta recibe la petición.
3. El middleware valida seguridad.
4. El controlador procesa lógica de negocio.
5. El modelo interactúa con la base de datos.
6. La respuesta se devuelve al cliente.

---

## ✅ Pruebas Unitarias

Se usaron:

- Jest
- Supertest

Pruebas implementadas:

- Autenticación
- CRUD de inventario
- CRUD de embarques

---

## 📦 Buenas Prácticas Aplicadas

- Código limpio
- Modularización
- Uso de variables de entorno (.env)
- Documentación de endpoints
- Control de errores centralizado

---

## 🎯 Objetivo Logrado

El backend quedó preparado para:

- Integrarse con el frontend
- Escalar en producción
- Soportar múltiples usuarios concurrentes

---

[← Volver a Desarrollo](index)
