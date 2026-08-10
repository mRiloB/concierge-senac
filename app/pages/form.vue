<script setup lang="ts">
definePageMeta({ layout: 'guest' })

const session = useSessionStore()
const satisfaction = useSatisfactionStore()

const limpo = ref<'sim' | 'parcial' | 'nao' | ''>('')
const confortavel = ref<'sim' | 'parcial' | 'nao' | ''>('')
const observacoes = ref('')
const enviado = ref(false)

const opcoesResposta = [
  { value: 'sim', label: 'Sim' },
  { value: 'parcial', label: 'Em parte' },
  { value: 'nao', label: 'Não' }
]

const podeEnviar = computed(() => limpo.value && confortavel.value)

function enviar() {
  satisfaction.adicionar({
    apartamento: session.apartamento || 'não informado',
    limpo: limpo.value as 'sim' | 'parcial' | 'nao',
    confortavel: confortavel.value as 'sim' | 'parcial' | 'nao',
    observacoes: observacoes.value.trim() || undefined
  })
  enviado.value = true
}
</script>

<template>
  <div class="space-y-4 max-w-lg">
    <div>
      <p class="text-xl font-bold">
        Esperamos que sua hospedagem esteja sendo especial!
      </p>
      <p class="text-neutral-500 text-sm mt-1">
        Gostaríamos de saber como está sendo sua estadia e se podemos contribuir para torná-la
        ainda mais agradável.
      </p>
    </div>

    <UAlert
      v-if="enviado"
      icon="i-lucide-heart"
      color="success"
      variant="subtle"
      title="Obrigado pela sua resposta!"
      description="Agradecemos por escolher o Hotel Senac Ilha do Boi. Sua opinião ajuda a tornar sua estadia ainda melhor."
    />

    <UCard v-else>
      <div class="space-y-5">
        <UFormField label="O apartamento está limpo e organizado conforme suas expectativas?">
          <URadioGroup
            v-model="limpo"
            :items="opcoesResposta"
            orientation="horizontal"
          />
        </UFormField>
        <UFormField label="Está confortável e atendendo às suas necessidades?">
          <URadioGroup
            v-model="confortavel"
            :items="opcoesResposta"
            orientation="horizontal"
          />
        </UFormField>
        <UFormField label="Há algo que possamos providenciar neste momento para tornar sua hospedagem ainda melhor?">
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
          Enviar resposta
        </UButton>
      </template>
    </UCard>
  </div>
</template>
