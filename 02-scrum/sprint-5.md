---
layout: default
title: Sprint 5 - Desarrollo Frontend e Integración
---

# 💻 Sprint 5 – Desarrollo Frontend e Integración

[← Volver a Scrum](index)

---

## 📋 Información del Sprint

| Campo | Valor |
|-------|--------|
| **Número de Sprint** | 5 |
| **Duración** | 1 semana |
| **Semanas del Proyecto** | 7-8 |
| **Fechas** | 03/11/2025 - 10/11/2025 |
| **Epic Asociado** | 🟢 EPIC 5 - Desarrollo Frontend e Integración |

---

## 🎯 Meta del Sprint

Implementar la interfaz de usuario completa del sistema, integrar el frontend con el backend mediante APIs REST, habilitar la lectura de códigos QR desde el navegador, construir el dashboard operativo y dejar la plataforma funcionando en una versión **Beta Interna** validada para Diesel Global Logistics Inc.

**Este sprint busca lograr que el sistema sea completamente navegable y funcional.**

---

## 📦 Entregables Principales

- ✅ Interfaz funcional de Inventarios  
- ✅ Interfaz funcional de Embarques  
- ✅ Interfaz de Reportes  
- ✅ Módulo de Administración y Seguridad  
- ✅ Autenticación y Roles con frontend  
- ✅ Dashboard operativo conectado al backend  
- ✅ Integración completa con APIs REST  
- ✅ Lectura de códigos QR desde cámara  
- ✅ Generación de códigos QR  
- ✅ Notificaciones y alertas internas  
- ✅ Rutas privadas y manejo de permisos (RBAC)  
- ✅ Pruebas de integración Frontend ↔ Backend  
- ✅ Documentación del frontend en GitHub Pages  

---

## 🎯 Criterios de Éxito

| Criterio | Estado |
|----------|--------|
| Integración completa con backend | 🟢 Cumplido |
| Interfaces funcionales y navegables | 🟢 Cumplido |
| QR funcionando para inventarios y embarques | 🟢 Cumplido |
| Dashboard con métricas operativas | 🟢 Cumplido |
| Rutas privadas funcionando con roles | 🟢 Cumplido |
| Pruebas de integración pasadas | 🟢 Cumplido |
| Sistema en Beta Interna | 🟢 Validado |

---

# 👥 Actividades por Rol

---

## 👨‍💼 Gestor de Proyecto (Ángel Elías Romero Paulín)

### Documentación Generada
- 📄 Control de integración Frontend–Backend  
- 📄 Registro de incidentes en UI  
- 📄 Matriz de implementación técnica  
- 📄 Informe de avance semanal del sprint  

### Actividades
- ✔ Establecer reuniones diarias de integración  
- ✔ Supervisar con QA el cumplimiento de DoD  
- ✔ Coordinar pruebas de QR con el equipo  
- ✔ Validar funcionamiento de roles y permisos  
- ✔ Aprobar vistas finales antes de revisión con cliente  

---

## 📊 Analista (José Pedro Cruz Ramírez)

### Documentación Generada
- 📄 Trazabilidad RF → UI → API  
- 📄 Reglas de negocio validadas en la interfaz  
- 📄 Validación funcional UI/UX  

### Actividades
- ✔ Verificar que cada pantalla cumpla los requisitos definidos  
- ✔ Validar flujos completos:  
  - Alta de material  
  - Movimientos  
  - Creación de embarque  
  - Validación QR  
- ✔ Reportar ajustes en reglas de negocio  

---

## 🎨 Diseñadores (María Alondra Ortiz & Luis Fernando Loma)

### Entregables
- 🎨 Componentes visuales adaptados a React  
- 🎨 Ajustes al prototipo según restricciones técnicas  
- 🎨 Estilos finales y manual de diseño UI  

### Actividades
- ✔ Revisar UI para asegurar consistencia visual  
- ✔ Ajustar colores, iconos y espaciado  
- ✔ Proveer recursos gráficos adicionales  
- ✔ Optimizar diseño para lectura QR  

---

## 📝 Documentador (Daniel Olvera Romero)

### Documentación Generada
- 📄 Manual de Usuario (versión preliminar)  
- 📄 Documentación del Frontend en GitHub Pages  
- 📄 Documentación de integración API–UI  
- 📄 Registro de cambios de interfaces  
- 📄 Guía de rutas privadas y roles  

### Actividades
- ✔ Documentar cada módulo del frontend  
- ✔ Crear índice de componentes  
- ✔ Integrar documentación del QR  
- ✔ Subir artefactos a `/07-desarrollo/frontend`  
- ✔ Actualizar GitHub Pages con documentación del Sprint  

---

## 🔧 Desarrollador (Esteban Reséndiz Urquiza) ⭐ **ROL PRINCIPAL**

### Tecnologías utilizadas
- React + Vite  
- TailwindCSS  
- React Router  
- Axios  
- Zustand / Context API  
- Chart.js  
- react-qr-reader  

### Actividades Principales
- ✔ Implementar vistas para Inventarios, Embarques, Reportes y Admin  
- ✔ Integrar todas las APIs del backend  
- ✔ Implementar:
  - Login y logout  
  - Roles y permisos  
  - Dashboard  
  - Tablas dinámicas  
  - Formularios con validación  
  - Escáner QR  
  - Generación de QR  
- ✔ Manejo de errores global y estados de carga  
- ✔ Proteger rutas sensibles con RBAC  
- ✔ Optimizar desempeño del frontend  

---

## 🧪 QA (Raúl Mejía Reséndiz)

### Actividades
- ✔ Realizar pruebas de integración API–UI  
- ✔ Validar UI con criterios de ISO 25010  
- ✔ Evaluar rendimiento del dashboard  
- ✔ Probar lectura y generación de códigos QR  
- ✔ Identificar inconsistencias visuales  
- ✔ Ejecutar test de roles y accesos  

### Documentación
- 📄 Reporte de pruebas de integración  
- 📄 Reporte de bugs de interfaz  
- 📄 Checklist de calidad visual  
- 📄 Validación de usabilidad  

---

## 🧪 Tester (Omar Garcia Perrusquia)

### Actividades
- ✔ Crear y ejecutar casos de prueba del frontend  
- ✔ Validar flujos de usuario completos  
- ✔ Registrar bugs en Jira  
- ✔ Probar las notificaciones internas del sistema  
- ✔ Probar rutas privadas y expiración de sesión  

---

# 📊 Burndown Chart del Sprint 5

```
Story Points Totales: 56
Duración: 15 días

Día 1:  ████████████████████████████ 56
Día 2:  ████████████████████████ 50
Día 3:  █████████████████████ 44
Día 4:  ████████████████ 36
Día 5:  █████████████ 30
Día 6:  ███████████ 26
Día 7:  ████████ 16
Día 8:  █ 2
Final: 0 pts ✔ COMPLETADO
```

---

# 📝 Sprint Review

**Fecha:** 04 de noviembre de 2025  
**Duración:** 1 hora  
**Participantes:** Equipo completo + Sponsor + Usuarios clave

### Logros Principales

- Sistema completamente funcional en Beta Interna  
- Frontend íntegramente conectado al backend  
- QR funcionando correctamente  
- Dashboard operativo con métricas  
- Roles y permisos aplicados en la interfaz  
- Se completaron 27 pantallas funcionales  
- Se integraron 48 endpoints del backend  
- Retroalimentación positiva del cliente  

### Demo Realizada
- Flujo completo de inventario  
- Movimiento con lectura QR  
- Creación y validación de embarque  
- Generación de reportes  
- Navegación Admin (usuarios y roles)  

---

# 🔄 Sprint Retrospective

### 👍 ¿Qué salió bien?

- Integración API–UI muy estable  
- Pocas modificaciones al backend  
- Flujo QR exitoso en primera prueba  
- Diseño consistente con Figma  
- Cooperación excelente entre diseño y desarrollo  

### 🔧 ¿Qué mejorar?

- Algunas pantallas tardaron más por cambios visuales  
- El dashboard requirió optimización  
- Requiere mejorar manejo de errores de API  

---

### 🎯 Acciones para Sprint 6

| # | Acción | Responsable | Fecha |
|---|--------|-------------|--------|
| 1 | Mejorar errores globales en UI | Desarrollador | 16/11 |
| 2 | Revisar flujo de embarques | Analista | 17/11 |
| 3 | Completar pruebas E2E | Tester | 18/11 |
| 4 | Afinar accesibilidad visual | Diseñador | 19/11 |

---

# 📈 Métricas del Sprint

| Métrica | Objetivo | Real | Estado |
|---------|----------|------|--------|
| Vistas implementadas | 25 | 27 | 🟢 |
| Integración API | 100% | 100% | 🟢 |
| Bugs críticos | 0 | 0 | 🟢 |
| Tasa de éxito UI/API | ≥95% | 96% | 🟢 |
| Cumplimiento del Sprint | ≥85% | 100% | 🟢 Excelente |

---

# 🎯 Definition of Done – Sprint 5

- UI completa y funcional  
- Integración total con backend  
- Dashboard operativo  
- QR implementado y validado  
- Documentación final cargada a GitHub Pages  
- Sprint Review finalizado  
- Retro completada  

---

# 🔗 Enlaces Relacionados

- [Frontend del Proyecto](../07-desarrollo/frontend)
- [Integración API–UI](../07-desarrollo/frontend/integracion)
- [Documentación de Componentes](../07-desarrollo/frontend/componentes)
- [Backend](../07-desarrollo/backend)

---

## 📅 Próximo Sprint

**Sprint 6 - Pruebas y Validaciones Finales**  
- **Inicio:** 11 de noviembre de 2025  
- **Fin:** 25 de noviembre de 2025  
- **Duración:** 2 semanas  
- **Objetivo:** Ejecutar pruebas unitarias avanzadas, pruebas de integración, UAT, corrección de bugs y preparación para despliegue.

**Sprint Planning:** 11/11/2025 a las 1:00 PM

---

*Documento generado: 05 de noviembre de 2025*  
*Última actualización: 10 de noviembre de 2025*  
*Versión: 1.0*

[← Volver a Scrum](index)

<div class="text-center text-gray">
  <small>Última actualización: 06 de diciembre de 2025</small><br>
  <small>© 2025 Diesel Global Logistics Inc.</small>
</div>