# 🧩 Sprint 4 – Desarrollo Backend  
**Duración:** 3 semanas**  
**Objetivo:**  
Desarrollar la infraestructura backend del sistema, implementar la lógica de negocio (inventarios, embarques, usuarios, reportes), asegurar la comunicación mediante API REST y establecer la base técnica para la integración con el frontend en el Sprint 5.

---

# 1. Actividades Principales del Sprint

- Implementación de la arquitectura backend (Node.js + Express)
- Creación de controladores, servicios y repositorios
- Implementación de middleware de autenticación y roles
- Desarrollo de APIs REST para inventarios, embarques, usuarios y reportes
- Validación de datos y sanitización de entradas
- Integración de base de datos (MySQL/MariaDB)
- Implementación de auditoría automática
- Pruebas unitarias con Jest
- Documentación técnica

---

# 2. Arquitectura Backend

El backend se estructura bajo un patrón **MVC con Servicios (Service Layer)**:

imagen


---

# 3. Tecnologías Implementadas

| Componente           | Tecnología |
|----------------------|------------|
| Backend Framework    | Node.js + Express |
| Base de Datos        | MySQL / MariaDB |
| Seguridad            | JWT, bcrypt, RBAC |
| Pruebas Unitarias    | Jest |
| Validación           | express-validator |
| Auditoría            | Logs + BD |
| QR Code              | qrcode library |

---

# 4. Diseño de API REST

El sistema usa una API REST modular:

---

## 🟦 4.1 Inventarios – `/api/inventarios`

### **POST /materiales**  
Registrar un material  
**Valida:** nombre, código, proveedor, stock inicial  

### **GET /materiales**  
Listar materiales con filtros  

### **PUT /materiales/:id**  
Actualizar datos  

### **POST /qr/generar**  
Generación del código QR  

### **GET /movimientos**  
Historial de entradas y salidas  

---

## 🟨 4.2 Embarques – `/api/embarques`

### **POST /crear**  
Crear orden de embarque  

### **POST /asignar**  
Asignar materiales desde inventario  

### **POST /validar-qr**  
Verificar QR antes del embarque  

### **GET /consultar**  
Consulta de órdenes  

### **GET /detalle/:id**  
Detalle completo de embarque  

---

## 🟧 4.3 Usuarios y Accesos – `/api/auth`

### **POST /login**  
Genera token JWT  

### **POST /register**  
Crea usuario (solo Admin)  

### **GET /roles**  
Lista roles disponibles  

### **PUT /usuarios/:id**  
Edición de datos  

---

## 🟩 4.4 Reportes – `/api/reportes`

### **GET /inventario**  
Reporte completo del inventario  

### **GET /movimientos**  
PDF de movimientos por rango de fechas  

### **GET /embarques**  
Historial de embarques con filtros  

### **GET /dashboard**  
API para frontend con indicadores clave  

---

# 5. Middleware Implementado

---

## 🔐 **5.1 Autenticación (JWT)**  
- Requiere token para todo excepto login  
- Valida expiración y firma  
- Registra usuario activo en `req.user`

---

## 🛡️ **5.2 Roles (RBAC)**  
Roles: Admin, Gestor, Operador, Cliente Interno

Control de acceso:

imagen


---

## 📋 **5.3 Auditoría Automática**  
Registra:  
- usuario  
- fecha  
- endpoint  
- acción (crear, actualizar, login, etc.)  

---

# 6. Validaciones

### Validaciones generales:
- Sanitización de entradas  
- Campos obligatorios  
- Validaciones regex  
- Integridad de stock  
- Validación de QR  
- Integridad referencial  

### Ejemplos:
- Código de material: `/^[A-Z0-9-]{3,20}$/`  
- Cantidad: números positivos  
- Email válido  

---

# 7. Servicios (Business Logic)

Los servicios encapsulan operaciones principales:

---

## 🟦 **7.1 Servicio de Inventarios**
- Registrar material  
- Actualizar stock  
- Registrar movimiento  
- Generar alerta de stock mínimo  
- Generar y leer QR  

---

## 🟨 **7.2 Servicio de Embarques**
- Crear embarque  
- Asignar materiales  
- Validar existencia  
- Validar QR  
- Cambiar estado de la orden  

---

## 🟧 **7.3 Servicio de Usuarios**
- Crear usuario  
- Autenticación  
- Cambio de contraseña  
- Permisos por rol  

---

## 🟩 **7.4 Servicio de Reportes**
- Inventario general  
- Movimientos por fecha  
- Embarques  
- Dashboard de gerencia  

---

# 8. Pruebas Unitarias (Jest)

Pruebas realizadas:

---

## 🔹 Autenticación
- Login correcto  
- Token válido  
- Token expirado  

---

## 🔹 Inventarios
- Registrar material  
- Stock insuficiente  
- QR inválido  
- Historial de movimientos  

---

## 🔹 Embarques
- Crear embarque  
- Asignación válida  
- Estado incorrecto  
- Validación QR  

---

## 🔹 Usuarios
- Crear usuario  
- Rol incorrecto  
- Permisos  

---

# 9. Integración con la Base de Datos

Funciones clave:

### ✔ Conexión pool MySQL  
### ✔ Transacciones para embarques  
### ✔ Restricciones de integridad  
### ✔ Vistas para reportes  

---

# 10. Entregables del Sprint 4

📁 `/docs/backend/arquitectura-backend.md`  
📁 `/docs/backend/estructura-carpetas.md`  
📁 `/docs/backend/api-rest.md`  
📁 `/docs/backend/validaciones.md`  
📁 `/docs/backend/auditoria.md`  
📁 `/docs/backend/pruebas-unitarias.md`  
📁 Backend versión 1.0 en GitHub  

---

# 11. Validación del Sprint 4

✔ API funcional  
✔ Seguridad integrada  
✔ Pruebas unitarias completas  
✔ Auditoría activa  
✔ Backend listo para conectarse con el Frontend (Sprint 5)  

> Aprobado por Gestor del proyecto y QA.  
