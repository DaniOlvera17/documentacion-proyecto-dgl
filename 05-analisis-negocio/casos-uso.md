---
layout: default
title: Casos de Uso
---

# 🔷 Casos de Uso – Plataforma Web de Gestión de Almacén y Embarques

Este documento describe los casos de uso del sistema, organizados por módulos funcionales.

---

# 👤 MÓDULO: Autenticación y Seguridad

---

## RF-01 – Iniciar Sesión

| Campo | Descripción |
|--------|-------------|
| **ID** | CU-01 |
| **Nombre** | Iniciar Sesión |
| **Versión** | Versión 1.0 |
| **Autores** | Ángel Elías Romero Paulin |
| **Objetivos Asociados** | OBJ-01: Permitir al usuario iniciar sesión en el sistema. |
| **Requisitos asociados** | RI-01: El usuario debe estar registrado previamente. |
| **Descripción** | Permite al usuario acceder al sistema utilizando sus credenciales. |
| **Precondición** | El usuario debe estar previamente registrado. |
| **Secuencia normal** | 1. El usuario abre la aplicación.<br>2. Ingresa su usuario.<br>3. Ingresa su contraseña.<br>4. El sistema valida las credenciales.<br>5. Se concede acceso al sistema. |
| **Excepciones** | 4. Si las credenciales son incorrectas, se muestra un mensaje de error. |
| **Postcondición** | El usuario accede al sistema. |
| **Importancia** | Alta |
| **Urgencia** | Alta |
| **Comentarios** | Es necesario para acceder a todas las funciones del sistema. |

---

## RF-02 – Cerrar Sesión

| Campo | Descripción |
|--------|-------------|
| **ID** | CU-02 |
| **Nombre** | Cerrar Sesión |
| **Versión** | Versión 1.0 |
| **Autores** | Ángel Elías Romero Paulin |
| **Objetivos Asociados** | OBJ-02: Permitir al usuario cerrar su sesión de forma segura. |
| **Requisitos asociados** | RI-02: El usuario debe tener una sesión activa. |
| **Descripción** | Permite al usuario finalizar su sesión de manera segura. |
| **Precondición** | El usuario debe estar autenticado. |
| **Secuencia normal** | 1. El usuario selecciona la opción “Cerrar sesión”.<br>2. El sistema finaliza la sesión.<br>3. El sistema redirige a la pantalla de inicio. |
| **Excepciones** | No aplica. |
| **Postcondición** | El usuario sale del sistema. |
| **Importancia** | Media |
| **Urgencia** | Media |
| **Comentarios** | Mejora la seguridad del sistema. |

---

## RF-03 – Gestión de Usuarios

| Campo | Descripción |
|--------|-------------|
| **ID** | CU-03 |
| **Nombre** | Gestionar Usuarios |
| **Versión** | Versión 1.0 |
| **Autores** | Ángel Elías Romero Paulin |
| **Objetivos Asociados** | OBJ-03: Permitir la administración de usuarios. |
| **Requisitos asociados** | RI-03: Solo el administrador puede ejecutar esta función. |
| **Descripción** | Permite crear, editar, eliminar y consultar usuarios del sistema. |
| **Precondición** | El administrador debe haber iniciado sesión. |
| **Secuencia normal** | 1. El administrador accede al módulo de usuarios.<br>2. Selecciona la acción (crear, editar o eliminar).<br>3. Ingresa o modifica los datos.<br>4. El sistema guarda los cambios. |
| **Excepciones** | 3. Si los datos son inválidos, el sistema muestra un mensaje de error. |
| **Postcondición** | La información del usuario queda actualizada. |
| **Importancia** | Alta |
| **Urgencia** | Alta |
| **Comentarios** | Función crítica para la administración del sistema. |

---

## RF-04 – Asignar Roles y Permisos

| Campo | Descripción |
|--------|-------------|
| **ID** | CU-04 |
| **Nombre** | Asignar Roles y Permisos |
| **Versión** | Versión 1.0 |
| **Autores** | Ángel Elías Romero Paulin |
| **Objetivos Asociados** | OBJ-04: Controlar el acceso mediante roles. |
| **Requisitos asociados** | RI-04: El usuario debe tener perfil de administrador. |
| **Descripción** | Permite asignar niveles de acceso según el rol del usuario. |
| **Precondición** | El administrador debe haber iniciado sesión. |
| **Secuencia normal** | 1. El administrador selecciona un usuario.<br>2. Asigna un rol.<br>3. El sistema guarda la configuración. |
| **Excepciones** | 2. Si ocurre un error de guardar, el sistema muestra un mensaje. |
| **Postcondición** | Los permisos quedan aplicados al usuario. |
| **Importancia** | Alta |
| **Urgencia** | Media |
| **Comentarios** | Asegura la confidencialidad y control del sistema. |

---
# 📦 MÓDULO: Gestión de Inventarios
---

## CU-05 – Registrar Material

| Campo | Descripción |
|------|-------------|
| **ID** | CU-05 |
| **Nombre** | Registrar Material |
| **Versión** | Versión 1.0 |
| **Autores** | Ángel Elías Romero Paulin |
| **Objetivos Asociados** | OBJ-05: Registrar nuevos materiales en el inventario. |
| **Requisitos asociados** | RI-05: El usuario debe tener permisos de operador. |
| **Descripción** | Permite registrar un nuevo material en el sistema de inventarios. |
| **Precondición** | El usuario debe haber iniciado sesión. |
| **Secuencia normal** | 1. El usuario accede al módulo de inventarios.<br>2. Selecciona “Registrar material”.<br>3. Captura los datos del material.<br>4. El sistema guarda la información. |
| **Excepciones** | 3. Si los datos son incorrectos, el sistema muestra un mensaje de error. |
| **Postcondición** | El material queda almacenado en el inventario. |
| **Importancia** | Alta |
| **Urgencia** | Alta |
| **Comentarios** | Es una función base para el control del almacén. |

---

## CU-06 – Consultar Inventario

| Campo | Descripción |
|------|-------------|
| **ID** | CU-06 |
| **Nombre** | Consultar Inventario |
| **Versión** | Versión 1.0 |
| **Autores** | Ángel Elías Romero Paulin |
| **Objetivos Asociados** | OBJ-06: Visualizar existencias disponibles. |
| **Requisitos asociados** | RI-06: El usuario debe estar autenticado. |
| **Descripción** | Permite consultar la lista de materiales disponibles en el inventario. |
| **Precondición** | Sesión iniciada. |
| **Secuencia normal** | 1. El usuario ingresa al módulo de inventarios.<br>2. El sistema muestra la lista de materiales. |
| **Excepciones** | No aplica. |
| **Postcondición** | Información de inventario visible. |
| **Importancia** | Alta |
| **Urgencia** | Media |
| **Comentarios** | Permite la consulta en tiempo real. |

---

## CU-07 – Actualizar Stock

| Campo | Descripción |
|------|-------------|
| **ID** | CU-07 |
| **Nombre** | Actualizar Stock |
| **Versión** | Versión 1.0 |
| **Autores** | Ángel Elías Romero Paulin |
| **Objetivos Asociados** | OBJ-07: Mantener cantidades actualizadas. |
| **Requisitos asociados** | RI-07: El usuario debe ser operador autorizado. |
| **Descripción** | Permite modificar la cantidad de material existente. |
| **Precondición** | El material debe estar previamente registrado. |
| **Secuencia normal** | 1. El usuario selecciona el material.<br>2. Introduce la nueva cantidad.<br>3. El sistema actualiza el stock. |
| **Excepciones** | 2. Si la cantidad es inválida, se muestra un mensaje de error. |
| **Postcondición** | Stock actualizado. |
| **Importancia** | Alta |
| **Urgencia** | Alta |
| **Comentarios** | Evita desabasto o sobreinventario. |

---

## CU-08 – Eliminar Material

| Campo | Descripción |
|------|-------------|
| **ID** | CU-08 |
| **Nombre** | Eliminar Material |
| **Versión** | Versión 1.0 |
| **Autores** | Ángel Elías Romero Paulin |
| **Objetivos Asociados** | OBJ-08: Eliminar materiales obsoletos. |
| **Requisitos asociados** | RI-08: Solo usuarios autorizados pueden eliminar. |
| **Descripción** | Permite eliminar un material que ya no se utilice. |
| **Precondición** | El material debe existir. |
| **Secuencia normal** | 1. El usuario selecciona el material.<br>2. Selecciona la opción “Eliminar”.<br>3. El sistema confirma la acción.<br>4. El sistema elimina el registro. |
| **Excepciones** | 3. Si el usuario cancela, no se elimina. |
| **Postcondición** | Material eliminado. |
| **Importancia** | Media |
| **Urgencia** | Baja |
| **Comentarios** | Requiere control para evitar pérdidas de información. |

---

## CU-09 – Generar Código QR

| Campo | Descripción |
|------|-------------|
| **ID** | CU-09 |
| **Nombre** | Generar Código QR |
| **Versión** | Versión 1.0 |
| **Autores** | Ángel Elías Romero Paulin |
| **Objetivos Asociados** | OBJ-09: Asociar códigos QR a los materiales. |
| **Requisitos asociados** | RI-09: El material debe estar registrado. |
| **Descripción** | Genera un código QR único para cada material. |
| **Precondición** | Material existente en sistema. |
| **Secuencia normal** | 1. El sistema selecciona el material.<br>2. Genera el código QR.<br>3. Guarda el código en el sistema. |
| **Excepciones** | 2. Si ocurre un error, se notifica al usuario. |
| **Postcondición** | Código QR asignado. |
| **Importancia** | Alta |
| **Urgencia** | Media |
| **Comentarios** | Mejora la trazabilidad. |

---

## CU-10 – Escanear Código QR

| Campo | Descripción |
|------|-------------|
| **ID** | CU-10 |
| **Nombre** | Escanear Código QR |
| **Versión** | Versión 1.0 |
| **Autores** | Ángel Elías Romero Paulin |
| **Objetivos Asociados** | OBJ-10: Validar materiales mediante QR. |
| **Requisitos asociados** | RI-10: El dispositivo debe tener lector de QR. |
| **Descripción** | Permite leer un código QR para identificar un material. |
| **Precondición** | Código QR válido. |
| **Secuencia normal** | 1. El usuario activa la cámara / lector.<br>2. Escanea el código.<br>3. El sistema muestra los datos del material. |
| **Excepciones** | 2. Si el código es inválido, se muestra error. |
| **Postcondición** | Material identificado. |
| **Importancia** | Alta |
| **Urgencia** | Media |
| **Comentarios** | Reduce errores manuales. |

---

## CU-11 – Registrar Movimiento de Inventario

| Campo | Descripción |
|------|-------------|
|------|-------------|
| **ID** | CU-11 |
| **Nombre** | Registrar Movimiento de Inventario |
| **Versión** | Versión 1.0 |
| **Autores** | Ángel Elías Romero Paulin |
| **Objetivos Asociados** | OBJ-11: Registrar entradas y salidas de materiales. |
| **Requisitos asociados** | RI-11: El usuario debe estar autorizado. |
| **Descripción** | Registra los movimientos de entrada y salida del inventario. |
| **Precondición** | El material debe estar registrado. |
| **Secuencia normal** | 1. El usuario selecciona el movimiento.<br>2. Introduce cantidad.<br>3. El sistema guarda el movimiento. |
| **Excepciones** | 2. Error de cantidad → se muestra advertencia. |
| **Postcondición** | Movimiento registrado en historial. |
| **Importancia** | Alta |
| **Urgencia** | Alta |
| **Comentarios** | Permite auditoría del inventario. |

---
# 🚚 MÓDULO: Gestión de Embarques

---

## CU-12 – Crear Orden de Embarque

| Campo | Descripción |
|------|-------------|
| **ID** | CU-12 |
| **Nombre** | Crear Orden de Embarque |
| **Versión** | Versión 1.0 |
| **Autores** | Ángel Elías Romero Paulin |
| **Objetivos Asociados** | OBJ-12: Crear órdenes de embarque dentro del sistema. |
| **Requisitos asociados** | RI-12: El usuario debe tener rol de supervisor. |
| **Descripción** | Permite crear una nueva orden de embarque con datos de destino y cliente. |
| **Precondición** | El usuario debe haber iniciado sesión. |
| **Secuencia normal** | 1. El usuario accede al módulo de embarques.<br>2. Selecciona “Nueva orden”.<br>3. Captura los datos del destino.<br>4. El sistema registra la orden. |
| **Excepciones** | 3. Si los datos son incorrectos, el sistema muestra un mensaje. |
| **Postcondición** | La orden de embarque queda registrada. |
| **Importancia** | Alta |
| **Urgencia** | Alta |
| **Comentarios** | Es el proceso principal del módulo de logística. |

---

## CU-13 – Asignar Materiales a Embarque

| Campo | Descripción |
|------|-------------|
| **ID** | CU-13 |
| **Nombre** | Asignar Materiales a Embarque |
| **Versión** | Versión 1.0 |
| **Autores** | Ángel Elías Romero Paulin |
| **Objetivos Asociados** | OBJ-13: Asociar materiales a una orden de embarque. |
| **Requisitos asociados** | RI-13: Debe existir una orden de embarque. |
| **Descripción** | Permite vincular los materiales disponibles a una orden. |
| **Precondición** | La orden de embarque debe existir. |
| **Secuencia normal** | 1. El usuario selecciona una orden.<br>2. Selecciona los materiales.<br>3. El sistema guarda la asignación. |
| **Excepciones** | 2. Si no hay stock disponible, se muestra mensaje. |
| **Postcondición** | Materiales asignados correctamente. |
| **Importancia** | Alta |
| **Urgencia** | Alta |
| **Comentarios** | Evita errores en la preparación de pedidos. |

---

## CU-14 – Validar Embarque con Código QR

| Campo | Descripción |
|------|-------------|
| **ID** | CU-14 |
| **Nombre** | Validar Embarque con Código QR |
| **Versión** | Versión 1.0 |
| **Autores** | Ángel Elías Romero Paulin |
| **Objetivos Asociados** | OBJ-14: Confirmar que el embarque es correcto antes de su envío. |
| **Requisitos asociados** | RI-14: El embarque debe tener código QR generado. |
| **Descripción** | Permite validar un embarque mediante el escaneo de su código QR. |
| **Precondición** | Embarque previamente registrado. |
| **Secuencia normal** | 1. El usuario abre el lector QR.<br>2. Escanea el código.<br>3. El sistema valida la información. |
| **Excepciones** | 2. Si el código es inválido, se muestra mensaje de error. |
| **Postcondición** | El embarque es validado. |
| **Importancia** | Alta |
| **Urgencia** | Media |
| **Comentarios** | Reduce errores en envíos. |

---

## CU-15 – Consultar Estado del Embarque

| Campo | Descripción |
|------|-------------|
|------|-------------|
| **ID** | CU-15 |
| **Nombre** | Consultar Estado del Embarque |
| **Versión** | Versión 1.0 |
| **Autores** | Ángel Elías Romero Paulin |
| **Objetivos Asociados** | OBJ-15: Visualizar el estado de un embarque. |
| **Requisitos asociados** | RI-15: El usuario debe estar autenticado. |
| **Descripción** | Permite consultar el estado actual de un embarque. |
| **Precondición** | El embarque debe existir. |
| **Secuencia normal** | 1. El usuario ingresa al módulo de embarques.<br>2. Consulta la orden seleccionada.<br>3. El sistema muestra su estado. |
| **Excepciones** | No aplica. |
| **Postcondición** | Estado del embarque visible. |
| **Importancia** | Media |
| **Urgencia** | Media |
| **Comentarios** | Facilita el seguimiento logístico. |

---
# 📊 MÓDULO: Reportes
---

## CU-16 – Generar Reporte de Inventario

| Campo | Descripción |
|------|-------------|
| **ID** | CU-16 |
| **Nombre** | Generar Reporte de Inventario |
| **Versión** | Versión 1.0 |
| **Autores** | Ángel Elías Romero Paulin |
| **Objetivos Asociados** | OBJ-16: Generar reportes detallados del inventario. |
| **Requisitos asociados** | RI-16: El usuario debe estar autenticado con rol autorizado. |
| **Descripción** | Permite generar un reporte del estado actual del inventario. |
| **Precondición** | El usuario debe haber iniciado sesión. |
| **Secuencia normal** | 1. El usuario accede al módulo de reportes.<br>2. Selecciona “Reporte de Inventario”.<br>3. El sistema genera el reporte. |
| **Excepciones** | 3. Si ocurre un error, se muestra un mensaje. |
| **Postcondición** | Reporte generado correctamente. |
| **Importancia** | Alta |
| **Urgencia** | Media |
| **Comentarios** | Útil para auditorías y control interno. |

---

## CU-17 – Generar Reporte de Embarques

| Campo | Descripción |
|------|-------------|
|------|-------------|
| **ID** | CU-17 |
| **Nombre** | Generar Reporte de Embarques |
| **Versión** | Versión 1.0 |
| **Autores** | Ángel Elías Romero Paulin |
| **Objetivos Asociados** | OBJ-17: Generar reportes del historial de embarques. |
| **Requisitos asociados** | RI-17: El usuario debe tener permisos de consulta. |
| **Descripción** | Permite generar reportes de los embarques realizados. |
| **Precondición** | El usuario debe estar autenticado. |
| **Secuencia normal** | 1. El usuario accede al módulo de reportes.<br>2. Selecciona “Reporte de Embarques”.<br>3. El sistema genera el reporte. |
| **Excepciones** | 3. Si el sistema falla, se muestra un error. |
| **Postcondición** | Reporte generado exitosamente. |
| **Importancia** | Alta |
| **Urgencia** | Media |
| **Comentarios** | Ayuda en la toma de decisiones. |

---

## CU-18 – Visualizar Dashboard

| Campo | Descripción |
|------|-------------|
|------|-------------|
| **ID** | CU-18 |
| **Nombre** | Visualizar Dashboard |
| **Versión** | Versión 1.0 |
| **Autores** | Ángel Elías Romero Paulin |
| **Objetivos Asociados** | OBJ-18: Visualizar indicadores clave del sistema. |
| **Requisitos asociados** | RI-18: El usuario debe estar autenticado. |
| **Descripción** | Permite visualizar gráficas e indicadores de rendimiento del sistema. |
| **Precondición** | Usuario con sesión activa. |
| **Secuencia normal** | 1. El usuario accede al dashboard.<br>2. El sistema muestra gráficas e indicadores. |
| **Excepciones** | No aplica. |
| **Postcondición** | Dashboard mostrado correctamente. |
| **Importancia** | Media |
| **Urgencia** | Baja |
| **Comentarios** | Proporciona una visión general del sistema. |

---

[← Volver al Análisis de Negocio](index)