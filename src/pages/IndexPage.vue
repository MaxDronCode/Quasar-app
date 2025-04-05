<template>
  <q-page class="q-pa-md flex flex-center">
    <div class="column items-center text-center">

      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-vertical.svg"
        style="width: 200px; height: 200px"
      />

      <h1 class="text-h4 q-my-md">
        ¡Bienvenido a nuestra aplicación de Clima!
      </h1>

      <p class="text-subtitle1 q-my-md">
        Aquí podrás consultar el estado del tiempo en diversas ciudades, ver detalles de cada una y también enviarnos tus consultas a través de nuestro formulario de contacto.
      </p>

      <div class="row q-col-gutter-md q-my-md justify-center">
        <q-btn
          label="Ir a la página de Clima"
          color="primary"
          :to="'/index'"
          class="q-ma-sm"
        />

        <q-btn
          label="Formulario de Contacto"
          color="accent"
          :to="'/contact'"
          class="q-ma-sm"
        />
      </div>

      <q-banner
        class="bg-indigo-9 text-white q-my-md"
        inline-actions
      >
        <div>
          También puedes usar el menú lateral
          para seleccionar ciudades
          y ver su información detallada.
        </div>
      </q-banner>
    </div>
  </q-page>
</template>



