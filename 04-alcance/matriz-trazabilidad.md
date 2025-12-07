---
layout: default
title: Matriz de Trazabilidad
---

# 🔗 Matriz de Trazabilidad de Requisitos

<div class="hero-section">
  <h2>Trazabilidad de Requisitos a Objetivos del Proyecto</h2>
  <p>Asegurando que cada requisito contribuye al logro de los objetivos</p>
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

## 🎯 Propósito de la Matriz de Trazabilidad

La matriz de trazabilidad es una herramienta fundamental que permite:

<div class="success-box">
  <ul>
    <li>✅ <strong>Verificar</strong> que cada requisito contribuye al menos a un objetivo del proyecto</li>
    <li>✅ <strong>Asegurar</strong> que todos los objetivos están cubiertos por requisitos específicos</li>
    <li>✅ <strong>Facilitar</strong> el análisis de impacto cuando hay cambios en requisitos u objetivos</li>
    <li>✅ <strong>Validar</strong> la completitud del alcance del proyecto</li>
    <li>✅ <strong>Justificar</strong> la necesidad de cada requisito ante stakeholders</li>
    <li>✅ <strong>Detectar</strong> requisitos huérfanos (sin objetivo asociado) u objetivos sin requisitos</li>
  </ul>
</div>

---

## 📊 Objetivos del Proyecto

### Objetivo General

<div class="diesel-box">
  <strong>OG-01:</strong> Desarrollar una plataforma web de gestión de almacén y embarques para Diesel Global Logistics Inc. que permita digitalizar y automatizar procesos logísticos, reducir errores humanos y tiempos de operación, mejorar la trazabilidad y el control de inventario, y optimizar los procesos de embarque y la gestión documental.
</div>

### Objetivos Específicos

<div class="diesel-box">
  <strong>OE-01:</strong> Digitalizar los procesos de registro de entradas y salidas mediante la asignación de códigos QR únicos por material.
</div>

<div class="diesel-box">
  <strong>OE-02:</strong> Automatizar la auditoría de materiales para reducir discrepancias entre inventario físico y sistema.
</div>

<div class="diesel-box">
  <strong>OE-03:</strong> Garantizar la asignación correcta de materiales a sus destinos para evitar retrasos y costos adicionales en frontera.
</div>

<div class="diesel-box">
  <strong>OE-04:</strong> Optimizar los tiempos de registro y embarque, disminuyendo los costos operativos.
</div>

<div class="diesel-box">
  <strong>OE-05:</strong> Generar reportes exportables en PDF y Excel para la toma de decisiones estratégicas.
</div>

<div class="diesel-box">
  <strong>OE-06:</strong> Capacitar al personal en el uso del nuevo sistema para asegurar una adopción efectiva.
</div>

---

## 🔗 Matriz de Trazabilidad: Requisitos Funcionales

### Módulo 1: Gestión de Inventarios

<table>
  <thead>
    <tr>
      <th>ID Requisito</th>
      <th>Nombre del Requisito</th>
      <th>OG-01</th>
      <th>OE-01</th>
      <th>OE-02</th>
      <th>OE-03</th>
      <th>OE-04</th>
      <th>OE-05</th>
      <th>OE-06</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>RF-INV-001</strong></td>
      <td>Registro de Materiales</td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RF-INV-002</strong></td>
      <td>Consulta de Inventario</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RF-INV-003</strong></td>
      <td>Actualización de Stock</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RF-INV-004</strong></td>
      <td>Generación y Gestión de Códigos QR</td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RF-INV-005</strong></td>
      <td>Alertas de Stock Mínimo</td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RF-INV-006</strong></td>
      <td>Historial de Movimientos</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RF-INV-007</strong></td>
      <td>Auditoría de Inventario</td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td>✅</td>
      <td></td>
    </tr>
  </tbody>
</table>

**Análisis del Módulo:**
- ✅ Todos los requisitos del módulo de inventario contribuyen al objetivo general (OG-01)
- ✅ Los códigos QR (RF-INV-004) son clave para la digitalización (OE-01)
- ✅ La auditoría (RF-INV-007) automatiza la verificación (OE-02)
- ✅ Optimización de tiempos (OE-04) cubierta por múltiples requisitos

---

### Módulo 2: Gestión de Embarques

<table>
  <thead>
    <tr>
      <th>ID Requisito</th>
      <th>Nombre del Requisito</th>
      <th>OG-01</th>
      <th>OE-01</th>
      <th>OE-02</th>
      <th>OE-03</th>
      <th>OE-04</th>
      <th>OE-05</th>
      <th>OE-06</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>RF-EMB-001</strong></td>
      <td>Creación de Orden de Embarque</td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RF-EMB-002</strong></td>
      <td>Asignación de Materiales a Embarques</td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RF-EMB-003</strong></td>
      <td>Validación de Embarques</td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RF-EMB-004</strong></td>
      <td>Generación de Documentación de Embarque</td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RF-EMB-005</strong></td>
      <td>Seguimiento de Estado de Embarques</td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RF-EMB-006</strong></td>
      <td>Consulta de Embarques</td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
    </tr>
  </tbody>
</table>

**Análisis del Módulo:**
- ✅ El módulo de embarques está fuertemente alineado con OE-03 (asignación correcta)
- ✅ La validación con QR (RF-EMB-003) previene errores de envío
- ✅ La documentación automática (RF-EMB-004) optimiza tiempos (OE-04)
- ✅ El seguimiento (RF-EMB-005) mejora la trazabilidad

---

### Módulo 3: Reportes y Análisis

<table>
  <thead>
    <tr>
      <th>ID Requisito</th>
      <th>Nombre del Requisito</th>
      <th>OG-01</th>
      <th>OE-01</th>
      <th>OE-02</th>
      <th>OE-03</th>
      <th>OE-04</th>
      <th>OE-05</th>
      <th>OE-06</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>RF-REP-001</strong></td>
      <td>Reporte de Inventario Actual</td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RF-REP-002</strong></td>
      <td>Reporte de Movimientos</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RF-REP-003</strong></td>
      <td>Reporte de Embarques</td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RF-REP-004</strong></td>
      <td>Dashboard Ejecutivo</td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td>✅</td>
      <td></td>
    </tr>
  </tbody>
</table>

**Análisis del Módulo:**
- ✅ Todos los reportes contribuyen directamente a OE-05 (reportes exportables)
- ✅ Los reportes en PDF y Excel facilitan la toma de decisiones estratégicas
- ✅ El dashboard ejecutivo proporciona visibilidad en tiempo real

---

### Módulo 4: Administración y Seguridad

<table>
  <thead>
    <tr>
      <th>ID Requisito</th>
      <th>Nombre del Requisito</th>
      <th>OG-01</th>
      <th>OE-01</th>
      <th>OE-02</th>
      <th>OE-03</th>
      <th>OE-04</th>
      <th>OE-05</th>
      <th>OE-06</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>RF-ADM-001</strong></td>
      <td>Gestión de Usuarios</td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✅</td>
    </tr>
    <tr>
      <td><strong>RF-ADM-002</strong></td>
      <td>Gestión de Roles y Permisos</td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✅</td>
    </tr>
    <tr>
      <td><strong>RF-ADM-003</strong></td>
      <td>Inicio de Sesión y Autenticación</td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✅</td>
    </tr>
    <tr>
      <td><strong>RF-ADM-004</strong></td>
      <td>Registro de Auditoría</td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RF-ADM-005</strong></td>
      <td>Configuración del Sistema</td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RF-ADM-006</strong></td>
      <td>Respaldos y Recuperación</td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

**Análisis del Módulo:**
- ✅ Los requisitos de administración soportan OE-06 (capacitación y adopción)
- ✅ La gestión de usuarios facilita el control y la capacitación del personal
- ✅ La auditoría proporciona trazabilidad de todas las operaciones

---

### Módulo 5: Funcionalidades Adicionales

<table>
  <thead>
    <tr>
      <th>ID Requisito</th>
      <th>Nombre del Requisito</th>
      <th>OG-01</th>
      <th>OE-01</th>
      <th>OE-02</th>
      <th>OE-03</th>
      <th>OE-04</th>
      <th>OE-05</th>
      <th>OE-06</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>RF-ADD-001</strong></td>
      <td>Notificaciones del Sistema</td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RF-ADD-002</strong></td>
      <td>Búsqueda Global</td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
    </tr>
    <tr>
      <td><strong>RF-ADD-003</strong></td>
      <td>Ayuda Contextual</td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✅</td>
    </tr>
  </tbody>
</table>

**Análisis del Módulo:**
- ✅ Las funcionalidades adicionales mejoran la usabilidad general
- ✅ La ayuda contextual facilita la capacitación (OE-06)
- ✅ Las notificaciones optimizan tiempos de respuesta (OE-04)

---

## 🔗 Matriz de Trazabilidad: Requisitos No Funcionales

<table>
  <thead>
    <tr>
      <th>ID Requisito</th>
      <th>Categoría</th>
      <th>OG-01</th>
      <th>OE-01</th>
      <th>OE-02</th>
      <th>OE-03</th>
      <th>OE-04</th>
      <th>OE-05</th>
      <th>OE-06</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>RNF-01</strong></td>
      <td>Seguridad</td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✅</td>
    </tr>
    <tr>
      <td><strong>RNF-02</strong></td>
      <td>Rendimiento</td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RNF-03</strong></td>
      <td>Usabilidad</td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
    </tr>
    <tr>
      <td><strong>RNF-04</strong></td>
      <td>Disponibilidad</td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RNF-05</strong></td>
      <td>Integridad</td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RNF-06</strong></td>
      <td>Mantenibilidad</td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>RNF-07</strong></td>
      <td>Recuperación</td>
      <td>✅</td>
      <td></td>
      <td>✅</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

**Análisis de Requisitos No Funcionales:**
- ✅ Todos los RNF contribuyen al objetivo general de calidad del sistema
- ✅ Rendimiento (RNF-02) y Disponibilidad (RNF-04) optimizan tiempos (OE-04)
- ✅ Usabilidad (RNF-03) facilita la adopción del sistema (OE-06)
- ✅ Integridad (RNF-05) asegura asignación correcta (OE-03) y auditorías (OE-02)

---

## 📊 Análisis de Cobertura de Objetivos

### Cobertura por Objetivo

<table>
  <thead>
    <tr>
      <th>Objetivo</th>
      <th>RF</th>
      <th>RNF</th>
      <th>Total</th>
      <th>Cobertura</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>OG-01</strong> - Objetivo General</td>
      <td>26</td>
      <td>7</td>
      <td>33</td>
      <td><span class="badge badge-success">100%</span></td>
    </tr>
    <tr>
      <td><strong>OE-01</strong> - Digitalización con QR</td>
      <td>10</td>
      <td>0</td>
      <td>10</td>
      <td><span class="badge badge-success">Completa</span></td>
    </tr>
    <tr>
      <td><strong>OE-02</strong> - Automatizar auditoría</td>
      <td>9</td>
      <td>3</td>
      <td>12</td>
      <td><span class="badge badge-success">Completa</span></td>
    </tr>
    <tr>
      <td><strong>OE-03</strong> - Asignación correcta</td>
      <td>7</td>
      <td>1</td>
      <td>8</td>
      <td><span class="badge badge-success">Completa</span></td>
    </tr>
    <tr>
      <td><strong>OE-04</strong> - Optimizar tiempos</td>
      <td>11</td>
      <td>3</td>
      <td>14</td>
      <td><span class="badge badge-success">Completa</span></td>
    </tr>
    <tr>
      <td><strong>OE-05</strong> - Generar reportes</td>
      <td>8</td>
      <td>0</td>
      <td>8</td>
      <td><span class="badge badge-success">Completa</span></td>
    </tr>
    <tr>
      <td><strong>OE-06</strong> - Capacitación</td>
      <td>5</td>
      <td>2</td>
      <td>7</td>
      <td><span class="badge badge-success">Completa</span></td>
    </tr>
  </tbody>
</table>

### Gráfico de Cobertura

<div class="success-box">
  <h3>✅ Análisis de Cobertura Exitoso</h3>
  <p><strong>Resultado:</strong> Todos los objetivos del proyecto están cubiertos por al menos un requisito funcional o no funcional.</p>
  <ul>
    <li>✅ <strong>0 objetivos huérfanos</strong> (sin requisitos asociados)</li>
    <li>✅ <strong>0 requisitos huérfanos</strong> (sin objetivo asociado)</li>
    <li>✅ <strong>100% de cobertura</strong> del objetivo general</li>
    <li>✅ <strong>100% de cobertura</strong> de objetivos específicos</li>
  </ul>
</div>

---

## 📈 Estadísticas de Trazabilidad

### Requisitos Funcionales por Objetivo

<div class="card-grid">
  <div class="card">
    <div class="card-title">OE-04: Optimizar Tiempos</div>
    <div class="card-content">
      <h2 style="color: #2C8CC4; margin: 0;">11</h2>
      <p>Requisitos funcionales</p>
      <small>El objetivo más cubierto</small>
    </div>
  </div>

  <div class="card">
    <div class="card-title">OE-02: Automatizar Auditoría</div>
    <div class="card-content">
      <h2 style="color: #2C8CC4; margin: 0;">9</h2>
      <p>Requisitos funcionales</p>
      <small>Alta cobertura</small>
    </div>
  </div>

  <div class="card">
    <div class="card-title">OE-01: Digitalización QR</div>
    <div class="card-content">
      <h2 style="color: #2C8CC4; margin: 0;">10</h2>
      <p>Requisitos funcionales</p>
      <small>Enfoque en QR</small>
    </div>
  </div>

  <div class="card">
    <div class="card-title">OE-05: Reportes</div>
    <div class="card-content">
      <h2 style="color: #2C8CC4; margin: 0;">8</h2>
      <p>Requisitos funcionales</p>
      <small>Análisis y decisiones</small>
    </div>
  </div>
</div>

### Distribución de Requisitos

<table>
  <thead>
    <tr>
      <th>Módulo</th>
      <th>Cantidad RF</th>
      <th>Objetivos Cubiertos</th>
      <th>Impacto</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Gestión de Inventarios</strong></td>
      <td>7</td>
      <td>OE-01, OE-02, OE-04, OE-05</td>
      <td><span class="badge badge-danger">Alto</span></td>
    </tr>
    <tr>
      <td><strong>Gestión de Embarques</strong></td>
      <td>6</td>
      <td>OE-01, OE-03, OE-04, OE-05</td>
      <td><span class="badge badge-danger">Alto</span></td>
    </tr>
    <tr>
      <td><strong>Reportes y Análisis</strong></td>
      <td>4</td>
      <td>OE-02, OE-05</td>
      <td><span class="badge badge-warning">Medio</span></td>
    </tr>
    <tr>
      <td><strong>Administración</strong></td>
      <td>6</td>
      <td>OE-02, OE-04, OE-06</td>
      <td><span class="badge badge-warning">Medio</span></td>
    </tr>
    <tr>
      <td><strong>Adicionales</strong></td>
      <td>3</td>
      <td>OE-04, OE-06</td>
      <td><span class="badge badge-info">Bajo</span></td>
    </tr>
  </tbody>
</table>

---

## 🔍 Análisis de Impacto de Cambios

### Cómo Usar la Matriz para Análisis de Impacto

Cuando se propone un cambio en un requisito, esta matriz permite identificar rápidamente:

<div class="info-box">
  <h4>1. Objetivos Afectados</h4>
  <p>Consulta la fila del requisito para ver qué objetivos se impactan</p>
  
  <h4>2. Requisitos Relacionados</h4>
  <p>Revisa los otros requisitos que contribuyen a los mismos objetivos</p>
  
  <h4>3. Alcance del Cambio</h4>
  <p>Determina si el cambio afecta a otros módulos o funcionalidades</p>
  
  <h4>4. Decisión Informada</h4>
  <p>Evalúa si el cambio es justificado considerando el impacto total</p>
</div>

### Ejemplo de Análisis de Impacto
<parameter name="command">update</parameter>
<parameter name="id">matriz_trazabilidad</parameter>
<parameter name="new_str">### Ejemplo de Análisis de Impacto
<div class="warning-box">
  <h4>Escenario: Cambio en RF-INV-004 (Códigos QR)</h4>
  <p><strong>Cambio Propuesto:</strong> Eliminar la funcionalidad de códigos QR y usar solo códigos de barras tradicionales</p>
  <p><strong>Impacto Identificado mediante la Matriz:</strong></p>
  <ul>
    <li>❌ <strong>OE-01 (Digitalización con QR):</strong> Afecta directamente el objetivo de digitalización</li>
    <li>❌ <strong>RF-EMB-003 (Validación de Embarques):</strong> Dependía de escaneo de QR</li>
    <li>❌ <strong>OE-03 (Asignación correcta):</strong> Se reduce la trazabilidad</li>
    <li>❌ <strong>OE-04 (Optimizar tiempos):</strong> Los QR son más rápidos que códigos de barras</li>
  </ul>
  <p><strong>Decisión:</strong> ❌ <strong>Rechazar el cambio</strong> - El impacto es muy alto y afecta múltiples objetivos críticos del proyecto</p>
</div>

✅ Validación de Completitud
Checklist de Validación
<div class="success-box">
  <h4>✅ Todos los objetivos tienen requisitos asociados</h4>
  <ul>
    <li>✅ OG-01: 33 requisitos (26 RF + 7 RNF)</li>
    <li>✅ OE-01: 10 requisitos funcionales</li>
    <li>✅ OE-02: 12 requisitos (9 RF + 3 RNF)</li>
    <li>✅ OE-03: 8 requisitos (7 RF + 1 RNF)</li>
    <li>✅ OE-04: 14 requisitos (11 RF + 3 RNF)</li>
    <li>✅ OE-05: 8 requisitos funcionales</li>
    <li>✅ OE-06: 7 requisitos (5 RF + 2 RNF)</li>
  </ul>
</div>
<div class="success-box">
  <h4>✅ Todos los requisitos contribuyen al menos a un objetivo</h4>
  <p>De 33 requisitos totales (26 RF + 7 RNF):</p>
  <ul>
    <li>✅ 33 requisitos (100%) están trazados a objetivos</li>
    <li>✅ 0 requisitos huérfanos</li>
  </ul>
</div>
<div class="success-box">
  <h4>✅ Cobertura balanceada</h4>
  <ul>
    <li>✅ Ningún objetivo depende de un solo requisito (riesgo bajo)</li>
    <li>✅ Los objetivos críticos tienen cobertura múltiple</li>
    <li>✅ Distribución equilibrada entre módulos</li>
  </ul>
</div>

📋 Resumen Ejecutivo
<table>
  <thead>
    <tr>
      <th>Métrica</th>
      <th>Valor</th>
      <th>Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Total de Requisitos Funcionales</strong></td>
      <td>26</td>
      <td><span class="badge badge-success">✅</span></td>
    </tr>
    <tr>
      <td><strong>Total de Requisitos No Funcionales</strong></td>
      <td>7</td>
      <td><span class="badge badge-success">✅</span></td>
    </tr>
    <tr>
      <td><strong>Total de Objetivos</strong></td>
      <td>7 (1 general + 6 específicos)</td>
      <td><span class="badge badge-success">✅</span></td>
    </tr>
    <tr>
      <td><strong>Cobertura de Objetivos</strong></td>
      <td>100%</td>
      <td><span class="badge badge-success">✅ Completa</span></td>
    </tr>
    <tr>
      <td><strong>Requisitos Huérfanos</strong></td>
      <td>0</td>
      <td><span class="badge badge-success">✅ Ninguno</span></td>
    </tr>
    <tr>
      <td><strong>Objetivos sin Requisitos</strong></td>
      <td>0</td>
      <td><span class="badge badge-success">✅ Ninguno</span></td>
    </tr>
    <tr>
      <td><strong>Promedio de Requisitos por Objetivo</strong></td>
      <td>10.4</td>
      <td><span class="badge badge-success">✅ Buena cobertura</span></td>
    </tr>
  </tbody>
</table>

🔄 Mantenimiento de la Matriz
Actualización de la Matriz
<div class="diesel-box">
  <h4>La matriz debe actualizarse cuando:</h4>
  <ol>
    <li><strong>Se agregan nuevos requisitos:</strong> Validar que contribuyen a al menos un objetivo</li>
    <li><strong>Se modifican requisitos:</strong> Revisar si cambian las relaciones con objetivos</li>
    <li><strong>Se eliminan requisitos:</strong> Verificar que los objetivos siguen cubiertos</li>
    <li><strong>Se cambian objetivos:</strong> Re-trazar todos los requisitos afectados</li>
  </ol>
</div>

## Responsable de Mantenimiento

<div class="info-box">
  <strong>Responsable:</strong> José Pedro Cruz Ramírez (Analista)<br>
  <strong>Frecuencia de Revisión:</strong> Al inicio de cada Sprint<br>
  <strong>Aprobación de Cambios:</strong> Gestor del Proyecto + Sponsor
</div>

---

## 🔗 Referencias Cruzadas

- 📄 [Acta Constitutiva - Objetivos del proyecto](../01-acta-constitutiva/acta-constitutiva.md)
- 📋 [Requisitos Funcionales - Detalle de RF](../02-requisitos/requisitos-funcionales.md)
- 🔧 [Requisitos No Funcionales - Detalle de RNF](../02-requisitos/requisitos-no-funcionales.md)
- 🎯 [Casos de Uso - Flujos de usuario](../03-casos-de-uso/casos-de-uso.md)
- 📖 [Historias de Usuario - Perspectiva del usuario](../05-historias-usuario/historias-usuario.md)

---

## 📝 Control de Cambios

| Versión | Fecha | Cambios | Responsable |
|---------|-------|---------|-------------|
| 1.0 | 03/12/2025 | Versión inicial de la matriz de trazabilidad | José Pedro Cruz Ramírez |

---

<div class="text-center text-gray">
  <small>Última actualización: 3 de diciembre de 2025</small><br>
  <small>© 2025 Diesel Global Logistics Inc.</small>
</div>