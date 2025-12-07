---
layout: default
title: Estrategia de Testing
---

# 🧪 Estrategia de Testing

Este documento define el enfoque, alcance, tipos de pruebas, herramientas y responsabilidades para asegurar la calidad del proyecto **Plataforma Web de Gestión de Almacén y Embarques – Diesel Global Logistics Inc.**

---

## 🎯 Objetivo de la Estrategia

- Validar que el sistema funciona conforme a los requisitos.
- Detectar defectos de forma temprana.
- Reducir el riesgo de fallos en producción.
- Garantizar estabilidad y seguridad.

---

## 📌 Alcance

La estrategia aplica a:

- Backend
- Frontend
- Base de datos
- Integraciones API
- Módulos de inventario, embarques y reportes.

---

## 🧩 Niveles de Prueba

| Nivel | Descripción |
|------|-------------|
| Pruebas Unitarias | Validan funciones individuales |
| Pruebas de Integración | Verifican la comunicación entre módulos |
| Pruebas de Sistema | Evalúan el sistema completo |
| Pruebas de Aceptación (UAT) | Validación por el cliente |
| Pruebas de Seguridad | Verifican vulnerabilidades |
| Pruebas de Rendimiento | Evalúan carga y tiempos |

---

## 🛠️ Herramientas de Testing

| Herramienta | Uso |
|-------------|-----|
| Jest | Pruebas unitarias backend |
| Cypress | Pruebas End-to-End |
| Selenium | Pruebas de interfaz |
| Postman | Pruebas de API |
| JMeter | Pruebas de carga |

---

## 🗓️ Plan de Pruebas por Sprint

| Sprint | Tipo de prueba | Responsable |
|--------|---------------|-------------|
| Sprint 2 | Validación de requisitos | QA / Tester |
| Sprint 3 | Pruebas de diseño | QA |
| Sprint 4 | Unitarias (Backend) | Desarrollador |
| Sprint 5 | Integración | QA |
| Sprint 6 | Sistema / UAT | Cliente / QA |
| Sprint 7 | Regresión final | QA / Tester |

---

## 👥 Roles en Pruebas

| Rol | Función |
|-----|---------|
| QA | Diseñar plan de pruebas |
| Tester | Ejecutar casos de prueba |
| Desarrollador | Corregir defectos |
| Gestor | Supervisión |

---

## ⚠️ Gestión de Defectos

Flujo:

1. Detectar defecto
2. Registrar en Jira
3. Clasificar severidad
4. Asignar responsable
5. Corregir
6. Re-probar
7. Cerrar

---

## 📊 Métricas de Testing

| Métrica | Objetivo |
|--------|----------|
| Casos ejecutados | 100% |
| Casos aprobados | ≥ 95% |
| Bugs críticos | 0 |
| Tiempo promedio de corrección | < 24 hrs |

---

## ✅ Criterios de Salida (Exit Criteria)

Una fase se considera completa cuando:

- Se ejecutaron todos los casos de prueba planeados
- No existen defectos críticos abiertos
- Las pruebas de aceptación fueron aprobadas

---

## 🔄 Estrategia de Pruebas de Regresión

Después de cada cambio:

- Se ejecutan pruebas regresivas
- Se validan módulos críticos
- Se documentan resultados

---

[← Volver a Gestión de Calidad](index)
