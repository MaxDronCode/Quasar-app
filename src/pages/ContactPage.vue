<template>
  <div class="row flex flex-center items-center" style="height: 90dvh;">
    <q-form
      @submit.prevent="onSubmit"
      @reset.prevent="onReset"
      class="q-gutter-md"
    >
      <!-- Nombre -->
      <q-input
        filled
        v-model="name"
        label="Nombre *"
        hint="Introduce tu nombre completo"
        lazy-rules
        :rules="[ val => !!val || 'Por favor introduce tu nombre' ]"
      />

      <!-- Correo -->
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

      <!-- Mensaje (textarea) -->
      <q-input
        filled
        v-model="message"
        label="Mensaje *"
        type="textarea"
        autogrow
        hint="Escribe tu consulta o comentario"
        lazy-rules
        :rules="[
          val => !!val || 'Por favor introduce tu mensaje'
        ]"
      />

      <!-- Aceptar términos -->
      <q-toggle
        v-model="accept"
        label="He leído y acepto los términos y condiciones"
      />

      <!-- Botones -->
      <div>
        <q-btn label="Enviar" type="submit" color="primary" />
        <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {
  setup () {
    const $q = useQuasar()

    // Campos del formulario
    const name = ref('')
    const email = ref('')
    const message = ref('')
    const accept = ref(false)

    // Al enviar
    function onSubmit () {
      if (!accept.value) {
        // Notificación de error si no acepta términos
        $q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Debe aceptar los términos y condiciones antes de enviar'
        })
      } else {
        // Notificación de éxito
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: `Gracias ${name.value}, nos pondremos en contacto con usted en su correo ${email.value} para resolver sus dudas a la mayor brevedad.`
        })
        onReset()
      }
    }

    // Al limpiar
    function onReset () {
      name.value = ''
      email.value = ''
      message.value = ''
      accept.value = false
    }

    return {
      name,
      email,
      message,
      accept,
      onSubmit,
      onReset
    }
  }
}
</script>

<style>
/* Opcional, tus estilos */
</style>
