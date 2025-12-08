---
layout: default
title: Requisitos Funcionales
---

# 📋 Requisitos Funcionales del Sistema

<div class="hero-section">
  <h2>Especificación Detallada de Funcionalidades</h2>
  <p>Requisitos funcionales de la Plataforma Web de Gestión de Inventarios y Embarques</p>
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

## 🎯 Alcance de Requisitos Funcionales

Este documento describe todas las funcionalidades que debe proporcionar el sistema para cumplir con los objetivos del proyecto. Los requisitos están organizados por módulos y priorizados según su criticidad.

### Prioridades

- **🔴 Alta (Must Have):** Funcionalidad crítica, sin ella el sistema no puede operar
- **🟡 Media (Should Have):** Funcionalidad importante, pero el sistema puede operar sin ella temporalmente
- **🟢 Baja (Nice to Have):** Funcionalidad deseable para mejorar la experiencia

---

## 📦 Módulo 1: Gestión de Inventarios

### RF-INV-001: Registro de Materiales

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-danger">Alta</span><br>
  <strong>Descripción:</strong> El sistema debe permitir el registro de nuevos materiales en el inventario con información completa.
</div>

**Criterios de Aceptación:**
1. El usuario puede ingresar los siguientes datos del material:
   - Código interno del material (único, alfanumérico)
   - Nombre del material
   - Descripción detallada
   - Categoría (lista desplegable predefinida)
   - Unidad de medida (piezas, cajas, kg, litros, etc.)
   - Stock mínimo
   - Stock máximo
   - Ubicación en almacén
   - Proveedor
   - Precio unitario
   - Imagen del material (opcional)
2. El sistema genera automáticamente un código QR único por material
3. El sistema valida que no exista un material con el mismo código
4. El sistema registra fecha y hora de creación y usuario responsable
5. El sistema muestra mensaje de confirmación al guardar exitosamente

**Datos de Entrada:**
- Información del material (texto, números, imágenes)

**Datos de Salida:**
- Código QR generado
- Confirmación de registro exitoso
- ID único del material

---

### RF-INV-002: Consulta de Inventario

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-danger">Alta</span><br>
  <strong>Descripción:</strong> El sistema debe permitir consultar el inventario actual con múltiples filtros de búsqueda.
</div>

**Criterios de Aceptación:**
1. El usuario puede buscar materiales por:
   - Código del material
   - Nombre (búsqueda parcial)
   - Categoría
   - Ubicación en almacén
   - Rango de stock (menor a mínimo, normal, mayor a máximo)
2. El sistema muestra resultados en tabla con:
   - Código, nombre, categoría, stock actual, ubicación
   - Indicador visual de estado de stock (rojo: bajo mínimo, amarillo: cerca del mínimo, verde: normal)
3. El usuario puede ordenar resultados por cualquier columna
4. El usuario puede exportar resultados a Excel o PDF
5. El sistema muestra el total de materiales encontrados
6. La búsqueda es en tiempo real (actualización automática)

**Datos de Entrada:**
- Criterios de búsqueda (texto, categoría, ubicación)

**Datos de Salida:**
- Lista de materiales que cumplen los criterios
- Reporte exportable (Excel/PDF)

---

### RF-INV-003: Actualización de Stock

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-danger">Alta</span><br>
  <strong>Descripción:</strong> El sistema debe permitir actualizar las cantidades de stock de materiales mediante entradas y salidas.
</div>

**Criterios de Aceptación:**
1. El usuario puede registrar dos tipos de movimientos:
   - **Entrada:** Incrementa el stock (recepción de materiales)
   - **Salida:** Decrementa el stock (despacho de materiales)
2. Para cada movimiento, el sistema solicita:
   - Material (búsqueda por código o escaneo de QR)
   - Tipo de movimiento (entrada/salida)
   - Cantidad
   - Motivo del movimiento
   - Documento de referencia (orden de compra, nota de entrega, etc.)
   - Observaciones (opcional)
3. El sistema valida que no se realicen salidas mayores al stock disponible
4. El sistema actualiza automáticamente el stock actual
5. El sistema genera alerta si el stock queda por debajo del mínimo
6. Cada movimiento queda registrado en el historial con fecha, hora y usuario

**Datos de Entrada:**
- Código del material o QR escaneado
- Tipo de movimiento (entrada/salida)
- Cantidad
- Motivo y observaciones

**Datos de Salida:**
- Stock actualizado
- Confirmación del movimiento
- Alerta si stock bajo mínimo

---

### RF-INV-004: Generación y Gestión de Códigos QR

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-danger">Alta</span><br>
  <strong>Descripción:</strong> El sistema debe generar códigos QR únicos para cada material y permitir su impresión.
</div>

**Criterios de Aceptación:**
1. Al registrar un material, el sistema genera automáticamente un código QR único
2. El código QR contiene:
   - Código interno del material
   - Nombre del material
   - URL para consulta rápida
3. El usuario puede visualizar el código QR en pantalla
4. El usuario puede imprimir el código QR en diferentes formatos:
   - Etiqueta individual
   - Hoja con múltiples códigos
   - Formato personalizado
5. El sistema permite reimprimir códigos QR existentes
6. El usuario puede escanear el código QR con dispositivo móvil para ver detalles del material

**Datos de Entrada:**
- Material seleccionado

**Datos de Salida:**
- Código QR generado
- Etiqueta imprimible

---

### RF-INV-005: Alertas de Stock Mínimo

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-warning">Media</span><br>
  <strong>Descripción:</strong> El sistema debe generar alertas automáticas cuando el stock de materiales esté por debajo del mínimo establecido.
</div>

**Criterios de Aceptación:**
1. El sistema evalúa automáticamente el stock después de cada movimiento
2. Si el stock es menor o igual al stock mínimo, el sistema:
   - Muestra notificación en pantalla al usuario
   - Envía correo electrónico al supervisor de almacén
   - Registra la alerta en un log de alertas
3. El usuario supervisor puede ver un dashboard con todos los materiales en stock bajo mínimo
4. El usuario puede marcar la alerta como "atendida" con comentarios
5. El sistema permite configurar el umbral de alerta (ej: alertar al 120% del mínimo)

**Datos de Entrada:**
- Stock actual vs. stock mínimo configurado

**Datos de Salida:**
- Notificación visual
- Correo electrónico de alerta
- Dashboard de materiales críticos

---

### RF-INV-006: Historial de Movimientos

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-danger">Alta</span><br>
  <strong>Descripción:</strong> El sistema debe mantener un registro histórico completo de todos los movimientos de inventario.
</div>

**Criterios de Aceptación:**
1. El sistema registra automáticamente cada movimiento con:
   - Fecha y hora exacta
   - Tipo de movimiento (entrada/salida)
   - Material afectado
   - Cantidad del movimiento
   - Stock anterior y stock resultante
   - Usuario responsable
   - Motivo del movimiento
   - Documento de referencia
2. El usuario puede consultar el historial con filtros:
   - Por rango de fechas
   - Por material
   - Por tipo de movimiento
   - Por usuario
3. El sistema muestra el historial en orden cronológico inverso (más reciente primero)
4. El usuario puede exportar el historial a Excel o PDF
5. El historial es de solo lectura (no modificable)

**Datos de Entrada:**
- Criterios de búsqueda (fechas, material, usuario)

**Datos de Salida:**
- Lista de movimientos históricos
- Reporte exportable

---

### RF-INV-007: Auditoría de Inventario

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-warning">Media</span><br>
  <strong>Descripción:</strong> El sistema debe permitir realizar auditorías de inventario comparando stock físico vs. stock en sistema.
</div>

**Criterios de Aceptación:**
1. El usuario supervisor puede iniciar una nueva auditoría
2. El sistema muestra lista de todos los materiales a auditar
3. El usuario puede escanear el código QR del material o buscarlo manualmente
4. El usuario ingresa la cantidad física contada
5. El sistema compara automáticamente cantidad física vs. cantidad en sistema
6. El sistema calcula y muestra discrepancias:
   - Faltante (físico < sistema)
   - Sobrante (físico > sistema)
   - Sin diferencia (físico = sistema)
7. El usuario puede agregar observaciones para cada diferencia
8. Al finalizar la auditoría, el sistema genera reporte con:
   - Lista completa de materiales auditados
   - Discrepancias encontradas
   - Porcentaje de exactitud
9. El sistema permite ajustar el stock en sistema según resultado de auditoría (requiere aprobación)

**Datos de Entrada:**
- Cantidades físicas contadas
- Observaciones de discrepancias

**Datos de Salida:**
- Reporte de auditoría
- Listado de discrepancias
- Indicador de exactitud del inventario

---

## 🚚 Módulo 2: Gestión de Embarques

### RF-EMB-001: Creación de Orden de Embarque

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-danger">Alta</span><br>
  <strong>Descripción:</strong> El sistema debe permitir crear órdenes de embarque especificando destino y materiales a enviar.
</div>

**Criterios de Aceptación:**
1. El usuario puede crear una nueva orden de embarque ingresando:
   - Número de orden (generado automáticamente o manual)
   - Cliente/Destinatario
   - Dirección de destino
   - Fecha programada de embarque
   - Transportista
   - Tipo de transporte
   - Observaciones
2. El usuario puede agregar materiales a la orden mediante:
   - Búsqueda manual
   - Escaneo de código QR
3. Para cada material agregado, el usuario especifica:
   - Cantidad a embarcar
   - Observaciones especiales (si aplica)
4. El sistema valida que hay stock suficiente para cada material
5. El sistema calcula automáticamente el peso total y volumen (si aplica)
6. El sistema genera un folio único para la orden de embarque
7. La orden puede guardarse como borrador o confirmarse

**Datos de Entrada:**
- Información del destinatario
- Lista de materiales y cantidades
- Datos del transporte

**Datos de Salida:**
- Folio de orden de embarque
- Orden guardada en el sistema

---

### RF-EMB-002: Asignación de Materiales a Embarques

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-danger">Alta</span><br>
  <strong>Descripción:</strong> El sistema debe permitir asignar materiales específicos del inventario a una orden de embarque.
</div>

**Criterios de Aceptación:**
1. El usuario puede buscar una orden de embarque existente
2. El usuario puede agregar, modificar o eliminar materiales de la orden (solo si está en estado "Borrador" o "Preparación")
3. Al agregar un material:
   - El sistema valida disponibilidad en stock
   - El sistema muestra stock disponible actual
   - El sistema solicita cantidad a asignar
4. El sistema permite escanear códigos QR para asignación rápida
5. El sistema reserva temporalmente los materiales asignados (no disponibles para otras órdenes)
6. El usuario puede ver resumen de materiales asignados vs. pendientes
7. El sistema muestra alertas si se intenta asignar más cantidad de la disponible

**Datos de Entrada:**
- Orden de embarque
- Materiales y cantidades a asignar

**Datos de Salida:**
- Lista de materiales asignados
- Stock reservado actualizado

---

### RF-EMB-003: Validación de Embarques

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-danger">Alta</span><br>
  <strong>Descripción:</strong> El sistema debe permitir validar que los materiales físicos correspondan con la orden de embarque mediante escaneo de QR.
</div>

**Criterios de Aceptación:**
1. El usuario supervisor abre la orden de embarque en modo "Validación"
2. El sistema muestra lista de materiales a embarcar con cantidades
3. El usuario escanea el código QR de cada material físico
4. El sistema verifica que el material escaneado:
   - Pertenece a la orden de embarque actual
   - No ha sido escaneado previamente
5. El sistema actualiza el conteo de materiales validados en tiempo real
6. El sistema muestra visualmente:
   - ✅ Materiales validados (verde)
   - ⏳ Materiales pendientes (amarillo)
   - ❌ Materiales incorrectos (rojo)
7. El usuario solo puede cerrar la orden cuando todos los materiales estén validados
8. El sistema registra fecha, hora y usuario que realizó la validación

**Datos de Entrada:**
- Código QR escaneado

**Datos de Salida:**
- Estado de validación en tiempo real
- Confirmación de embarque validado

---

### RF-EMB-004: Generación de Documentación de Embarque

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-danger">Alta</span><br>
  <strong>Descripción:</strong> El sistema debe generar automáticamente la documentación requerida para cada embarque.
</div>

**Criterios de Aceptación:**
1. El sistema genera los siguientes documentos en PDF:
   - **Packing List (Lista de Empaque):**
     - Folio de orden
     - Fecha de embarque
     - Cliente/Destinatario
     - Dirección completa
     - Lista detallada de materiales (código, nombre, cantidad, peso)
     - Total de piezas y peso
   - **Nota de Remisión:**
     - Datos del remitente (Diesel Global)
     - Datos del destinatario
     - Lista de materiales
     - Firmas de autorización
   - **Etiquetas de Embarque:**
     - Información del destinatario
     - Código QR del embarque
     - Número de bultos
2. El usuario puede previsualizar los documentos antes de imprimir
3. El usuario puede imprimir o descargar los documentos en PDF
4. Los documentos quedan almacenados en el sistema vinculados a la orden
5. El sistema permite reimprimir documentos en cualquier momento

**Datos de Entrada:**
- Orden de embarque validada

**Datos de Salida:**
- Packing List en PDF
- Nota de Remisión en PDF
- Etiquetas de embarque imprimibles

---

### RF-EMB-005: Seguimiento de Estado de Embarques

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-warning">Media</span><br>
  <strong>Descripción:</strong> El sistema debe permitir hacer seguimiento del estado de cada embarque desde su creación hasta la entrega.
</div>

**Criterios de Aceptación:**
1. Cada orden de embarque tiene un estado que puede ser:
   - **Borrador:** Orden creada pero no confirmada
   - **Preparación:** Orden confirmada, asignando materiales
   - **Validación:** Verificando materiales físicos
   - **Lista para Envío:** Todos los materiales validados
   - **En Tránsito:** Orden despachada
   - **Entregada:** Confirmación de recepción
   - **Cancelada:** Orden cancelada
2. El sistema registra automáticamente fecha y hora de cada cambio de estado
3. El usuario puede ver el historial completo de estados de una orden
4. El sistema permite filtrar órdenes por estado
5. El dashboard muestra resumen de órdenes por estado
6. El sistema envía notificaciones por correo en cambios de estado clave

**Datos de Entrada:**
- Cambio de estado de orden

**Datos de Salida:**
- Estado actualizado
- Historial de estados
- Notificaciones por email

---

### RF-EMB-006: Consulta de Embarques

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-danger">Alta</span><br>
  <strong>Descripción:</strong> El sistema debe permitir consultar embarques con múltiples criterios de búsqueda.
</div>

**Criterios de Aceptación:**
1. El usuario puede buscar órdenes de embarque por:
   - Número de orden/folio
   - Cliente/Destinatario
   - Rango de fechas
   - Estado
   - Transportista
   - Material incluido
2. El sistema muestra resultados en tabla con:
   - Folio, fecha, cliente, destino, estado, total de materiales
3. El usuario puede ordenar resultados por cualquier columna
4. El usuario puede hacer clic en una orden para ver detalles completos
5. El sistema permite exportar resultados a Excel o PDF
6. El usuario puede acceder rápidamente a los documentos generados de cada orden

**Datos de Entrada:**
- Criterios de búsqueda

**Datos de Salida:**
- Lista de órdenes de embarque
- Detalles de orden seleccionada

---

## 📊 Módulo 3: Reportes y Análisis

### RF-REP-001: Reporte de Inventario Actual

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-danger">Alta</span><br>
  <strong>Descripción:</strong> El sistema debe generar reportes del estado actual del inventario.
</div>

**Criterios de Aceptación:**
1. El usuario puede generar reporte con:
   - Lista completa de materiales
   - Stock actual de cada material
   - Valor total del inventario
   - Materiales con stock bajo mínimo
   - Materiales sin movimiento en X días
2. El usuario puede filtrar el reporte por:
   - Categoría
   - Ubicación
   - Rango de stock
3. El reporte incluye gráficos:
   - Distribución de inventario por categoría (pie chart)
   - Top 10 materiales con más stock
   - Materiales críticos (stock bajo)
4. El usuario puede exportar el reporte en:
   - PDF (formato imprimible)
   - Excel (datos editables)
5. El reporte incluye fecha y hora de generación

**Datos de Entrada:**
- Filtros seleccionados (categoría, ubicación, etc.)

**Datos de Salida:**
- Reporte en PDF o Excel
- Gráficos visuales

---

### RF-REP-002: Reporte de Movimientos

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-warning">Media</span><br>
  <strong>Descripción:</strong> El sistema debe generar reportes de movimientos de inventario en un período específico.
</div>

**Criterios de Aceptación:**
1. El usuario puede generar reporte de movimientos especificando:
   - Rango de fechas
   - Tipo de movimiento (entradas, salidas, ambos)
   - Material específico o todos
   - Usuario responsable
2. El reporte muestra:
   - Fecha y hora de cada movimiento
   - Material, cantidad, tipo de movimiento
   - Usuario responsable
   - Stock anterior y resultante
   - Motivo del movimiento
3. El reporte incluye totales:
   - Total de entradas
   - Total de salidas
   - Saldo neto
4. El reporte incluye gráficos:
   - Entradas vs. Salidas por día
   - Movimientos por material (top 10)
5. El usuario puede exportar a PDF o Excel

**Datos de Entrada:**
- Rango de fechas
- Filtros de búsqueda

**Datos de Salida:**
- Reporte de movimientos en PDF/Excel
- Gráficos de análisis

---

### RF-REP-003: Reporte de Embarques

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-warning">Media</span><br>
  <strong>Descripción:</strong> El sistema debe generar reportes de embarques realizados en un período.
</div>

**Criterios de Aceptación:**
1. El usuario puede generar reporte de embarques con:
   - Rango de fechas
   - Cliente específico o todos
   - Estado de embarque
   - Destino
2. El reporte muestra:
   - Lista de órdenes de embarque
   - Fecha, cliente, destino, estado
   - Total de materiales embarcados
   - Valor total embarcado
3. El reporte incluye:
   - Total de embarques realizados
   - Total de materiales enviados
   - Distribución por cliente (gráfico)
   - Embarques por estado (gráfico)
4. El usuario puede exportar a PDF o Excel

**Datos de Entrada:**
- Rango de fechas y filtros

**Datos de Salida:**
- Reporte de embarques en PDF/Excel

---

### RF-REP-004: Dashboard Ejecutivo

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-warning">Media</span><br>
  <strong>Descripción:</strong> El sistema debe proporcionar un dashboard con indicadores clave del negocio.
</div>

**Criterios de Aceptación:**
1. El dashboard muestra en tiempo real:
   - **Inventario:**
     - Total de materiales en stock
     - Valor total del inventario
     - Materiales con stock crítico
     - Rotación de inventario
   - **Embarques:**
     - Embarques del día
     - Embarques pendientes
     - Embarques en tránsito
     - Tasa de cumplimiento de entregas
   - **Alertas:**
     - Materiales bajo stock mínimo
     - Órdenes de embarque atrasadas
     - Discrepancias de auditoría pendientes
2. El dashboard incluye gráficos interactivos:
   - Movimientos de la semana (entradas/salidas)
   - Top 10 materiales más movidos
   - Embarques por destino
3. El dashboard se actualiza automáticamente cada 5 minutos
4. El usuario puede hacer clic en cualquier indicador para ver detalles

**Datos de Entrada:**
- Datos actuales del sistema

**Datos de Salida:**
- Dashboard con KPIs visuales

---

## 👤 Módulo 4: Administración y Seguridad

### RF-ADM-001: Gestión de Usuarios

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-danger">Alta</span><br>
  <strong>Descripción:</strong> El sistema debe permitir crear y administrar cuentas de usuario con diferentes niveles de acceso.
</div>

**Criterios de Aceptación:**
1. El administrador puede crear usuarios ingresando:
   - Nombre completo
   - Correo electrónico
   - Nombre de usuario
   - Contraseña inicial
   - Rol (perfil de permisos)
   - Estado (activo/inactivo)
2. El sistema envía correo al usuario con credenciales de acceso
3. El administrador puede:
   - Ver lista de todos los usuarios
   - Editar información de usuarios
   - Desactivar/Activar usuarios
   - Resetear contraseñas
   - Cambiar roles
4. El sistema registra última fecha de acceso de cada usuario
5. Las contraseñas deben cumplir política de seguridad:
   - Mínimo 8 caracteres
   - Al menos una mayúscula, minúscula, número y carácter especial

**Datos de Entrada:**
- Información del usuario

**Datos de Salida:**
- Usuario creado en el sistema
- Correo de bienvenida

---

### RF-ADM-002: Gestión de Roles y Permisos

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-danger">Alta</span><br>
  <strong>Descripción:</strong> El sistema debe implementar control de acceso basado en roles (RBAC).
</div>

**Criterios de Aceptación:**
1. El sistema incluye roles predefinidos:
   - **Administrador:** Acceso total al sistema
   - **Supervisor de Almacén:** Gestión completa de inventario y embarques
   - **Operador de Almacén:** Registro de movimientos y consultas
   - **Operador de Embarques:** Gestión de órdenes de embarque
   - **Consultor:** Solo visualización de reportes
2. Cada rol tiene permisos específicos sobre cada módulo:
   - Crear, Leer, Actualizar, Eliminar (CRUD)
3. El administrador puede:
   - Crear roles personalizados
   - Asignar permisos granulares a cada rol
   - Modificar permisos de roles existentes
4. El sistema valida permisos en cada acción del usuario
5. Si un usuario intenta una acción no permitida, muestra mensaje de error

**Datos de Entrada:**
- Definición de roles y permisos

**Datos de Salida:**
- Roles configurados en el sistema

---

### RF-ADM-003: Inicio de Sesión y Autenticación

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-danger">Alta</span><br>
  <strong>Descripción:</strong> El sistema debe implementar un mecanismo seguro de autenticación de usuarios.
</div>

**Criterios de Aceptación:**
1. El usuario ingresa nombre de usuario y contraseña
2. El sistema valida las credenciales contra la base de datos
3. Si son correctas:
   - El sistema crea una sesión segura
   - Redirige al usuario al dashboard según su rol
   - Registra fecha y hora de inicio de sesión
4. Si son incorrectas:
   - Muestra mensaje de error genérico
   - Registra el intento fallido
   - Bloquea la cuenta después de 5 intentos fallidos
5. El sistema cierra automáticamente la sesión después de 30 minutos de inactividad
6. El usuario puede cerrar sesión manualmente
7. El sistema implementa protección contra ataques de fuerza bruta

**Datos de Entrada:**
- Usuario y contraseña

**Datos de Salida:**
- Sesión iniciada o mensaje de error

---

### RF-ADM-004: Registro de Auditoría

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-warning">Media</span><br>
  <strong>Descripción:</strong> El sistema debe mantener un log de auditoría de todas las acciones críticas realizadas en el sistema.
</div>

**Criterios de Aceptación:**
1. El sistema registra automáticamente en el log de auditoría:
   - Inicios y cierres de sesión
   - Creación, modificación y eliminación de registros
   - Cambios de estado de órdenes de embarque
   - Ajustes de inventario
   - Cambios en configuración del sistema
2. Para cada registro, el sistema guarda:
   - Fecha y hora exacta
   - Usuario que realizó la acción
   - Tipo de acción
   - Módulo afectado
   - Datos antes y después del cambio
   - Dirección IP del usuario
3. El administrador puede consultar el log con filtros:
   - Por rango de fechas
   - Por usuario
   - Por tipo de acción
   - Por módulo
4. El log es de solo lectura (no modificable)
5. Los registros se mantienen por al menos 12 meses

**Datos de Entrada:**
- Acciones del usuario en el sistema

**Datos de Salida:**
- Log de auditoría completo

---

### RF-ADM-005: Configuración del Sistema

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-success">Baja</span><br>
  <strong>Descripción:</strong> El sistema debe permitir configurar parámetros generales de operación.
</div>

**Criterios de Aceptación:**
1. El administrador puede configurar:
   - **Empresa:**
     - Nombre, logo, dirección, datos fiscales
   - **Inventario:**
     - Categorías de materiales
     - Unidades de medida
     - Ubicaciones de almacén
   - **Embarques:**
     - Transportistas disponibles
     - Tipos de transporte
     - Destinos frecuentes
   - **Sistema:**
     - Tiempo de sesión antes de expirar
     - Formato de fecha y hora
     - Idioma del sistema
     - Política de contraseñas
2. Los cambios de configuración se aplican inmediatamente
3. El sistema registra quién y cuándo realizó cada cambio de configuración
4. Solo usuarios con rol de Administrador pueden acceder a esta sección

**Datos de Entrada:**
- Parámetros de configuración

**Datos de Salida:**
- Configuración actualizada

---

### RF-ADM-006: Respaldos y Recuperación

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-warning">Media</span><br>
  <strong>Descripción:</strong> El sistema debe realizar respaldos automáticos de la base de datos.
</div>

**Criterios de Aceptación:**
1. El sistema realiza respaldo automático de la base de datos:
   - Diariamente a las 2:00 AM
   - Antes de cada actualización del sistema
2. Los respaldos incluyen:
   - Toda la base de datos
   - Archivos adjuntos (imágenes, documentos)
3. El administrador puede:
   - Ver lista de respaldos disponibles
   - Descargar un respaldo específico
   - Iniciar respaldo manual
   - Restaurar desde un respaldo (con confirmación)
4. Los respaldos se mantienen por 30 días
5. El sistema notifica por correo si falla un respaldo programado

**Datos de Entrada:**
- Trigger automático o manual

**Datos de Salida:**
- Archivo de respaldo generado

---

## 📱 Módulo 5: Funcionalidades Adicionales

### RF-ADD-001: Notificaciones del Sistema

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-warning">Media</span><br>
  <strong>Descripción:</strong> El sistema debe enviar notificaciones automáticas por eventos importantes.
</div>

**Criterios de Aceptación:**
1. El sistema envía notificaciones por correo electrónico cuando:
   - Material llega a stock mínimo
   - Se crea una nueva orden de embarque
   - Una orden cambia de estado
   - Se completa una auditoría con discrepancias
   - Hay intentos de acceso fallidos a una cuenta
2. El usuario puede configurar sus preferencias de notificación
3. Las notificaciones incluyen:
   - Asunto claro y descriptivo
   - Detalles del evento
   - Enlace directo al elemento en el sistema
4. El sistema registra todas las notificaciones enviadas

**Datos de Entrada:**
- Eventos del sistema

**Datos de Salida:**
- Correos electrónicos de notificación

---

### RF-ADD-002: Búsqueda Global

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-success">Baja</span><br>
  <strong>Descripción:</strong> El sistema debe proporcionar una búsqueda global que permita encontrar información en cualquier módulo.
</div>

**Criterios de Aceptación:**
1. El usuario puede ingresar texto en un buscador global (disponible en todas las pantallas)
2. El sistema busca coincidencias en:
   - Materiales (código, nombre, descripción)
   - Órdenes de embarque (folio, cliente)
   - Usuarios (nombre)
3. El sistema muestra resultados agrupados por tipo
4. El usuario puede hacer clic en un resultado para ir directamente al detalle
5. La búsqueda es sensible a permisos del usuario (solo muestra lo que puede ver)

**Datos de Entrada:**
- Texto de búsqueda

**Datos de Salida:**
- Resultados agrupados por módulo

---

### RF-ADD-003: Ayuda Contextual

<div class="diesel-box">
  <strong>Prioridad:</strong> <span class="badge badge-success">Baja</span><br>
  <strong>Descripción:</strong> El sistema debe proporcionar ayuda contextual en cada pantalla.
</div>

**Criterios de Aceptación:**
1. Cada pantalla del sistema tiene un botón de ayuda (?)
2. Al hacer clic, se muestra información de ayuda específica de esa pantalla
3. La ayuda incluye:
   - Descripción de la funcionalidad
   - Instrucciones paso a paso
   - Capturas de pantalla (si aplica)
   - Tips y mejores prácticas
4. El usuario puede cerrar la ayuda en cualquier momento
5. El sistema incluye manual de usuario completo accesible desde el menú

**Datos de Entrada:**
- Pantalla actual del usuario

**Datos de Salida:**
- Ventana de ayuda contextual

---

## 📊 Resumen de Requisitos Funcionales

### Por Prioridad

| Prioridad | Cantidad | Módulos Principales |
|-----------|----------|---------------------|
| <span class="badge badge-danger">Alta</span> | 15 requisitos | Inventarios, Embarques, Administración |
| <span class="badge badge-warning">Media</span> | 8 requisitos | Reportes, Auditoría, Notificaciones |
| <span class="badge badge-success">Baja</span> | 3 requisitos | Búsqueda, Ayuda, Configuraciones avanzadas |
| **TOTAL** | **26 requisitos** | |

### Por Módulo

| Módulo | Requisitos | Prioridad Promedio |
|--------|-----------|-------------------|
| **Gestión de Inventarios** | 7 requisitos | Alta |
| **Gestión de Embarques** | 6 requisitos | Alta |
| **Reportes y Análisis** | 4 requisitos | Media |
| **Administración y Seguridad** | 6 requisitos | Alta |
| **Funcionalidades Adicionales** | 3 requisitos | Baja |

---

## 🔗 Referencias Cruzadas

- 📄 [Requisitos No Funcionales](requisitos-no-funcionales) - Calidad, rendimiento y seguridad
- 🔗 [Matriz de Trazabilidad](matriz-trazabilidad) - Relación con objetivos del proyecto
- 🎯 [Casos de Uso](/05-analisis-negocio/casos-uso) - Flujos de interacción detallados
- 📖 [Historias de Usuario](/05-analisis-negocio/historias-usuario) - Perspectiva del usuario

---

## 📝 Control de Cambios

| Versión | Fecha | Cambios | Responsable |
|---------|-------|---------|-------------|
| 1.0 | 28/09/2025 | Versión inicial del documento | José Pedro Cruz Ramírez |
| 2.0 | 09/11/2025 | Versión intermedia del documento | José Pedro Cruz Ramírez |
| 3.0 | 03/12/2025 | Versión final del documento | José Pedro Cruz Ramírez |


---

<div class="text-center text-gray">
  <small>Última actualización: 06 de diciembre de 2025</small><br>
  <small>© 2025 Diesel Global Logistics Inc.</small>
</div>
