# 🧩 Sprint 2 – Definición y Análisis de Requisitos  
**Duración:** 2 semanas  
**Objetivo del Sprint:**  
Levantar, documentar y aprobar los requisitos funcionales y no funcionales del sistema, incluyendo su clasificación por módulos, criterios de aceptación y métricas de cumplimiento. Este sprint constituye la base formal del diseño técnico del sistema.

---

# 1. Actividades Principales del Sprint
- Reuniones con stakeholders de Diesel Global Logistics Inc.  
- Análisis de procesos AS-IS (inventario y embarques)  
- Definición de procesos TO-BE  
- Documentación de 26 requisitos funcionales  
- Documentación de 7 requisitos no funcionales  
- Validación formal del documento de requisitos (SRS)  
- Estructuración de módulos del sistema  
- Definición de criterios de aceptación  
- Inclusión de métricas medibles para auditoría de calidad  

---

# 2. Requisitos Funcionales (RF)

Los requisitos funcionales fueron organizados en 5 módulos principales.

---

## 🔹 **MÓDULO 1: Gestión de Inventarios (7 RF)**

### **RF-INV-001 – Registro de materiales**
**Prioridad:** Alta  
**Descripción:** El sistema deberá permitir registrar materiales con nombre, código, descripción, proveedor y cantidad inicial.  
**Criterios de aceptación:**  
- Validación de campos obligatorios  
- Registro exitoso con confirmación  
**Entradas:** nombre, código, proveedor  
**Salidas:** material almacenado  

---

### **RF-INV-002 – Consulta de inventario**
**Prioridad:** Alta  
**Criterios de aceptación:**  
- Búsqueda por nombre, código o categoría  
- Resultados en < 3 segundos  

---

### **RF-INV-003 – Actualización de stock**
**Prioridad:** Alta  
**Criterios:**  
- Operaciones de entrada/salida registradas con usuario y fecha  

---

### **RF-INV-004 – Gestión de códigos QR**
**Prioridad:** Media  
**Criterios:**  
- Generación automática de QR al registrar un material  
- Lectura de QR desde el módulo de inventario  

---

### **RF-INV-005 – Alertas de stock mínimo**
**Prioridad:** Alta  
**Criterios:**  
- Se envía alerta cuando el stock llega al mínimo configurado  

---

### **RF-INV-006 – Historial de movimientos**
**Prioridad:** Alta  
**Criterios:**  
- Registrar entradas, salidas, usuario, fecha y motivo  

---

### **RF-INV-007 – Auditoría de inventario**
**Prioridad:** Media  
**Criterios:**  
- Generar bitácora descargable en Excel y PDF  

---

## 🔹 **MÓDULO 2: Gestión de Embarques (6 RF)**

### **RF-EMB-001 – Crear órdenes de embarque**
**Prioridad:** Alta  
**Criterios:**  
- Registro de cliente, orden, fecha y materiales asignados  

---

### **RF-EMB-002 – Asignación de materiales**
**Prioridad:** Alta  
**Criterios:**  
- Validación automática de existencia en inventario  

---

### **RF-EMB-003 – Validación con QR**
**Prioridad:** Alta  
**Criterios:**  
- Solo se aceptan materiales cuyo QR coincida con inventario  

---

### **RF-EMB-004 – Documentación automática**
**Prioridad:** Media  
**Criterios:**  
- Generación automática de documento PDF de embarque  

---

### **RF-EMB-005 – Seguimiento de estados**
**Prioridad:** Media  
**Criterios:**  
- Estados permitidos: Pendiente, En proceso, Completado  

---

### **RF-EMB-006 – Consulta de embarques**
**Prioridad:** Alta  
**Criterios:**  
- Filtros por fecha, cliente, estatus y operador  

---

## 🔹 **MÓDULO 3: Reportes y Análisis (4 RF)**

### **RF-REP-001 – Reporte de inventario**
**Prioridad:** Media  

### **RF-REP-002 – Reporte de movimientos**
**Prioridad:** Media  

### **RF-REP-003 – Reporte de embarques**
**Prioridad:** Media  

### **RF-REP-004 – Dashboard ejecutivo**
**Prioridad:** Baja  
**Criterios:**  
- Gráficas de inventario, embarques y rotación  

---

## 🔹 **MÓDULO 4: Administración y Seguridad (6 RF)**

### **RF-ADM-001 – Gestión de usuarios**
**Prioridad:** Alta  

### **RF-ADM-002 – Roles y permisos (RBAC)**
**Prioridad:** Alta  

### **RF-ADM-003 – Autenticación**
**Prioridad:** Crítica  
**Criterios:**  
- Inicio de sesión seguro con cifrado  

---

### **RF-ADM-004 – Auditoría del sistema**
**Prioridad:** Alta  

### **RF-ADM-005 – Configuración general**
**Prioridad:** Media  

### **RF-ADM-006 – Respaldos**
**Prioridad:** Media  

---

## 🔹 **MÓDULO 5: Funcionalidades Adicionales (3 RF)**

### **RF-EXT-001 – Notificaciones**
### **RF-EXT-002 – Búsqueda global**
### **RF-EXT-003 – Ayuda contextual**

---

# 3. Requisitos No Funcionales (RNF)

---

## 🛡️ **RNF-01 – Seguridad (Crítica)**  
**Criterios:**  
- Autenticación obligatoria  
- RBAC  
- Cifrado AES-256  
- Protección OWASP  

---

## ⚡ **RNF-02 – Rendimiento (Alta)**  
- Operaciones principales < 3s  
- Soporte para 50 usuarios concurrentes  

---

## 🎨 **RNF-03 – Usabilidad (Alta)**  
- Cumplir WCAG 2.1  
- Interfaz consistente  

---

## 🟢 **RNF-04 – Disponibilidad (Alta)**  
- Uptime ≥ 99.5%  

---

## 🔗 **RNF-05 – Integridad (Crítica)**  
- Integridad referencial en BD  
- Validaciones obligatorias  

---

## 🔧 **RNF-06 – Mantenibilidad (Media)**  
- Código documentado  
- Arquitectura modular  

---

## 🏥 **RNF-07 – Recuperación (Media)**  
- Respaldo diario  
- RTO < 2 hrs  
- RPO < 24 hrs  

---

# 4. Validación del Sprint 2

✔ Documento SRS aprobado  
✔ Requisitos funcionales (26) completados  
✔ Requisitos no funcionales (7) documentados  
✔ Validación con Gestor y Stakeholders  
✔ Se habilita el inicio del Sprint 3 (Diseño del Sistema)

---

# 5. Entregables del Sprint 2

📄 requisitos-funcionales.md  
📄 requisitos-no-funcionales.md  
📄 historias-de-usuario.md  
📄 diagramas-as-is-to-be.md  
📄 versión del SRS publicada en GitHub Pages  

---

