<script setup lang="ts">
definePageMeta({ layout: 'guest' })

const { t, tm, rt } = useI18n()

const icons = [
  'i-lucide-waves',
  'i-lucide-landmark',
  'i-lucide-calendar',
  'i-lucide-music',
  'i-lucide-mic-vocal',
  'i-lucide-utensils',
  'i-lucide-beer',
  'i-lucide-coffee',
  'i-lucide-shopping-basket',
  'i-lucide-mountain',
  'i-lucide-ferris-wheel',
  'i-lucide-map'
]

interface Categoria { title: string, description: string }
const categorias = computed(() =>
  (tm('guiaTour.categories') as unknown as Categoria[]).map((c, i) => ({ ...c, icon: icons[i] }))
)
</script>

<template>
  <div class="space-y-4">
    <div class="rounded-xl overflow-hidden bg-linear-to-br from-primary-700 to-primary-950 text-white p-6">
      <p class="text-2xl font-bold flex items-center gap-2">
        <UIcon
          name="i-lucide-compass"
          class="size-6"
        />
        {{ t('guiaTour.title') }}
      </p>
      <p class="text-white/85 mt-1 max-w-lg">
        {{ t('guiaTour.subtitle') }}
      </p>
    </div>

    <div class="grid sm:grid-cols-2 gap-3">
      <UCard
        v-for="(c, index) in categorias"
        :key="index"
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
              {{ rt(c.title) }}
            </p>
            <p class="text-sm text-neutral-500">
              {{ rt(c.description) }}
            </p>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>
