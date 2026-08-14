<script setup lang="ts">
definePageMeta({ layout: 'guest' })

const { t } = useI18n()
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
    titulo: t('home.menu.lateCheckout.title'),
    apartamento: session.apartamento || t('common.notInformed'),
    detalhe: `${t('lateCheckout.detailDate')}: ${data.value} · ${t('lateCheckout.detailTime')}: ${horario.value}${observacoes.value ? ` · ${t('lateCheckout.detailObs')}: ${observacoes.value}` : ''}`
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
        {{ t('lateCheckout.title') }}
      </p>
      <p class="text-neutral-500 text-sm">
        {{ t('lateCheckout.subtitle') }}
      </p>
    </div>

    <UAlert
      v-if="enviado"
      icon="i-lucide-info"
      color="info"
      variant="subtle"
      :title="t('lateCheckout.sentTitle')"
      :description="t('lateCheckout.sentDescription')"
    />

    <UCard>
      <div class="space-y-4">
        <UFormField :label="t('lateCheckout.dateLabel')">
          <UInput
            v-model="data"
            type="date"
            class="w-full"
          />
        </UFormField>
        <UFormField :label="t('lateCheckout.timeLabel')">
          <UInput
            v-model="horario"
            type="time"
            class="w-full"
          />
        </UFormField>
        <UFormField :label="t('lateCheckout.obsLabel')">
          <UTextarea
            v-model="observacoes"
            :placeholder="t('common.optional')"
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
          {{ t('common.sendRequest') }}
        </UButton>
      </template>
    </UCard>
  </div>
</template>
