<template>
  <q-page class="flex flex-center column">
    <q-ajax-bar ref="bar" position="bottom" color="accent" size="10px" />
    <h1 class="q-mb-md">ClimaX 🌤️</h1>

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

    <div class="row q-gutter-md justify-center">
      <template v-if="weatherData.length > 0">
        <q-card v-for="(weather, index) in weatherData" :key="index" class="weather-card q-pa-md">
          <q-card-section>
            <div class="text-h6">{{ weather.location?.name }}, {{ weather.location?.country }}</div>
            <div class="text-caption">{{ weather.current?.condition?.text }}</div>

            <div class="row items-center q-mt-sm">
              <div class="col">
                <div class="text-h4">{{ weather.current?.temp_c }}°C</div>
                <div class="text-caption">
                  Sensación térmica: {{ weather.current?.feelslike_c }}°C
                </div>
              </div>
              <div class="col-auto">
                <img :src="'https:' + weather.current?.condition?.icon" class="weather-icon" />
              </div>
            </div>

            <q-separator class="q-my-sm" />

            <div class="row q-gutter-sm text-caption">
              <div>
                <q-icon name="air" /> {{ weather.current?.wind_kph }} km/h
                {{ weather.current?.wind_dir }}
              </div>
              <div><q-icon name="water_drop" /> Humedad: {{ weather.current?.humidity }}%</div>
            </div>
          </q-card-section>
        </q-card>
      </template>
      <div v-else class="text-caption">
        {{ error || 'Cargando datos meteorológicos...' }}
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { API_KEY } from '../../api-key.js'
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'

const bar = ref(null)
const weatherData = ref([])
const err = ref(null)
const selectedCities = ref(['Barcelona'])
const citySelect = ref(null)
const cityOptions = ['Barcelona', 'Madrid', 'New York', 'London', 'Tokyo']

const handleSelection = () => {
  if (citySelect.value) {
    citySelect.value.hidePopup()
  }
}

watch(selectedCities, async (newCities) => {
  if (newCities.length === 0) {
    weatherData.value = []
    return
  }

  try {
    err.value = null
    if (bar.value) bar.value.start()

    const requests = newCities.map((city) =>
      axios
        .get(`https://api.weatherapi.com/v1/current.json`, {
          params: {
            key: API_KEY,
            q: city,
          },
        })
        .catch((e) => {
          console.error(`Error en ${city}:`, e)
          return null // Manejar errores individuales
        }),
    )

    const responses = await Promise.all(requests)

    // Filtrar respuestas fallidas
    weatherData.value = responses
      .filter((r) => r?.data?.current && r?.data?.location)
      .map((r) => r.data)

    if (weatherData.value.length === 0) {
      err.value = 'No se pudieron obtener datos para las ciudades seleccionadas'
    }
  } catch (mainError) {
    console.error('Error general:', mainError)
    err.value = 'Error al cargar datos'
  } finally {
    if (bar.value) bar.value.stop()
  }
})

onMounted(() => {
  selectedCities.value = ['Barcelona']
})
</script>

<style>
.weather-card {
  min-width: 300px;
  max-width: 400px;
  width: 100%;
}

.weather-icon {
  width: 80px;
  height: 80px;
}
.weather-card {
  color: black;
}

.q-page {
  padding: 20px;
}

.qselect {
  color: antiquewhite;
}

.white-select .q-field__native,
.white-select .q-field__label,
.white-select .q-chip {
  color: #fff !important;
}

.white-select .q-field__control:before {
  border-color: #fff !important;
}
</style>
