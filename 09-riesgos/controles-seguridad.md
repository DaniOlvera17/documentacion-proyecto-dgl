---
layout: default
title: Controles de Seguridad
---

# 🛡️ Controles de Seguridad de la Información  
**Proyecto:** Plataforma Web de Gestión de Almacén y Embarques  
**Organización:** Diesel Global Logistics Inc.

---

## 🎯 Objetivo

Definir e implementar controles de seguridad **técnicos, administrativos y físicos** para salvaguardar la confidencialidad, integridad y disponibilidad de la información del sistema.

---

## 🧱 Clasificación de Controles

### 🖥️ Controles Técnicos

| Control | Descripción |
|--------|-------------|
| Autenticación segura | Acceso mediante usuario y contraseña cifrada |
| JWT (JSON Web Token) | Gestión segura de sesiones |
| Cifrado en tránsito | Uso obligatorio de HTTPS (TLS 1.2/1.3) |
| Firewall de aplicación | Protección contra accesos no autorizados |
| Monitoreo de actividad | Registro detallado de eventos del sistema |
| Protección OWASP | Mitigación de vulnerabilidades OWASP Top 10 |

---

### 👥 Controles Administrativos

- Definición formal de roles y responsabilidades
- Implementación de **RBAC** (Control de acceso basado en roles)
- Políticas de uso aceptable de sistemas
- Procedimientos de control de cambios
- Capacitación periódica en seguridad

---

### 🏢 Controles Físicos

- Acceso restringido a centros de datos
- Uso de tarjetas de acceso físico
- Monitoreo de instalaciones (CCTV / registros)
- Infraestructura alojada en servidores protegidos

---

## 🔐 Controles de Seguridad Implementados

### Control de Accesos

- Autenticación mediante **JWT**
- Control de permisos mediante **RBAC**
- Contraseñas cifradas con **bcrypt**

---

### Protección de Datos

- Uso obligatorio de **HTTPS**
- Cifrado de datos en tránsito
- Cifrado de datos en reposo

---

### Auditoría y Trazabilidad

- Registro de accesos al sistema
- Bitácora de cambios críticos
- Trazabilidad mediante códigos QR

---

### Respaldo de Información

- Copias de seguridad automáticas diarias
- Almacenamiento de respaldos en la nube
- Procedimientos de recuperación ante desastres

---

## 🧾 Controles Basados en ISO/IEC 27001

| Dominio | Medidas Implementadas |
|---------|------------------------|
| Control de accesos | Autenticación fuerte + RBAC |
| Seguridad criptográfica | HTTPS + Hash con bcrypt |
| Gestión de incidentes | Plan formal de respuesta |
| Continuidad del negocio | Backups automáticos y restauración |
| Desarrollo seguro | Revisión de código y control de versiones |

---

## ✅ Verificación de Controles

| Control | Estado |
|--------|--------|
| Autenticación JWT | ✅ Implementado |
| RBAC | ✅ Implementado |
| Cifrado HTTPS | ✅ Implementado |
| Logs | ✅ Implementado |
| Backups | ✅ Implementado |

---

<div class="info-box">
<strong>Resultado:</strong>  
Los controles implementados cumplen con los requisitos de seguridad definidos por la norma **ISO/IEC 27001**.
</div>

---

*Documento alineado a ISO/IEC 27001*  
*Versión: 2.0*

<div class="text-center text-gray">
  <small>Última actualización: 06 de diciembre de 2025</small><br>
  <small>© 2025 Diesel Global Logistics Inc.</small>
</div>

