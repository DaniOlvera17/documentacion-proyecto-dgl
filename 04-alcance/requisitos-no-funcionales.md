---
layout: default
title: Requisitos No Funcionales
---

# 🔧 Requisitos No Funcionales del Sistema

<div class="hero-section">
  <h2>Atributos de Calidad y Restricciones Técnicas</h2>
  <p>Especificación de requisitos de calidad, rendimiento, seguridad y usabilidad</p>
</div>

---

## 📋 Información General

<div class="info-box">
  <strong>Proyecto:</strong> Plataforma Web de Gestión de Inventarios y Embarques<br>
  <strong>Código:</strong> PROJ-2025-001<br>
  <strong>Versión del Documento:</strong> 1.0<br>
  <strong>Fecha de Creación:</strong> 3 de diciembre de 2025<br>
  <strong>Responsable:</strong> José Pedro Cruz Ramírez (Analista)
</div>

---

## 🎯 Alcance de Requisitos No Funcionales

Los requisitos no funcionales especifican los atributos de calidad del sistema y las restricciones bajo las cuales debe operar. Estos requisitos son críticos para garantizar que el sistema sea seguro, confiable, eficiente y fácil de usar.

---

## 🔐 RNF-01: Seguridad

<div class="danger-box">
  <strong>Categoría:</strong> Seguridad<br>
  <strong>Prioridad:</strong> <span class="badge badge-danger">Crítica</span><br>
  <strong>ID:</strong> RNF-01
</div>

### Descripción
El sistema debe implementar medidas de seguridad robustas para proteger la información y las operaciones, incluyendo autenticación obligatoria, control de roles y trazabilidad de operaciones.

### Criterios de Cumplimiento

#### 1. Autenticación Obligatoria
- **Requisito:** Todos los usuarios deben autenticarse para acceder al sistema
- **Implementación:**
  - Login con usuario y contraseña
  - Política de contraseñas seguras (mínimo 8 caracteres, mayúsculas, minúsculas, números y caracteres especiales)
  - Bloqueo de cuenta después de 5 intentos fallidos
  - Sesión expira después de 30 minutos de inactividad
  - Cierre de sesión manual disponible

#### 2. Control de Roles (RBAC - Role Based Access Control)
- **Requisito:** El sistema debe implementar control de acceso basado en roles
- **Roles del Sistema:**
  - **Administrador:** Acceso total
  - **Supervisor de Almacén:** Gestión completa de inventario y embarques
  - **Operador de Almacén:** Registro de movimientos y consultas
  - **Operador de Embarques:** Gestión de órdenes de embarque
  - **Consultor:** Solo visualización de reportes
- **Implementación:**
  - Cada acción del sistema valida permisos del usuario
  - Matriz de permisos por rol (CRUD por módulo)
  - Mensajes de error claros cuando se intenta acceso no autorizado

#### 3. Trazabilidad de Operaciones
- **Requisito:** Todas las operaciones críticas deben quedar registradas en un log de auditoría
- **Operaciones Auditadas:**
  - Inicios y cierres de sesión
  - Creación, modificación y eliminación de registros
  - Cambios de estado de embarques
  - Ajustes de inventario
  - Cambios en configuración del sistema
- **Información Registrada:**
  - Usuario que ejecutó la acción
  - Fecha y hora exacta
  - Tipo de acción realizada
  - Datos antes y después del cambio
  - Dirección IP
- **Retención:** Mínimo 12 meses

#### 4. Cifrado de Datos
- **Requisito:** Datos sensibles deben estar cifrados
- **Implementación:**
  - Contraseñas almacenadas con hash BCrypt o Argon2
  - Comunicación HTTPS/TLS 1.2 o superior
  - Tokens de sesión cifrados
  - Respaldos de base de datos cifrados

#### 5. Protección contra Vulnerabilidades Comunes
- **OWASP Top 10:**
  - Inyección SQL: Uso de consultas parametrizadas
  - Cross-Site Scripting (XSS): Sanitización de inputs
  - Cross-Site Request Forgery (CSRF): Tokens CSRF en formularios
  - Autenticación rota: Implementación segura de sesiones
  - Exposición de datos sensibles: Cifrado y no exposición en logs

### Métricas de Cumplimiento
- ✅ 100% de operaciones críticas auditadas
- ✅ 0 vulnerabilidades críticas en auditorías de seguridad
- ✅ Cumplimiento de estándar **ISO/IEC 27001**

---

## ⚡ RNF-02: Rendimiento

<div class="warning-box">
  <strong>Categoría:</strong> Rendimiento<br>
  <strong>Prioridad:</strong> <span class="badge badge-danger">Alta</span><br>
  <strong>ID:</strong> RNF-02
</div>

### Descripción
Las operaciones principales del sistema deben ejecutarse en menos de 3 segundos para garantizar una experiencia de usuario fluida y eficiente.

### Criterios de Cumplimiento

#### 1. Tiempo de Respuesta de Operaciones
- **Operaciones Principales:**
  - **Login:** < 2 segundos
  - **Consulta de inventario:** < 3 segundos
  - **Registro de movimiento:** < 2 segundos
  - **Creación de orden de embarque:** < 3 segundos
  - **Escaneo de código QR:** < 1 segundo
  - **Generación de reporte simple:** < 5 segundos
  - **Generación de reporte complejo:** < 10 segundos
  - **Carga de dashboard:** < 3 segundos

#### 2. Capacidad de Usuarios Concurrentes
- **Requisito:** El sistema debe soportar al menos 50 usuarios concurrentes sin degradación del rendimiento
- **Implementación:**
  - Pruebas de carga antes del despliegue
  - Monitoreo de recursos del servidor en producción
  - Optimización de consultas a base de datos

#### 3. Tamaño de Base de Datos
- **Requisito:** El sistema debe mantener buen rendimiento con:
  - Hasta 100,000 registros de materiales
  - Hasta 500,000 movimientos de inventario
  - Hasta 50,000 órdenes de embarque
- **Implementación:**
  - Índices en columnas de búsqueda frecuente
  - Archivado de datos históricos mayores a 2 años
  - Optimización de consultas SQL

#### 4. Optimización de Recursos
- **Frontend:**
  - Lazy loading de imágenes y componentes
  - Compresión de assets (JS, CSS, imágenes)
  - Caché de recursos estáticos
- **Backend:**
  - Caché de consultas frecuentes (Redis)
  - Pool de conexiones a base de datos
  - Compresión de respuestas HTTP (gzip)

### Métricas de Cumplimiento
- ✅ 95% de operaciones en < 3 segundos
- ✅ Tiempo de carga de página inicial < 5 segundos
- ✅ 50+ usuarios concurrentes sin degradación

---

## 🎨 RNF-03: Usabilidad

<div class="info-box">
  <strong>Categoría:</strong> Usabilidad<br>
  <strong>Prioridad:</strong> <span class="badge badge-danger">Alta</span><br>
  <strong>ID:</strong> RNF-03
</div>

### Descripción
El sistema debe tener una interfaz simple, con diseño uniforme y mensajes claros de validación para facilitar su uso por parte de usuarios con diferentes niveles de experiencia tecnológica.

### Criterios de Cumplimiento

#### 1. Interfaz Simple e Intuitiva
- **Principios de Diseño:**
  - Diseño limpio y minimalista
  - Jerarquía visual clara
  - Navegación consistente en todas las pantallas
  - Máximo 3 clics para llegar a cualquier funcionalidad
  - Breadcrumbs para orientación del usuario
- **Iconografía:**
  - Iconos universalmente reconocibles
  - Tooltips explicativos en iconos y botones
  - Colores consistentes (verde: éxito, rojo: error, amarillo: advertencia, azul: información)

#### 2. Diseño Uniforme
- **Consistencia Visual:**
  - Paleta de colores oficial de Diesel Global (#264555, #2C8CC4, #6BA0B4, #E5F3F5)
  - Tipografía consistente en todo el sistema
  - Espaciado y alineación uniformes
  - Botones y controles con mismo estilo
  - Layout consistente entre módulos
- **Componentes Reutilizables:**
  - Tablas con mismo formato
  - Formularios con estructura similar
  - Modales y ventanas emergentes uniformes
  - Mensajes de confirmación con mismo diseño

#### 3. Mensajes Claros de Validación
- **Validación de Formularios:**
  - Validación en tiempo real (mientras el usuario escribe)
  - Mensajes específicos del error (no genéricos)
  - Indicador visual en el campo con error (borde rojo)
  - Icono de error junto al campo
  - Mensaje descriptivo de cómo corregir el error
- **Ejemplos de Mensajes:**
  - ❌ "Error en el formulario" → ✅ "El código de material debe tener entre 4 y 10 caracteres alfanuméricos"
  - ❌ "Campo inválido" → ✅ "El correo electrónico debe tener un formato válido (ejemplo@dominio.com)"
  - ❌ "No se puede guardar" → ✅ "No hay stock suficiente. Disponible: 50 piezas, solicitado: 100 piezas"

#### 4. Retroalimentación al Usuario
- **Confirmaciones:**
  - Mensaje de éxito después de cada operación
  - Indicador de carga durante operaciones largas (spinner)
  - Confirmación antes de acciones destructivas (eliminar, cancelar)
- **Ayuda Contextual:**
  - Botón de ayuda (?) en cada pantalla
  - Placeholders descriptivos en campos de entrada
  - Ejemplos de formato esperado

#### 5. Accesibilidad
- **WCAG 2.1 Nivel AA:**
  - Contraste adecuado de texto (mínimo 4.5:1)
  - Navegación por teclado (Tab, Enter, Esc)
  - Etiquetas descriptivas en formularios
  - Textos alternativos en imágenes
  - Tamaño de fuente ajustable

#### 6. Responsividad
- **Diseño Adaptativo:**
  - Funcional en desktop (1920x1080, 1366x768)
  - Funcional en tablets (iPad, Android tablets)
  - Funcional en móviles (iPhone, Android phones)
  - Menú hamburguesa en pantallas pequeñas
  - Tablas scrolleables horizontalmente en móvil

### Métricas de Cumplimiento
- ✅ Tiempo promedio de capacitación < 4 horas
- ✅ Tasa de error de usuario < 5%
- ✅ Satisfacción de usuarios ≥ 80% en encuestas
- ✅ 90% de usuarios completan tareas sin ayuda

---

## 🟢 RNF-04: Disponibilidad

<div class="success-box">
  <strong>Categoría:</strong> Disponibilidad<br>
  <strong>Prioridad:</strong> <span class="badge badge-danger">Alta</span><br>
  <strong>ID:</strong> RNF-04
</div>

### Descripción
El sistema debe estar disponible durante el horario laboral estándar para asegurar la continuidad de las operaciones de almacén y embarques.

### Criterios de Cumplimiento

#### 1. Horario de Disponibilidad
- **Disponibilidad Garantizada:**
  - **Lunes a Viernes:** 6:00 AM - 8:00 PM (horario de México)
  - **Sábados:** 8:00 AM - 2:00 PM
  - **Total:** 74 horas semanales
- **Disponibilidad Meta:** ≥ 99.5% durante horario laboral
  - Tiempo de inactividad permitido: < 22 minutos por mes

#### 2. Ventanas de Mantenimiento
- **Mantenimiento Programado:**
  - Domingos de 12:00 AM a 6:00 AM
  - Notificación con 72 horas de anticipación
  - Duración máxima: 4 horas
  - Frecuencia máxima: 1 vez al mes
- **Mantenimiento de Emergencia:**
  - Solo en caso de vulnerabilidad crítica de seguridad
  - Notificación inmediata a usuarios activos
  - Resolución en < 2 horas

#### 3. Monitoreo y Alertas
- **Monitoreo Continuo:**
  - Ping cada 5 minutos para verificar disponibilidad
  - Monitoreo de recursos del servidor (CPU, RAM, disco)
  - Monitoreo de base de datos (conexiones, consultas lentas)
- **Sistema de Alertas:**
  - Alerta automática si el sistema no responde
  - Notificación al equipo técnico vía correo y SMS
  - Escalamiento si no hay respuesta en 15 minutos

#### 4. Plan de Recuperación
- **RTO (Recovery Time Objective):** < 2 horas
- **RPO (Recovery Point Objective):** < 24 horas (datos del respaldo diario)
- **Procedimientos:**
  - Restauración desde respaldo más reciente
  - Failover a servidor de respaldo (si está disponible)
  - Comunicación inmediata a stakeholders

### Métricas de Cumplimiento
- ✅ Uptime ≥ 99.5% en horario laboral
- ✅ Tiempo medio entre fallas (MTBF) > 720 horas (30 días)
- ✅ Tiempo medio de reparación (MTTR) < 2 horas

---

## ✔️ RNF-05: Integridad de Datos

<div class="info-box">
  <strong>Categoría:</strong> Integridad<br>
  <strong>Prioridad:</strong> <span class="badge badge-danger">Crítica</span><br>
  <strong>ID:</strong> RNF-05
</div>

### Descripción
El sistema debe implementar validación obligatoria de datos críticos antes de registrarlos para garantizar la consistencia y exactitud de la información.

### Criterios de Cumplimiento

#### 1. Validación de Datos Críticos
- **Validaciones Obligatorias:**
  - **Códigos de material:** Únicos, alfanuméricos, longitud entre 4-10 caracteres
  - **Cantidades:** Números positivos, no negativos ni cero
  - **Fechas:** Formato válido, no fechas futuras para operaciones pasadas
  - **Correos electrónicos:** Formato RFC válido
  - **Teléfonos:** Solo números, longitud correcta
  - **Stock:** No permitir salidas mayores al disponible

#### 2. Validación en Múltiples Capas
- **Frontend (Cliente):**
  - Validación en tiempo real mientras el usuario escribe
  - Prevención de envío de formulario con datos inválidos
  - Mensajes de error claros y específicos
- **Backend (Servidor):**
  - Re-validación de todos los datos recibidos
  - Sanitización de inputs (prevención de inyección SQL/XSS)
  - Validación de lógica de negocio
- **Base de Datos:**
  - Constraints y llaves foráneas
  - Triggers para validaciones complejas
  - Tipos de datos estrictos

#### 3. Integridad Referencial
- **Relaciones entre Tablas:**
  - Llaves foráneas con restricciones
  - Cascada de eliminación controlada
  - Prevención de registros huérfanos
- **Transacciones ACID:**
  - Atomicidad: Operación completa o ningún cambio
  - Consistencia: Estado válido antes y después
  - Aislamiento: Transacciones concurrentes no interfieren
  - Durabilidad: Cambios persistentes después de commit

#### 4. Validaciones de Negocio
- **Inventario:**
  - Stock no puede ser negativo
  - Stock máximo ≥ stock mínimo
  - Cantidad de movimiento > 0
- **Embarques:**
  - Cantidad a embarcar ≤ stock disponible
  - Fecha de embarque ≥ fecha de creación
  - No modificar orden en estado "Entregada"
- **Usuarios:**
  - Correo único por usuario
  - No eliminar usuario con operaciones activas
  - Al menos un administrador activo en el sistema

#### 5. Respaldos y Recuperación
- **Respaldo Automático Diario:**
  - Hora: 2:00 AM
  - Retención: 30 días
  - Verificación de integridad del respaldo
- **Respaldo Antes de Actualizaciones:**
  - Automático antes de cada deploy
  - Verificación antes de continuar
- **Punto de Restauración:**
  - Capacidad de restaurar a cualquier respaldo
  - Procedimiento documentado y probado

### Métricas de Cumplimiento
- ✅ 0 pérdidas de datos en producción
- ✅ 100% de validaciones implementadas en datos críticos
- ✅ Respaldos exitosos ≥ 99% de intentos

---

## 🔧 RNF-06: Mantenibilidad

<div class="diesel-box">
  <strong>Categoría:</strong> Mantenibilidad<br>
  <strong>Prioridad:</strong> <span class="badge badge-warning">Media</span><br>
  <strong>ID:</strong> RNF-06
</div>

### Descripción
El sistema debe tener código documentado y arquitectura modular para facilitar el mantenimiento, actualizaciones y corrección de errores.

### Criterios de Cumplimiento

#### 1. Código Documentado
- **Documentación del Código:**
  - Comentarios en funciones complejas
  - Documentación de API (Swagger/OpenAPI)
  - README en cada repositorio
  - Guía de instalación y configuración
- **Estándares de Código:**
  - Nomenclatura consistente (camelCase, PascalCase según convención)
  - Indentación uniforme (2 o 4 espacios)
  - Longitud máxima de líneas (80-120 caracteres)
  - Linter configurado (ESLint, Prettier)

#### 2. Arquitectura Modular
- **Separación de Capas:**
  - **Presentación:** Componentes UI (React)
  - **Lógica de Negocio:** Servicios y controladores (Node.js/Express)
  - **Acceso a Datos:** Modelos y repositorios (Sequelize ORM)
  - **Base de Datos:** PostgreSQL
- **Principios SOLID:**
  - Single Responsibility: Cada módulo una responsabilidad
  - Open/Closed: Abierto a extensión, cerrado a modificación
  - Dependency Inversion: Dependencias hacia abstracciones
- **Patrón MVC:**
  - Modelos: Entidades de datos
  - Vistas: Componentes React
  - Controladores: Lógica de negocio

#### 3. Control de Versiones
- **Git/GitHub:**
  - Branching strategy (GitFlow)
  - Commits descriptivos
  - Pull Requests con revisión de código
  - Tags para releases (v1.0.0, v1.1.0)
- **Versionado Semántico:**
  - MAJOR.MINOR.PATCH (ej: 1.0.0)
  - MAJOR: Cambios incompatibles
  - MINOR: Nuevas funcionalidades compatibles
  - PATCH: Correcciones de errores

#### 4. Pruebas Automatizadas
- **Cobertura de Pruebas:**
  - Unitarias: > 70% del código
  - Integración: Endpoints críticos
  - End-to-End: Flujos principales
- **Herramientas:**
  - Jest para pruebas unitarias
  - Supertest para API
  - Cypress para E2E

#### 5. Logs y Monitoreo
- **Sistema de Logs:**
  - Niveles: ERROR, WARN, INFO, DEBUG
  - Rotación de logs (diaria)
  - Formato estructurado (JSON)
  - Stack traces en errores
- **Monitoreo de Aplicación:**
  - Métricas de rendimiento
  - Detección de errores en tiempo real
  - Alertas automáticas

### Métricas de Cumplimiento
- ✅ Tiempo promedio de corrección de bugs < 48 horas
- ✅ Cobertura de pruebas > 70%
- ✅ Documentación actualizada al 100%
- ✅ Complejidad ciclomática < 10 por función

---

## 🔄 RNF-07: Recuperación (Opcional)

<div class="info-box">
  <strong>Categoría:</strong> Recuperación<br>
  <strong>Prioridad:</strong> <span class="badge badge-warning">Media</span><br>
  <strong>ID:</strong> RNF-07
</div>

### Descripción
El sistema debe contar con respaldo automático diario y capacidad de recuperación en caso de falla para minimizar la pérdida de datos y tiempo de inactividad.

### Criterios de Cumplimiento

#### 1. Respaldo Automático Diario
- **Frecuencia:** Diariamente a las 2:00 AM
- **Contenido del Respaldo:**
  - Base de datos completa
  - Archivos adjuntos (imágenes de materiales, documentos)
  - Configuraciones del sistema
- **Almacenamiento:**
  - Local: En servidor de respaldos
  - Remoto: En servicio de nube (AWS S3, Google Cloud Storage)
  - Retención: 30 días
- **Verificación:**
  - Integridad del respaldo (checksum MD5/SHA256)
  - Notificación si falla el respaldo
  - Registro en log de respaldos

#### 2. Recuperación en Caso de Falla
- **RTO (Recovery Time Objective):** < 2 horas
  - Tiempo máximo para restaurar el servicio
- **RPO (Recovery Point Objective):** < 24 horas
  - Pérdida máxima de datos aceptable
- **Procedimiento de Recuperación:**
  1. Identificar la causa de la falla
  2. Evaluar integridad de datos actuales
  3. Seleccionar respaldo más reciente válido
  4. Restaurar base de datos
  5. Restaurar archivos adjuntos
  6. Verificar integridad post-restauración
  7. Reiniciar servicios
  8. Notificar a usuarios

#### 3. Respaldo Incremental (Opcional)
- **Respaldo Incremental Cada 6 Horas:**
  - Solo cambios desde el último respaldo
  - Reduce tiempo de respaldo
  - Reduce espacio de almacenamiento
- **Respaldo Completo Semanal:**
  - Domingos a las 12:00 AM
  - Facilita restauración completa

#### 4. Plan de Recuperación ante Desastres (DRP)
- **Escenarios Cubiertos:**
  - Falla de hardware
  - Corrupción de base de datos
  - Ataque cibernético (ransomware)
  - Error humano (eliminación accidental)
  - Desastre natural (incendio, inundación)
- **Documentación:**
  - Procedimientos paso a paso
  - Contactos de emergencia
  - Diagrama de recuperación
  - Pruebas semestrales del plan

#### 5. Redundancia (Deseable)
- **Servidor de Respaldo (Standby):**
  - Servidor secundario en ubicación diferente
  - Sincronización de datos
  - Failover automático o manual
- **Balanceo de Carga:**
  - Distribuir carga entre múltiples servidores
  - Tolerancia a fallas

### Métricas de Cumplimiento
- ✅ Respaldos exitosos ≥ 99% de intentos
- ✅ Tiempo de recuperación < 2 horas
- ✅ Pérdida de datos < 24 horas
- ✅ Pruebas de recuperación: 2 veces al año

---

## 📊 Resumen de Requisitos No Funcionales

### Tabla Consolidada

| ID | Categoría | Descripción | Prioridad |
|----|-----------|-------------|-----------|
| **RNF-01** | Seguridad | Autenticación obligatoria, control de roles, trazabilidad de operaciones | <span class="badge badge-danger">Crítica</span> |
| **RNF-02** | Rendimiento | Operaciones principales en < 3 segundos | <span class="badge badge-danger">Alta</span> |
| **RNF-03** | Usabilidad | Interfaz simple, diseño uniforme, mensajes claros de validación | <span class="badge badge-danger">Alta</span> |
| **RNF-04** | Disponibilidad | Sistema disponible durante horario laboral estándar | <span class="badge badge-danger">Alta</span> |
| **RNF-05** | Integridad | Validación obligatoria de datos críticos antes de registrar | <span class="badge badge-danger">Crítica</span> |
| **RNF-06** | Mantenibilidad | Código documentado y arquitectura modular | <span class="badge badge-warning">Media</span> |
| **RNF-07** | Recuperación | Respaldo automático diario y recuperación en caso de falla | <span class="badge badge-warning">Media</span> |

### Métricas Clave de Calidad

<div class="card-grid">
  <div class="card">
    <div class="card-title">🔐 Seguridad</div>
    <div class="card-content">
      <strong>Meta:</strong> 0 vulnerabilidades críticas<br>
      <strong>Estándar:</strong> ISO/IEC 27001
    </div>
  </div>

  <div class="card">
    <div class="card-title">⚡ Rendimiento</div>
    <div class="card-content">
      <strong>Meta:</strong> 95% operaciones < 3 seg<br>
      <strong>Usuarios:</strong> 50+ concurrentes
    </div>
  </div>

  <div class="card">
    <div class="card-title">🎨 Usabilidad</div>
    <div class="card-content">
      <strong>Meta:</strong> Satisfacción ≥ 80%<br>
      <strong>Capacitación:</strong> < 4 horas
    </div>
  </div>

  <div class="card">
    <div class="card-title">🟢 Disponibilidad</div>
    <div class="card-content">
      <strong>Meta:</strong> Uptime ≥ 99.5%<br>
      <strong>Downtime:</strong> < 22 min/mes
    </div>
  </div>

  <div class="card">
    <div class="card-title">✔️ Integridad</div>
    <div class="card-content">
      <strong>Meta:</strong> 0 pérdidas de datos<br>
      <strong>Validaciones:</strong> 100% implementadas
    </div>
  </div>

  <div class="card">
    <div class="card-title">🔄 Recuperación</div>
    <div class="card-content">
      <strong>RTO:</strong> < 2 horas<br>
      <strong>RPO:</strong> < 24 horas
    </div>
  </div>
</div>

---

## 🏆 Estándares y Normativas de Cumplimiento

<div class="success-box">
  <h3>Estándares Aplicables al Proyecto</h3>
  <ul>
    <li><strong>ISO/IEC 25010:</strong> Modelo de calidad de software</li>
    <li><strong>ISO/IEC 27001:</strong> Gestión de seguridad de la información</li>
    <li><strong>ISO/IEC 29110:</strong> Perfiles de ciclo de vida para software</li>
    <li><strong>ISO 28000:</strong> Especificaciones para sistemas de gestión de la seguridad en la cadena de suministro</li>
    <li><strong>WCAG 2.1 Nivel AA:</strong> Pautas de accesibilidad para contenido web</li>
    <li><strong>OWASP Top 10:</strong> Vulnerabilidades de seguridad en aplicaciones web</li>
  </ul>
</div>

---

## 🔗 Referencias Cruzadas

- 📄 [Requisitos Funcionales](requisitos-funcionales) - Funcionalidades del sistema
- 🔗 [Matriz de Trazabilidad](matriz-trazabilidad) - Relación con objetivos del proyecto
- 🔐 [Registro de Riesgos](/09-riesgos/registro-riesgos) - Riesgos relacionados con calidad
- ✅ [Plan de Calidad](/08-calidad/plan-calidad) - Estrategia de aseguramiento de calidad

---

## 📝 Control de Cambios

| Versión | Fecha | Cambios | Responsable |
|---------|-------|---------|-------------|
| 2.0 | 03/12/2025 | Versión final del documento | José Pedro Cruz Ramírez |

---

<div class="text-center text-gray">
  <small>Última actualización: 06 de diciembre de 2025</small><br>
  <small>© 2025 Diesel Global Logistics Inc.</small>
</div>