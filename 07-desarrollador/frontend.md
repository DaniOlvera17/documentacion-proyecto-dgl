---
layout: default
title: Desarrollo Frontend
---

# 🖥️ Desarrollo Frontend

Este documento describe el desarrollo del **Frontend** de la Plataforma Web de Gestión de Almacén y Embarques – Diesel Global Logistics Inc.

El frontend es responsable de la experiencia de usuario, la interacción visual y la conexión con la API.

---

## 🛠️ Tecnologías Utilizadas

| Componente | Tecnología |
|------------|------------|
| Lenguaje | HTML5 |
| Estilos | CSS3 |
| Lógica | JavaScript |
| Framework | React.js |
| Librerías adicionales | Axios, Bootstrap |
| Control de versiones | Git + GitHub |


---

## 🧩 Componentes Principales

| Componente | Función |
|------------|---------|
| Login | Autenticación de usuarios |
| Inventarios | CRUD de materiales |
| Embarques | Gestión visual de embarques |
| Reportes | Generación de reportes |
| Dashboard | Visualización de métricas |
| Avatar | Asistente virtual interactivo |

---

## 🔗 Consumo de la API

La comunicación con el backend se realiza usando **Axios**:

Ejemplo de consumo:

```js
axios.get("/api/v1/inventarios")
  .then(res => setInventarios(res.data))
  .catch(err => console.error(err))
```

## 🎨 Diseño de la Interfaz

Se aplicaron:

- Diseño responsivo
- Componentes reutilizables
- Paleta de colores institucional
- Accesibilidad básica (WCAG)

---

## ⚙️ Flujo de Navegación

1. Login  
2. Dashboard  
3. Menú lateral  
4. Acceso a módulos:
   - Inventarios
   - Embarques
   - Reportes
   - Administración

---

## 🧪 Pruebas en el Frontend

Se realizaron:

- Pruebas manuales de interfaz
- Pruebas de experiencia de usuario (UX)
- Validaciones de formularios

---

## ✅ Buenas Prácticas

- Componentización
- Separación de lógica
- Uso de hooks (`useState`, `useEffect`)
- Manejo centralizado de errores

---

## 🎯 Objetivo del Frontend

- Interfaz clara y amigable
- Alta usabilidad
- Integración completa con backend
- Preparado para producción

---

[← Volver a Desarrollo](index)


