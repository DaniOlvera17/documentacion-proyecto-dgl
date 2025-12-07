---
layout: default
title: Diseño de Base de Datos
---

# 🗄️ Diseño de la Base de Datos

Este documento describe la estructura de la base de datos utilizada por la **Plataforma Web de Gestión de Almacén y Embarques – Diesel Global Logistics Inc.**, la cual fue diseñada en **MariaDB/MySQL**.

---

## 📌 Motor de Base de Datos

| Elemento | Valor |
|----------|------|
| Gestor | MariaDB / MySQL |
| Charset | utf8mb4 |
| Collation | utf8mb4_general_ci |
| Tipo de modelo | Relacional |

---

## 📊 Tablas del Sistema

### 👤 Tabla: `usuario`

Almacena los usuarios del sistema.

| Campo | Tipo | Descripción |
|------|------|-------------|
| id_usuario | int (PK) | Identificador único |
| nombre | varchar(100) | Nombre del usuario |
| rol | enum | Rol del usuario (admin, almacen, auditor, operaciones) |

---

### 🧾 Tabla: `cliente`

| Campo | Tipo | Descripción |
|------|------|-------------|
| id_cliente | int (PK) | Identificador del cliente |
| nombre | varchar(100) | Nombre del cliente |
| incoterm | varchar(20) | Tipo de incoterm |
| contacto | varchar(100) | Datos de contacto |
| telefono | varchar(20) | Teléfono |

---

### 🚚 Tabla: `embarque`

| Campo | Tipo | Descripción |
|------|------|-------------|
| id_emb | int (PK) | Identificador del embarque |
| id_cliente | int (FK) | Relación con cliente |
| fecha_creacion | date | Fecha de creación |
| estado | enum | Estado del embarque |
| transportista | varchar(100) | Nombre del transportista |
| placa | varchar(20) | Placa del vehículo |
| guia | varchar(50) | Número de guía |

---

### 📦 Tabla: `embarquedetalle`

Tabla de relación entre embarques, materiales y destinos.

| Campo | Tipo | Descripción |
|------|------|-------------|
| id_emb | int (FK) | Referencia al embarque |
| id_material | int (FK) | Material enviado |
| id_lote | int (FK) | Lote relacionado |
| id_destino | int (FK) | Destino del embarque |
| cantidad_solicitada | decimal(10,2) | Cantidad solicitada |
| cantidad_confirmada | decimal(10,2) | Cantidad validada |
| ts_confirmacion | datetime | Tiempo de confirmación |

---

### 🧱 Tabla: `material`

| Campo | Tipo | Descripción |
|------|------|-------------|
| id_material | int (PK) | ID del material |
| referencia | varchar(50) | Código del material |
| descripcion | varchar(255) | Descripción |
| familia | varchar(50) | Familia del producto |
| unidad_medida | varchar(20) | Unidad de medida |
| qr_code | varchar(100) | Código QR almacenado |

---

### 📍 Tabla: `ubicacion`

| Campo | Tipo | Descripción |
|------|------|-------------|
| id_ubicacion | int (PK) | ID de la ubicación |
| almacen | varchar(50) | Nombre del almacén |
| pasillo | varchar(20) | Número de pasillo |
| rack | varchar(20) | Rack |
| nivel | varchar(10) | Nivel |
| posicion | varchar(10) | Posición |

---

### 📥 Tabla: `inventario`

| Campo | Tipo | Descripción |
|------|------|-------------|
| id_inv | int (PK) | ID del inventario |
| id_material | int (FK) | Material |
| id_lote | int (FK) | Lote |
| id_destino | int (FK) | Destino |
| id_ubicacion | int (FK) | Ubicación |
| cantidad_disponible | decimal(10,2) | Cantidad disponible |
| cantidad_comprometida | decimal(10,2) | Cantidad comprometida |
| estado_item | varchar(20) | Estado del material |
| ts_ultimo_mov | datetime | Último movimiento |

---

### 🔄 Tabla: `movimiento`

| Campo | Tipo | Descripción |
|------|------|-------------|
| id_mov | int (PK) | ID del movimiento |
| id_inv | int (FK) | Referencia al inventario |
| id_usuario | int (FK) | Usuario responsable |
| tipo | enum | Tipo (entrada, salida, ajuste, bloqueo, desbloqueo) |
| cantidad | decimal(10,2) | Cantidad movida |
| origen | varchar(50) | Origen del movimiento |
| observaciones | text | Comentarios |
| ts_mov | datetime | Fecha del movimiento |

---

### 🧾 Tabla: `proveedor`

| Campo | Tipo | Descripción |
|------|------|-------------|
| id_proveedor | int (PK) | ID del proveedor |
| nombre | varchar(100) | Nombre |
| identificador_fiscal | varchar(50) | RFC |
| contacto | varchar(100) | Contacto |

---

### 📦 Tabla: `lote`

| Campo | Tipo | Descripción |
|------|------|-------------|
| id_lote | int (PK) | ID del lote |
| id_proveedor | int (FK) | Proveedor |
| no_factura | varchar(50) | Número de factura |
| fecha_factura | date | Fecha |
| no_reporte_rp | varchar(50) | Reporte RP |
| fecha_rp | date | Fecha RP |
| estado_lote | varchar(20) | Estado |

---

### 🌍 Tabla: `destino`

| Campo | Tipo | Descripción |
|------|------|-------------|
| id_destino | int (PK) | ID del destino |
| nombre_destino | varchar(100) | Nombre del destino |
| pais | varchar(50) | País |
| ciudad | varchar(50) | Ciudad |
| estado | varchar(50) | Estado |
| direccion | varchar(100) | Dirección |

---

## 🔗 Relaciones Principales

- `cliente` → `embarque`
- `embarque` → `embarquedetalle`
- `material` → `inventario`
- `lote` → `inventario`
- `ubicacion` → `inventario`
- `usuario` → `movimiento`

---

## ✅ Mejoras Propuestas (Implementadas a Nivel Diseño)

Estas mejoras se recomiendan para robustecer el sistema:

### 🛡️ Campos de Auditoría (Sugeridos)

Para todas las tablas principales:

```
