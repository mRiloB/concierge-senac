<script setup lang="ts">
definePageMeta({ layout: 'guest' })

const { t, tm } = useI18n()
const session = useSessionStore()
const requests = useRequestsStore()

const opcoes = computed(() => {
  const options = tm('maintenance.options') as object[]
  return options.map(opt => opt.loc.source ?? '-') as string[]
})

const selecionados = ref<string[]>([])
const outroTexto = ref('')
const outroAtivo = ref(false)
const enviado = ref(false)

const podeEnviar = computed(() => selecionados.value.length > 0 || (outroAtivo.value && outroTexto.value.trim().length > 0))

function enviar() {
  const apartamento = session.apartamento || t('common.notInformed')
  for (const item of selecionados.value) {
    requests.adicionar({ categoria: 'manutencao', titulo: `${t('maintenance.problemPrefix')}: ${item}`, apartamento })
  }
  if (outroAtivo.value && outroTexto.value.trim()) {
    requests.adicionar({ categoria: 'manutencao', titulo: t('common.other'), apartamento, detalhe: outroTexto.value.trim() })
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
        {{ t('maintenance.title') }}
      </p>
      <p class="text-neutral-500 text-sm">
        {{ t('maintenance.subtitle') }}
      </p>
    </div>

    <UAlert
      v-if="enviado"
      icon="i-lucide-check-circle"
      color="success"
      variant="subtle"
      :title="t('maintenance.sentTitle')"
      :description="t('maintenance.sentDescription')"
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
          :placeholder="t('maintenance.otherPlaceholder')"
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
