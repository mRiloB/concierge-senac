<script setup lang="ts">
definePageMeta({ layout: 'guest' })

const session = useSessionStore()
const requests = useRequestsStore()

const opcoes = [
  'Travesseiro extra',
  'Toalha extra',
  'Limpeza do apartamento',
  'Ferro de passar roupas'
]

const selecionados = ref<string[]>([])
const outroTexto = ref('')
const outroAtivo = ref(false)
const enviado = ref(false)

const podeEnviar = computed(() => selecionados.value.length > 0 || (outroAtivo.value && outroTexto.value.trim().length > 0))

function enviar() {
  const apartamento = session.apartamento || 'não informado'
  for (const item of selecionados.value) {
    requests.adicionar({ categoria: 'quarto', titulo: item, apartamento })
  }
  if (outroAtivo.value && outroTexto.value.trim()) {
    requests.adicionar({ categoria: 'quarto', titulo: 'Outros', apartamento, detalhe: outroTexto.value.trim() })
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
        Serviço de Quarto
      </p>
      <p class="text-neutral-500 text-sm">
        Selecione o que você precisa. Sua solicitação será encaminhada automaticamente para a recepção.
      </p>
    </div>

    <UAlert
      v-if="enviado"
      icon="i-lucide-check-circle"
      color="success"
      variant="subtle"
      title="Solicitação enviada"
      description="Sua solicitação foi encaminhada automaticamente para a recepção."
    />

    <UCard>
      <div class="space-y-3">
        <UCheckbox
          v-for="opcao in opcoes"
          :key="opcao"
          v-model="selecionados"
          :value="opcao"
          :label="opcao"
        />
        <UCheckbox
          v-model="outroAtivo"
          label="Outros"
        />
        <UTextarea
          v-if="outroAtivo"
          v-model="outroTexto"
          placeholder="Ex: &quot;Necessito de um cobertor adicional.&quot;"
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
          Enviar Solicitação
        </UButton>
      </template>
    </UCard>
  </div>
</template>
