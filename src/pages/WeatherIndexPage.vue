<template>
  <q-page class="flex flex-center column">
    <q-ajax-bar ref="bar" position="bottom" color="accent" size="10px" />
    <h1 class="q-mb-md">ClimaX 🌤️</h1>

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
  </q-page>
</template>

<script setup>
import { API_KEY } from '../../api-key.js'
import axios from 'axios'
import { ref, onMounted } from 'vue'

const bar = ref(null)
const weatherData = ref(null)

onMounted(async () => {
  const options = {
    method: 'GET',
    url: `https://api.weatherstack.com/current?access_key=${API_KEY}`,
    params: {
      query: 'Barcelona',
    },
  }

  try {
    if (bar.value) bar.value.start()
    const response = await axios.request(options)
    weatherData.value = response.data // Almacenamos toda la respuesta
    console.log('Datos recibidos:', weatherData.value)
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    if (bar.value) bar.value.stop()
  }
})
</script>

<style>
.weather-card {
  min-width: 400px;
  max-width: 600px;
  width: 90%;
}

.weather-icon {
  width: 100px;
  height: 100px;
}

.text-h2 {
  font-size: 3rem;
  line-height: 1;
  color: black;
}
.weather-card{
  color: black;
}
</style>
