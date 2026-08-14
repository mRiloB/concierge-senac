<script setup lang="ts">
import WelcomeSection from '~/components/WelcomeSection.vue'

definePageMeta({ layout: 'guest' })

const { t } = useI18n()
const session = useSessionStore()

const menu = computed(() => [
  { to: '/servico-quarto', icon: 'i-lucide-bed-double', title: t('home.menu.roomService.title'), description: t('home.menu.roomService.description') },
  { to: '/manutencao', icon: 'i-lucide-wrench', title: t('home.menu.maintenance.title'), description: t('home.menu.maintenance.description') },
  { to: '/farmacias', icon: 'i-lucide-cross', title: t('home.menu.pharmacies.title'), description: t('home.menu.pharmacies.description') },
  { to: '/transportes', icon: 'i-lucide-bus', title: t('home.menu.transport.title'), description: t('home.menu.transport.description') },
  { to: '/late-checkout', icon: 'i-lucide-clock', title: t('home.menu.lateCheckout.title'), description: t('home.menu.lateCheckout.description') },
  { to: '/regras', icon: 'i-lucide-book-open', title: t('home.menu.rules.title'), description: t('home.menu.rules.description') }
])
</script>

<template>
  <div>
    <WelcomeSection
      v-if="!session.apartamento"
      @confirmado="() => { }"
    />
    <div
      v-else
      class="space-y-6"
    >
      <div class="rounded-xl overflow-hidden bg-linear-to-br from-primary-700 to-primary-950 text-white p-6">
        <p class="text-2xl font-bold">
          {{ t('home.welcomeTitle') }}
        </p>
        <p class="text-white/85 mt-1 max-w-lg">
          {{ t('home.welcomeSubtitle') }}
        </p>
      </div>

      <div class="flex items-center gap-2 text-sm text-neutral-500">
        <UIcon
          name="i-lucide-door-open"
          class="size-4"
        />
        {{ t('common.apartment', { number: session.apartamento }) }}
        <UButton
          size="xs"
          color="neutral"
          variant="link"
          @click="session.definirApartamento('')"
        >
          {{ t('common.change') }}
        </UButton>
      </div>

      <div class="grid sm:grid-cols-2 gap-3">
        <MenuCard
          v-for="item in menu"
          :key="item.to"
          v-bind="item"
        />
      </div>

      <UCard variant="subtle">
        <div class="flex items-center gap-3">
          <UIcon
            name="i-lucide-clipboard-list"
            class="size-5 text-primary-600"
          />
          <div class="min-w-0">
            <p class="font-medium">
              {{ t('home.satisfactionTitle') }}
            </p>
            <p class="text-sm text-neutral-500">
              {{ t('home.satisfactionSubtitle') }}
            </p>
          </div>
          <UButton
            to="/form"
            class="ml-auto"
            variant="soft"
          >
            {{ t('home.satisfactionButton') }}
          </UButton>
        </div>
      </UCard>
    </div>
  </div>
</template>
