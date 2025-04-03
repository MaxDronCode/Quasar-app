# 🌤️ ClimaX - Pronóstico Meteorológico Inteligente

**Aplicación del tiempo moderna desarrollada con Quasar Framework**  
[![Quasar Framework](https://img.shields.io/badge/Quasar-1976D2?style=flat&logo=quasar&logoColor=white)](https://quasar.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)

![image](https://github.com/user-attachments/assets/62d4de93-945d-4dc7-9942-c62b744cfe0a)


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
![image](https://github.com/user-attachments/assets/e8fc8385-b882-4890-892f-18e8e4e886e3)


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
  <q-card class="weather-card q-pa-md" v-if="weatherData">
      <q-card-section>
        <div class="text-h4">
          {{ weatherData.location.name }}, {{ weatherData.location.country }}
        </div>
        <div class="text-h6 q-mt-sm">{{ weatherData.current.weather_descriptions[0] }}</div>

        <div class="row items-center q-mt-md">
          <div class="col">
            <div class="text-h2">{{ weatherData.current.temperature }}°C</div>
            <div class="text-caption">Sensación térmica: {{ weatherData.current.feelslike }}°C</div>
          </div>
          <div class="col-auto">
            <img
              :src="weatherData.current.weather_icons[0]"
              :alt="weatherData.current.weather_descriptions[0]"
              class="weather-icon"
            />
          </div>
        </div>

        <div class="row q-mt-md q-gutter-md">
          <div class="col-auto">
            <q-icon name="air" class="q-mr-xs" />
            {{ weatherData.current.wind_speed }} km/h {{ weatherData.current.wind_dir }}
          </div>
          <div class="col-auto">
            <q-icon name="water_drop" class="q-mr-xs" />
            Humedad: {{ weatherData.current.humidity }}%
          </div>
          <div class="col-auto">
            <q-icon name="visibility" class="q-mr-xs" />
            Visibilidad: {{ weatherData.current.visibility }} km
          </div>
        </div>
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
