<script setup lang="ts">
definePageMeta({ layout: 'guest' })

const session = useSessionStore()
const requests = useRequestsStore()

const opcoes = [
  'Ar-condicionado',
  'Chuveiro',
  'Torneira',
  'Televisão',
  'Internet Wi-Fi'
]

const selecionados = ref<string[]>([])
const outroTexto = ref('')
const outroAtivo = ref(false)
const enviado = ref(false)

const podeEnviar = computed(() => selecionados.value.length > 0 || (outroAtivo.value && outroTexto.value.trim().length > 0))

function enviar() {
  const apartamento = session.apartamento || 'não informado'
  for (const item of selecionados.value) {
    requests.adicionar({ categoria: 'manutencao', titulo: `Problema: ${item}`, apartamento })
  }
  if (outroAtivo.value && outroTexto.value.trim()) {
    requests.adicionar({ categoria: 'manutencao', titulo: 'Outros', apartamento, detalhe: outroTexto.value.trim() })
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
        Manutenção
      </p>
      <p class="text-neutral-500 text-sm">
        Informe o problema encontrado na sua unidade habitacional. A solicitação será direcionada ao setor responsável para avaliação.
      </p>
    </div>

    <UAlert
      v-if="enviado"
      icon="i-lucide-check-circle"
      color="success"
      variant="subtle"
      title="Solicitação enviada"
      description="A solicitação será direcionada ao setor responsável para avaliação."
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
          placeholder="Ex: &quot;A tomada próxima à cama não está funcionando.&quot;"
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
