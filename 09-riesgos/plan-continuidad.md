---
layout: default
title: Plan de Continuidad del Negocio
---

# 🔄 Plan de Continuidad del Negocio (BCP)  
Proyecto: Plataforma Web de Gestión de Almacén y Embarques  
Diesel Global Logistics Inc.

---

## 🎯 Objetivo

Asegurar la **continuidad de las operaciones** del sistema ante incidentes, desastres o interrupciones críticas, minimizando el impacto al negocio.

---

## 🧭 Alcance

Este plan aplica en caso de:

- Fallas técnicas del servidor
- Ataques cibernéticos
- Pérdida de información
- Cortes de energía
- Fallas del proveedor de hosting

---

## 🧱 Escenarios de Riesgo

| ID | Escenario | Impacto | Nivel |
|----|----------|---------|------|
| C-01 | Caída del servidor | Alto | Crítico |
| C-02 | Ataque de ransomware | Crítico | Crítico |
| C-03 | Pérdida de base de datos | Crítico | Alto |
| C-04 | Fallo de red | Medio | Medio |

---

## 🔁 Estrategias de Continuidad

### 🗄️ Respaldos

- Backups automáticos diarios de la base de datos
- Copias en servidores externos
- Pruebas de restauración mensuales

### ☁️ Infraestructura Alterna

- Uso de servicios en la nube
- Servidores espejo
- Ambientes de contingencia

---

## ⏱️ Objetivos de Recuperación

| Indicador | Descripción | Valor |
|----------|-------------|------|
| RTO | Tiempo máximo de recuperación | 2 horas |
| RPO | Punto máximo de pérdida de datos | 24 horas |

---

## 🚀 Plan de Acción ante Contingencias

1. Activar equipo de contingencia
2. Evaluar el daño
3. Levantar entorno alterno
4. Restaurar backups
5. Validar integridad de datos
6. Comunicar a stakeholders
7. Retomar operaciones normales

---

## 👥 Roles y Responsables

| Rol | Función |
|-----|--------|
| Gestor del Proyecto | Activar plan de continuidad |
| Desarrollador | Restaurar aplicaciones |
| QA | Validar funcionamiento |
| Documentador | Registrar incidencia |

---

*Documento alineado a ISO/IEC 27001*  
*Versión: 1.0*


<div class="text-center text-gray">
  <small>Última actualización: 06 de diciembre de 2025</small><br>
  <small>© 2025 Diesel Global Logistics Inc.</small>
</div>
