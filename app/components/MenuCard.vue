<script setup lang="ts">
defineProps<{
  to: string
  icon: string
  title: string
  description: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="group flex items-start gap-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 hover:border-primary-400 hover:shadow-md transition-all"
  >
    <div class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-950 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
      <UIcon
        :name="icon"
        class="size-6"
      />
    </div>
    <div class="min-w-0">
      <p class="font-semibold text-neutral-900 dark:text-white">
        {{ title }}
      </p>
      <p class="text-sm text-neutral-500 mt-0.5">
        {{ description }}
      </p>
    </div>
    <UIcon
      name="i-lucide-chevron-right"
      class="ml-auto size-5 text-neutral-300 group-hover:text-primary-500 shrink-0 mt-2"
    />
  </NuxtLink>
</template>
