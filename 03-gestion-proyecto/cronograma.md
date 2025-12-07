---
layout: default
title: Cronograma Maestro (Sprints)
---

# 📆 Cronograma Maestro (Gantt por Sprints)

Este cronograma define la planificación temporal del proyecto bajo una estructura Scrum de 7 sprints, considerando actividades, hitos y duración real ajustada.

---

## 📅 Línea Base del Proyecto

- **Inicio oficial:** 19 de septiembre de 2025  
- **Fin estimado:** 09 de diciembre de 2025  
- **Duración total:** 12 semanas  
- **Metodología:** Scrum (Sprints continuos)

---

## 🗂️ Cronograma General por Sprints

| Sprint | Nombre | Duración | Fechas |
|--------|--------|----------|--------|
| **1** | Gestión y Planificación | **1 semana** | 19/09/2025 → 25/09/2025 |
| **2** | Levantamiento y Análisis de Requisitos | **1 semana** | 26/09/2025 → 03/10/2025 |
| **3** | Diseño del Sistema (UI/UX + Arquitectura) | **2 semanas** | 04/10/2025 → 18/10/2025 |
| **4** | Desarrollo Backend | **2 semanas** | 19/10/2025 → 02/11/2025 |
| **5** | Desarrollo Frontend e Integración | **1 semana** | 03/11/2025 → 10/11/2025 |
| **6** | Pruebas y Validaciones | **2 semanas** | 11/11/2025 → 25/11/2025 |
| **7** | Cierre y Despliegue Final | **2 semanas** | 25/11/2025 → 09/12/2025 |

---

# 🟦 Vista Gantt (Simplificada)

<p align="center">
  <img src="/assets/imgenes/gantt-proyecto.png" alt="Vista Gantt" width="900px">
</p>

---

# 🎯 Hitos Clave del Proyecto

| Hito | Descripción | Fecha |
|------|-------------|--------|
| **H1** | Acta de Constitución aprobada | 25/09/2025 |
| **H2** | Requisitos (RF & RNF) validados | 03/10/2025 |
| **H3** | Prototipo UI/UX y Arquitectura aprobados | 18/10/2025 |
| **H4** | Backend funcional (v1.0) | 02/11/2025 |
| **H5** | Frontend integrado con backend (v1.0) | 10/11/2025 |
| **H6** | Release Candidate (RC1) validado | 25/11/2025 |
| **H7** | Despliegue en producción y cierre | 09/12/2025 |

---

# 🔧 Detalle de Actividades por Sprint

## 🏁 Sprint 1 – Gestión y Planificación (19–25 sep)
- Acta de constitución
- Identificación de interesados
- Plan de dirección del proyecto
- EDT/WBS
- Cronograma base
- Matriz de riesgos inicial
- Configuración de herramientas (Asana, GitHub, Pages)

## 📝 Sprint 2 – Requisitos (26 sep–03 oct)
- Levantamiento de información AS-IS
- Requisitos funcionales (26 RF)
- Requisitos no funcionales (7 RNF)
- Historias de usuario
- Priorización MoSCoW
- Validación con stakeholders

## 🎨 Sprint 3 – Diseño del Sistema (04–18 oct)
- Wireframes
- Prototipo UI/UX en Figma
- Arquitectura lógica y física
- Modelo entidad-relación (MER)
- Documento de Diseño Técnico (DDT)

## ⚙️ Sprint 4 – Backend (19 oct–02 nov)
- Configuración proyecto
- Modelos, migraciones, DB
- API REST (Inventarios, Embarques, Usuarios)
- JWT y RBAC
- Pruebas unitarias

## 💻 Sprint 5 – Frontend + Integración (03–10 nov)
- Pantallas principales
- Integración API
- QR (lectura + generación)
- Pruebas de integración

## 🧪 Sprint 6 – Pruebas (11–25 nov)
- Testing funcional
- Testing E2E
- Pruebas de rendimiento
- UAT con Diesel Global
- Correcciones

## 🚀 Sprint 7 – Cierre y Producción (25 nov–09 dic)
- Despliegue final
- Capacitación de usuarios
- Manuales técnicos y operativos
- Retro del proyecto
- Cierre formal y liberación

---

# 📅 Calendario de Ceremonias Scrum

| Ceremonia | Frecuencia | Duración | Responsable |
|-----------|------------|-----------|--------------|
| **Daily Standup** | Diario | 15 min | Todos |
| **Sprint Planning** | Inicio de cada sprint | 2–4 horas | Gestor + Equipo |
| **Sprint Review** | Fin del sprint | 1–2 horas | Todos + Cliente |
| **Sprint Retrospective** | Después del review | 1–2 horas | Equipo Scrum |

---

# 📌 Reglas de Control del Cronograma
- Las fechas del cronograma representan **línea base aprobada**.
- Cualquier retraso > 2 días debe registrarse como **riesgo**.
- Cambios mayores requieren **aprobación del Sponsor**.
- Ajustes menores se gestionan en Sprint Planning.

---

*Documento generado: {{ site.time | date: "%d/%m/%Y" }}*  
*Última actualización: {{ site.time | date: "%d/%m/%Y" }}*  

[← Volver a Gestión del Proyecto](index)

