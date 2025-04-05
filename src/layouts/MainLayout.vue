<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-9 text-white">
    <q-header elevated class="bg-grey-6">
      <q-toolbar>
        <q-btn flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu" />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <q-tabs>
          <q-route-tab to="/" label="Inicio" />
          <q-route-tab to="/index" label="Weather" />
          <q-route-tab to="/about" label="About" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-grey-8">
      <q-list dark>
        <!-- Cabecera del Drawer -->
        <q-item-label header>Mis Ciudades</q-item-label>

        <!-- Recorremos la lista de ciudades y generamos un item por cada una -->
        <q-item
          v-for="city in cityOptions"
          :key="city"
          clickable
          :to="`/detail/${city}`"
          router
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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MyLayout',

  setup() {
    // Control del menú lateral
    const leftDrawerOpen = ref(false)
    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    // Tu lista de ciudades
    const cityOptions = ['Barcelona', 'Madrid', 'New York', 'London', 'Tokyo']

    return {
      leftDrawerOpen,
      toggleLeftDrawer,
      cityOptions
    }
  }
}
</script>
