---
layout: default
title: EDT / WBS del Proyecto
---

# 🧱 EDT / WBS (Estructura de Desglose del Trabajo)

La EDT organiza el proyecto en paquetes de trabajo claros para planificación, asignación y control.

## Nivel 0
1. Plataforma Web de Gestión de Almacén y Embarques – Diesel Global

---

## Nivel 1 (Fases / Releases)
1.1 Inicio y Planificación (Sprint 1)  
1.2 Levantamiento y Análisis de Requisitos (Sprint 2)  
1.3 Diseño del Sistema (Sprint 3)  
1.4 Desarrollo Backend (Sprint 4)  
1.5 Desarrollo Frontend e Integración (Sprint 5)  
1.6 Pruebas y Validaciones (Sprint 6)  
1.7 Implementación y Cierre (Sprint 7)

---

## Nivel 2 (Sub-actividades por fase)

### 1.1 Inicio y Planificación
- 1.1.1 Acta de Constitución
- 1.1.2 Identificación de interesados
- 1.1.3 Plan para la Dirección del Proyecto
- 1.1.4 Configuración de herramientas (Asana, GitHub)
- 1.1.5 EDT/WBS y cronograma maestro

### 1.2 Levantamiento y Análisis de Requisitos
- 1.2.1 Entrevistas y sesiones AS-IS
- 1.2.2 Requisitos funcionales (26 RF)
- 1.2.3 Requisitos no funcionales (7 RNF)
- 1.2.4 Historias de usuario y priorización MoSCoW
- 1.2.5 Casos de uso y matriz CRUD

### 1.3 Diseño del Sistema
- 1.3.1 Wireframes y prototipos (Figma)
- 1.3.2 Modelo Entidad–Relación (MER)
- 1.3.3 API Spec v1
- 1.3.4 Documento de Diseño Técnico (DDT)

### 1.4 Desarrollo Backend
- 1.4.1 Estructura proyecto (repositorio)
- 1.4.2 Modelos y migraciones BD
- 1.4.3 Endpoints REST principales
- 1.4.4 Autenticación y RBAC
- 1.4.5 Pruebas unitarias

### 1.5 Desarrollo Frontend e Integración
- 1.5.1 Estructura del frontend
- 1.5.2 Implementación de pantallas clave
- 1.5.3 Integración API ↔ UI
- 1.5.4 Lectura / generación QR
- 1.5.5 Pruebas de integración

### 1.6 Pruebas y Validaciones
- 1.6.1 Plan Maestro de Pruebas
- 1.6.2 Pruebas unitarias y E2E
- 1.6.3 Performance y seguridad
- 1.6.4 UAT y correcciones

### 1.7 Implementación y Cierre
- 1.7.1 Preparación ambiente producción
- 1.7.2 Despliegue y verificación
- 1.7.3 Capacitación a usuarios
- 1.7.4 Documentación final y acta de cierre
- 1.7.5 Liberación y backup final

---

## Nivel 3 (Paquetes de trabajo ejemplo - Sprint 4: Desarrollo Backend)
- 1.4.2.1 Crear migraciones iniciales
- 1.4.2.2 Poblar datos de prueba
- 1.4.2.3 Revisar integridad referencial
- 1.4.3.1 Implementar endpoints CRUD materiales
- 1.4.3.2 Implementar endpoints embarques
- 1.4.3.3 Documentar endpoints con Swagger
- 1.4.4.1 Implementar middleware JWT
- 1.4.5.1 Crear suites de tests Jest

---

## Uso de la EDT
- Cada paquete debe tener: responsable, esfuerzo estimado (story points / horas), fecha de inicio y fin, entregable asociado.
- Controlar avance por paquetes y actualizar en Asana / Jira.

---


[← Volver a Gestión del Proyecto](index)
