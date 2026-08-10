<script setup lang="ts">
definePageMeta({ layout: 'guest' })

const categorias = [
  { icon: 'i-lucide-waves', titulo: 'Praias', descricao: 'Praia do Canto, Curva da Jurema e Camburi a poucos minutos' },
  { icon: 'i-lucide-landmark', titulo: 'Museus', descricao: 'Museu Vale, MAES e Palácio Anchieta' },
  { icon: 'i-lucide-calendar', titulo: 'Eventos do dia', descricao: 'Agenda cultural atualizada da capital' },
  { icon: 'i-lucide-music', titulo: 'Programação cultural', descricao: 'Exposições, teatro e música ao vivo' },
  { icon: 'i-lucide-mic-vocal', titulo: 'Shows', descricao: 'Shows e apresentações na Grande Vitória' },
  { icon: 'i-lucide-utensils', titulo: 'Restaurantes', descricao: 'Gastronomia capixaba, frutos do mar e mais' },
  { icon: 'i-lucide-beer', titulo: 'Bares', descricao: 'Opções para happy hour e vida noturna' },
  { icon: 'i-lucide-coffee', titulo: 'Cafeterias', descricao: 'Cafés especiais pela orla e centro' },
  { icon: 'i-lucide-shopping-basket', titulo: 'Feiras', descricao: 'Feiras de artesanato e produtos locais' },
  { icon: 'i-lucide-mountain', titulo: 'Trilhas', descricao: 'Trilhas ecológicas próximas à cidade' },
  { icon: 'i-lucide-ferris-wheel', titulo: 'Passeios', descricao: 'Passeios de barco e city tours' },
  { icon: 'i-lucide-map', titulo: 'Mapas e rotas turísticas', descricao: 'Roteiros sugeridos pelo Espírito Santo' }
]
</script>

<template>
  <div class="space-y-4">
    <div class="rounded-xl overflow-hidden bg-gradient-to-br from-primary-700 to-primary-950 text-white p-6">
      <p class="text-2xl font-bold flex items-center gap-2">
        <UIcon
          name="i-lucide-compass"
          class="size-6"
        />
        Guia Tour
      </p>
      <p class="text-white/85 mt-1 max-w-lg">
        Estimule seu turismo local: atrativos, praias, gastronomia e eventos do Espírito Santo,
        selecionados para tornar sua estadia ainda mais especial.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 gap-3">
      <UCard
        v-for="c in categorias"
        :key="c.titulo"
      >
        <div class="flex items-start gap-3">
          <div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-950 text-primary-600">
            <UIcon
              :name="c.icon"
              class="size-5"
            />
          </div>
          <div>
            <p class="font-semibold">
              {{ c.titulo }}
            </p>
            <p class="text-sm text-neutral-500">
              {{ c.descricao }}
            </p>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>
