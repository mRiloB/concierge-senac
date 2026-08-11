<script setup lang="ts">
const session = useSessionStore()

const emit = defineEmits<{
  confirmado: [apartamento: string]
}>()

const numeroQuarto = ref<string | number>()
const erro = ref(false)

function entrar() {
  const valor = numeroQuarto.value?.toString()
  if (!valor) {
    erro.value = true
    return
  }
  erro.value = false
  session.definirApartamento(valor)
  emit('confirmado', valor)
}
</script>

<template>
  <div class="fixed inset-0 z-50 overflow-hidden">
    <!-- Foto de fundo do hotel -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('/img/hotel-bg.jpeg')"
    />
    <!-- Overlay escuro para legibilidade -->
    <div class="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70" />

    <!-- Conteúdo -->
    <div class="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
      <div class="flex size-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm mb-6">
        <UIcon
          name="i-lucide-anchor"
          class="size-8"
        />
      </div>

      <p class="text-3xl sm:text-4xl font-bold max-w-md">
        Seja bem-vindo(a) ao Hotel Senac Ilha do Boi
      </p>
      <p class="text-white/80 mt-3 max-w-sm">
        Para começar, informe o número do seu apartamento e tenha acesso ao Concierge Digital.
      </p>

      <form
        class="w-full max-w-xs mt-8 space-y-2"
        @submit.prevent="entrar"
      >
        <div class="flex gap-2">
          <UInput
            v-model="numeroQuarto"
            placeholder="Nº do quarto: 204"
            size="xl"
            icon="i-lucide-door-open"
            class="flex-1"
            :color="erro ? 'error' : undefined"
            type="number"
            autocomplete="off"
            :maxlength="4"
            autofocus
          />
          <UButton
            type="submit"
            size="xl"
            icon="i-lucide-arrow-right"
          />
        </div>
        <p
          v-if="erro"
          class="text-sm text-red-300 text-left"
        >
          Informe o número do apartamento para continuar.
        </p>
      </form>
    </div>
  </div>
</template>
