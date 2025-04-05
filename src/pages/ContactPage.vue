<template>
  <div class="row flex flex-center items-center" style="height: 90dvh;">
    <q-form
      @submit.prevent="onSubmit"
      @reset.prevent="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Nombre *"
        hint="Introduce tu nombre completo"
        lazy-rules
        :rules="[ val => !!val || 'Por favor introduce tu nombre' ]"
      />

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

      <q-toggle
        v-model="accept"
        label="He leído y acepto los términos y condiciones"
      />

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

    const name = ref('')
    const email = ref('')
    const message = ref('')
    const accept = ref(false)

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
.q-form {
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 10px 8px rgba(0, 0, 0, 0.144);
}
</style>
