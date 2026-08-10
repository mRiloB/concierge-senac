<script setup lang="ts">
definePageMeta({ layout: 'guest' })

const farmacias = [
  { nome: 'Farmácia Ilha do Boi', endereco: 'Av. Saturnino de Brito, Ilha do Boi', distancia: '450 m', telefone: '(27) 3345-1122' },
  { nome: 'Drogaria São Paulo', endereco: 'Av. Dante Michelini, Praia do Canto', distancia: '1,8 km', telefone: '(27) 3222-4488' },
  { nome: 'Farmácia Pague Menos', endereco: 'Av. Nossa Senhora da Penha, Praia do Canto', distancia: '2,3 km', telefone: '(27) 3225-6677' }
]

function rota(nome: string, endereco: string) {
  const query = encodeURIComponent(`${nome}, ${endereco}`)
  return `https://www.google.com/maps/search/?api=1&query=${query}`
}
</script>

<template>
  <div class="space-y-4">
    <div>
      <p class="text-xl font-bold">
        Farmácias
      </p>
      <p class="text-neutral-500 text-sm">
        Farmácias mais próximas do Hotel Senac Ilha do Boi.
      </p>
    </div>

    <UCard
      v-for="f in farmacias"
      :key="f.nome"
    >
      <div class="flex items-start gap-3">
        <div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
          <UIcon
            name="i-lucide-cross"
            class="size-5"
          />
        </div>
        <div class="min-w-0 flex-1">
          <p class="font-semibold">
            {{ f.nome }}
          </p>
          <p class="text-sm text-neutral-500">
            {{ f.endereco }}
          </p>
          <div class="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-neutral-500">
            <span class="flex items-center gap-1"><UIcon
              name="i-lucide-map-pin"
              class="size-3.5"
            />{{ f.distancia }}</span>
            <span class="flex items-center gap-1"><UIcon
              name="i-lucide-phone"
              class="size-3.5"
            />{{ f.telefone }}</span>
          </div>
        </div>
        <UButton
          :to="rota(f.nome, f.endereco)"
          target="_blank"
          icon="i-lucide-navigation"
          size="sm"
          variant="soft"
        >
          Rota
        </UButton>
      </div>
    </UCard>
  </div>
</template>
