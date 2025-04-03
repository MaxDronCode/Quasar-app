# 🌤️ ClimaX - Pronóstico Meteorológico Inteligente

**Aplicación del tiempo moderna desarrollada con Quasar Framework**  
[![Quasar Framework](https://img.shields.io/badge/Quasar-1976D2?style=flat&logo=quasar&logoColor=white)](https://quasar.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)

![Banner de la aplicación](https://via.placeholder.com/1200x400.png?text=ClimaX+Weather+App)

---

## 📑 Tabla de contenidos

- [🚀 Características](#-características)
- [🧩 Componentes utilizados](#-componentes-utilizados)
- [⚡️ Demo rápida](#️-demo-rápida)
- [⚙️ Instalación](#️-instalación)
- [🛠 Desarrollo](#-desarrollo)
- [📦 Producción](#-producción)
- [🌍 Roadmap](#-roadmap)
- [📄 Licencia](#-licencia)

---

## 🚀 Características

**Tecnologías principales:**
- Quasar Framework (Vue 3 + Vite)
- Axios para peticiones HTTP
- Sistema de carga inteligente con QAjaxBar
- Configuración lista para producción

**Funcionalidades actuales:**
- Búsqueda de ubicaciones
- Visualización de datos meteorológicos en tiempo real
- Indicador de carga activa
- Sistema de manejo de errores

---

## 🧩 Componentes utilizados

### 1. QAjaxBar - Barra de progreso
![Captura QAjaxBar](https://via.placeholder.com/800x100.png?text=Loading+Bar+Preview)

- **Función:** Indicador visual de carga durante peticiones HTTP  
- **Ubicación:** `src/pages/WeatherIndexPage.vue`  
- **Configuración destacada:**
  ```vue
  <q-ajax-bar 
    ref="bar" 
    position="bottom" 
    color="accent" 
    size="10px"
  />
  ```
  Comportamiento: Se activa automáticamente con Axios gracias a la integración de Quasar

---

### 2. QPage - Contenedor principal

- **Función:** Estructura base de las páginas  
- **Ubicación:** Todos los componentes de página  
- **Características:**
  ```vue
  <q-page class="flex flex-center">
    <!-- Contenido -->
  </q-page>
  ```
  Estilos: Flexbox centrado para disposición responsive

---

### 3. QTabs - Navegación entre páginas

- **Función:** Menú de navegación principal  
- **Ubicación:** `layouts/MainLayout.vue`  
- **Implementación:**
  ```vue
  <q-tabs>
    <q-route-tab to="/" label="Inicio" />
    <q-route-tab to="/weather" label="Clima" />
    <q-route-tab to="/about" label="Acerca de" />
  </q-tabs>
  ```
  Integración: Enrutamiento nativo con Vue Router

---

### 4. QCard - Tarjeta de información meteorológica

- **Función:** Display de datos climáticos  
- **Ubicación:** `components/WeatherCard.vue`  
- **Estructura básica:**
  ```vue
  <q-card class="weather-card">
    <q-card-section>
      <h3>{{ location }}</h3>
      <p>{{ temperature }}°C</p>
    </q-card-section>
  </q-card>
  ```
  Estilos: Animaciones CSS para transiciones suaves

---

## ⚡️ Demo rápida

Prueba la versión en vivo: https://tu-dominio.com

---

## ⚙️ Instalación

Clonar repositorio:

```bash
git clone https://github.com/tu-usuario/climax.git
cd climax
```

Instalar dependencias:

```bash
yarn install
# o
npm install
```

Configurar API Key:

```bash
cp .env.example .env
# Editar el archivo .env con tus credenciales
```

---

## 🛠 Desarrollo

Ejecutar servidor local:

```bash
yarn dev
# o
npm run dev
```

Verificación de código:

```bash
# Linter
yarn lint

# Formateo automático
yarn format
```

---

## 📦 Producción

Build para producción:

```bash
yarn build
```

Servir versión optimizada:

```bash
yarn preview
```

---

## 🌍 Roadmap

- ✅ Configuración inicial del proyecto  
- ✅ Integración con API meteorológica  
- ✅ Sistema de búsqueda por ubicación  
- ⏳ Widgets de datos detallados  
- ⏳ Soporte multi-idioma  
- ⏳ Modo oscuro/light  

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

✨ Contribuciones bienvenidas - Consulta nuestra guía de contribución

Proyecto desarrollado con ❤️ por Max Dron - ¡El clima en tus manos!