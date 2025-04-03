<template>
  <q-page class="flex flex-center">
    <h1>Weather Index</h1>
  </q-page>
</template>

<script setup>
import { API_KEY } from '../../api-key.js'

import axios from 'axios';

const options = {
  method: 'GET',
  url: `https://api.weatherstack.com/current?access_key=${API_KEY}`,
  params: {
    query: "New Delhi",
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
</script>
