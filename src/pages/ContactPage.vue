<template>
  <div class="row flex flex-center items-center" style="height: 90dvh">
    <q-form @submit.prevent="onSubmit" @reset.prevent="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Nombre *"
        hint="Introduce tu nombre completo"
        lazy-rules
        :rules="[(val) => !!val || 'Por favor introduce tu nombre']"
        class="custom-input"
      />

      <q-input
        filled
        v-model="email"
        label="Correo electrónico *"
        hint="ejemplo@dominio.com"
        lazy-rules
        :rules="[
          (val) => !!val || 'Por favor introduce tu correo',
          (val) => /^.+@.+\..+$/.test(val) || 'El correo electrónico no es válido',
        ]"
        class="custom-input"
      />

      <q-input
        filled
        v-model="message"
        label="Mensaje *"
        type="textarea"
        autogrow
        hint="Escribe tu consulta o comentario"
        lazy-rules
        :rules="[(val) => !!val || 'Por favor introduce tu mensaje']"
        class="custom-input"
      />

      <q-toggle v-model="accept" label="He leído y acepto los términos y condiciones" />

      <div>
        <q-btn label="Enviar" type="submit" color="primary" />
        <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
  <q-btn round color="brown-5" class="q-ma-md" @click="goBack">
    <img src="src/assets/back-svgrepo-com.svg" alt="Go bakc arrow" style="width: 40px" />
  </q-btn>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

// Router
const router = useRouter()
// Notificaciones de Quasar
const $q = useQuasar()

// Campos del formulario
const name = ref('')
const email = ref('')
const message = ref('')
const accept = ref(false)

// Navegar de vuelta
function goBack () {
  router.push('/index')
}

// Envío del formulario
function onSubmit () {
  if (!accept.value) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Debe aceptar los términos y condiciones antes de enviar'
    })
  } else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: `Gracias ${name.value}, nos pondremos en contacto con usted en su correo ${email.value} para resolver sus dudas a la mayor brevedad.`
    })
    onReset()
  }
}

// Reset del formulario
function onReset () {
  name.value = ''
  email.value = ''
  message.value = ''
  accept.value = false
}
</script>

<style>
.q-form {
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 10px 8px rgba(0, 0, 0, 0.144);
}
.custom-input .q-field__label {
  color: rgb(30, 146, 196);
}
</style>
