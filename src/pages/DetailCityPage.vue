<template>
  <q-page padding>
    <div v-if="forecastData">
      <h2>Pronóstico para {{ forecastData.location.name }}</h2>

      <div class="current-forecast q-my-md">
        <q-card class="q-pa-md">
          <q-card-section>
            <div class="text-h6">
              Clima actual
            </div>
            <div class="text-caption">
              {{ forecastData.current.condition.text }}
            </div>
            <div class="row items-center q-mt-sm">
              <div class="col">
                <div class="text-h4">
                  {{ forecastData.current.temp_c }}°C
                </div>
                <div class="text-caption">
                  Sensación térmica: {{ forecastData.current.feelslike_c }}°C
                </div>
              </div>
              <div class="col-auto">
                <img
                  :src="'https:' + forecastData.current.condition.icon"
                  alt="Clima actual"
                  class="weather-icon"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="row q-gutter-md">
        <q-card
          v-for="(day, index) in forecastData.forecast.forecastday"
          :key="index"
          class="forecast-card q-pa-md"
        >
          <q-card-section>
            <div class="text-h6">
              {{ day.date }}
            </div>
            <div>
              {{ day.day.condition.text }}
            </div>
            <img
              :src="'https:' + day.day.condition.icon"
              alt="icono dia"
              class="weather-icon"
            />
            <div class="text-caption">
              Máx: {{ day.day.maxtemp_c }}°C - Mín: {{ day.day.mintemp_c }}°C
            </div>
            <div class="text-caption">
              Lluvia: {{ day.day.daily_chance_of_rain }}%
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div v-else>
      <div v-if="error">{{ error }}</div>
      <div v-else>Cargando pronóstico...</div>
    </div>

    <q-btn round color="brown-5" class="q-ma-md" @click="goBack">
      <img src="~assets/back-svgrepo-com.svg" alt="Go bakc arrow" style="width: 40px;">
    </q-btn>

  </q-page>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import { API_KEY } from '../../api-key.js'

const route = useRoute()
const router = useRouter()

const cityParam = ref(decodeURIComponent(route.params.city) || '')
console.log(cityParam)

const forecastData = ref(null)
const error = ref(null)

const goBack = () => {
  router.push('/index')
}

async function fetchForecast (city) {
  if (!city){
    error.value = 'No se especificó ninguna ciudad'
    forecastData.value = null
    return
  }
  try{
    error.value = null
    const response = await axios.get('https://api.weatherapi.com/v1/forecast.json', {
      params: {
        key: API_KEY,
        q: city,
        days:  4
      }
    })
    forecastData.value = response.data
  } catch (e) {
    console.error(e)
    error.value = "Error al cargar la previsión"
    forecastData.value = null
  }
}

onMounted(async () => {
  fetchForecast(cityParam.value)
})

watch(() => route.params.city, (newCity) => {
  cityParam.value = decodeURIComponent(newCity || '')
  fetchForecast(cityParam.value)
})
</script>

<style>
.q-page {
  padding: 20px;
}
.weather-icon {
  width: 64px;
  height: 64px;
}
.forecast-card {
  width: 220px;
  color: black;
}
.current-forecast{
  color: black;
}
</style>
