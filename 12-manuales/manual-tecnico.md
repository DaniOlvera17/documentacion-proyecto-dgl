---
layout: default
title: Manual Técnico
---

# 🛠️ Manual Técnico

**Plataforma Web de Gestión de Inventarios y Embarques**  
**Diesel Global Logistics Inc.**

---

## 📑 Tabla de Contenidos

1. [Introducción Técnica](#1-introducción-técnica)
2. [Arquitectura del Sistema](#2-arquitectura-del-sistema)
3. [Requisitos e Instalación](#3-requisitos-e-instalación)
4. [Configuración del Entorno](#4-configuración-del-entorno)
5. [Estructura del Proyecto](#5-estructura-del-proyecto)
6. [Base de Datos](#6-base-de-datos)
7. [API y Endpoints](#7-api-y-endpoints)
8. [Seguridad](#8-seguridad)
9. [Despliegue](#9-despliegue)
10. [Mantenimiento](#10-mantenimiento)
11. [Solución de Problemas Técnicos](#11-solución-de-problemas-técnicos)
12. [Apéndices Técnicos](#12-apéndices-técnicos)

---

## 1. Introducción Técnica

### 1.1 Propósito del Documento

Este manual técnico proporciona información detallada sobre la **arquitectura, instalación, configuración y mantenimiento** de la Plataforma Web de Diesel Global Logistics Inc.

### 1.2 Audiencia

Este documento está dirigido a:

- 👨‍💻 Desarrolladores de software
- 🔧 Administradores de sistemas
- 🏗️ Arquitectos de software
- 🛡️ Personal de seguridad informática
- 📊 Ingenieros DevOps

### 1.3 Stack Tecnológico

| Capa | Tecnología | Versión |
|------|------------|---------|
| **Frontend** | HTML5, CSS3, JavaScript | ES6+ |
| **Backend** | PHP | 7.4+ |
| **Base de Datos** | MySQL | 8.0+ |
| **Servidor Web** | Apache | 2.4+ |
| **Control de Versiones** | Git | 2.x |
| **Generación de QR** | QRCode.js | 1.0+ |
| **Exportación PDF** | FPDF | 1.85+ |

---

## 2. Arquitectura del Sistema

### 2.1 Arquitectura General

![Arquitectura del Sistema](../../assets/images/manual/arquitectura-general.png)  
*Diagrama 1: Arquitectura de tres capas*

El sistema sigue una arquitectura de **tres capas**:

```
┌─────────────────────────────────────┐
│     Capa de Presentación            │
│  (HTML, CSS, JavaScript)            │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│     Capa de Lógica de Negocio       │
│         (PHP)                       │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│     Capa de Datos                   │
│         (MySQL)                     │
└─────────────────────────────────────┘
```

### 2.2 Patrón de Diseño

El sistema implementa el patrón **MVC (Model-View-Controller)**:

- **Model:** Clases PHP que interactúan con la base de datos
- **View:** Archivos HTML/PHP que presentan la información
- **Controller:** Scripts PHP que procesan la lógica de negocio

### 2.3 Diagrama de Componentes

![Diagrama de Componentes](../../assets/images/manual/componentes-sistema.png)  
*Diagrama 2: Componentes principales del sistema*

**Componentes principales:**

| Componente | Función |
|------------|---------|
| **Auth Module** | Autenticación y autorización |
| **Client Module** | Gestión de clientes |
| **Inventory Module** | Control de inventario |
| **Shipping Module** | Gestión de embarques |
| **Report Module** | Generación de reportes |
| **User Module** | Administración de usuarios |

---

## 3. Requisitos e Instalación

### 3.1 Requisitos de Hardware

**Servidor de Producción:**

| Componente | Especificación Mínima | Recomendada |
|------------|----------------------|-------------|
| **Procesador** | Intel Core i3 / AMD Ryzen 3 | Intel Core i5 / AMD Ryzen 5 |
| **RAM** | 4 GB | 8 GB |
| **Almacenamiento** | 50 GB SSD | 100 GB SSD |
| **Red** | 100 Mbps | 1 Gbps |

### 3.2 Requisitos de Software

**Sistema Operativo:**
- Ubuntu Server 20.04 LTS o superior
- CentOS 8 o superior
- Windows Server 2019 o superior

**Software Requerido:**
```bash
# Paquetes necesarios
- Apache 2.4+
- PHP 7.4+ con extensiones:
  - mysqli
  - pdo_mysql
  - gd
  - mbstring
  - json
- MySQL 8.0+
- Git 2.x
```

### 3.3 Instalación en Linux (Ubuntu)

#### Paso 1: Actualizar el sistema

```bash
sudo apt update
sudo apt upgrade -y
```

#### Paso 2: Instalar Apache

```bash
sudo apt install apache2 -y
sudo systemctl start apache2
sudo systemctl enable apache2
```

#### Paso 3: Instalar PHP

```bash
sudo apt install php php-mysql php-gd php-mbstring php-json -y
```

#### Paso 4: Instalar MySQL

```bash
sudo apt install mysql-server -y
sudo mysql_secure_installation
```

#### Paso 5: Configurar permisos

```bash
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html
```

### 3.4 Instalación en Windows

#### Paso 1: Descargar XAMPP

```
https://www.apachefriends.org/download.html
```

#### Paso 2: Instalar XAMPP

1. Ejecute el instalador descargado
2. Seleccione Apache, MySQL y PHP
3. Complete la instalación

#### Paso 3: Iniciar servicios

1. Abra el Panel de Control de XAMPP
2. Inicie Apache y MySQL
3. Verifique que estén en verde

---

## 4. Configuración del Entorno

### 4.1 Clonar el Repositorio

```bash
cd /var/www/html
git clone https://github.com/diesel-global/platform.git
cd platform
```

### 4.2 Configuración de Base de Datos

Edite el archivo `config/database.php`:

```php
<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'diesel_user');
define('DB_PASS', 'password_seguro');
define('DB_NAME', 'diesel_global_db');
define('DB_CHARSET', 'utf8mb4');

// Conexión
$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if (!$conn) {
    die("Error de conexión: " . mysqli_connect_error());
}

mysqli_set_charset($conn, DB_CHARSET);
?>
```

### 4.3 Archivo de Configuración General

Edite el archivo `config/config.php`:

```php
<?php
// Configuración general del sistema
define('SITE_NAME', 'Diesel Global Logistics');
define('SITE_URL', 'https://dieselglobal.com');
define('UPLOAD_DIR', __DIR__ . '/../uploads/');
define('MAX_FILE_SIZE', 5242880); // 5MB

// Zona horaria
date_default_timezone_set('America/Mexico_City');

// Configuración de sesiones
ini_set('session.gc_maxlifetime', 3600); // 1 hora
session_start();

// Modo debug (desactivar en producción)
define('DEBUG_MODE', false);
if (DEBUG_MODE) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
}
?>
```

### 4.4 Configuración de Apache

Cree el archivo `/etc/apache2/sites-available/dieselglobal.conf`:

```apache
<VirtualHost *:80>
    ServerName dieselglobal.com
    ServerAlias www.dieselglobal.com
    DocumentRoot /var/www/html/platform
    
    <Directory /var/www/html/platform>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog ${APACHE_LOG_DIR}/diesel_error.log
    CustomLog ${APACHE_LOG_DIR}/diesel_access.log combined
</VirtualHost>
```

Habilite el sitio:

```bash
sudo a2ensite dieselglobal.conf
sudo a2enmod rewrite
sudo systemctl restart apache2
```

### 4.5 Archivo .htaccess

Cree el archivo `.htaccess` en la raíz:

```apache
RewriteEngine On

# Forzar HTTPS (en producción)
# RewriteCond %{HTTPS} off
# RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Prevenir acceso directo a archivos de configuración
<FilesMatch "\.(ini|log|conf)$">
    Order allow,deny
    Deny from all
</FilesMatch>

# Bloquear acceso a directorios
Options -Indexes

# Protección contra inyección SQL
<IfModule mod_rewrite.c>
    RewriteCond %{QUERY_STRING} (\<|%3C).*script.*(\>|%3E) [NC,OR]
    RewriteCond %{QUERY_STRING} GLOBALS(=|\[|\%[0-9A-Z]{0,2}) [OR]
    RewriteCond %{QUERY_STRING} _REQUEST(=|\[|\%[0-9A-Z]{0,2})
    RewriteRule .* index.php [F,L]
</IfModule>
```

---

## 5. Estructura del Proyecto

### 5.1 Árbol de Directorios

```
diesel-global-platform/
│
├── config/
│   ├── database.php          # Configuración de BD
│   └── config.php             # Configuración general
│
├── includes/
│   ├── header.php             # Header común
│   ├── footer.php             # Footer común
│   └── functions.php          # Funciones auxiliares
│
├── modules/
│   ├── auth/
│   │   ├── login.php
│   │   └── logout.php
│   ├── clientes/
│   │   ├── index.php
│   │   ├── agregar.php
│   │   ├── editar.php
│   │   └── eliminar.php
│   ├── inventario/
│   │   ├── index.php
│   │   ├── agregar.php
│   │   ├── editar.php
│   │   └── eliminar.php
│   ├── embarques/
│   │   ├── index.php
│   │   ├── crear.php
│   │   ├── editar.php
│   │   └── eliminar.php
│   ├── reportes/
│   │   ├── index.php
│   │   ├── generar.php
│   │   └── descargar.php
│   └── usuarios/
│       ├── index.php
│       ├── crear.php
│       ├── editar.php
│       └── eliminar.php
│
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   └── qrcode.min.js
│   └── images/
│       └── logo.png
│
├── uploads/
│   ├── reportes/
│   └── temp/
│
├── libs/
│   ├── fpdf/                  # Librería PDF
│   └── phpqrcode/             # Librería QR
│
├── sql/
│   ├── schema.sql             # Estructura de BD
│   └── data.sql               # Datos iniciales
│
├── .htaccess
├── index.php
└── README.md
```

### 5.2 Archivos Principales

| Archivo | Descripción |
|---------|-------------|
| `index.php` | Página principal/dashboard |
| `config/database.php` | Conexión a base de datos |
| `includes/functions.php` | Funciones reutilizables |
| `modules/*/index.php` | Punto de entrada de cada módulo |

---

## 6. Base de Datos

### 6.1 Diagrama Entidad-Relación

![Diagrama ER](../../assets/images/manual/diagrama-er.png)  
*Diagrama 3: Modelo Entidad-Relación*

### 6.2 Creación de Base de Datos

Ejecute el siguiente script SQL:

```sql
-- Crear base de datos
CREATE DATABASE IF NOT EXISTS diesel_global_db 
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE diesel_global_db;

-- Tabla de usuarios
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    usuario VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('admin', 'operaciones', 'almacen') NOT NULL DEFAULT 'almacen',
    estado BOOLEAN DEFAULT TRUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ultima_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_usuario (usuario),
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de clientes
CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    ciudad VARCHAR(100),
    pais VARCHAR(100),
    telefono VARCHAR(20),
    email VARCHAR(150),
    direccion TEXT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado BOOLEAN DEFAULT TRUE,
    INDEX idx_nombre (nombre)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de categorías
CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    estado BOOLEAN DEFAULT TRUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de inventario
CREATE TABLE inventario (
    id_inventario INT AUTO_INCREMENT PRIMARY KEY,
    nombre_material VARCHAR(150) NOT NULL,
    descripcion TEXT,
    sku VARCHAR(50) UNIQUE NOT NULL,
    id_categoria INT,
    lote VARCHAR(50),
    cantidad INT NOT NULL DEFAULT 0,
    stock_minimo INT DEFAULT 10,
    precio_unitario DECIMAL(10,2),
    ubicacion VARCHAR(100),
    codigo_qr VARCHAR(255),
    fecha_ingreso TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria),
    INDEX idx_sku (sku),
    INDEX idx_nombre (nombre_material)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de embarques
CREATE TABLE embarques (
    id_embarque INT AUTO_INCREMENT PRIMARY KEY,
    numero_embarque VARCHAR(50) UNIQUE NOT NULL,
    id_cliente INT NOT NULL,
    fecha_embarque DATE NOT NULL,
    destino VARCHAR(200),
    estado ENUM('abierto', 'cerrado', 'en_transito', 'entregado') DEFAULT 'abierto',
    observaciones TEXT,
    total DECIMAL(10,2) DEFAULT 0,
    id_usuario_creador INT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_cierre TIMESTAMP NULL,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
    FOREIGN KEY (id_usuario_creador) REFERENCES usuarios(id_usuario),
    INDEX idx_numero (numero_embarque),
    INDEX idx_estado (estado)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de detalle de embarques
CREATE TABLE detalle_embarques (
    id_detalle INT AUTO_INCREMENT PRIMARY KEY,
    id_embarque INT NOT NULL,
    id_inventario INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2),
    subtotal DECIMAL(10,2),
    FOREIGN KEY (id_embarque) REFERENCES embarques(id_embarque) ON DELETE CASCADE,
    FOREIGN KEY (id_inventario) REFERENCES inventario(id_inventario),
    INDEX idx_embarque (id_embarque)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de historial de embarques
CREATE TABLE historial_embarques (
    id_historial INT AUTO_INCREMENT PRIMARY KEY,
    id_embarque INT NOT NULL,
    estado_anterior VARCHAR(50),
    estado_nuevo VARCHAR(50),
    comentario TEXT,
    id_usuario INT,
    fecha_cambio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_embarque) REFERENCES embarques(id_embarque) ON DELETE CASCADE,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de auditoría
CREATE TABLE auditoria (
    id_auditoria INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    accion VARCHAR(100) NOT NULL,
    tabla_afectada VARCHAR(50),
    id_registro INT,
    datos_anteriores TEXT,
    datos_nuevos TEXT,
    ip_address VARCHAR(45),
    user_agent TEXT,
    fecha_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    INDEX idx_usuario (id_usuario),
    INDEX idx_fecha (fecha_hora)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

### 6.3 Datos Iniciales

Insertar usuario administrador por defecto:

```sql
-- Password: admin123 (cambiar en producción)
INSERT INTO usuarios (nombre, apellido, email, usuario, password, rol) 
VALUES (
    'Administrador', 
    'Sistema', 
    'admin@dieselglobal.com', 
    'admin', 
    '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    'admin'
);

-- Insertar categorías iniciales
INSERT INTO categorias (nombre, descripcion) VALUES
('Refacciones', 'Piezas de repuesto y componentes'),
('Herramientas', 'Herramientas y equipamiento'),
('Consumibles', 'Materiales de consumo regular'),
('Equipamiento', 'Equipo pesado y maquinaria');
```

### 6.4 Respaldo de Base de Datos

#### Comando para crear respaldo:

```bash
mysqldump -u diesel_user -p diesel_global_db > backup_$(date +%Y%m%d_%H%M%S).sql
```

#### Comando para restaurar respaldo:

```bash
mysql -u diesel_user -p diesel_global_db < backup_20251207_120000.sql
```

#### Script automatizado de respaldo:

```bash
#!/bin/bash
# backup_db.sh

BACKUP_DIR="/var/backups/diesel"
DB_NAME="diesel_global_db"
DB_USER="diesel_user"
DB_PASS="password_seguro"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR
mysqldump -u$DB_USER -p$DB_PASS $DB_NAME | gzip > $BACKUP_DIR/backup_$DATE.sql.gz

# Eliminar backups mayores a 30 días
find $BACKUP_DIR -name "backup_*.sql.gz" -mtime +30 -delete

echo "Backup completado: backup_$DATE.sql.gz"
```

---

## 7. API y Endpoints

### 7.1 Estructura de Respuestas

Todas las respuestas JSON siguen este formato:

```json
{
    "success": true,
    "message": "Operación exitosa",
    "data": {
        // Datos de respuesta
    },
    "timestamp": "2025-12-07T10:30:00Z"
}
```

### 7.2 Endpoints Disponibles

#### Autenticación

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/auth/login` | Iniciar sesión |
| POST | `/api/auth/logout` | Cerrar sesión |
| POST | `/api/auth/validate` | Validar token de sesión |

**Ejemplo de uso:**

```javascript
// Login
fetch('/api/auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        usuario: 'admin',
        password: 'admin123'
    })
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Clientes

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/clientes` | Listar todos los clientes |
| GET | `/api/clientes/{id}` | Obtener cliente específico |
| POST | `/api/clientes` | Crear nuevo cliente |
| PUT | `/api/clientes/{id}` | Actualizar cliente |
| DELETE | `/api/clientes/{id}` | Eliminar cliente |

#### Inventario

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/inventario` | Listar inventario |
| GET | `/api/inventario/{id}` | Obtener material específico |
| POST | `/api/inventario` | Agregar material |
| PUT | `/api/inventario/{id}` | Actualizar material |
| DELETE | `/api/inventario/{id}` | Eliminar material |
| GET | `/api/inventario/stock-bajo` | Materiales con stock bajo |

#### Embarques

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/embarques` | Listar embarques |
| GET | `/api/embarques/{id}` | Obtener embarque específico |
| POST | `/api/embarques` | Crear embarque |
| PUT | `/api/embarques/{id}` | Actualizar embarque |
| DELETE | `/api/embarques/{id}` | Eliminar embarque |
| POST | `/api/embarques/{id}/cerrar` | Cerrar embarque |

#### Reportes

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/reportes/generar` | Generar reporte |
| GET | `/api/reportes/descargar/{id}` | Descargar reporte |

---

## 8. Seguridad

### 8.1 Autenticación

El sistema utiliza sesiones PHP con las siguientes medidas:

```php
<?php
// Configuración segura de sesiones
ini_set('session.cookie_httponly', 1);
ini_set('session.use_only_cookies', 1);
ini_set('session.cookie_secure', 1); // Solo en HTTPS

session_start();

// Regenerar ID de sesión
if (!isset($_SESSION['iniciada'])) {
    session_regenerate_id(true);
    $_SESSION['iniciada'] = true;
}
?>
```

### 8.2 Hash de Contraseñas

```php
<?php
// Crear hash de contraseña
$password = 'contraseña_usuario';
$hash = password_hash($password, PASSWORD_BCRYPT, ['cost' => 12]);

// Verificar contraseña
if (password_verify($password, $hash)) {
    // Contraseña correcta
}
?>
```

### 8.3 Prevención de SQL Injection

```php
<?php
// Usar prepared statements
$stmt = $conn->prepare("SELECT * FROM usuarios WHERE usuario = ? AND estado = ?");
$stmt->bind_param("si", $usuario, $estado);
$stmt->execute();
$result = $stmt->get_result();
?>
```

### 8.4 Prevención de XSS

```php
<?php
// Función para sanitizar salida
function escape($data) {
    return htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
}

// Uso
echo escape($nombre_usuario);
?>
```

### 8.5 CSRF Protection

```php
<?php
// Generar token CSRF
if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// Validar token CSRF
function validar_csrf($token) {
    return isset($_SESSION['csrf_token']) && 
           hash_equals($_SESSION['csrf_token'], $token);
}
?>
```

### 8.6 Configuración de Seguridad

#### Headers de Seguridad en PHP:

```php
<?php
// Agregar headers de seguridad
header("X-Content-Type-Options: nosniff");
header("X-Frame-Options: DENY");
header("X-XSS-Protection: 1; mode=block");
header("Referrer-Policy: strict-origin-when-cross-origin");
header("Content-Security-Policy: default-src 'self'");
?>
```

---

## 9. Despliegue

### 9.1 Despliegue en Servidor de Producción

#### Paso 1: Preparar el servidor

```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar certificado SSL (Let's Encrypt)
sudo apt install certbot python3-certbot-apache -y
sudo certbot --apache -d dieselglobal.com
```

#### Paso 2: Configurar permisos

```bash
sudo chown -R www-data:www-data /var/www/html/platform
sudo chmod -R 755 /var/www/html/platform
sudo chmod -R 775 /var/www/html/platform/uploads
```

#### Paso 3: Optimizar PHP

Editar `/etc/php/7.4/apache2/php.ini`:

```ini
memory_limit = 256M
upload_max_filesize = 10M
post_max_size = 10M
max_execution_time = 300
max_input_time = 300
display_errors = Off
log_errors = On
error_log = /var/log/php_errors.log
```

#### Paso 4: Reiniciar servicios

```bash
sudo systemctl restart apache2
sudo systemctl restart mysql
```

### 9.2 Checklist de Despliegue

- [ ] Base de datos creada y migrada
- [ ] Usuario administrador creado
- [ ] Configuración de producción activada
- [ ] Certificado SSL instalado
- [ ] Permisos de archivos configurados
- [ ] Backups automáticos configurados
- [ ] Logs habilitados
- [ ] Monitoreo configurado
- [ ] Firewall configurado
- [ ] Documentación actualizada

---

## 10. Mantenimiento

### 10.1 Tareas de Mantenimiento Regular

#### Diarias

- ✅ Revisar logs de error
- ✅ Monitorear uso de recursos
- ✅ Verificar backups automáticos

#### Semanales

- ✅ Limpiar logs antiguos
- ✅ Revisar reportes de uso
- ✅ Actualizar dependencias

#### Mensuales

- ✅ Auditoría de seguridad
- ✅ Optimización de base de datos
- ✅ Revisión de rendimiento

### 10.2 Optimización de Base de Datos

```sql
-- Optimizar tablas
OPTIMIZE TABLE usuarios, clientes, inventario, embarques, auditoria;

-- Analizar tablas
ANALYZE TABLE usuarios, clientes, inventario, embarques;

-- Reparar tablas (si es necesario)
REPAIR TABLE nombre_tabla;
```

### 10.3 Limpieza de Logs

```bash
#!/bin/bash
# Limpiar logs mayores a 30 días
find /var/log/apache2 -name "*.log" -mtime +30 -delete
find /var/www/html/platform/logs -name "*.log" -mtime +30 -delete
```

### 10.4 Monitoreo del Sistema

Script de monitoreo básico:

```bash
#!/bin/bash
# monitor.sh

# Verificar Apache
if ! systemctl is-active --quiet apache2; then
    echo "ALERTA: Apache está inactivo"
    systemctl restart apache2
fi

# Verificar MySQL
if ! systemctl is-active --quiet mysql; then
    echo "ALERTA: MySQL está inactivo"
    systemctl restart mysql
fi

# Verificar uso de disco
DISK_USAGE=$(df -h / | awk 'NR==2 {print $5}' | sed 's/%//')
if [ $DISK_USAGE -gt 80 ]; then
    echo "ALERTA: Uso de disco al ${DISK_USAGE}%"
fi
```

---

## 11. Solución de Problemas Técnicos

### 11.1 Problemas Comunes

#### Error: "Cannot connect to database"

**Causa:** Credenciales incorrectas o servidor MySQL inactivo

**Solución:**
```bash
# Verificar estado de MySQL
sudo systemctl status mysql

# Reiniciar MySQL
sudo systemctl restart mysql

# Verificar credenciales en config/database.php
nano config/database.php
```

#### Error: "Permission denied"

**Causa:** Permisos incorrectos en archivos o directorios

**Solución:**
```bash
# Corregir permisos de archivos
sudo chown -R www-data:www-data /var/www/html/platform
sudo chmod -R 755 /var/www/html/platform
sudo chmod -R 775 /var/www/html/platform/uploads
```

#### Error: "Session expired"

**Causa:** Sesión PHP expirada o configuración incorrecta

**Solución:**
```php
// Aumentar tiempo de sesión en php.ini
session.gc_maxlifetime = 3600

// O en el código PHP
ini_set('session.gc_maxlifetime', 3600);
```

#### Error: "500 Internal Server Error"

**Causa:** Error en código PHP o configuración incorrecta

**Solución:**
```bash
# Revisar logs de error
tail -f /var/log/apache2/error.log

# Habilitar display_errors temporalmente
# En php.ini o .htaccess
php_flag display_errors on
```

#### Error: "Upload failed"

**Causa:** Límites de tamaño de archivo o permisos

**Solución:**
```bash
# Verificar configuración en php.ini
upload_max_filesize = 10M
post_max_size = 10M

# Verificar permisos del directorio uploads
sudo chmod 775 /var/www/html/platform/uploads
```

### 11.2 Logs y Debugging

#### Ubicación de logs importantes:

```bash
# Logs de Apache
tail -f /var/log/apache2/error.log
tail -f /var/log/apache2/access.log

# Logs de PHP
tail -f /var/log/php_errors.log

# Logs de MySQL
tail -f /var/log/mysql/error.log

# Logs personalizados de la aplicación
tail -f /var/www/html/platform/logs/app.log
```

#### Habilitar modo debug:

```php
<?php
// En config/config.php
define('DEBUG_MODE', true);

if (DEBUG_MODE) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
}
?>
```

#### Función de logging personalizada:

```php
<?php
function log_error($mensaje, $nivel = 'ERROR') {
    $fecha = date('Y-m-d H:i:s');
    $log_file = __DIR__ . '/../logs/app.log';
    $entrada = "[$fecha] [$nivel] $mensaje\n";
    file_put_contents($log_file, $entrada, FILE_APPEND);
}

// Uso
log_error('Error al conectar a la base de datos', 'CRITICAL');
?>
```

### 11.3 Herramientas de Diagnóstico

```bash
# Verificar versión de PHP
php -v

# Verificar extensiones de PHP instaladas
php -m

# Verificar configuración de Apache
apache2ctl -S

# Verificar sintaxis de configuración de Apache
apache2ctl configtest

# Verificar conectividad a MySQL
mysql -u diesel_user -p -e "SELECT 1;"

# Monitorear procesos en tiempo real
htop

# Verificar uso de disco
df -h

# Verificar uso de memoria
free -h

# Verificar conexiones activas de Apache
netstat -an | grep :80 | wc -l
```

#### Script de diagnóstico completo:

```bash
#!/bin/bash
# diagnostico.sh

echo "=== DIAGNÓSTICO DEL SISTEMA ==="
echo ""

echo "1. Información del Sistema:"
uname -a
echo ""

echo "2. Estado de Servicios:"
systemctl status apache2 | grep Active
systemctl status mysql | grep Active
echo ""

echo "3. Versión de PHP:"
php -v
echo ""

echo "4. Uso de Disco:"
df -h /
echo ""

echo "5. Uso de Memoria:"
free -h
echo ""

echo "6. Últimos errores de Apache:"
tail -n 20 /var/log/apache2/error.log
echo ""

echo "7. Conexiones MySQL activas:"
mysql -u root -p -e "SHOW PROCESSLIST;"
```

---

## 12. Apéndices Técnicos

### A. Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `sudo systemctl restart apache2` | Reiniciar servidor Apache |
| `sudo systemctl restart mysql` | Reiniciar servidor MySQL |
| `sudo systemctl status apache2` | Ver estado de Apache |
| `php -v` | Ver versión de PHP instalada |
| `php -m` | Listar extensiones de PHP |
| `git status` | Ver estado del repositorio |
| `git pull origin main` | Actualizar código desde repositorio |
| `mysql -u root -p` | Acceder a consola MySQL |
| `apache2ctl configtest` | Verificar configuración de Apache |
| `tail -f /var/log/apache2/error.log` | Monitorear logs en tiempo real |

### B. Variables de Entorno

Ejemplo de archivo `.env`:

```bash
# Entorno
APP_ENV=production
APP_DEBUG=false
APP_URL=https://dieselglobal.com

# Base de Datos
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=diesel_global_db
DB_USERNAME=diesel_user
DB_PASSWORD=password_seguro

# Sesiones
SESSION_LIFETIME=120
SESSION_DRIVER=file
SESSION_ENCRYPT=true

# Email (SMTP)
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=noreply@dieselglobal.com
MAIL_PASSWORD=password_email
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@dieselglobal.com
MAIL_FROM_NAME="Diesel Global Logistics"

# Logs
LOG_CHANNEL=daily
LOG_LEVEL=error

# Zona Horaria
TIMEZONE=America/Mexico_City
```

### C. Configuración de Firewall

```bash
# Configurar UFW (Ubuntu)
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw allow 22/tcp    # SSH
sudo ufw enable

# Ver reglas activas
sudo ufw status verbose

# Configurar fail2ban (protección contra ataques)
sudo apt install fail2ban -y
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

### D. Glosario Técnico

| Término | Definición |
|---------|------------|
| **API** | Application Programming Interface - Interfaz de programación de aplicaciones |
| **CRUD** | Create, Read, Update, Delete - Operaciones básicas de base de datos |
| **MVC** | Model-View-Controller - Patrón de arquitectura de software |
| **ORM** | Object-Relational Mapping - Mapeo objeto-relacional |
| **REST** | Representational State Transfer - Arquitectura de servicios web |
| **SQL** | Structured Query Language - Lenguaje de consulta estructurado |
| **SSL/TLS** | Secure Sockets Layer / Transport Layer Security - Protocolos de seguridad |
| **XSS** | Cross-Site Scripting - Ataque de inyección de scripts |
| **CSRF** | Cross-Site Request Forgery - Falsificación de petición en sitios cruzados |
| **PDO** | PHP Data Objects - Extensión de acceso a bases de datos en PHP |
| **UTF-8** | Codificación de caracteres Unicode |
| **JSON** | JavaScript Object Notation - Formato de intercambio de datos |

### E. Referencias y Documentación

**Documentación Oficial:**

- 📘 [PHP Documentation](https://www.php.net/docs.php)
- 📘 [MySQL Documentation](https://dev.mysql.com/doc/)
- 📘 [Apache HTTP Server](https://httpd.apache.org/docs/)
- 📘 [Git Documentation](https://git-scm.com/doc)

**Recursos de Seguridad:**

- 🔒 [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- 🔒 [PHP Security Guide](https://phpsecurity.readthedocs.io/)
- 🔒 [MySQL Security Best Practices](https://dev.mysql.com/doc/refman/8.0/en/security-guidelines.html)

**Recursos Adicionales:**

- 📖 [PHP The Right Way](https://phptherightway.com/)
- 📖 [MySQL Performance Tuning](https://dev.mysql.com/doc/refman/8.0/en/optimization.html)
- 📖 [Apache Performance Tips](https://httpd.apache.org/docs/2.4/misc/perf-tuning.html)

### F. Información de Contacto Técnico

**Equipo de Desarrollo:**

| Rol | Nombre | Contacto |
|-----|--------|----------|
| **Lead Developer** | [Nombre del líder] | dev@dieselglobal.com |
| **Backend Developer** | [Nombre] | backend@dieselglobal.com |
| **Database Admin** | [Nombre] | dba@dieselglobal.com |
| **DevOps Engineer** | [Nombre] | devops@dieselglobal.com |

**Soporte Técnico:**

- ☎️ **Teléfono:** +52 XXX XXX XXXX
- 📧 **Email:** soporte@dieselglobal.com
- 🐛 **Reportar bugs:** https://github.com/diesel-global/platform/issues
- 💬 **Chat:** Slack - #soporte-tecnico
- ⏰ **Horario:** Lun-Vie 9:00-18:00 CST

**Escalamiento de Incidentes:**

| Nivel | Tiempo de Respuesta | Contacto |
|-------|---------------------|----------|
| **Crítico** | 1 hora | +52 XXX XXX XXXX (24/7) |
| **Alto** | 4 horas | soporte@dieselglobal.com |
| **Medio** | 1 día | soporte@dieselglobal.com |
| **Bajo** | 3 días | soporte@dieselglobal.com |

### G. Checklist de Seguridad

**Antes de Desplegar a Producción:**

- [ ] DEBUG_MODE está desactivado
- [ ] Todas las contraseñas son seguras y únicas
- [ ] Certificado SSL instalado y funcionando
- [ ] Firewall configurado correctamente
- [ ] Backups automáticos configurados
- [ ] Logs de error habilitados
- [ ] Headers de seguridad configurados
- [ ] Prepared statements implementados
- [ ] Validación de entrada en todos los formularios
- [ ] CSRF tokens implementados
- [ ] XSS protection habilitado
- [ ] Permisos de archivos correctos (755/644)
- [ ] Usuario por defecto eliminado o contraseña cambiada
- [ ] Variables sensibles en archivo .env
- [ ] .git/ bloqueado en .htaccess
- [ ] Monitoreo de sistema configurado

---

## 🔄 Control de Versiones del Manual

| Versión | Fecha | Cambios Realizados | Responsable |
|---------|-------|-------------------|-------------|
| 1.0 | 2025-12-07 | Versión inicial del manual técnico | Equipo de Desarrollo |
| 1.1 | TBD | Actualizaciones de seguridad | - |
| 1.2 | TBD | Nuevas funcionalidades | - |

---

## 📋 Historial de Revisiones

| Fecha | Revisor | Comentarios |
|-------|---------|-------------|
| 2025-12-07 | Ángel Elías Romero Paulín | Aprobación inicial |
| - | - | - |

---

## 🔗 Navegación

- [← Volver a Manuales](../)
- [Ir al Manual de Usuario →](../manual-usuario)
- [Volver al Inicio →](../../)

---

<div style="text-align: center; color: #666; margin-top: 3rem;">
  <p><strong>Documento generado:</strong> Diciembre 2025</p>
  <p><strong>Versión del documento:</strong> 1.0</p>
  <p><strong>Última actualización:</strong> 7 de diciembre de 2025</p>
  <hr style="margin: 2rem auto; width: 50%; border: 1px solid #ddd;">
  <p>© 2025 Diesel Global Logistics Inc.</p>
  <p><em>Confidencial - Solo para uso interno</em></p>
  <p><strong>Desarrollado por:</strong> Instituto Tecnológico de San Juan del Río</p>
  <p><strong>Proyecto:</strong> PROJ-2025-001</p>
</div>