---
layout: default
title: Sprint 4 - Desarrollo Backend
---

# 🧰 Sprint 4 – Desarrollo Backend (APIs, BD, Seguridad y Pruebas)

[← Volver a Scrum](index)

---

## 📋 Información del Sprint

| Campo | Valor |
|-------|--------|
| **Número de Sprint** | 4 |
| **Duración** | 2 semanas |
| **Semanas del Proyecto** | 5-6 |
| **Fechas** | 19/10/2025 - 02/11/2025 |
| **Epic Asociado** | 🔵 EPIC 4 - Implementación Backend |

---

## 🎯 Meta del Sprint

Desarrollar el backend completo del sistema, implementando la base de datos, modelos, controladores, endpoints REST, autenticación JWT, seguridad, validaciones, y pruebas unitarias iniciales. 

**El objetivo final es entregar un backend funcional, seguro y documentado, listo para integrarse con el frontend en el Sprint 5.**

---

## 📦 Entregables Principales

- ✅ Base de datos PostgreSQL implementada
- ✅ Modelos y migraciones creadas (Inventarios, Embarques, Usuarios, Roles, Auditoría)
- ✅ APIs REST completas para:
  - Inventarios
  - Movimientos
  - Embarques
  - Reportes
  - Usuarios
  - Autenticación
- ✅ Autenticación JWT con refresh tokens
- ✅ Implementación RBAC (roles y permisos)
- ✅ Estructura backend en Node.js + Express finalizada
- ✅ Pruebas unitarias con Jest (60% de cobertura)
- ✅ Documentación técnica de endpoints (API Spec v1.1)
- ✅ Middleware de seguridad:
  - CORS
  - Sanitización de datos
  - Rate limiting
  - Logs de auditoría
- ✅ Conexión backend ↔ PostgreSQL estable

---

## 🎯 Criterios de Éxito

| Criterio | Estado |
|----------|--------|
| API funcional sin errores 500 | 🟢 Cumplido |
| BD implementada con integridad referencial | 🟢 Cumplido |
| 60% de cobertura en pruebas unitarias | 🟢 Cumplido |
| Autenticación y roles funcionando | 🟢 Cumplido |
| Documentación técnica generada | 🟢 Cumplido |
| Backend listo para Sprint 5 | 🟢 Validado |

---

# 👥 Actividades por Rol

---

## 👨‍💼 Gestor de Proyecto (Ángel Elías Romero Paulín)

### Documentación Generada
- 📄 **Plan de Desarrollo Backend**
- 📄 **Control de versiones técnicas**
- 📄 **Registro de incidentes técnicos**
- 📄 **Evaluación del avance de API**

### Actividades
- ✔ Coordinar reuniones técnicas con el desarrollador  
- ✔ Validar riesgos técnicos (PR-A1, PR-A3, PR-A18)  
- ✔ Solicitar pruebas de rendimiento básicas  
- ✔ Controlar cumplimiento del cronograma  
- ✔ Aprobar API Spec v1.1 antes de pasar a frontend  

---

## 📊 Analista (José Pedro Cruz Ramírez)

### Documentación Generada
- 📄 **Reglas de negocio formalizadas (v2.0)**
- 📄 **Diccionario de datos actualizado**
- 📄 **Trazabilidad RF → API → BD**

### Actividades
- ✔ Validar que cada requisito tenga endpoint asignado  
- ✔ Revisar que las reglas de negocio se implementen correctamente  
- ✔ Validar integridad de datos  
- ✔ Aprobar endpoints críticos (embarques, movimientos)  

---

## 🔧 Desarrollador (Esteban Reséndiz Urquiza) ⭐ **ROL PRINCIPAL**

### Componentes Implementados
- 🔹 API REST completa (Express.js)
- 🔹 Modelo de datos en Sequelize
- 🔹 Estructura modular:
```
/src
├── config
├── controllers
├── middleware
├── models
├── routes
├── services
└── utils
```
- 🔹 Validaciones con JOI
- 🔹 Documentación API con Swagger

### Actividades Principales
- ✔ Definir estructura del proyecto backend  
- ✔ Conectar PostgreSQL con Sequelize  
- ✔ Implementar modelos:
  - Usuarios  
  - Roles  
  - Materiales  
  - Movimientos  
  - Embarques  
  - Auditoría  
- ✔ Implementar endpoints:
  - POST /auth/login  
  - GET /inventarios/materiales  
  - POST /inventarios/movimiento  
  - POST /embarques  
  - GET /reportes/inventario  
- ✔ Hacer pruebas unitarias con Jest  
- ✔ Implementar logs de auditoría  
- ✔ Aplicar middlewares de seguridad  
- ✔ Documentar API en Swagger  

---

## 🎨 Diseñadores (María Alondra Ortiz & Luis Fernando Loma)

### Actividades
- ✔ Revisar consistencia UI con respuestas de API  
- ✔ Ajustar prototipos según limitaciones técnicas  
- ✔ Actualizar guías de interacción  

### Entregables
- 📄 Esquema de integración UI–API  
- 📄 Ajustes de endpoints según prototipos  

---

## 📝 Documentador (Daniel Olvera Romero)

### Documentación Generada
- 📄 **Manual Técnico de APIs (API Spec v1.1)**
- 📄 **Documentación backend en GitHub Pages**
- 📄 **Guía de instalación backend**
- 📄 **Documentación Swagger exportada a /docs**
- 📄 **Registro de cambios del backend**
- 📄 **Mapa de rutas de API**
- 📄 **Estandarización de respuestas JSON**

### Actividades
- ✔ Redactar documentación técnica completa  
- ✔ Publicar API Spec en `/07-desarrollo/backend`  
- ✔ Documentar estructura de carpetas backend  
- ✔ Crear índice general para desarrolladores  
- ✔ Revisar estilo técnico (ISO 9126 / MoProSoft)  

---

## 🧪 QA (Raúl Mejía Reséndiz)

### Actividades
- ✔ Validar manejo de errores HTTP  
- ✔ Probar endpoints críticos con Postman  
- ✔ Ejecutar pruebas de seguridad iniciales  
- ✔ Revisar logs de auditoría  

### Documentación
- 📄 Checklist de pruebas API  
- 📄 Resultados de pruebas de endpoints  
- 📄 Reporte de vulnerabilidades menores  

---

## 🧪 Tester (Roberto Joshua García Solís)

### Actividades
- ✔ Elaborar casos de prueba basados en API  
- ✔ Validar respuestas correctas y errores  
- ✔ Crear reporte de bugs en Jira  
- ✔ Probar rendimiento básico de endpoints  

---

# 📊 Burndown Chart del Sprint 4

```
Story Points Totales: 52
Duración: 15 días

Día 1: ████████████████████████ 52
Día 3: █████████████████████ 45
Día 5: ███████████████████ 40
Día 7: ████████████████ 34
Día 9: █████████████ 28
Día 11: ██████████ 20
Día 13: ██████ 12
Día 14: ████ 8
Día 15: █ 2
Final: 0 pts ✔ COMPLETADO
```

---

# 📝 Sprint Review

**Fecha:** 19 de octubre de 2025  
**Duración:** 1.5 horas  
**Participantes:** Equipo + Sponsor + Stakeholders técnicos

### Logros Principales
- Backend funcionando al 100%  
- 48 endpoints implementados  
- Seguridad JWT + RBAC funcionando  
- BD PostgreSQL estable y normalizada  
- Pruebas unitarias con 62% cobertura  
- API Spec validada y publicada  
- Backend listo para integración frontend  

### Demo Presentada
- Peticiones en Postman  
- Demostración de roles y permisos  
- Movimientos de inventario con auditoría  
- Creación y validación de embarques  

---

# 🔄 Sprint Retrospective

### 👍 ¿Qué salió bien?
- Excelente velocidad del desarrollador  
- Documentación muy clara  
- Casi sin bugs críticos  
- Integración BD–API muy estable  

### 🔧 ¿Qué mejorar?
- La documentación Swagger debe generarse automáticamente  
- Pruebas unitarias tardaron más de lo planeado  
- Algunas consultas SQL requieren optimización  

---

### 🎯 Acciones para Sprint 5

| # | Acción | Responsable | Fecha |
|---|--------|-------------|--------|
| 1 | Optimizar consultas SQL | Desarrollador | 07/11 |
| 2 | Capacitación de integración API–UI | QA | 07/11 |
| 3 | Mejorar estandarización de respuestas | Desarrollador | 08/11 |

---

# 📈 Métricas del Sprint

| Métrica | Objetivo | Real | Estado |
|---------|----------|------|--------|
| Endpoints implementados | 40+ | 48 | 🟢 |
| Cobertura de pruebas | 50% | 62% | 🟢 |
| Bugs críticos | 0 | 0 | 🟢 |
| Tasa de éxito en Postman | ≥95% | 98% | 🟢 |
| Cumplimiento del Sprint | ≥85% | 100% | 🟢 Excelente |

---

# 🎯 Definition of Done – Sprint 4

- APIs funcionando  
- Base de datos estable  
- Autenticación y roles activos  
- Pruebas unitarias ejecutadas  
- Documentación completa (API Spec v1.1)  
- Backend listo para integrarse en Sprint 5  
- Revisión y retro completadas  

---

# 🔗 Enlaces Relacionados

- [Backend del Proyecto](../07-desarrollo/backend)
- [API Spec v1.1](../07-desarrollo/backend/api)
- [Base de Datos](../06-diseno/base-datos)
- [Rutas API](../07-desarrollo/backend/rutas)

---

## 📅 Próximo Sprint

**Sprint 5 - Desarrollo Frontend e Integración**  
- **Inicio:** 03 de noviembre de 2025  
- **Fin:** 10 de noviembre de 2025  
- **Duración:** 1 semana
- **Objetivo:** Implementar la interfaz de usuario completa y conectar con el backend.

**Sprint Planning:** 03/11/2025 a las 1:10 PM

---

*Documento generado: 20 de octubre de 2025*  
*Última actualización: 03 de noviembre de 2025*  
*Versión: 1.0*

[← Volver a Scrum](index)
