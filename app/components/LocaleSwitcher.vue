<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const flagEmoji: Record<string, string> = {
  pt: '🇧🇷',
  en: '🇺🇸',
  es: '🇪🇸'
}

const items = computed(() =>
  (locales.value as { code: string, name: string }[]).map(l => [{
    label: `${flagEmoji[l.code] ?? ''} ${l.name}`,
    onSelect: () => setLocale(l.code as 'pt' | 'en' | 'es')
  }])
)

const currentFlag = computed(() => flagEmoji[locale.value] ?? locale.value.toUpperCase())
</script>

<template>
  <UDropdownMenu :items="items">
    <UButton
      color="neutral"
      variant="ghost"
      size="sm"
      class="text-white hover:bg-white/10"
    >
      {{ currentFlag }}
    </UButton>
  </UDropdownMenu>
</template>
