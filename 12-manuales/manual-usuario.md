---
layout: default
title: Manual de Usuario
---

# 📖 Manual de Usuario

**Plataforma Web de Gestión de Inventarios y Embarques**  
**Diesel Global Logistics Inc.**

---

## 📑 Tabla de Contenidos

1. [Introducción](#1-introducción)
2. [Acceso al Sistema](#2-acceso-al-sistema)
3. [Panel Principal](#3-panel-principal)
4. [Gestión de Clientes](#4-gestión-de-clientes)
5. [Gestión de Inventario](#5-gestión-de-inventario)
6. [Gestión de Embarques](#6-gestión-de-embarques)
7. [Generación de Reportes](#7-generación-de-reportes)
8. [Gestión de Usuarios](#8-gestión-de-usuarios)
9. [Cerrar Sesión](#9-cerrar-sesión)
10. [Solución de Problemas](#10-solución-de-problemas)
11. [Apéndices](#11-apéndices)

---

## 1. Introducción

### 1.1 Propósito del Sistema

La **Plataforma Web de Diesel Global** es una solución tecnológica diseñada para optimizar el control de inventario y embarques de la empresa Diesel Global Logistics Inc. El sistema permite digitalizar y automatizar procesos logísticos, reducir errores humanos y mejorar la trazabilidad en tiempo real.

### 1.2 Características Principales

- ✅ **Gestión de Inventario:** Control de materiales con códigos QR únicos
- ✅ **Gestión de Embarques:** Seguimiento de envíos y estados de entrega
- ✅ **Generación de Reportes:** Informes exportables en PDF y Excel
- ✅ **Gestión de Usuarios:** Control de accesos y permisos por roles
- ✅ **Trazabilidad Completa:** Registro de todas las operaciones del sistema

### 1.3 Requisitos del Sistema

| Requisito | Especificación |
|-----------|----------------|
| **Navegador Web** | Chrome, Firefox, Safari o Edge (última versión) |
| **Conexión a Internet** | Requerida para acceder al sistema |
| **Resolución de Pantalla** | Mínimo 1280x720 píxeles |

---

## 2. Acceso al Sistema

![Pantalla de Inicio de Sesión](../../assets/images/manual/login-screen.png)  
*Ilustración 1: Inicio de Sesión*

### 2.1 Iniciar Sesión

1. Abra su navegador web e ingrese a la URL proporcionada por su administrador:
   ```
   https://dieselglobal-platform.com
   ```

2. En la pantalla de inicio de sesión, encontrará dos campos:

   ![Formulario de Login](../../assets/images/manual/login-form.png)  
   *Ilustración 2: Ingresar Credenciales*

   - **Usuario:** Ingrese su nombre de usuario asignado
   - **Contraseña:** Ingrese su contraseña

3. Haga clic en el botón **"Entrar"** de color azul

4. Si las credenciales son correctas, será redirigido al Panel Principal

> **📌 Nota:** Si olvida su contraseña, contacte al administrador del sistema para su restablecimiento.

### 2.2 Roles de Usuario

El sistema cuenta con diferentes roles, cada uno con permisos específicos:

| Rol | Permisos |
|-----|----------|
| **Admin** | Acceso completo a todas las funcionalidades del sistema |
| **Operaciones** | Gestión de inventario y embarques |
| **Almacén** | Registro y consulta de materiales |

---

## 3. Panel Principal

![Panel Principal del Sistema](../../assets/images/manual/dashboard-main.png)  
*Ilustración 3: Vista del Panel Principal*

### 3.1 Descripción General

Al iniciar sesión, accederá al Panel Principal, que muestra:

- **Barra Superior:** Logo de Diesel Global, nombre del usuario actual y botón de cerrar sesión

  ![Barra de Navegación Superior](../../assets/images/manual/navbar-top.png)

- **Título:** "Panel Principal - Diesel Global" con icono de camión 🚛

- **Mensaje de Bienvenida:** Personalizado con su nombre

  ![Mensaje de Bienvenida](../../assets/images/manual/welcome-message.png)

- **Tarjetas de Acceso:** Seis módulos principales del sistema

  ![Tarjetas de Módulos](../../assets/images/manual/module-cards.png)

### 3.2 Módulos Disponibles

#### 📋 Gestión de Clientes
- **Descripción:** Administra los datos de tus clientes registrados
- **Botón:** "Entrar" (azul)
- **Función:** Accede al módulo de clientes

#### 📦 Inventario
- **Descripción:** Consulta y controla el stock de materiales y lotes
- **Botón:** "Entrar" (verde)
- **Función:** Accede al módulo de inventario

#### 🚛 Embarques
- **Descripción:** Gestiona embarques, destinos y transportes
- **Botón:** "Entrar" (amarillo)
- **Función:** Accede al módulo de embarques

#### 📊 Reportes
- **Descripción:** Genera informes detallados en PDF o Excel
- **Botón:** "Entrar" (verde)
- **Función:** Accede al generador de reportes

#### 👥 Usuarios
- **Descripción:** Consulta o administra los usuarios del sistema
- **Botón:** "Próximamente" (gris - en desarrollo)
- **Función:** Módulo en construcción

#### 🔒 Cerrar Sesión
- **Descripción:** Finaliza tu sesión de manera segura
- **Botón:** "Salir" (rojo)
- **Función:** Cierra la sesión actual

---

## 4. Gestión de Clientes

![Módulo de Gestión de Clientes](../../assets/images/manual/clientes-main.png)  
*Ilustración 4: Vista del Módulo de Clientes*

### 4.1 Acceso al Módulo

Desde el Panel Principal, haga clic en el botón **"Entrar"** de la tarjeta "Gestión de Clientes".

![Botón de Acceso a Clientes](../../assets/images/manual/clientes-button.png)

### 4.2 Lista de Clientes

La pantalla principal muestra:

- **Barra de Búsqueda:** Permite buscar clientes por nombre
- **Botón "Agregar Cliente":** En la esquina superior izquierda (verde)
- **Tabla de Clientes:** Con las siguientes columnas:
  - **Nombre:** Nombre del cliente
  - **Ciudad:** Ciudad donde se encuentra
  - **País:** País de origen
  - **Acciones:** Botones de Editar (amarillo) y Eliminar (rojo)

### 4.3 Buscar un Cliente

![Búsqueda de Clientes](../../assets/images/manual/clientes-search.png)

1. En la barra de búsqueda, escriba el nombre del cliente
2. Haga clic en el botón **"Buscar"** (azul)
3. El sistema filtrará los resultados en tiempo real

### 4.4 Agregar un Nuevo Cliente

![Botón Agregar Cliente](../../assets/images/manual/clientes-add-button.png)

1. Haga clic en el botón **"+ Agregar Cliente"** (verde)
2. Complete el formulario con los siguientes datos:
   - Nombre del cliente
   - Ciudad
   - País
   - Otros datos requeridos
3. Haga clic en **"Guardar"**
4. El nuevo cliente aparecerá en la lista

### 4.5 Editar un Cliente

1. Localice al cliente en la tabla
2. Haga clic en el botón **"✏ Editar"** (amarillo) en la columna Acciones
3. Modifique la información necesaria
4. Haga clic en **"Guardar cambios"**

### 4.6 Eliminar un Cliente

1. Localice al cliente en la tabla
2. Haga clic en el botón **"🗑 Eliminar"** (rojo) en la columna Acciones
3. Confirme la eliminación en el mensaje emergente
4. El cliente será removido del sistema

> ⚠️ **Advertencia:** La eliminación de clientes es permanente. Asegúrese de que no existan registros asociados antes de eliminar.

---

## 5. Gestión de Inventario

![Módulo de Inventario](../../assets/images/manual/inventario-main.png)  
*Ilustración 5: Vista del Módulo de Inventario*

### 5.1 Acceso al Módulo

Desde el Panel Principal, haga clic en el botón **"Entrar"** de la tarjeta "Inventario".

![Botón de Acceso a Inventario](../../assets/images/manual/inventario-button.png)

### 5.2 Vista de Inventario

La pantalla muestra:

- **Título:** "Inventario"
- **Botón "Agregar nuevo":** Para registrar nuevos materiales (azul)
- **Tabla de Inventario:** Con las siguientes columnas:
  - **ID Inv:** Identificador único del inventario
  - **Material:** Nombre o descripción del material
  - **Lote:** Número de lote asignado
  - **Destino:** Ubicación o destino del material
  - **Cantidad:** Stock disponible
  - **Acciones:** Botones de Editar (amarillo) y Eliminar (rojo)

### 5.3 Agregar Nuevo Material

![Botón Agregar Material](../../assets/images/manual/inventario-add-button.png)

1. Haga clic en el botón **"Agregar nuevo"**
2. Complete el formulario con la siguiente información:
   - Nombre del material (ej: "Amortiguadores", "Horquillas")
   - Número de lote
   - Destino final
   - Cantidad de unidades
   - Código QR (se genera automáticamente)
3. Haga clic en **"Guardar"**
4. El material se agregará al inventario

### 5.4 Códigos QR para Trazabilidad

Cada material registrado recibe un código QR único que permite:

- ✅ Identificación rápida del material
- ✅ Rastreo durante el proceso logístico
- ✅ Reducción de errores en embarques
- ✅ Auditorías más eficientes

> **📌 Nota:** Para leer códigos QR, puede utilizar cualquier lector QR desde su dispositivo móvil.

### 5.5 Editar un Material

1. Localice el material en la tabla
2. Haga clic en el botón **"Editar"** (amarillo)
3. Modifique los campos necesarios
4. Guarde los cambios

### 5.6 Eliminar un Material

1. Localice el material en la tabla
2. Haga clic en el botón **"Eliminar"** (rojo)
3. Confirme la eliminación
4. El material será removido del inventario

> ⚠️ **Importante:** No se pueden eliminar materiales asociados a embarques activos.

---

## 6. Gestión de Embarques

![Módulo de Embarques](../../assets/images/manual/embarques-main.png)  
*Ilustración 6: Vista del Módulo de Embarques*

### 6.1 Acceso al Módulo

Desde el Panel Principal, haga clic en el botón **"Entrar"** de la tarjeta "Embarques".

![Botón de Acceso a Embarques](../../assets/images/manual/embarques-button.png)

### 6.2 Vista de Embarques

La pantalla muestra:

![Título Embarques](../../assets/images/manual/embarques-title.png)

- **Título:** "Embarques"
- **Botón "Agregar nuevo embarque":** Para crear nuevos embarques (azul)
- **Tabla de Embarques:** Con las siguientes columnas:
  - **ID:** Identificador único del embarque
  - **Cliente:** Nombre del cliente destinatario
  - **Fecha:** Fecha de creación del embarque
  - **Estado:** Estado actual (cerrado/abierto)
  - **Acciones:** Botones de Editar (amarillo) y Eliminar (rojo)

### 6.3 Estados de Embarque

| Estado | Descripción |
|--------|-------------|
| **Abierto** | El embarque está en proceso, se pueden agregar materiales |
| **Cerrado** | El embarque está finalizado, no se permiten modificaciones |

### 6.4 Crear Nuevo Embarque

1. Haga clic en **"Agregar nuevo embarque"**
2. Complete la información requerida:
   - Seleccione el cliente destinatario
   - Fecha de embarque
   - Seleccione los materiales del inventario
   - Cantidades por material
   - Observaciones (opcional)
3. Haga clic en **"Crear embarque"**
4. El embarque se creará con estado "abierto"

### 6.5 Editar un Embarque

1. Localice el embarque en la tabla
2. Haga clic en **"Editar"** (amarillo)
3. Puede modificar:
   - Materiales incluidos (solo si está abierto)
   - Cantidades
   - Estado (cambiar de abierto a cerrado)
4. Guarde los cambios

> **📌 Nota:** Los embarques cerrados solo permiten modificar observaciones, no materiales.

### 6.6 Eliminar un Embarque

1. Localice el embarque
2. Haga clic en **"Eliminar"** (rojo)
3. Confirme la acción
4. El embarque será eliminado y los materiales regresarán al inventario disponible

### 6.7 Cerrar un Embarque

Para finalizar un embarque:

1. Edite el embarque
2. Cambie el estado a "cerrado"
3. Guarde los cambios
4. Una vez cerrado, los materiales se descuentan permanentemente del inventario

---

## 7. Generación de Reportes

![Módulo de Reportes](../../assets/images/manual/reportes-main.png)  
*Ilustración 7: Vista del Generador de Reportes*

### 7.1 Acceso al Módulo

Desde el Panel Principal, haga clic en el botón **"Entrar"** de la tarjeta "Reportes".

![Botón de Acceso a Reportes](../../assets/images/manual/reportes-button.png)

### 7.2 Generador de Reportes

La pantalla muestra:

- **Título:** "📊 Generador de Reportes"
- **Selección de tipo de reporte:** Menú desplegable
- **Selección de formato:** Menú desplegable
- **Botón "Generar Reporte":** Para crear el reporte (azul)

### 7.3 Tipos de Reportes Disponibles

El sistema ofrece diferentes tipos de reportes:

| Tipo | Descripción |
|------|-------------|
| **Clientes** | Listado completo de clientes registrados |
| **Inventario** | Estado actual de materiales y existencias |
| **Embarques** | Registro de todos los embarques realizados |
| **Estadísticas** | Análisis de operaciones y tendencias |

### 7.4 Formatos de Exportación

Puede exportar los reportes en dos formatos:

- 📄 **PDF:** Ideal para impresión y presentaciones
- 📊 **Excel:** Permite análisis y manipulación de datos

### 7.5 Generar un Reporte

1. Seleccione el **tipo de reporte** en el primer menú desplegable
2. Seleccione el **formato** deseado (PDF o Excel)
3. Haga clic en **"Generar Reporte"**
4. El sistema procesará la información y generará el documento

### 7.6 Descargar Reporte Generado

![Pantalla de Reporte Generado](../../assets/images/manual/reportes-generated.png)  
*Ilustración 8: Reporte Generado con Código QR*

Después de generar el reporte:

1. Aparecerá la pantalla "📱 Reporte Generado Correctamente"
2. Verá un código QR para descargar desde dispositivos móviles
3. El nombre del archivo se mostrará (ej: `reporte_clientes_20251112_141435.pdf`)
4. Opciones disponibles:
   - **"📥 Descargar directamente":** Descarga inmediata al dispositivo
   - **"📊 Volver a Reportes":** Regresa al generador para crear otro reporte

### 7.7 Uso del Código QR

El código QR permite:

- 📱 Descargar el reporte desde su teléfono móvil
- 🔗 Compartir el reporte rápidamente
- ✉️ Acceder al documento sin necesidad de correo electrónico

**Pasos para usar el QR:**

1. Abra la cámara o una app de lectura QR en su teléfono
2. Escanee el código QR mostrado en pantalla
3. El reporte se descargará automáticamente en su dispositivo

---

## 8. Gestión de Usuarios

![Módulo de Usuarios](../../assets/images/manual/usuarios-main.png)  
*Ilustración 9: Vista del Módulo de Gestión de Usuarios*

### 8.1 Acceso al Módulo

Desde el Panel Principal, acceda al módulo de Usuarios (disponible solo para administradores).

> **📌 Nota:** Esta funcionalidad estará marcada como "Próximamente" para usuarios que no tienen permisos de administración.

### 8.2 Lista de Usuarios

La pantalla muestra:

- **Título:** "👥 Gestión de Usuarios"
- **Botón "➕ Agregar Usuario":** Para crear nuevos usuarios (verde)
- **Tabla de Usuarios:** Con las siguientes columnas:
  - **Nombre:** Nombre completo del usuario
  - **Usuario:** Nombre de usuario para inicio de sesión
  - **Rol:** Tipo de acceso (Admin, operaciones, almacén)
  - **Correo electrónico:** Email del usuario
  - **Acciones:** Botones de Editar (amarillo) y Eliminar (rojo)

### 8.3 Crear Nuevo Usuario

1. Haga clic en **"➕ Agregar Usuario"**
2. Complete el formulario:
   - Nombre completo
   - Nombre de usuario (sin espacios)
   - Contraseña inicial
   - Correo electrónico
   - Rol del sistema
3. Haga clic en **"Guardar"**
4. El nuevo usuario podrá acceder con sus credenciales

### 8.4 Roles y Permisos

#### 👨‍💼 Admin
- ✅ Acceso completo a todas las funcionalidades
- ✅ Puede crear, editar y eliminar usuarios
- ✅ Acceso a reportes avanzados

#### 🔧 Operaciones
- ✅ Gestión de clientes, inventario y embarques
- ✅ Generación de reportes estándar
- ❌ No puede administrar usuarios

#### 📦 Almacén
- ✅ Registro y consulta de inventario
- ✅ Consulta de embarques
- ⚠️ Acceso limitado a reportes

### 8.5 Editar un Usuario

1. Localice al usuario en la tabla
2. Haga clic en **"✏ Editar"** (amarillo)
3. Modifique los campos necesarios
4. Para cambiar la contraseña, marque la opción correspondiente
5. Guarde los cambios

### 8.6 Eliminar un Usuario

1. Localice al usuario en la tabla
2. Haga clic en **"🗑 Eliminar"** (rojo)
3. Confirme la eliminación
4. El usuario perderá acceso al sistema

> ⚠️ **Precaución:** No puede eliminar su propio usuario mientras está en sesión.

---

## 9. Cerrar Sesión

### 9.1 Salir del Sistema

Para cerrar su sesión de forma segura:

**Opción 1: Desde el Panel Principal**
1. Localice la tarjeta "🔒 Cerrar Sesión"
2. Haga clic en el botón **"Salir"** (rojo)

**Opción 2: Desde cualquier pantalla**
1. Localice el botón **"Cerrar sesión"** en la esquina superior derecha
2. Haga clic en él
3. Será redirigido a la pantalla de inicio de sesión

### 9.2 Buenas Prácticas de Seguridad

- 🔒 Siempre cierre sesión cuando termine de usar el sistema
- 🚫 No comparta sus credenciales con otras personas
- 💻 No deje su sesión abierta en computadoras compartidas
- 🔑 Cambie su contraseña periódicamente

---

## 10. Solución de Problemas

### 10.1 No puedo iniciar sesión

**Posibles causas y soluciones:**

- ❌ **Credenciales incorrectas:** Verifique que usuario y contraseña estén escritos correctamente
- 🔤 **Mayúsculas activadas:** El sistema distingue entre mayúsculas y minúsculas
- 🔒 **Usuario bloqueado:** Contacte al administrador del sistema
- 🔑 **Contraseña olvidada:** Solicite un restablecimiento al administrador

### 10.2 El sistema está lento

**Soluciones recomendadas:**

1. Verifique su conexión a Internet
2. Cierre pestañas innecesarias del navegador
3. Actualice la página presionando `F5`
4. Limpie el caché y cookies del navegador
5. Contacte al soporte técnico si el problema persiste

### 10.3 No veo el botón de Agregar/Editar

**Causa probable:** Su rol de usuario no tiene permisos para esa acción.

**Solución:** Contacte al administrador para verificar sus permisos.

### 10.4 Error al generar reportes

**Soluciones:**

1. Verifique que existan datos para el tipo de reporte seleccionado
2. Intente con un formato diferente (PDF o Excel)
3. Recargue la página e intente nuevamente
4. Contacte al soporte técnico con el mensaje de error

### 10.5 El código QR no funciona

**Soluciones:**

1. Asegúrese de tener buena iluminación al escanear
2. Acerque o aleje el dispositivo del código
3. Utilice una aplicación de lectura QR actualizada
4. Si el problema persiste, use la opción de descarga directa

### 10.6 Cambios no se guardan

**Soluciones:**

1. Verifique que todos los campos obligatorios estén completos
2. Revise que los datos tengan el formato correcto
3. Asegúrese de hacer clic en el botón "Guardar"
4. Revise que su sesión no haya expirado

### 10.7 Contacto de Soporte

Si los problemas persisten, contacte al equipo de soporte:

| Contacto | Información |
|----------|-------------|
| **Gestor del Proyecto** | Ángel Elías Romero Paulín |
| **Soporte Técnico** | Instituto Tecnológico de San Juan del Río |
| **Documentación adicional** | Consulte los manuales técnicos |

---

## 11. Apéndices

### A. Glosario de Términos

| Término | Definición |
|---------|------------|
| **Inventario** | Stock de materiales disponibles en almacén |
| **Embarque** | Envío de materiales a un cliente específico |
| **Lote** | Grupo de materiales con características similares |
| **Código QR** | Código de barras bidimensional para identificación rápida |
| **Trazabilidad** | Capacidad de rastrear un material en todo su ciclo |
| **Rol** | Conjunto de permisos asignados a un usuario |

### B. Atajos de Teclado

| Atajo | Función |
|-------|---------|
| `F5` | Actualizar página |
| `Ctrl + F` | Buscar en página |
| `Ctrl + P` | Imprimir (en reportes) |
| `Alt + ←` | Retroceder |
| `Esc` | Cerrar diálogos emergentes |

### C. Información de Contacto

**Diesel Global Logistics Inc.**

- 🌐 Sitio web: [URL de la empresa]
- ✉️ Email de soporte: soporte@dieselglobal.com
- ☎️ Teléfono: [Número de contacto]

**Desarrollado por:** Instituto Tecnológico de San Juan del Río

- 📁 Proyecto: PROJ-2025-001
- 🔢 Versión del Sistema: 1.0
- 📅 Fecha de implementación: 2025

---

## 📝 Notas Finales

Este manual está diseñado para facilitar el uso de la Plataforma Web de Diesel Global. Se recomienda:

- ✅ Participar en las capacitaciones programadas
- ✅ Consultar este manual ante cualquier duda
- ✅ Reportar cualquier anomalía al equipo de soporte
- ✅ Proporcionar retroalimentación para mejoras futuras

---

## 🔗 Navegación

- [← Volver a Manuales](../)
- [Ir al Manual Técnico →](../manual-tecnico)

---

*Documento generado: Diciembre 2025*  
*Versión: 1.0*  
*© 2025 Diesel Global Logistics Inc.*
