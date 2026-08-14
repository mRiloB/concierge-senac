<script setup lang="ts">
definePageMeta({ layout: 'guest' })

const { t, tm, rt } = useI18n()

interface Farmacia { name: string, address: string, distance: string, phone: string }
const farmacias = computed(() => tm('pharmacies.items') as unknown as Farmacia[])

function rota(nome: string, endereco: string) {
  const query = encodeURIComponent(`${nome}, ${endereco}`)
  return `https://www.google.com/maps/search/?api=1&query=${query}`
}
</script>

<template>
  <div class="space-y-4">
    <div>
      <p class="text-xl font-bold">
        {{ t('pharmacies.title') }}
      </p>
      <p class="text-neutral-500 text-sm">
        {{ t('pharmacies.subtitle') }}
      </p>
    </div>

    <UCard
      v-for="(f, index) in farmacias"
      :key="index"
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
            {{ rt(f.name) }}
          </p>
          <p class="text-sm text-neutral-500">
            {{ rt(f.address) }}
          </p>
          <div class="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-neutral-500">
            <span class="flex items-center gap-1"><UIcon
              name="i-lucide-map-pin"
              class="size-3.5"
            />{{ rt(f.distance) }}</span>
            <span class="flex items-center gap-1"><UIcon
              name="i-lucide-phone"
              class="size-3.5"
            />{{ rt(f.phone) }}</span>
          </div>
        </div>
        <UButton
          :to="rota(rt(f.name), rt(f.address))"
          target="_blank"
          icon="i-lucide-navigation"
          size="sm"
          variant="soft"
        >
          {{ t('common.route') }}
        </UButton>
      </div>
    </UCard>
  </div>
</template>
