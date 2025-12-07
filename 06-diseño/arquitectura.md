---
layout: default
title: Arquitectura del Sistema
---

# 🏗️ Arquitectura del Sistema

Este documento describe la arquitectura técnica de la **Plataforma Web de Gestión de Almacén y Embarques – Diesel Global Logistics Inc.**, definiendo su estructura, componentes y tecnologías utilizadas.

---

## 🧩 Tipo de Arquitectura

El sistema está basado en una **arquitectura de tres capas (3-Tier Architecture)**:

| Capa | Descripción |
|------|-------------|
| **Presentación (Frontend)** | Interfaz web accesible desde navegador |
| **Lógica de negocio (Backend)** | Procesa reglas, validaciones y flujos |
| **Datos (Base de Datos)** | Almacenamiento persistente de la información |

---

## 🗂️ Componentes del Sistema

### 1. Frontend (Capa de Presentación)

- Tecnología: **HTML5, CSS3, JavaScript**
- Framework sugerido: **React.js** o **Vue.js**
- Funciones principales:
  - Formularios de inventario
  - Gestión de embarques
  - Panel de reportes
  - Autenticación de usuarios

---

### 2. Backend (Capa de Lógica de Negocio)

- Tecnología base: **Node.js con Express**
- Funciones principales:
  - API REST
  - Autenticación (JWT)
  - Validaciones de negocio
  - Manejo de roles y permisos (RBAC)

---

### 3. Base de Datos (Capa de Datos)

- Motor: **PostgreSQL**
- Responsabilidades:
  - Almacenar inventarios
  - Registrar movimientos
  - Guardar usuarios y roles
  - Mantener trazabilidad

---

## 🔐 Seguridad de la Arquitectura

Se implementan las siguientes medidas:

- Autenticación basada en **JSON Web Tokens (JWT)**
- Control de acceso por roles (**RBAC**)
- Encriptación de contraseñas con **bcrypt**
- Comunicación segura mediante **HTTPS/SSL**

---

## 🌐 Diagrama de Arquitectura (Texto)
```
[ Usuario ]
|
v
[ Navegador Web ]
|
v
[ Frontend (React/Vue) ]
|
v
[ API REST - Node.js / Express ]
|
v
[ Base de Datos PostgreSQL ]
```
---

## 🛠️ Tecnologías Seleccionadas

| Componente | Tecnología |
|------------|------------|
| Frontend | HTML, CSS, JavaScript, React |
| Backend | Node.js + Express |
| Base de Datos | PostgreSQL |
| Autenticación | JWT |
| Servidor | Linux / Nginx |
| Control de versiones | Git + GitHub |

---

## 🎯 Beneficios de esta Arquitectura

- Separación de responsabilidades
- Fácil mantenimiento
- Escalabilidad
- Mayor seguridad
- Facilidad de testing

---

[← Volver a Diseño del Sistema](index)
