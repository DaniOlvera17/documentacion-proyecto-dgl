# 🧩 Sprint 3 – Diseño del Sistema  
**Duración:** 3 semanas**  
**Objetivo:**  
Diseñar la arquitectura técnica, la base de datos, el modelo de interfaces y la experiencia de usuario del sistema de Gestión de Almacén y Embarques para Diesel Global. El propósito es establecer una base sólida para iniciar el desarrollo en los siguientes sprints.

---

# 1. Actividades Principales del Sprint

- Diseño de la arquitectura general del sistema  
- Definición de la estructura Frontend–Backend  
- Diseño del Modelo Entidad-Relación (DER)  
- Normalización de tablas  
- Definición de API REST y endpoints  
- Diseño UX/UI (wireframes, flujos, vistas)  
- Selección de tecnologías frontend y backend  
- Reglas de negocio y validaciones  
- Estándares de desarrollo y seguridad  
- Documentación en GitHub Pages

---

# 2. Arquitectura del Sistema

Se adopta un modelo **cliente–servidor**, bajo los siguientes componentes:

---

## 🟦 **2.1 Arquitectura General**

Imagen


### ● **Frontend**
- Framework: React o Vue  
- Estilo: TailwindCSS  
- Lógica de validación en cliente  
- Lectura de QR desde navegador  

### ● **Backend**
- Node.js con Express  
- Modularizado por servicios: inventarios, embarques, usuarios, reportes  
- Controladores, servicios y repositorios  

### ● **Base de Datos**
- MySQL / MariaDB  
- Integridad referencial  
- Stored Procedures para casos críticos  

### ● **Seguridad**
- Autenticación JWT  
- Roles y permisos (RBAC)  
- Cifrado AES-256  
- Protección OWASP  

---

# 3. Modelo Entidad-Relación (DER)

El sistema cuenta con **12 tablas principales**, organizadas por módulos.

---

## 🟧 **3.1 Tablas del módulo de Inventarios**
| Tabla | Descripción |
|-------|-------------|
| materiales | Catálogo de materiales |
| stock | Control de existencias |
| movimientos | Registro de entradas/salidas |
| categorias | Clasificación del inventario |
| proveedores | Información de proveedores |

### Relación clave:
- **materiales 1 — N stock**
- **materiales 1 — N movimientos**

---

## 🟨 **3.2 Tablas del módulo de Embarques**
| Tabla | Descripción |
|-------|-------------|
| embarques | Cabecera de embarque |
| embarque_detalle | Materiales asignados |
| clientes | Datos del cliente |
| estados_embarque | Historial de estados |

Relaciones:
- **embarques 1 — N embarque_detalle**  
- **clientes 1 — N embarques**

---

## 🟩 **3.3 Tablas del módulo de Seguridad y Administración**
| Tabla | Descripción |
|-------|-------------|
| usuarios | Cuenta del sistema |
| roles | Rol asignado |
| permisos | Accesos |
| auditoria | Registro de operaciones |

Relaciones:
- **roles 1 — N usuarios**
- **usuarios 1 — N auditoria**

---

## 🔷 **3.4 Diagrama DER (Descripción textual)**

imagen


---

# 4. Diseño de API REST

A continuación se definen los endpoints base:

---

## 🔹 **4.1 Inventarios – /api/inventarios**
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | /materiales | Lista materiales |
| POST | /materiales | Crear material |
| PUT | /materiales/{id} | Actualizar |
| GET | /movimientos | Histórico |
| POST | /qr/generar | Genera QR |

---

## 🔹 **4.2 Embarques – /api/embarques**
| Método | Endpoint |
|--------|----------|
| POST | /crear |
| POST | /asignar |
| POST | /validar-qr |
| GET | /consultar |
| GET | /detalle/{id} |

---

## 🔹 **4.3 Usuarios y Seguridad – /api/auth**
- POST /login  
- POST /logout  
- POST /register  
- GET /roles  
- PUT /usuarios/{id}  

---

# 5. Diseño UX/UI (Wireframes)

Los wireframes incluyen:

## 🟦 Módulo Inventario
- Pantalla principal de materiales  
- Registro de material  
- Lectura de QR  
- Historial de movimientos  

## 🟨 Módulo Embarques
- Crear embarque  
- Asignar materiales  
- Vista de detalle  
- Flujo de estados  

## 🟦 Panel Administrativo
- Gestión de usuarios  
- Roles y permisos  
- Configuración general  

## 🟧 Reportes
- Dashboard con gráficas de stock  
- Inventarios  
- Movimientos  
- Embarques  

> Wireframes desarrollados con Figma y validados por el equipo de diseño.

---

# 6. Estándares del Sprint 3

## ✔ Estándares técnicos
- Arquitectura en módulos  
- Código limpio (Clean Code)  
- Uso de control de versiones  
- Convenciones RESTful  
- eslint / prettier  

## ✔ Estándares de calidad
- Métricas de rendimiento  
- Validación de accesos  
- Estándares WCAG  
- Validaciones del lado servidor  

## ✔ Estándares de seguridad
- JWT  
- Hash bcrypt  
- Sanitización de entradas  
- Registros de auditoría  

---

# 7. Validación del Sprint 3

✔ Revisión técnica interna  
✔ Retroalimentación de stakeholders  
✔ DER aprobado  
✔ Arquitectura aceptada  
✔ Wireframes validados por diseño  
✔ API REST documentada  
✔ Inicio del Sprint 4 autorizado  

---

# 8. Entregables del Sprint 3

📁 **/docs/arquitectura/arquitectura-general.md**  
📁 **/docs/arquitectura/der.md**  
📁 **/docs/ux/wireframes.md**  
📁 **/docs/api/endpoints.md**  
📁 **/docs/estandares/estandares-tecnicos.md**  
📁 **/docs/estandares/estandares-seguridad.md**  

---

> Sprint 3 finalizado y aprobado.  
> El equipo queda listo para iniciar el Sprint 4: Desarrollo Backend.


