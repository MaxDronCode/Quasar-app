# 🌤️ ClimaX - Pronóstico Meteorológico Inteligente

**Aplicación del tiempo moderna desarrollada con Quasar Framework**  
[![Quasar Framework](https://img.shields.io/badge/Quasar-1976D2?style=flat&logo=quasar&logoColor=white)](https://quasar.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)

![image](https://github.com/user-attachments/assets/62d4de93-945d-4dc7-9942-c62b744cfe0a)


---

## 📑 Tabla de contenidos

- [🚀 Características](#-características)
- [🧩 Componentes utilizados](#-componentes-utilizados)
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

**Funcionalidades actuales:**
- Búsqueda de ubicaciones
- Visualización de datos meteorológicos en tiempo real
- Indicador de carga activa
- Sistema de manejo de errores
- Página de detalle para cada ciudad

---

## 🧩 Algunos componentes utilizados

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
![image](https://github.com/user-attachments/assets/758d45a4-4da0-42f4-bc94-e5ec3b72000b)


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
![image](https://github.com/user-attachments/assets/5dbe48d8-6632-4624-b2b8-9051c4e6c4b9)

- **Función:** Menú de navegación principal  
- **Ubicación:** `layouts/MainLayout.vue`  
- **Implementación:**
  ```vue
  <q-tabs>
    <q-route-tab to="/" label="Inicio" />
    <q-route-tab to="/weather" label="Clima" />
     <q-route-tab to="/contact" label="Contact" />
  </q-tabs>
  ```
  Integración: Enrutamiento nativo con Vue Router

---

### 4. QCard - Tarjeta de información meteorológica
![image](https://github.com/user-attachments/assets/d94cf2fe-85b4-4fd5-9768-6a6b5628d552)

- **Función:** Display de datos climáticos  
- **Ubicación:** `pages/WeatherIndexPage.vue` - `pages/DetailCityPage.vue`
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

---

### 5. QSelect - Selector de ciudades
![image](https://github.com/user-attachments/assets/67935f7e-31bf-40a6-9d4a-389b5176d075)


- **Función:** Permite seleccionar de qué ciudades queremos ver el tiempo  
- **Ubicación:** `pages/WeatherIndexPage.vue`  
- **Implementación:**
  ```vue
    <q-select
      ref="citySelect"
      v-model="selectedCities"
      multiple
      :options="cityOptions"
      label="Selecciona ciudades"
      class="q-mb-md white-select"
      style="min-width: 300px"
      @update:model-value="handleSelection"
    />
  ```

---

### 6. QForm - Formulario de entrada de datos
![image](https://github.com/user-attachments/assets/5440c073-ef33-465a-b534-b6d1ad952a72)


- **Función:** Permite recoger, validar, y enviar datos  
- **Ubicación:** `pages/ContactPage.vue`  
- **Implementación:**
  ```vue
    <q-form
      @submit.prevent="onSubmit"
      @reset.prevent="onReset"
      class="q-gutter-md"
    ></q-form>
  ```

---

### 7. QInput - Input de entrada de datos
![image](https://github.com/user-attachments/assets/c7666f1e-31ae-4e93-ad3f-63d6ec80408b)


- **Función:** Permite introducir datos añ usuario y aplicar validaciones al momento
- **Ubicación:** `pages/ContactPage.vue`  
- **Implementación:**
  ```vue
      <q-input
        filled
        v-model="email"
        label="Correo electrónico *"
        hint="ejemplo@dominio.com"
        lazy-rules
        :rules="[
          val => !!val || 'Por favor introduce tu correo',
          val => /^.+@.+\..+$/.test(val) || 'El correo electrónico no es válido'
        ]"
      />
  ```

---


## ⚙️ Instalación

Clonar repositorio:

```bash
git clone https://github.com/MaxDronCode/climax.git
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
