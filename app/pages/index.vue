<script setup lang="ts">
import WelcomeSection from '~/components/WelcomeSection.vue'

definePageMeta({ layout: 'guest' })

const session = useSessionStore()

const menu = [
  { to: '/servico-quarto', icon: 'i-lucide-bed-double', title: 'Serviço de Quarto', description: 'Travesseiro, toalha, limpeza e mais' },
  { to: '/manutencao', icon: 'i-lucide-wrench', title: 'Manutenção', description: 'Relate um problema no seu apartamento' },
  { to: '/farmacias', icon: 'i-lucide-cross', title: 'Farmácias', description: 'Farmácias próximas ao hotel' },
  { to: '/transportes', icon: 'i-lucide-bus', title: 'Transportes Coletivos', description: 'Ônibus e transporte aquaviário' },
  { to: '/late-checkout', icon: 'i-lucide-clock', title: 'Late Check-out', description: 'Solicite a extensão da sua estadia' }
]
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
          Bem-vindo ao Hotel Senac Ilha do Boi!
        </p>
        <p class="text-white/85 mt-1 max-w-lg">
          Estamos felizes em recebê-lo. Utilize nosso Concierge Digital para solicitar serviços,
          consultar informações úteis e descobrir as melhores experiências turísticas do Espírito Santo.
        </p>
      </div>

      <div
        class="flex items-center gap-2 text-sm text-neutral-500"
      >
        <UIcon
          name="i-lucide-door-open"
          class="size-4"
        />
        Apartamento {{ session.apartamento }}
        <UButton
          size="xs"
          color="neutral"
          variant="link"
          @click="session.definirApartamento('')"
        >
          alterar
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
              Como está sendo sua estadia?
            </p>
            <p class="text-sm text-neutral-500">
              Responda nossa breve pesquisa de satisfação
            </p>
          </div>
          <UButton
            to="/form"
            class="ml-auto"
            variant="soft"
          >
            Responder
          </UButton>
        </div>
      </UCard>
    </div>
  </div>
</template>
