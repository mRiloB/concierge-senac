<script setup lang="ts">
const { t } = useAdminT()
const requests = useRequestsStore()
</script>

<template>
  <div class="min-h-screen bg-neutral-100 dark:bg-neutral-950">
    <header class="bg-neutral-900 text-white">
      <div class="max-w-6xl mx-auto px-4 py-4 flex items-center gap-3">
        <UIcon
          name="i-lucide-layout-dashboard"
          class="size-5"
        />
        <div>
          <p class="font-semibold leading-tight">
            {{ t('admin.title') }}
          </p>
          <p class="text-xs text-white/60 leading-tight">
            {{ t('admin.subtitle') }}
          </p>
        </div>
        <UBadge
          v-if="requests.pendentesCount"
          color="warning"
          variant="subtle"
          class="ml-auto"
        >
          {{ t('admin.openBadge', { count: requests.pendentesCount }) }}
        </UBadge>
        <UButton
          to="/"
          icon="i-lucide-log-out"
          color="neutral"
          variant="ghost"
          size="sm"
        >
          {{ t('admin.exit') }}
        </UButton>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 py-6">
      <slot />
    </main>
  </div>
</template>
