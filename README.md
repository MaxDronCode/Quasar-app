# 🌤️ ClimaX - Pronóstico Meteorológico Inteligente

**Aplicación del tiempo moderna desarrollada con Quasar Framework**  
[![Quasar Framework](https://img.shields.io/badge/Quasar-1976D2?style=flat&logo=quasar&logoColor=white)](https://quasar.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)

![image](https://github.com/user-attachments/assets/62d4de93-945d-4dc7-9942-c62b744cfe0a)


---

## 📑 Tabla de contenidos

- [🚀 Características](#-características)
- [🧩 Componentes utilizados](#-algunos-componentes-utilizados)
- [📓 Documentación de la API](#-documentación-de-la-api)
- [➡️ Flujo de la aplicación](#-flujo-de-la-aplicación)
- [⚙️ Instalación](#️-instalación)
- [🛠 Desarrollo](#-desarrollo)
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

[📖 Índice](#-tabla-de-contenidos)

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
  **Comportamiento**: Se activa automáticamente con Axios gracias a la integración de Quasar
  - **Por qué se utilizó:**
    - **Integración nativa**: Se activa automáticamente con peticiones Axios
    - **Personalización visual**: Posición inferior ``(bottom)`` con color del tema ``(accent)``
    - **Feedback no intrusivo**: Barra delgada (10px) que no interrumpe la UI
    - **Gestión de estado**: Control mediante referencia ``(ref="bar"``) para activar/desactivar manualmente

---

### 2. QPage - Contenedor principal
![image](https://github.com/user-attachments/assets/758d45a4-4da0-42f4-bc94-e5ec3b72000b)


- **Función:** Estructura base para páginas con disposición responsive  
- **Ubicación:** Todos los componentes de página  
- **Características:**
  ```vue
  <q-page class="flex flex-center">
    <!-- Contenido -->
  </q-page>
  ```
- **Por qué se utilizó:**
  - **Diseño adaptable**: Clases flex de Quasar para centrado vertical/horizontal
  - **Optimización móvil**: Gestión automática del viewport en dispositivos
  - **Consistencia estructural**: Base uniforme para todas las páginas
  - **Gestión de scroll**: Comportamiento predecible en navegación

---

### 3. QTabs - Navegación entre páginas
![image](https://github.com/user-attachments/assets/5dbe48d8-6632-4624-b2b8-9051c4e6c4b9)

- **Función:** Sistema de navegación principal tipo pestañas  
- **Ubicación:** `layouts/MainLayout.vue`  
- **Implementación:**
  ```vue
  <q-tabs>
    <q-route-tab to="/" label="Inicio" />
    <q-route-tab to="/weather" label="Clima" />
     <q-route-tab to="/contact" label="Contact" />
  </q-tabs>
  ```
- **Por qué se utilizó:**
  - **Enrutamiento inteligente**: Integración con Vue Router mediante ``q-route-tab``
  - **Feedback visual**: Indicador activo de la pestaña seleccionada
  - **Diseño responsivo**: Adaptación automática a diferentes tamaños de pantalla
  - **Accesibilidad**: Navegación por teclado y ARIA labels integrados

---

### 4. QCard - Tarjeta de información meteorológica
![image](https://github.com/user-attachments/assets/d94cf2fe-85b4-4fd5-9768-6a6b5628d552)

- **Función:** Presentación estructurada de datos climáticos  
- **Ubicación:** `pages/WeatherIndexPage.vue` - `pages/DetailCityPage.vue`
- **Estructura básica:**
  ```vue
   <q-card class="weather-card q-pa-md">
    <q-card-section>
      <!-- Contenido jerarquizado -->
    </q-card-section>
  </q-card>
  ```
- **Por qué se utilizó:**
  - **Organización visual**: Separación clara de secciones con ``q-card-section``
  - **Estilos predefinidos**: Sombras y bordes redondeados para destacar información
  - **Responsive nativo**: Adaptación automática al contenido
  - **Interactividad**: Hover effects y estados activos integrados

---

### 5. QSelect - Selector de ciudades
![image](https://github.com/user-attachments/assets/67935f7e-31bf-40a6-9d4a-389b5176d075)


- **Función:** Selección múltiple de ubicaciones para comparar climas  
- **Ubicación:** `pages/WeatherIndexPage.vue`  
- **Implementación:**
  ```vue
    <q-select
      v-model="selectedCities"
      multiple
      :options="cityOptions"
      label="Selecciona ciudades"
    />
  ```
- **Por qué se utilizó:**
  - **Búsqueda inteligente**: Autocompletado integrado en la lista de opciones
  - **Gestión de estado**: Binding bidireccional con v-model
  - **Experiencia móvil**: Menú desplegable adaptado a touch devices
  - **Personalización avanzada**: Soporte para chips, filtrado y creación de nuevas opciones

---

### 6. QForm - Gestión completa de formularios con validación integrada
![image](https://github.com/user-attachments/assets/31628898-2ee8-443f-87db-83350f2dc3f5)


- **Función:** Permite recoger, validar, y enviar datos  
- **Ubicación:** `pages/ContactPage.vue`  
- **Implementación:**
  ```vue
   <q-form @submit.prevent="onSubmit" @reset.prevent="onReset" class="q-gutter-md">
   <!-- Campos del formulario -->
   </q-form>
  ```
- **Por qué se utilizó:**
  - **Validación automática:** Coordina las reglas de todos los QInputs hijos
  - **Manejo de eventos:** `submit.prevent` y `reset.prevent` para control nativo
  - **Diseño consistente:** Espaciado uniforme con ``q-gutter-md``
  - **Accesibilidad:** Genera markup HTML semántico (`<form>`)


---

### 7. QInput - Campo de entrada de datos
![image](https://github.com/user-attachments/assets/a1678fa7-dd8b-4d6e-9b59-c036f00a52b9)


- **Función:** Captura y valida datos de usuario en tiempo real
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
  - **Por qué se utilizó:**
    - **Validación en cascada**: Reglas ejecutadas secuencialmente
    - **Feedback visual**: Estilo filled con estados de error automáticos
    - **Funcionalidad extendida**:
      - `hint`: Muestra texto guía contextual
      - `lazy-rules`: Valida solo al interactuar
    - **Accesibilidad**: Genera ``<label>`` asociado automáticamente


---

### 8. QDrawer - Componente para crear un panel lateral de navegación
![image](https://github.com/user-attachments/assets/a1678fa7-dd8b-4d6e-9b59-c036f00a52b9)


- **Función:** Permite introducir datos añ usuario y aplicar validaciones al momento
- **Ubicación:** `layouts/MainLayout.vue`  
- **Implementación:**
  ```vue
    <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-grey-8">
      <q-list dark>
        <q-item-label header>Mis Ciudades</q-item-label>
        <q-item
          v-for="city in cityOptions"
          :key="city"
          clickable
          :to="`/detail/${city}`"
        >
          <q-item-section avatar>
            <q-icon name="location_city" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ city }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  ```
  - **Por qué se utilizado:**
    - El Drawer se muestra automáticamente en pantallas grande y se esconde en pantallas mas pequeñas

[📖 Índice](#-tabla-de-contenidos)

---

## 📓 Documentación de la API

#### API-KEY
La api-key está incluida en este repositorio y su uso es 100% educativo.
Es una api-key conseguida bajo la capa gratuita de weatherApi que caduca el 17-04-2025.

#### URL
En esta aplicación se han utilizado 2 URLs de la WeatherAPI
- Para el tiempo actual de la ciudad: https://api.weatherapi.com/v1/current.json
- Para el pronóstico: https://api.weatherapi.com/v1/forecats.json
  (URLs incompletas, necesitan parámetros para poderse consultar)

#### PETICIONES
Las únicas peticiones que permite esta API son de tipo GET, y la mayoria solamente se pueden utilizar bajo planes de pago, y son las siguientes:
![image](https://github.com/user-attachments/assets/167431cf-c50f-45b2-a4b4-89fc1a5f8768)

#### EJEMPLO DE RESPONSE
Un ejemplo de una peticion GET a `https://api.weatherapi.com/v1/current.json` con los parámetros ``key: ${API_KEY}`` y ``q: Barcelona`` devuelve:
```json
{
    "location": {
        "name": "Barcelona",
        "region": "Catalonia",
        "country": "Spain",
        "lat": 41.3833,
        "lon": 2.1833,
        "tz_id": "Europe/Madrid",
        "localtime_epoch": 1743876262,
        "localtime": "2025-04-05 20:04"
    },
    "current": {
        "last_updated_epoch": 1743876000,
        "last_updated": "2025-04-05 20:00",
        "temp_c": 14.2,
        "temp_f": 57.6,
        "is_day": 1,
        "condition": {
            "text": "Fog",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/248.png",
            "code": 1135
        },
        "wind_mph": 2.7,
        "wind_kph": 4.3,
        "wind_degree": 127,
        "wind_dir": "SE",
        "pressure_mb": 1011.0,
        "pressure_in": 29.85,
        "precip_mm": 0.1,
        "precip_in": 0.0,
        "humidity": 88,
        "cloud": 50,
        "feelslike_c": 14.7,
        "feelslike_f": 58.4,
        "windchill_c": 15.4,
        "windchill_f": 59.6,
        "heatindex_c": 15.4,
        "heatindex_f": 59.6,
        "dewpoint_c": 11.3,
        "dewpoint_f": 52.4,
        "vis_km": 5.0,
        "vis_miles": 3.0,
        "uv": 0.0,
        "gust_mph": 3.7,
        "gust_kph": 6.0
    }
}

```
[📖 Índice](#-tabla-de-contenidos)


---

## ➡️ Flujo de la aplicación

Desde la página principal si seleccionamos en el menú superior la pestaña ``WEATHER``, o ``Ir a la página de clima`` en la zona inferior viajaremos a la página de clima.
![image](https://github.com/user-attachments/assets/cfa0c532-be8e-4f8a-a9bf-4151c1eedd26)

---

También podemos seleccionar el menú superior la pestaña ``CONTACT``, o ``Formulario de contacto`` en la zona inferior para viajar a la página de contacto.
![image](https://github.com/user-attachments/assets/7581482a-6554-462d-91cb-7301cd7aeaf5)

---

Desde la página de clima, donde vemos nuestra ubicación (Barcelona) por defecto, y donde podemos añadir ciudades para hacer una comparativa de climas, podemos acceder al detalle de cada ciudad con un pronóstico para los próximos 3 dias.
![image](https://github.com/user-attachments/assets/1b7df254-e31c-472a-bb46-59f4ba7668ad)

---

Y también desde la página de ``DETALLE`` podemos volver atrás usando un icono con una flecha en la parte inferior de la pantalla.
![image](https://github.com/user-attachments/assets/70c08feb-5fcc-4431-bbe5-12c4aa8d7ff8)

---

Lo mismo se aplica a la página de ``CONTACT``
![image](https://github.com/user-attachments/assets/1a232b92-da0e-421c-b902-05768a1290f3)

---

Y finalmente tenemos la barra lateral navegable, un menú que si activamos pulsando la 'hamburguesa' de la parte superior izquierda de la pantalla, podremos tener visible constantemente durante toda nuestra navegación por las distintas URLs de nuestra web, y que siempre nos llevará a la página de detalle de la ciudad seleccionada.
![image](https://github.com/user-attachments/assets/dbd98d28-575e-4064-8593-ae614b4ab273)

[📖 Índice](#-tabla-de-contenidos)

---

## ⚙️ Instalación

Clonar repositorio:

```bash
git clone https://github.com/MaxDronCode/Quasar-app.git
cd climax
```

Instalar dependencias:

```bash
yarn install
# o
npm install
```
[📖 Índice](#-tabla-de-contenidos)

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

[📖 Índice](#-tabla-de-contenidos)

---

## 🌍 Roadmap

- ✅ Configuración inicial del proyecto  
- ✅ Integración con API meteorológica  
- ✅ Sistema de búsqueda por ubicación  
- ⏳ Widgets de datos detallados  
- ⏳ Soporte multi-idioma  
- ⏳ Modo oscuro/light  

[📖 Índice](#-tabla-de-contenidos)

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

✨ Contribuciones bienvenidas - Consulta nuestra guía de contribución

Proyecto desarrollado con ❤️ por Max Dron - ¡El clima en tus manos!
