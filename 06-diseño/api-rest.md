---
layout: default
title: Diseño de API REST
---

# 🔌 Diseño de la API REST

Este documento describe el diseño de la **API REST** de la Plataforma Web de Gestión de Almacén y Embarques – Diesel Global Logistics Inc.

La API permite la comunicación entre el **Frontend (cliente web)** y el **Backend (servidor)** usando **HTTP** y formato **JSON**.

---

## 📐 Estándares de la API

| Elemento | Especificación |
|----------|----------------|
| Protocolo | HTTP / HTTPS |
| Formato de datos | JSON |
| Arquitectura | REST |
| Autenticación | JWT (JSON Web Token) |
| Versionado | `/api/v1` |

---

## 🔐 Seguridad

La API implementa:

- Autenticación con token JWT
- Control de acceso basado en roles (RBAC)
- Comunicación segura sobre HTTPS
- Validación de entradas del usuario
- Manejo centralizado de errores

---

## 👤 Endpoints de Autenticación

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/v1/auth/login` | Iniciar sesión |
| POST | `/api/v1/auth/logout` | Cerrar sesión |
| GET | `/api/v1/auth/profile` | Obtener perfil del usuario |

### 📝 Ejemplo Request – Login

```
POST /api/v1/auth/login

{
  "usuario": "admin",
  "password": "123456"
}

Ejemplo Response – Login
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "usuario": {
    "id": 1,
    "nombre": "Administrador",
    "rol": "ADMIN"
  }
}
```


## 🚚 Endpoints – Embarques

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/v1/embarques` | Listar embarques |
| GET | `/api/v1/embarques/{id}` | Consultar embarque |
| POST | `/api/v1/embarques` | Crear embarque |
| PUT | `/api/v1/embarques/{id}` | Actualizar embarque |
| POST | `/api/v1/embarques/{id}/validar` | Validar embarque con QR |

---

## 📊 Endpoints – Reportes

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/v1/reportes/inventario` | Generar reporte de inventario |
| GET | `/api/v1/reportes/embarques` | Generar reporte de embarques |
| GET | `/api/v1/reportes/dashboard` | Obtener datos de dashboard |

---

## ❗ Códigos de Respuesta HTTP

| Código | Significado |
|--------|------------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

---

## 🧪 Pruebas de la API

La API puede probarse con:

- Postman
- Insomnia
- Pruebas automatizadas con Jest

---

## 🎯 Objetivo de la API

- Comunicación segura entre cliente y servidor
- Estandarización de servicios
- Escalabilidad y mantenibilidad del sistema

---

[← Volver al Diseño del Sistema](index)
