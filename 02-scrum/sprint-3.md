---
layout: default
title: Sprint 3 - Diseño del Sistema
---

# 🧱 Sprint 3 – Diseño del Sistema (UI/UX + Arquitectura Técnica)

[← Volver a Scrum](index)

---

## 📋 Información del Sprint

| Campo | Valor |
|-------|--------|
| **Número de Sprint** | 3 |
| **Duración** | 2 semanas |
| **Semanas del Proyecto** | 3-4 |
| **Fechas** | 04/10/2025 - 18/10/2025 |
| **Epic Asociado** | 🟡 EPIC 3 - Diseño del Sistema |

---

## 🎯 Meta del Sprint

Diseñar la arquitectura técnica del sistema, la base de datos relacional, los diagramas UML, los wireframes, prototipos de interfaz en Figma y todos los elementos necesarios para preparar el inicio del desarrollo backend y frontend.

**El objetivo final es entregar un diseño validado, aprobado y completamente listo para implementar en Sprint 4.**

---

## 📦 Entregables Principales

- ✅ Arquitectura general del sistema (cliente–servidor)
- ✅ Diagrama de arquitectura lógica
- ✅ Modelo Entidad–Relación (MER) completo
- ✅ Esquema de base de datos optimizado
- ✅ Diagrama UML de:
  - Casos de uso
  - Secuencia
  - Actividades
  - Clases
- ✅ Wireframes de todas las pantallas (Inventarios, Embarques, Reportes, Admin)
- ✅ Prototipo de alta fidelidad en Figma
- ✅ Guía de diseño UI (colores, tipografías, espaciado, botones, formularios)
- ✅ Mapa de navegación del sistema
- ✅ Diseño de arquitectura de APIs (documento API Spec v1)
- ✅ Documento de Diseño Técnico (DDT)
- ✅ Validación técnica del diseño con todo el equipo
- ✅ Aprobación del cliente sobre diseño visual

---

## 🎯 Criterios de Éxito

| Criterio | Estado |
|----------|--------|
| Diseño de base de datos aprobado | ✅ Completado |
| Wireframes completos | ✅ Completado |
| Prototipo en Figma aprobado | ✅ Completado |
| UML entregado en su totalidad | ✅ Completado |
| Documentación técnica lista para desarrollo | ✅ Completado |
| Diseño revisado por el cliente | ✅ Aprobado |

---

# 👥 Actividades por Rol

---

## 👨‍💼 Gestor de Proyecto (Ángel Elías Romero Paulín)

### Documentación Generada
- ✅ **Plan de Diseño del Sistema (PDS)**
- ✅ **Checklist de revisión de diseño**
- ✅ **Control de cambios del Sprint**
- ✅ **Estrategia técnica general**

### Actividades
- ✔ Supervisar la consistencia entre diseño funcional y técnico  
- ✔ Revisar y aprobar diagramas UML  
- ✔ Validar entregables del equipo de diseño  
- ✔ Coordinar revisiones internas con desarrolladores  
- ✔ Programar revisiones con el cliente  
- ✔ Asegurar cumplimiento de estándares ISO 25010  

---

## 📊 Analista (José Pedro Cruz Ramírez)

### Documentación Generada
- ✅ **Diagrama de Casos de Uso (versión final)**
- ✅ **Diccionario de Datos del Sistema**
- ✅ **Flujos detallados de procesos críticos**

### Actividades
- ✔ Validar que el diseño UI cubra todos los requisitos funcionales  
- ✔ Actualizar modelos de requisitos conforme a cambios visuales  
- ✔ Realizar trazabilidad RF/RNF ↔ Pantallas ↔ APIs ↔ BD  
- ✔ Definir reglas de negocio para movimientos de inventario y embarques  

---

## 🎨 Diseñadores (María Alondra Ortiz Benítez y Luis Fernando Loma Navarrete)

### Entregables UI/UX (completos)
- 🔹 Wireframes de baja fidelidad (todo el sistema)  
- 🔹 Prototipos en Figma de alta fidelidad  
- 🔹 Biblioteca de componentes UI  
- 🔹 Sistema de diseño (Design System):  
  - Paleta oficial  
  - Tipografías  
  - Tamaños  
  - Iconografía  
  - Botones  
  - Tablas  
  - Formularios  
- 🔹 Animaciones y microinteracciones  

### Actividades
- ✔ Diseñar 42 pantallas totales del sistema  
- ✔ Crear flujos visuales para inventarios, embarques y reportes  
- ✔ Producir prototipo navegable  
- ✔ Validar diseño con stakeholders  
- ✔ Ajustar colores corporativos Diesel Global Logistics  

---

## 📝 Documentador (Daniel Olvera Romero)

### Documentación Generada
- ✅ **Documento de Diseño Técnico (DDT v1.0)**
- ✅ **Manual de Arquitectura del Sistema**
- ✅ **Repositorio “06-diseño” estructurado en GitHub Pages**
- ✅ **Diagramas UML documentados en formato MD**
- ✅ **Mapa de navegación del sistema**
- ✅ **Registro de cambios del diseño**
- ✅ **Guía de estilos UI**

### Actividades
- ✔ Estandarizar todos los artefactos del Sprint  
- ✔ Convertir contenido Figma/UML a Markdown  
- ✔ Documentar API Spec v1  
- ✔ Organizar carpeta de diseño:  
```
/06-diseno
/arquitectura
/uml
/ui-ux
/figma-links
```
- ✔ Publicar todo en GitHub Pages  

---

## 🔧 Desarrollador (Esteban Reséndiz Urquiza)

### Documentación Técnica
- 🔹 Arquitectura modular Backend  
- 🔹 Esquema preliminar de rutas API  
- 🔹 Validación del MER y normalización  
- 🔹 Revisión de estructura de base de datos  
- 🔹 Evaluación de rendimiento y seguridad de BD  

### Actividades
- ✔ Definir estructura base de controladores  
- ✔ Definir modelo REST:  
  - `/inventarios/*`  
  - `/embarques/*`  
  - `/reportes/*`  
  - `/auth/*`  
  - `/admin/*`  
- ✔ Proponer endpoints optimizados  
- ✔ Revisar consistencia de Figma con flujo real del sistema  

---

## 🧪 QA (Raúl Mejía Reséndiz)

### Documentación Generada
- 🔹 Checklist de validación UI/UX  
- 🔹 Reglas de validación por pantalla  
- 🔹 Requerimientos de accesibilidad (WCAG 2.1)  

### Actividades
- ✔ Revisar claridad, contraste y consistencia visual  
- ✔ Validar usabilidad y navegabilidad  
- ✔ Identificar riesgos de diseño  
- ✔ Definir pruebas funcionales futuras  

---

## 🧪 Tester (Roberto Joshua García Solís)

### Actividades
- ✔ Preparar casos de prueba futuros basados en diseño  
- ✔ Validar flujos de usuario en el prototipo  
- ✔ Documentar inconsistencias encontradas  
- ✔ Colaborar en la retroalimentación del UI  

---

# 📊 Burndown Chart del Sprint 3

```
Story Points Totales: 48
Duración: 15 días laborables

Día 1:  ████████████████████████ 48 pts
Día 3:  █████████████████████ 42 pts
Día 5:  █████████████████ 36 pts
Día 7:  ███████████████ 32 pts
Día 9:  █████████████ 28 pts
Día 10: ███████████ 24 pts
Día 12: ████████ 16 pts
Día 13: ██████ 12 pts
Día 14: ████ 8 pts
Día 15: █ 2 pts
Final: 0 pts ✔ COMPLETADO
```

---

# 📝 Sprint Review

**Fecha:** 16 de octubre de 2025  
**Duración:** 2 horas  
**Participantes:** Gestor + Stakeholders + Sponsor

### 📌 Logros Principales

1. **Diseño visual aprobado por el cliente**
2. **Prototipo navegable completo (100%)**
3. **Modelo Entidad–Relación final sin observaciones**
4. **Documentación técnica lista para desarrollo**
5. **Arquitectura de APIs definida y revisada**
6. **Navegación completa del sistema validada**
7. **Todos los diagramas UML entregados**

---

# 🔄 Sprint Retrospective

### 👍 ¿Qué salió bien?

- Excelente colaboración entre diseño, desarrollador y analista  
- Prototipo muy profesional  
- Revisión con cliente muy fluida  
- Trabajo adelantado de base de datos  
- Documentación altamente organizada en GitHub Pages  

### 🔧 ¿Qué mejorar?

- Hubo retrasos por revisiones de color corporativo  
- Algunos UML requirieron correcciones múltiples  
- Figma consumió más tiempo de lo previsto  

---

### 🎯 Acciones de mejora para Sprint 4

| # | Acción | Responsable | Fecha |
|---|--------|-------------|--------|
| 1 | Definir color final corporativo | Diseñadores | 20/10 |
| 2 | Capacitación UML para equipo | Documentador | 25/10 |
| 3 | Revisar API Spec antes de Sprint | Desarrollador | 18/10 |
| 4 | Reducir revisiones duplicadas | Gestor | Inmediato |

---

# 📈 Métricas del Sprint

| Métrica | Objetivo | Real | Estado |
|---------|----------|------|--------|
| Wireframes entregados | 40 | 42 | 🟢 |
| Prototipo en Figma | 100% | 100% | 🟢 |
| UML completado | 100% | 100% | 🟢 |
| Bugs de diseño | ≤5 | 3 | 🟢 |
| Velocity | 45-50 | 48 | 🟢 Excelente |

---

# 🎯 Definition of Done – Sprint 3

- Diseño final aprobado  
- MER definitivo documentado  
- API Spec validada  
- Prototipo navegable completo  
- Diagramas UML listos  
- Documentación cargada a GitHub Pages  
- Sprint Review y Retrospective completadas  

---

# 🔗 Enlaces Relacionados

- [Diseño UI/UX](../06-diseno/ui-ux)
- [Arquitectura del Sistema](../06-diseno/arquitectura)
- [UML del Proyecto](../06-diseno/uml)
- [Modelo ER](../06-diseno/base-datos)
- [API Spec](../06-diseno/api)

---

## 📅 Próximo Sprint

**Sprint 4 - Desarrollo Backend**  
- **Inicio:** 19 de octubre de 2025  
- **Fin:** 02 de noviembre de 2025  
- **Duración:**  2 semanas  
- **Objetivo:** Implementar el backend completo (APIs REST, BD, seguridad y pruebas unitarias).

**Sprint Planning:** Lunes 20/10/2025 a las 1:10 PM

---

*Documento generado: 04 de octubre de 2025*  
*Última actualización: 20 de octubre de 2025*  
*Versión: 1.0*

[← Volver a Scrum](index)
