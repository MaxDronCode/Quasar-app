# 🌤️ ClimaX - Pronóstico Meteorológico Inteligente

**Aplicación del tiempo moderna desarrollada con Quasar Framework**  
[![Quasar Framework](https://img.shields.io/badge/Quasar-1976D2?style=flat&logo=quasar&logoColor=white)](https://quasar.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)

![image](https://github.com/user-attachments/assets/62d4de93-945d-4dc7-9942-c62b744cfe0a)


---

## 📑 Tabla de contenidos

- [🚀 Características](#-características)
- [🧩 Componentes utilizados](#-algunos-componentes-utilizados)
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

- [📖 Índice](#-tabla-de-contenidos)

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
