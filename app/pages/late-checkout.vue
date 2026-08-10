<script setup lang="ts">
definePageMeta({ layout: 'guest' })

const session = useSessionStore()
const requests = useRequestsStore()

const data = ref('')
const horario = ref('')
const observacoes = ref('')
const enviado = ref(false)

const podeEnviar = computed(() => data.value && horario.value)

function enviar() {
  requests.adicionar({
    categoria: 'checkout',
    titulo: 'Late Check-out',
    apartamento: session.apartamento || 'não informado',
    detalhe: `Data desejada: ${data.value} · Horário: ${horario.value}${observacoes.value ? ` · Obs: ${observacoes.value}` : ''}`
  })
  enviado.value = true
  data.value = ''
  horario.value = ''
  observacoes.value = ''
}
</script>

<template>
  <div class="space-y-4">
    <div>
      <p class="text-xl font-bold">
        Late Check-out
      </p>
      <p class="text-neutral-500 text-sm">
        Solicite a extensão da sua hospedagem.
      </p>
    </div>

    <UAlert
      v-if="enviado"
      icon="i-lucide-info"
      color="info"
      variant="subtle"
      title="Solicitação enviada"
      description="Sua solicitação foi encaminhada para a recepção. O atendimento será analisado conforme a disponibilidade de apartamentos para a data solicitada. O envio da solicitação não representa confirmação automática do Late Check-out."
    />

    <UCard>
      <div class="space-y-4">
        <UFormField label="Data desejada">
          <UInput
            v-model="data"
            type="date"
            class="w-full"
          />
        </UFormField>
        <UFormField label="Horário pretendido">
          <UInput
            v-model="horario"
            type="time"
            class="w-full"
          />
        </UFormField>
        <UFormField label="Observações">
          <UTextarea
            v-model="observacoes"
            placeholder="Opcional"
            class="w-full"
          />
        </UFormField>
      </div>

      <template #footer>
        <UButton
          block
          icon="i-lucide-send"
          :disabled="!podeEnviar"
          @click="enviar"
        >
          Enviar Solicitação
        </UButton>
      </template>
    </UCard>
  </div>
</template>
