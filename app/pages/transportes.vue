<script setup lang="ts">
definePageMeta({ layout: 'guest' })
const { t } = useI18n()
</script>

<template>
  <div class="space-y-4">
    <div>
      <p class="text-xl font-bold">
        {{ t('transport.title') }}
      </p>
      <p class="text-neutral-500 text-sm">
        {{ t('transport.subtitle') }}
      </p>
    </div>

    <UCard>
      <div class="flex items-center gap-3 mb-2">
        <UIcon
          name="i-lucide-bus"
          class="size-5 text-primary-600"
        />
        <p class="font-semibold">
          {{ t('transport.bus.title') }}
        </p>
      </div>
      <p class="text-sm text-neutral-600 dark:text-neutral-300">
        {{ t('transport.bus.description') }}
      </p>
      <template #footer>
        <UButton
          to="https://ceturb.es.gov.br"
          target="_blank"
          icon="i-lucide-external-link"
          variant="soft"
          block
        >
          {{ t('transport.consultSchedule') }}
        </UButton>
      </template>
    </UCard>

    <UCard>
      <div class="flex items-center gap-3 mb-2">
        <UIcon
          name="i-lucide-ship"
          class="size-5 text-primary-600"
        />
        <p class="font-semibold">
          {{ t('transport.waterway.title') }}
        </p>
      </div>
      <p class="text-sm text-neutral-600 dark:text-neutral-300">
        {{ t('transport.waterway.description') }}
      </p>
      <ul class="text-sm text-neutral-500 mt-2 space-y-1">
        <li class="flex items-center gap-1.5">
          <UIcon
            name="i-lucide-clock"
            class="size-3.5"
          />
          {{ t('transport.waterway.schedule') }}
        </li>
        <li class="flex items-center gap-1.5">
          <UIcon
            name="i-lucide-map-pin"
            class="size-3.5"
          />
          {{ t('transport.waterway.terminal') }}
        </li>
      </ul>
      <template #footer>
        <UButton
          to="https://ceturb.es.gov.br"
          target="_blank"
          icon="i-lucide-external-link"
          variant="soft"
          block
        >
          {{ t('transport.consultSchedule') }}
        </UButton>
      </template>
    </UCard>
  </div>
</template>
