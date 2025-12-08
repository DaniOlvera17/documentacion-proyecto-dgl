---
layout: default
title: Registro de Riesgos
---

# ⚠️ Registro de Riesgos del Proyecto

<div class="info-box">
  <strong>Proyecto:</strong> Plataforma Web de Gestión de Inventarios y Embarques<br>
  <strong>Código:</strong> PROJ-2025-001<br>
  <strong>Última actualización:</strong> 3 de diciembre de 2025
</div>

---

## 📋 Información General

Este documento contiene el registro completo de riesgos identificados para el proyecto, incluyendo su análisis, probabilidad, impacto y estrategias de mitigación.

### Criterios de Evaluación

#### Probabilidad
- **Muy Alta (5):** > 80% de probabilidad de ocurrencia
- **Alta (4):** 60-80% de probabilidad
- **Media (3):** 40-60% de probabilidad
- **Baja (2):** 20-40% de probabilidad
- **Muy Baja (1):** < 20% de probabilidad

#### Impacto
- **Muy Alto (5):** Impacto crítico en alcance, costo o cronograma (> 20%)
- **Alto (4):** Impacto significativo (15-20%)
- **Medio (3):** Impacto moderado (10-15%)
- **Bajo (2):** Impacto menor (5-10%)
- **Muy Bajo (1):** Impacto mínimo (< 5%)

#### Nivel de Riesgo
**Nivel de Riesgo = Probabilidad × Impacto**

| Puntuación | Nivel | Acción |
|-----------|-------|--------|
| 20-25 | <span class="badge badge-danger">Crítico</span> | Acción inmediata requerida |
| 15-19 | <span class="badge badge-danger">Alto</span> | Plan de mitigación prioritario |
| 10-14 | <span class="badge badge-warning">Medio</span> | Monitoreo continuo |
| 5-9 | <span class="badge badge-info">Bajo</span> | Monitoreo periódico |
| 1-4 | <span class="badge badge-success">Muy Bajo</span> | Aceptar y documentar |

---

## 🎯 Matriz de Riesgos

### R001: Retrasos en el Levantamiento de Requerimientos

<div class="warning-box">
  <strong>Categoría:</strong> Gestión de Alcance<br>
  <strong>Probabilidad:</strong> Alta (4)<br>
  <strong>Impacto:</strong> Alto (4)<br>
  <strong>Nivel de Riesgo:</strong> <span class="badge badge-danger">16 - Alto</span>
</div>

**Descripción:**
Los usuarios clave pueden no estar disponibles o no proporcionar información completa durante las sesiones de levantamiento de requerimientos, lo que puede ocasionar retrasos en las primeras 2 semanas del proyecto.

**Causas Raíz:**
- Carga de trabajo operativa de los usuarios
- Falta de claridad sobre los requisitos del sistema
- Múltiples prioridades conflictivas en la organización

**Consecuencias:**
- Retraso de 1-2 semanas en el cronograma
- Incremento en el costo por horas adicionales
- Requerimientos incompletos o incorrectos
- Reproceso en fases posteriores

**Estrategia de Respuesta:** Mitigar

**Plan de Mitigación:**
1. Programar sesiones de trabajo semanales obligatorias con usuarios clave
2. Obtener compromiso formal del sponsor para liberar tiempo de los usuarios
3. Preparar cuestionarios y formatos estructurados previo a las sesiones
4. Designar un facilitador para optimizar el tiempo de las reuniones
5. Documentar y validar incrementalmente los requisitos

**Plan de Contingencia:**
- Si el retraso es inevitable, ajustar cronograma con aprobación del sponsor
- Utilizar técnicas de prototipado rápido para validar requerimientos
- Implementar sesiones virtuales asíncronas si la presencialidad es el problema

**Responsable:** Ángel Elías Romero Paulín (Gestor del Proyecto)

**Estado:** <span class="badge badge-warning">Activo - Monitoreando</span>

---

### R002: Cambios de Alcance Durante el Desarrollo

<div class="warning-box">
  <strong>Categoría:</strong> Gestión de Alcance<br>
  <strong>Probabilidad:</strong> Media (3)<br>
  <strong>Impacto:</strong> Muy Alto (5)<br>
  <strong>Nivel de Riesgo:</strong> <span class="badge badge-danger">15 - Alto</span>
</div>

**Descripción:**
Durante las fases de desarrollo, los stakeholders pueden solicitar cambios significativos en las funcionalidades, características o requisitos ya acordados, generando desviaciones en alcance, tiempo y presupuesto.

**Causas Raíz:**
- Requerimientos iniciales no bien definidos
- Cambios en las necesidades del negocio
- Expectativas no alineadas entre stakeholders
- Falta de proceso formal de control de cambios

**Consecuencias:**
- Retraso de 2-4 semanas en el proyecto
- Incremento del presupuesto en 15-25%
- Desmotivación del equipo técnico
- Riesgo de no cumplir con la fecha de entrega

**Estrategia de Respuesta:** Mitigar

**Plan de Mitigación:**
1. Establecer un proceso formal de control de cambios desde el inicio
2. Implementar validaciones al cierre de cada sprint con los stakeholders
3. Documentar y firmar formalmente todos los requerimientos aprobados
4. Realizar demos incrementales para validar el avance
5. Evaluar impacto de cada solicitud de cambio (tiempo, costo, riesgo)

**Plan de Contingencia:**
- Priorizar cambios críticos y diferir los no críticos a fases futuras
- Negociar extensión de plazo o incremento de presupuesto con el sponsor
- Implementar metodología ágil con priorización de backlog

**Responsable:** Ángel Elías Romero Paulín (Gestor del Proyecto)

**Estado:** <span class="badge badge-warning">Activo - Monitoreando</span>

---

### R003: Resistencia al Cambio por Parte de Usuarios

<div class="warning-box">
  <strong>Categoría:</strong> Gestión de Cambio Organizacional<br>
  <strong>Probabilidad:</strong> Alta (4)<br>
  <strong>Impacto:</strong> Alto (4)<br>
  <strong>Nivel de Riesgo:</strong> <span class="badge badge-danger">16 - Alto</span>
</div>

**Descripción:**
Los usuarios finales pueden mostrar resistencia a adoptar el nuevo sistema debido a la comodidad con procesos manuales, miedo a la tecnología o preocupación por la curva de aprendizaje.

**Causas Raíz:**
- Falta de involucramiento de usuarios en el diseño
- Comunicación insuficiente sobre los beneficios del sistema
- Experiencias negativas previas con sistemas tecnológicos
- Temor a la pérdida de control o de empleo

**Consecuencias:**
- Baja adopción del sistema (< 50% en los primeros meses)
- Datos incorrectos o incompletos en el sistema
- Retorno a procesos manuales paralelos
- Fracaso del proyecto en fase de implementación

**Estrategia de Respuesta:** Mitigar

**Plan de Mitigación:**
1. Involucrar a usuarios clave desde las fases iniciales del proyecto
2. Implementar capacitación temprana y continua
3. Nombrar "champions" o embajadores del sistema en cada área
4. Comunicar constantemente los beneficios y mejoras del sistema
5. Diseñar interfaces intuitivas y fáciles de usar
6. Proporcionar soporte intensivo en las primeras semanas post-implementación

**Plan de Contingencia:**
- Implementar programa de incentivos para usuarios que adopten el sistema
- Ofrecer capacitación personalizada uno-a-uno
- Establecer período de transición con soporte 24/7

**Responsable:** Ángel Elías Romero Paulín (Gestor) / Equipo de Capacitación

**Estado:** <span class="badge badge-warning">Activo - Monitoreando</span>

---

### R004: Problemas de Integración con Sistemas Existentes

<div class="info-box">
  <strong>Categoría:</strong> Técnico<br>
  <strong>Probabilidad:</strong> Media (3)<br>
  <strong>Impacto:</strong> Alto (4)<br>
  <strong>Nivel de Riesgo:</strong> <span class="badge badge-warning">12 - Medio</span>
</div>

**Descripción:**
Pueden surgir dificultades técnicas al intentar integrar la nueva plataforma con sistemas existentes (hojas de cálculo, sistemas legacy, etc.) debido a incompatibilidad de formatos o falta de APIs.

**Causas Raíz:**
- Documentación insuficiente de sistemas existentes
- Tecnologías obsoletas sin capacidad de integración
- Formatos de datos propietarios o no estándar
- Falta de personal con conocimiento de sistemas legacy

**Consecuencias:**
- Retraso de 1-2 semanas en fase de desarrollo
- Necesidad de desarrollo de conectores adicionales
- Datos duplicados o inconsistentes entre sistemas
- Incremento del presupuesto en 10-15%

**Estrategia de Respuesta:** Mitigar

**Plan de Mitigación:**
1. Realizar análisis técnico detallado de sistemas existentes en fase de diseño
2. Definir estrategia de migración de datos tempranamente
3. Desarrollar conectores o APIs intermedias si es necesario
4. Implementar procesos de importación/exportación manual como respaldo
5. Validar integraciones en ambiente de pruebas antes de producción

**Plan de Contingencia:**
- Implementar ingreso manual temporal de datos
- Postergar integraciones complejas a fases futuras
- Contratar consultor especializado en el sistema legacy

**Responsable:** Esteban Reséndiz Urquiza (Desarrollador)

**Estado:** <span class="badge badge-info">Identificado - Sin materializar</span>

---

### R005: Rotación de Personal Clave del Proyecto

<div class="info-box">
  <strong>Categoría:</strong> Recursos Humanos<br>
  <strong>Probabilidad:</strong> Baja (2)<br>
  <strong>Impacto:</strong> Muy Alto (5)<br>
  <strong>Nivel de Riesgo:</strong> <span class="badge badge-warning">10 - Medio</span>
</div>

**Descripción:**
Miembros clave del equipo (desarrollador, diseñador, analista) pueden abandonar el proyecto por razones personales, laborales o de salud, generando pérdida de conocimiento y retrasos.

**Causas Raíz:**
- Ofertas laborales externas más atractivas
- Insatisfacción con condiciones laborales
- Problemas de salud o familiares
- Sobrecarga de trabajo

**Consecuencias:**
- Retraso de 2-4 semanas para reclutamiento y capacitación
- Pérdida de conocimiento crítico del proyecto
- Desmotivación del resto del equipo
- Incremento de costos por reclutamiento

**Estrategia de Respuesta:** Mitigar

**Plan de Mitigación:**
1. Mantener documentación actualizada y accesible del proyecto
2. Implementar sesiones de knowledge sharing semanales
3. Distribuir conocimiento crítico entre varios miembros del equipo
4. Mantener comunicación abierta sobre satisfacción del equipo
5. Establecer acuerdos de compromiso con el equipo durante el proyecto

**Plan de Contingencia:**
- Tener lista de candidatos potenciales pre-evaluados
- Redistribuir tareas entre el equipo restante temporalmente
- Contratar consultores externos para tareas específicas

**Responsable:** Ángel Elías Romero Paulín (Gestor del Proyecto)

**Estado:** <span class="badge badge-info">Identificado - Sin materializar</span>

---

### R006: Fallas de Seguridad o Brechas de Datos

<div class="danger-box">
  <strong>Categoría:</strong> Seguridad<br>
  <strong>Probabilidad:</strong> Baja (2)<br>
  <strong>Impacto:</strong> Muy Alto (5)<br>
  <strong>Nivel de Riesgo:</strong> <span class="badge badge-warning">10 - Medio</span>
</div>

**Descripción:**
El sistema puede ser vulnerable a ataques cibernéticos, accesos no autorizados o pérdida de datos sensibles de inventarios y embarques, comprometiendo la operación y reputación de la empresa.

**Causas Raíz:**
- Implementación inadecuada de controles de seguridad
- Contraseñas débiles o compartidas
- Falta de encriptación de datos sensibles
- Vulnerabilidades no parcheadas en el código
- Ingeniería social dirigida a usuarios

**Consecuencias:**
- Pérdida o filtración de información confidencial
- Multas y sanciones legales
- Daño reputacional a la empresa
- Interrupción de operaciones
- Costos de remediación y auditorías de seguridad

**Estrategia de Respuesta:** Mitigar

**Plan de Mitigación:**
1. Implementar autenticación robusta con roles y permisos
2. Encriptar datos sensibles en tránsito y en reposo
3. Realizar pruebas de penetración y auditorías de seguridad
4. Implementar monitoreo y alertas de actividad sospechosa
5. Capacitar a usuarios en buenas prácticas de seguridad
6. Mantener respaldos automáticos diarios
7. Cumplir con estándares ISO/IEC 27001

**Plan de Contingencia:**
- Activar protocolo de respuesta a incidentes de seguridad
- Realizar análisis forense y contención inmediata
- Notificar a autoridades y afectados según legislación
- Restaurar desde respaldos seguros

**Responsable:** Esteban Reséndiz Urquiza (Desarrollador) / Raúl Mejía Reséndiz (QA)

**Estado:** <span class="badge badge-info">Identificado - Controles preventivos activos</span>

---

### R007: Problemas de Rendimiento del Sistema

<div class="info-box">
  <strong>Categoría:</strong> Técnico<br>
  <strong>Probabilidad:</strong> Media (3)<br>
  <strong>Impacto:</strong> Medio (3)<br>
  <strong>Nivel de Riesgo:</strong> <span class="badge badge-info">9 - Bajo</span>
</div>

**Descripción:**
El sistema puede experimentar lentitud, tiempos de respuesta prolongados o caídas cuando se manejen grandes volúmenes de datos o múltiples usuarios concurrentes.

**Causas Raíz:**
- Consultas a base de datos no optimizadas
- Falta de índices en tablas críticas
- Servidor con capacidad insuficiente
- Código no eficiente en backend o frontend
- Falta de caché para operaciones frecuentes

**Consecuencias:**
- Frustración de usuarios y baja adopción
- Pérdida de productividad operativa
- Necesidad de reingeniería de componentes
- Costos adicionales de infraestructura

**Estrategia de Respuesta:** Mitigar

**Plan de Mitigación:**
1. Realizar pruebas de carga y estrés durante fase de QA
2. Optimizar consultas y estructuras de base de datos
3. Implementar estrategias de caché
4. Dimensionar infraestructura adecuadamente desde el inicio
5. Monitorear métricas de rendimiento en producción
6. Establecer SLA de disponibilidad mínima del 99.5%

**Plan de Contingencia:**
- Escalar verticalmente u horizontalmente la infraestructura
- Implementar balanceadores de carga
- Optimizar código crítico identificado

**Responsable:** Esteban Reséndiz Urquiza (Desarrollador)

**Estado:** <span class="badge badge-info">Identificado - Pruebas programadas</span>

---

### R008: Insuficiencia de Presupuesto

<div class="warning-box">
  <strong>Categoría:</strong> Financiero<br>
  <strong>Probabilidad:</strong> Media (3)<br>
  <strong>Impacto:</strong> Alto (4)<br>
  <strong>Nivel de Riesgo:</strong> <span class="badge badge-warning">12 - Medio</span>
</div>

**Descripción:**
El presupuesto asignado de $50,000 USD puede ser insuficiente si surgen costos no previstos, cambios de alcance o se requieren recursos adicionales.

**Causas Raíz:**
- Estimación inicial incorrecta o incompleta
- Cambios en el alcance del proyecto
- Necesidad de herramientas o licencias no contempladas
- Costos de infraestructura mayores a los estimados
- Horas extras del equipo no previstas

**Consecuencias:**
- Detención del proyecto por falta de fondos
- Reducción del alcance o calidad
- Necesidad de renegociar presupuesto con el sponsor
- Desmotivación del equipo

**Estrategia de Respuesta:** Mitigar

**Plan de Mitigación:**
1. Mantener seguimiento semanal del gasto vs. presupuesto
2. Establecer reserva de contingencia del 10-15%
3. Aprobar formalmente cualquier gasto adicional
4. Buscar alternativas de bajo costo (software open source)
5. Controlar estrictamente los cambios de alcance

**Plan de Contingencia:**
- Solicitar presupuesto adicional al sponsor con justificación
- Priorizar funcionalidades críticas y postergar las secundarias
- Negociar descuentos con proveedores

**Responsable:** Ángel Elías Romero Paulín (Gestor del Proyecto)

**Estado:** <span class="badge badge-success">Controlado - Reserva activa</span>

---

## 📊 Resumen de Riesgos

| ID | Riesgo | Probabilidad | Impacto | Nivel | Estado |
|----|--------|--------------|---------|-------|--------|
| R001 | Retrasos en levantamiento de requerimientos | Alta (4) | Alto (4) | <span class="badge badge-danger">16 - Alto</span> | Activo |
| R002 | Cambios de alcance durante desarrollo | Media (3) | Muy Alto (5) | <span class="badge badge-danger">15 - Alto</span> | Activo |
| R003 | Resistencia al cambio de usuarios | Alta (4) | Alto (4) | <span class="badge badge-danger">16 - Alto</span> | Activo |
| R004 | Problemas de integración | Media (3) | Alto (4) | <span class="badge badge-warning">12 - Medio</span> | Identificado |
| R005 | Rotación de personal clave | Baja (2) | Muy Alto (5) | <span class="badge badge-warning">10 - Medio</span> | Identificado |
| R006 | Fallas de seguridad | Baja (2) | Muy Alto (5) | <span class="badge badge-warning">10 - Medio</span> | Controlado |
| R007 | Problemas de rendimiento | Media (3) | Medio (3) | <span class="badge badge-info">9 - Bajo</span> | Identificado |
| R008 | Insuficiencia de presupuesto | Media (3) | Alto (4) | <span class="badge badge-warning">12 - Medio</span> | Controlado |

---

## 🎯 Mapa de Calor de Riesgos

| Impacto / Probabilidad | Muy Baja (1) | Baja (2) | Media (3) | Alta (4) | Muy Alta (5) |
|------------------------|--------------|----------|-----------|----------|--------------|
| **Muy Alto (5)** | | R005, R006 | R002 | | |
| **Alto (4)** | | | R004, R008 | R001, R003 | |
| **Medio (3)** | | | R007 | | |
| **Bajo (2)** | | | | | |
| **Muy Bajo (1)** | | | | | |

---

## 📅 Frecuencia de Revisión

- **Semanal:** Revisión de riesgos de nivel Alto y Crítico
- **Quincenal:** Revisión de todos los riesgos activos
- **Mensual:** Identificación de nuevos riesgos emergentes
- **Al cierre de cada sprint:** Actualización del registro completo

---

## 📝 Proceso de Gestión de Riesgos

1. **Identificación:** Sesiones de brainstorming con el equipo
2. **Análisis:** Evaluación de probabilidad e impacto
3. **Planificación de respuesta:** Definir estrategias de mitigación
4. **Implementación:** Ejecutar planes de mitigación
5. **Monitoreo:** Seguimiento continuo y actualización del registro

---

<div class="text-center text-gray">
  <small>Última actualización: 06 de diciembre de 2025</small><br>
  <small>© 2025 Diesel Global Logistics Inc.</small>
</div>