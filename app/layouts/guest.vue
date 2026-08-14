<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const showBanner = computed(() => route.path !== '/guia-tour')
</script>

<template>
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-950">
    <header class="bg-primary-900 text-white">
      <div class="max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
        <div class="h-10 w-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
          <UIcon
            name="i-lucide-anchor"
            class="size-5"
          />
        </div>
        <div class="min-w-0">
          <p class="font-semibold leading-tight truncate">
            {{ t('header.hotelName') }}
          </p>
          <p class="text-xs text-white/70 leading-tight">
            {{ t('header.subtitle') }}
          </p>
        </div>

        <div class="ml-auto flex items-center gap-1">
          <LocaleSwitcher />
          <UButton
            v-if="route.path !== '/'"
            to="/"
            icon="i-lucide-home"
            color="neutral"
            variant="ghost"
            class="text-white hover:bg-white/10"
            size="sm"
          >
            {{ t('common.home') }}
          </UButton>
        </div>
      </div>
    </header>

    <div class="max-w-5xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
      <main class="flex-1 min-w-0 pb-16 lg:pb-0">
        <slot />
      </main>

      <aside
        v-if="showBanner"
        class="lg:w-56 shrink-0"
      >
        <NuxtLink
          to="/guia-tour"
          class="hidden lg:flex sticky top-6 flex-col items-center justify-center gap-3 rounded-xl overflow-hidden bg-gradient-to-b from-primary-600 to-primary-900 text-white p-6 h-72 hover:opacity-90 transition-opacity"
        >
          <UIcon
            name="i-lucide-compass"
            class="size-10"
          />
          <p class="font-bold text-lg tracking-wide text-center">
            {{ t('guiaTourBanner.title') }}
          </p>
          <p class="text-xs text-white/80 text-center">
            {{ t('guiaTourBanner.subtitle') }}
          </p>
        </NuxtLink>

        <NuxtLink
          to="/guia-tour"
          class="lg:hidden fixed bottom-0 inset-x-0 z-20 flex items-center justify-center gap-2 bg-primary-800 text-white py-3 font-semibold"
        >
          <UIcon
            name="i-lucide-compass"
            class="size-4"
          />
          {{ t('guiaTourBanner.title') }}
        </NuxtLink>
      </aside>
    </div>

    <div class="text-center pb-6">
      <NuxtLink
        to="/admin"
        class="text-xs text-neutral-400 hover:text-neutral-500"
      >
        {{ t('common.receptionAccess') }}
      </NuxtLink>
    </div>
  </div>
</template>
