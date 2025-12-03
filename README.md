# 📚 Documentación del Proyecto Diesel Global Logistics

Documentación completa del proyecto de **Plataforma Web de Gestión de Inventarios y Embarques** para Diesel Global Logistics Inc.

🌐 **Sitio web:** [https://daniolvera17.github.io/documentacion-proyecto-diesel-global/](https://daniolvera17.github.io/documentacion-proyecto-diesel-global/)

---

## 🚀 Inicio Rápido

### Visualizar la documentación localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/daniolvera17/documentacion-proyecto-diesel-global.git
cd documentacion-proyecto-diesel-global

# 2. (Opcional) Instalar Jekyll para preview local
gem install bundler jekyll
bundle install

# 3. Ejecutar servidor local
bundle exec jekyll serve

# 4. Abrir en navegador
# http://localhost:4000
```

---

## 📁 Estructura del Proyecto

```
documentacion-proyecto-diesel-global/
├── _config.yml                     # Configuración de Jekyll
├── index.md                        # Página principal
├── README.md                       # Este archivo
├── assets/
│   ├── css/
│   │   └── style.css              # Estilos personalizados
│   ├── images/
│   │   └── logo.png               # Logo del proyecto
│   └── js/
│       └── main.js                # JavaScript (si es necesario)
│
├── 01-acta-constitutiva/
│   └── index.md                   # Acta de constitución del proyecto
│
├── 02-scrum/
│   ├── index.md                   # Índice de metodología Scrum
│   ├── sprint-1.md                # Sprint 1: Gestión y Planificación
│   ├── sprint-2.md                # Sprint 2: Análisis de Requisitos
│   ├── sprint-3.md                # Sprint 3: Diseño del Sistema
│   ├── sprint-4.md                # Sprint 4: Desarrollo Backend
│   ├── sprint-5.md                # Sprint 5: Desarrollo Frontend
│   ├── sprint-6.md                # Sprint 6: Pruebas y Validaciones
│   └── sprint-7.md                # Sprint 7: Implementación y Cierre
│
├── 03-gestion-proyecto/
│   ├── index.md                   # Índice de gestión
│   ├── plan-direccion.md          # Plan de dirección del proyecto
│   ├── edt-wbs.md                 # EDT/WBS
│   ├── cronograma.md              # Cronograma del proyecto
│   └── presupuesto.md             # Presupuesto detallado
│
├── 04-alcance/
│   ├── index.md
│   ├── requisitos-funcionales.md
│   ├── requisitos-no-funcionales.md
│   └── matriz-trazabilidad.md
│
├── 05-analisis-negocio/
│   ├── index.md
│   ├── as-is.md                   # Análisis de procesos actuales
│   ├── to-be.md                   # Análisis de procesos propuestos
│   ├── casos-uso.md               # Casos de uso del sistema
│   └── historias-usuario.md       # Historias de usuario
│
├── 06-diseno/
│   ├── index.md
│   ├── arquitectura.md            # Arquitectura del sistema
│   ├── base-datos.md              # Diseño de base de datos
│   ├── api-rest.md                # Documentación de API
│   ├── diagramas-uml.md           # Diagramas UML
│   └── ui-ux.md                   # Diseño de interfaz
│
├── 07-desarrollo/
│   ├── index.md
│   ├── backend.md                 # Documentación backend
│   └── frontend.md                # Documentación frontend
│
├── 08-calidad/
│   ├── index.md
│   ├── plan-calidad.md
│   ├── estrategia-testing.md
│   ├── casos-prueba.md
│   └── reporte-qa.md
│
├── 09-riesgos/
│   ├── index.md
│   └── registro-riesgos.md
│
├── 10-interesados/
│   ├── index.md
│   └── registro-interesados.md
│
├── 11-comunicaciones/
│   ├── index.md
│   └── matriz-comunicaciones.md
│
└── 12-manuales/
    ├── index.md
    ├── manual-usuario.md
    └── manual-tecnico.md
```

---

## 🎨 Personalización del Sitio

### Cambiar colores (en `assets/css/style.css`):

```css
:root {
  --primary-color: #0d9488;      /* Color principal (teal) */
  --primary-dark: #115e59;       /* Color oscuro */
  --primary-light: #14b8a6;      /* Color claro */
}
```

### Configurar información del proyecto (en `_config.yml`):

```yaml
title: "Documentación Diesel Global Logistics"
description: "Plataforma Web de Gestión de Inventarios y Embarques"
theme: jekyll-theme-cayman

project:
  code: "PROJ-2025-001"
  version: "1.0"
  start_date: "19/09/2025"
```

---

## ✍️ Cómo Agregar Nueva Documentación

### 1. Crear un nuevo archivo Markdown

```bash
# Crear archivo en la carpeta correspondiente
touch 03-gestion-proyecto/nuevo-documento.md
```

### 2. Agregar Front Matter al inicio del archivo

```markdown
---
layout: default
title: Título del Documento
---

# Título del Documento

[← Volver al inicio](../)

---

## Tu contenido aquí...
```

### 3. Usar elementos de Markdown

```markdown
# Título H1
## Título H2
### Título H3

**Texto en negrita**
*Texto en cursiva*

- Lista no ordenada
  - Sub-item

1. Lista ordenada
2. Segundo item

| Columna 1 | Columna 2 |
|-----------|-----------|
| Dato 1    | Dato 2    |

```code block```

> Cita o nota importante
```

### 4. Usar clases CSS personalizadas

```markdown
<div class="info-box">
  📌 <strong>Nota importante:</strong> Este es un cuadro informativo.
</div>

<div class="success-box">
  ✅ <strong>Éxito:</strong> Operación completada.
</div>

<div class="warning-box">
  ⚠️ <strong>Advertencia:</strong> Ten cuidado con esto.
</div>

<span class="badge badge-success">Completado</span>
<span class="badge badge-warning">En progreso</span>
<span class="badge badge-danger">Pendiente</span>
```

---

## 🚀 Desplegar en GitHub Pages

### Opción 1: Desde la interfaz de GitHub

1. Ve a tu repositorio en GitHub
2. Click en **Settings** > **Pages**
3. En "Source", selecciona la rama `main` (o `master`)
4. Selecciona la carpeta `/ (root)`
5. Click en **Save**
6. Tu sitio estará disponible en:
   ```
   https://[tu-usuario].github.io/[nombre-repositorio]/
   ```

### Opción 2: Desde la línea de comandos

```bash
# 1. Crear repositorio en GitHub (si no existe)

# 2. Inicializar Git localmente
git init
git add .
git commit -m "Initial commit: Documentación completa"

# 3. Conectar con repositorio remoto
git remote add origin https://github.com/daniolvera17/documentacion-proyecto-diesel-global.git

# 4. Subir cambios
git push -u origin main

# 5. Activar GitHub Pages en Settings > Pages
```

---

## 🔄 Actualizar Documentación

```bash
# 1. Hacer cambios en archivos .md

# 2. Guardar cambios
git add .
git commit -m "Actualización: descripción del cambio"

# 3. Subir a GitHub
git push origin main

# 4. GitHub Pages se actualiza automáticamente en ~1 minuto
```

---

## 📝 Consejos para Escribir Documentación

### ✅ Buenas Prácticas

1. **Usar títulos descriptivos:** Facilita la navegación
2. **Incluir enlaces de retorno:** `[← Volver al inicio](../)`
3. **Usar tablas para datos estructurados**
4. **Agregar badges para estados:** Completado, En progreso, Pendiente
5. **Incluir fechas de actualización** al final de cada documento
6. **Usar diagramas cuando sea posible** (mermaid, plantuml)
7. **Dividir contenido largo en subsecciones**

### ❌ Evitar

1. Párrafos muy largos sin formato
2. Falta de estructura jerárquica
3. Enlaces rotos
4. Imágenes sin texto alternativo
5. Información desactualizada sin fecha

---

## 🎨 Temas Disponibles de GitHub Pages

Si quieres cambiar el tema visual, edita `_config.yml`:

```yaml
# Temas disponibles:
theme: jekyll-theme-cayman        # Recomendado - estilo moderno
# theme: jekyll-theme-slate       # Oscuro
# theme: jekyll-theme-architect   # Arquitectónico
# theme: jekyll-theme-minimal     # Minimalista
# theme: jekyll-theme-tactile     # Con sidebar
# theme: jekyll-theme-leap-day    # Colorido
# theme: jekyll-theme-merlot      # Elegante
```

---

## 🛠️ Solución de Problemas

### Problema: La página no se actualiza en GitHub Pages

**Solución:**
1. Verifica que los cambios estén en la rama correcta (main)
2. Ve a Actions en GitHub para ver si hay errores de build
3. Espera 1-2 minutos, GitHub Pages tarda en refrescar
4. Limpia caché del navegador (Ctrl + Shift + R)

### Problema: Los estilos no se aplican

**Solución:**
1. Verifica que `assets/css/style.css` existe
2. Verifica que el `_config.yml` tiene la configuración correcta
3. Asegúrate de que el CSS importa el tema base:
   ```css
   @import "{{ site.theme }}";
   ```

### Problema: Enlaces rotos

**Solución:**
1. Usa rutas relativas: `../carpeta/archivo.md`
2. No uses espacios en nombres de archivos (usa guiones `-`)
3. Verifica que el archivo exista en la ubicación correcta

---

## 📊 Métricas del Proyecto

| Métrica | Valor |
|---------|-------|
| **Páginas de documentación** | 50+ |
| **Sprints documentados** | 7 |
| **Roles del equipo** | 8 |
| **Duración del proyecto** | 17 semanas |
| **Presupuesto** | $50,000 USD |

---

## 👥 Equipo del Proyecto

- **Gestor:** Ángel Elías Romero Paulín
- **Analista:** José Pedro Cruz Ramírez
- **Diseñadores:** María Alondra Ortiz Benítez, Luis Fernando Loma Navarrete
- **Desarrollador:** Esteban Reséndiz Urquiza
- **QA:** Raúl Mejía Reséndiz
- **Tester:** Roberto Joshua García Solís
- **Documentador:** Daniel Olvera Romero

---

## 🔗 Enlaces Importantes

- 📋 [Jira del Proyecto](https://angel-romero.atlassian.net/jira/software/projects/DIES/boards/2/backlog)
- 🎨 [Prototipos en Figma](#) _(Agregar enlace)_
- 💻 [Repositorio de Código](#) _(Agregar enlace)_
- 📖 [Documentación de API](#) _(Agregar enlace)_

---

## 📄 Licencia

© 2025 Diesel Global Logistics Inc. Todos los derechos reservados.

Este proyecto es de uso interno y académico.

---

## 📧 Contacto

Para preguntas sobre esta documentación:

- **Documentador:** Daniel Olvera Romero
- **Gestor del Proyecto:** Ángel Elías Romero Paulín
- **Email:** [contacto@dieselglobal.com](#)

---

## 📅 Última Actualización

**Fecha:** 2 de diciembre de 2025  
**Versión:** 1.0  
**Estado:** 🟢 Activo

---

**¡Gracias por usar esta documentación!** 🚀

Si encuentras algún error o tienes sugerencias, por favor crea un Issue en GitHub.