---
layout: default
title: Casos de Prueba
---

# 📋 Casos de Prueba

Este documento contiene los casos de prueba definidos para validar la Plataforma Web de Gestión de Almacén y Embarques – Diesel Global Logistics Inc.

---

## 🧾 Formato Estándar de Caso de Prueba

| Campo | Descripción |
|------|-------------|
| ID | Identificador único del caso |
| Nombre | Nombre del caso |
| Módulo | Módulo del sistema |
| Precondición | Estado previo requerido |
| Pasos | Acciones a ejecutar |
| Resultado esperado | Resultado correcto |
| Resultado real | Resultado observado |
| Estado | Aprobado / Fallido |

---

## ✅ Casos de Prueba – Autenticación

### 🧪 CT-01 – Inicio de Sesión Válido

| Campo | Valor |
|-------|-------|
| ID | CT-01 |
| Nombre | Inicio de sesión válido |
| Módulo | Autenticación |
| Precondición | Usuario registrado |
| Pasos | 1. Abrir login<br>2. Ingresar credenciales válidas<br>3. Clic en "Entrar" |
| Resultado esperado | Acceso autorizado |
| Estado | ✅ Aprobado |

---

### 🧪 CT-02 – Inicio de Sesión Inválido

| Campo | Valor |
|-------|-------|
| ID | CT-02 |
| Nombre | Inicio de sesión inválido |
| Módulo | Autenticación |
| Precondición | Usuario no registrado |
| Pasos | 1. Abrir login<br>2. Ingresar credenciales incorrectas<br>3. Clic en "Entrar" |
| Resultado esperado | Mensaje de error |
| Estado | ✅ Aprobado |

---

## 📦 Casos de Prueba – Inventarios

### 🧪 CT-03 – Registrar Nuevo Material

| Campo | Valor |
|-------|-------|
| ID | CT-03 |
| Nombre | Registrar material |
| Módulo | Inventarios |
| Precondición | Usuario autenticado |
| Pasos | 1. Entrar a Inventarios<br>2. Clic en "Nuevo"<br>3. Capturar datos<br>4. Guardar |
| Resultado esperado | Material registrado |
| Estado | ✅ Aprobado |

---

### 🧪 CT-04 – Actualizar Stock

| Campo | Valor |
|-------|-------|
| ID | CT-04 |
| Nombre | Actualizar stock |
| Módulo | Inventarios |
| Precondición | Material existente |
| Pasos | 1. Seleccionar material<br>2. Editar cantidad<br>3. Guardar |
| Resultado esperado | Stock actualizado |
| Estado | ✅ Aprobado |

---

## 🚚 Casos de Prueba – Embarques

### 🧪 CT-05 – Crear Embarque

| Campo | Valor |
|-------|-------|
| ID | CT-05 |
| Nombre | Crear embarque |
| Módulo | Embarques |
| Precondición | Usuario autenticado |
| Pasos | 1. Ir módulo Embarques<br>2. Crear orden<br>3. Asignar materiales<br>4. Guardar |
| Resultado esperado | Embarque creado |
| Estado | ✅ Aprobado |

---

### 🧪 CT-06 – Validar Embarque con QR

| Campo | Valor |
|-------|-------|
| ID | CT-06 |
| Nombre | Validar embarque con QR |
| Módulo | Embarques |
| Precondición | Embarque creado |
| Pasos | 1. Escanear QR<br>2. Validar datos |
| Resultado esperado | Embarque validado |
| Estado | ✅ Aprobado |

---

## 📊 Casos de Prueba – Reportes

### 🧪 CT-07 – Generar Reporte de Inventarios

| Campo | Valor |
|-------|-------|
| ID | CT-07 |
| Nombre | Generar reporte de inventarios |
| Módulo | Reportes |
| Precondición | Datos disponibles |
| Pasos | 1. Ir a Reportes<br>2. Seleccionar “Inventarios”<br>3. Generar |
| Resultado esperado | Reporte mostrado |
| Estado | ✅ Aprobado |

---

### 🧪 CT-08 – Generar Reporte de Embarques

| Campo | Valor |
|-------|-------|
| ID | CT-08 |
| Nombre | Generar reporte de embarques |
| Módulo | Reportes |
| Precondición | Embarques registrados |
| Pasos | 1. Ir a Reportes<br>2. Seleccionar “Embarques”<br>3. Generar |
| Resultado esperado | Reporte mostrado |
| Estado | ✅ Aprobado |

---

## 🧪 Casos de Prueba – Avatar Inteligente

### 🧪 CT-09 – Mensaje Automático del Avatar

| Campo | Valor |
|-------|-------|
| ID | CT-09 |
| Nombre | Mensaje automático avatar |
| Módulo | Avatar |
| Precondición | Usuario autenticado |
| Pasos | 1. Iniciar sesión<br>2. Observar mensaje del avatar |
| Resultado esperado | El avatar saluda al usuario |
| Estado | ✅ Aprobado |

---

### 🧪 CT-10 – Alerta de Stock Bajo

| Campo | Valor |
|-------|-------|
| ID | CT-10 |
| Nombre | Alerta de stock bajo |
| Módulo | Avatar |
| Precondición | Inventario bajo |
| Pasos | 1. Reducir stock a nivel crítico<br>2. Observar alerta |
| Resultado esperado | El avatar muestra advertencia |
| Estado | ✅ Aprobado |

---

[← Volver a Gestión de Calidad](index)
