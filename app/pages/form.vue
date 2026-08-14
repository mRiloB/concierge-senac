<script setup lang="ts">
definePageMeta({ layout: 'guest' })

const { t } = useI18n()
const session = useSessionStore()
const satisfaction = useSatisfactionStore()

const limpo = ref<'sim' | 'parcial' | 'nao' | ''>('')
const confortavel = ref<'sim' | 'parcial' | 'nao' | ''>('')
const observacoes = ref('')
const enviado = ref(false)

const opcoesResposta = computed(() => [
  { value: 'sim', label: t('form.answers.yes') },
  { value: 'parcial', label: t('form.answers.partial') },
  { value: 'nao', label: t('form.answers.no') }
])

const podeEnviar = computed(() => limpo.value && confortavel.value)

function enviar() {
  satisfaction.adicionar({
    apartamento: session.apartamento || t('common.notInformed'),
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
        {{ t('form.title') }}
      </p>
      <p class="text-neutral-500 text-sm mt-1">
        {{ t('form.subtitle') }}
      </p>
    </div>

    <UAlert
      v-if="enviado"
      icon="i-lucide-heart"
      color="success"
      variant="subtle"
      :title="t('form.thanksTitle')"
      :description="t('form.thanksDescription')"
    />

    <UCard v-else>
      <div class="space-y-5">
        <UFormField :label="t('form.question1')">
          <URadioGroup
            v-model="limpo"
            :items="opcoesResposta"
            orientation="horizontal"
          />
        </UFormField>
        <UFormField :label="t('form.question2')">
          <URadioGroup
            v-model="confortavel"
            :items="opcoesResposta"
            orientation="horizontal"
          />
        </UFormField>
        <UFormField :label="t('form.question3')">
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
          {{ t('form.sendButton') }}
        </UButton>
      </template>
    </UCard>
  </div>
</template>
