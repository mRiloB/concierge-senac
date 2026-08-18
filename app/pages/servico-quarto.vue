<script setup lang="ts">
definePageMeta({ layout: 'guest' })

const { t, tm, rt } = useI18n()
const session = useSessionStore()
const requests = useRequestsStore()

const opcoes = computed(() => {
  const options = tm('roomService.options') as unknown[]
  return options.map((option, _) => ({
    label: rt(option as string),
    value: rt(option as string)
  }))
})

const selecionados = ref<string[]>([])
const outroTexto = ref('')
const outroAtivo = ref(false)
const enviado = ref(false)

const podeEnviar = computed(() => selecionados.value.length > 0 || (outroAtivo.value && outroTexto.value.trim().length > 0))

function enviar() {
  const apartamento = session.apartamento || t('common.notInformed')
  for (const item of selecionados.value) {
    requests.adicionar({ categoria: 'quarto', titulo: item, apartamento })
  }
  if (outroAtivo.value && outroTexto.value.trim()) {
    requests.adicionar({ categoria: 'quarto', titulo: t('common.other'), apartamento, detalhe: outroTexto.value.trim() })
  }
  enviado.value = true
  selecionados.value = []
  outroTexto.value = ''
  outroAtivo.value = false
}
</script>

<template>
  <div class="space-y-4">
    <div>
      <p class="text-xl font-bold">
        {{ t('roomService.title') }}
      </p>
      <p class="text-neutral-500 text-sm">
        {{ t('roomService.subtitle') }}
      </p>
    </div>

    <UAlert
      v-if="enviado"
      icon="i-lucide-check-circle"
      color="success"
      variant="subtle"
      :title="t('roomService.sentTitle')"
      :description="t('roomService.sentDescription')"
    />

    <UCard>
      <div class="space-y-3">
        <UCheckboxGroup
          v-model="selecionados"
          :items="opcoes"
        />
        <UCheckbox
          v-model="outroAtivo"
          :label="t('common.other')"
        />
        <UTextarea
          v-if="outroAtivo"
          v-model="outroTexto"
          :placeholder="t('roomService.otherPlaceholder')"
          class="w-full"
        />
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
